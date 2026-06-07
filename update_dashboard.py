import os
import glob
import re
import datetime
import json
import shutil
import pandas as pd

# =========================================================================
# 1. PARSE DATA & RESOLVE ROUTING (Identical core logic to report generator)
# =========================================================================

sector_mapping = {
    "OUANE ABDELKADER": {
        "samedi": "TIARET",
        "dimanche": "TIARET",
        "lundi": "TIARET",
        "mardi": "TIARET",
        "mercredi": "TIARET",
        "jeudi": "TIARET"
    },
    "MAAIZI ABDERAZZAK": {
        "samedi": "MAHDIA",
        "dimanche": "FRANDA",
        "lundi": "AIN DEHAB",
        "mardi": "SOUGEUR",
        "mercredi": "KARMAS",
        "jeudi": "SOUGEUR"
    },
    "KHALIFA ABDERAHMANE": {
        "samedi": "TISSEMSILT",
        "dimanche": "THINIA",
        "lundi": "TISSEMSILT",
        "mardi": "CHELALA",
        "mercredi": "TISSEMSILT",
        "jeudi": "LARJAM"
    },
    "KAROUCHI SEIFELISSLAM": {
        "samedi": "TIARET",
        "dimanche": "TIARET",
        "lundi": "TIARET",
        "mardi": "TIARET",
        "mercredi": "TIARET",
        "jeudi": "TIARET"
    },
    "SENOUCI ALI": {
        "samedi": "TIARET",
        "dimanche": "TISSEMSILT",
        "lundi": "SOUGEUR",
        "mardi": "CHELALA",
        "mercredi": "TIARET",
        "jeudi": "TAKHMARET / FRANDA"
    }
}

colisage_factors = {}
for f in glob.glob('INPUTS/Journal groupé par produit*.xls'):
    try:
        df = pd.read_excel(f, header=None)
        h_idx = -1
        for idx in range(min(5, len(df))):
            row_vals = df.iloc[idx].astype(str).tolist()
            if any('colis' in str(v).lower() for v in row_vals):
                h_idx = idx
                break
        if h_idx != -1:
            for idx, row in df.iterrows():
                if idx <= h_idx:
                    continue
                ref = str(row.iloc[0]).strip()
                if ref == '' or any(kwd in ref.lower() for kwd in ['total', 'page', 'rcap']):
                    continue
                prod_name = str(row.iloc[1]).strip()
                colisage_str = str(row.iloc[3]).strip().upper()
                factor = 1
                if colisage_str.startswith('C') and colisage_str[1:].isdigit():
                    factor = int(colisage_str[1:])
                elif colisage_str.isdigit():
                    factor = int(colisage_str)
                colisage_factors[prod_name] = factor
    except Exception as e:
        pass

# Add manual fallbacks for common Henkel products if needed
default_colisages = {
    "LE CHAT HS ROSE 750 GR": 12,
    "BREF JAVEL REGULAR PURE POWER 1.75 L": 12,
    "BREF JAVEL PURE POWER 900 ML-DZ": 12,
    "ISIS GOLD 5 EN 1 300 G": 24,
    "PRIL ISIS ULTRA POWER 650 ML": 12,
    "PRIL ISIS ULTRA POWER 1.25 L": 12,
    "LE CHAT HS 750 GR ADV23": 12,
    "LE CHAT REGULAR 1 L ADV23": 12,
    "LE CHAT HS ROSE 300 GR": 24,
    "ISIS LS BAG 2.5 KG LEMON": 4,
    "ISIS HS 300 G LEMON LIMITLESS": 24,
    "PRIL ISIS LImited Edition 650 ML": 12
}
for k, v in default_colisages.items():
    if k not in colisage_factors:
        colisage_factors[k] = v

day_map = {
    'saturday': 'samedi', 'sunday': 'dimanche', 'monday': 'lundi',
    'tuesday': 'mardi', 'wednesday': 'mercredi', 'thursday': 'jeudi', 'friday': 'vendredi'
}

def get_seller_name_from_filename(filename):
    f_lower = filename.lower()
    if 'ouane' in f_lower:
        return 'OUANE ABDELKADER'
    elif 'maizi' in f_lower:
        return 'MAAIZI ABDERAZZAK'
    elif 'khelifa' in f_lower:
        return 'KHALIFA ABDERAHMANE'
    elif 'benseti' in f_lower or 'bensseti' in f_lower:
        return 'KAROUCHI SEIFELISSLAM'
    elif 'ps 06' in f_lower or 'ps06' in f_lower:
        return 'SENOUCI ALI'
    else:
        return None

def get_category(p_name):
    p_lower = p_name.lower()
    if 'pril' in p_lower:
        return 'Soin de la Vaisselle'
    elif 'bref' in p_lower:
        return 'Nettoyants Surfaces'
    else:
        return 'Soin du Linge'

transactions = []
product_sales = {}
salespeople_map = {}

supervision_rates = {
    "OUANE ABDELKADER": 1.0000,
    "MAAIZI ABDERAZZAK": 0.9850,
    "KHALIFA ABDERAHMANE": 0.8950,
    "KAROUCHI SEIFELISSLAM": 0.9920,
    "SENOUCI ALI": 0.2580
}

global_rates = {
    "OUANE ABDELKADER": 1.0000,
    "MAAIZI ABDERAZZAK": 0.9850,
    "KHALIFA ABDERAHMANE": 0.8950,
    "KAROUCHI SEIFELISSLAM": 0.9920,
    "SENOUCI ALI": 0.2580
}

# Objectives, Portfolios and Active Days for Henkel Sellers
seller_objectives = {
    "KHALIFA ABDERAHMANE": 8000000,
    "MAAIZI ABDERAZZAK": 7000000,
    "SENOUCI ALI": 6000000,
    "OUANE ABDELKADER": 5000000,
    "KAROUCHI SEIFELISSLAM": 4000000
}

seller_portfolios = {
    "KHALIFA ABDERAHMANE": 50,
    "MAAIZI ABDERAZZAK": 50,
    "SENOUCI ALI": 60,
    "OUANE ABDELKADER": 45,
    "KAROUCHI SEIFELISSLAM": 45
}

seller_active_days = {
    "KHALIFA ABDERAHMANE": 21,
    "MAAIZI ABDERAZZAK": 20,
    "SENOUCI ALI": 20,
    "OUANE ABDELKADER": 21,
    "KAROUCHI SEIFELISSLAM": 20
}

# Client names mapping
client_names_map = {}

# Parse detailed journals
for f in glob.glob('INPUTS/Journal Avec Detail*.xls'):
    base = os.path.basename(f)
    seller = get_seller_name_from_filename(base)
    if not seller:
        continue
    
    try:
        df = pd.read_excel(f, header=None)
        total_ca = 0.0
        total_units = 0.0
        total_colis = 0.0
        doc_count = 0
        
        # Product sales details per seller
        seller_prod_sales = {}
        
        # Track daily sales for each day of May 2026 (1 to 31)
        seller_daily = {d: {'sales': 0.0, 'volume': 0.0} for d in range(1, 32)}
        current_date_day = None
        current_discount_rate = 0.0
        
        for idx, row in df.iterrows():
            val = str(row.iloc[2]).strip()
            if val.startswith('BL') and idx > 1:
                doc_count += 1
                ca_val = pd.to_numeric(row.iloc[8], errors='coerce')
                brut_val = pd.to_numeric(row.iloc[6], errors='coerce')
                date_val = row.iloc[3]
                client_name = str(row.iloc[5]).strip()
                client_code = str(row.iloc[4]).strip()
                
                client_names_map[client_code] = client_name
                
                if not pd.isna(brut_val) and brut_val > 0 and not pd.isna(ca_val):
                    current_discount_rate = (brut_val - ca_val) / brut_val
                else:
                    current_discount_rate = 0.0
                
                if not pd.isna(ca_val) and not pd.isna(date_val):
                    total_ca += ca_val
                    date_dt = pd.to_datetime(date_val)
                    eng_day = date_dt.strftime('%A').lower()
                    french_day = day_map.get(eng_day, 'dimanche')
                    current_date_day = date_dt.day
                    
                    # Resolve sector
                    sector = sector_mapping.get(seller, {}).get(french_day, "TIARET").upper()
                    
                    transactions.append({
                        'vendeur': seller,
                        'client': client_name,
                        'client_code': client_code,
                        'date': date_dt,
                        'ca': ca_val,
                        'secteur': sector,
                        'jour': french_day
                    })
                    
            elif idx > 1:
                prod_name_val = row.iloc[2]
                qty_val = row.iloc[3]
                if not pd.isna(prod_name_val) and not pd.isna(qty_val):
                    prod_name = str(prod_name_val).strip()
                    if isinstance(prod_name_val, str) and not prod_name.startswith('BL') and not prod_name.startswith('Total') and not prod_name.startswith('Rcap') and not prod_name.startswith('Page'):
                        col0 = str(row.iloc[0]).strip() if not pd.isna(row.iloc[0]) else ''
                        if not col0.startswith('Total') and not col0.startswith('Rcap') and not col0.startswith('Page'):
                            qty_val_parsed = pd.to_numeric(qty_val, errors='coerce')
                            price_val = pd.to_numeric(row.iloc[4], errors='coerce')
                            if not pd.isna(qty_val_parsed) and prod_name:
                                total_units += qty_val_parsed
                                factor = colisage_factors.get(prod_name, 12)
                                total_colis += qty_val_parsed / factor
                                
                                disc_val = row.iloc[5]
                                disc_pct = pd.to_numeric(disc_val, errors='coerce')
                                if pd.isna(disc_pct):
                                    disc_pct = 0.0
                                ca_prod_brut = qty_val_parsed * (price_val if not pd.isna(price_val) else 0.0) * (1.0 - disc_pct / 100.0)
                                ca_prod = ca_prod_brut * (1 - current_discount_rate)
                                if prod_name not in product_sales:
                                    product_sales[prod_name] = {'qty': 0.0, 'ca': 0.0}
                                product_sales[prod_name]['qty'] += qty_val_parsed
                                product_sales[prod_name]['ca'] += ca_prod
                                
                                if prod_name not in seller_prod_sales:
                                    seller_prod_sales[prod_name] = {'qty': 0.0, 'ca': 0.0}
                                seller_prod_sales[prod_name]['qty'] += qty_val_parsed
                                seller_prod_sales[prod_name]['ca'] += ca_prod
                                
                                if current_date_day is not None and 1 <= current_date_day <= 31:
                                    seller_daily[current_date_day]['sales'] += ca_prod
                                    seller_daily[current_date_day]['volume'] += qty_val_parsed
                    
        salespeople_map[seller] = {
            'vendeur': seller,
            'ca': total_ca,
            'unites': int(total_units),
            'colis': int(round(total_colis)),
            'factures': doc_count,
            'product_sales': seller_prod_sales,
            'daily_sales': seller_daily
        }
    except Exception as e:
        print('Error parsing detailed file:', f, e)

# Sort products by quantity descending
sorted_products = sorted(product_sales.items(), key=lambda x: x[1]['qty'], reverse=True)
products_list = []
for k, v in sorted_products:
    products_list.append({
        'produit': k,
        'unites': int(v['qty']),
        'ca': v['ca']
    })

# Total statistics
salespeople_list = sorted(salespeople_map.values(), key=lambda x: x['ca'], reverse=True)
total_ca_ht = sum(sp['ca'] for sp in salespeople_list)
total_unites = sum(sp['unites'] for sp in salespeople_list)
total_colis = sum(sp['colis'] for sp in salespeople_list)
total_factures = sum(sp['factures'] for sp in salespeople_list)

# Unique clients overall and per seller (excluding LVs and using portfolio fallback for sellers without client detail)
unique_clients_set = set()
seller_unique_clients = {}
for sp in salespeople_map.keys():
    seller_unique_clients[sp] = set()

for tx in transactions:
    code = tx['client_code']
    if code and str(code).lower() not in ['nan', 'none', '']:
        c_name = tx['client']
        # Filter out LVs
        if c_name.startswith('LV ') or 'LV 0' in c_name or 'LIVREUR' in c_name.upper():
            continue
        unique_clients_set.add(code)
        seller_unique_clients[tx['vendeur']].add(code)

total_unique_clients = 0
for sp in salespeople_map.keys():
    num_cls = len(seller_unique_clients[sp])
    if num_cls == 0:
        total_unique_clients += seller_portfolios.get(sp, 50)
    else:
        total_unique_clients += num_cls

# Global and supervision rests
total_recovered_supervision = sum(sp['ca'] * supervision_rates.get(sp['vendeur'], 0.95) for sp in salespeople_list)
overall_recouv_rate_supervision = total_recovered_supervision / total_ca_ht
total_reste_supervision = total_ca_ht - total_recovered_supervision

total_recovered_global = sum(sp['ca'] * global_rates.get(sp['vendeur'], 0.95) for sp in salespeople_list)
overall_recouv_rate_global = total_recovered_global / total_ca_ht
total_reste_global = total_ca_ht - total_recovered_global

# Helper to get verdict
def get_verdict(ca, recouv):
    if recouv < 0.30:
        return "CATASTROPHIQUE (Blocage immédiat requis!)"
    elif recouv == 1.00 and ca < 3000000:
        return "Volume modeste (Zéro impayé)"
    elif recouv == 1.00:
        return "Modèle de référence absolue (zéro impayé)"
    elif recouv >= 0.99:
        return "Très Bon (Équilibre volume/recouvrement parfait)"
    elif recouv >= 0.95:
        return "Performance stable, recouvrement solide"
    elif recouv >= 0.90:
        return "Bon / Vigilance (Encours à apurer)"
    elif recouv >= 0.80:
        return "Top CA / Recouv. Faible"
    else:
        return "Insuffisant / Vigilance"

# =========================================================================
# 2. GENERATE JSON FOR REACT DATASET
# =========================================================================

def build_presales_json(is_supervision=False):
    rates = supervision_rates if is_supervision else global_rates
    result = []
    for idx, sp in enumerate(salespeople_list):
        name = sp['vendeur']
        ca = sp['ca']
        unites = sp['unites']
        colis = sp['colis']
        invoices = sp['factures']
        rec_rate = rates.get(name, 0.95)
        outstanding = ca * (1 - rec_rate)
        
        # Determine top product sold by this seller
        sp_prods = sp['product_sales']
        if sp_prods:
            top_p = max(sp_prods.items(), key=lambda x: x[1]['qty'])
            top_prod_name = top_p[0]
            top_prod_qty = int(top_p[1]['qty'])
        else:
            top_prod_name = "Aucun"
            top_prod_qty = 0
            
        # Top 4 products details
        sorted_sp_prods = sorted(sp_prods.items(), key=lambda x: x[1]['ca'], reverse=True)[:4]
        top_products_list = []
        for p_name, p_vals in sorted_sp_prods:
            top_products_list.append({
                'designation': p_name.replace('"', '\\"'),
                'qty': int(p_vals['qty']),
                'val': round(p_vals['ca'], 2),
                'contrib': f"{(p_vals['ca'] / ca * 100):.1f}%"
            })
            
        verdict = get_verdict(ca, rec_rate)
        unique_cls = len(seller_unique_clients.get(name, set()))
        if unique_cls == 0:
            unique_cls = seller_portfolios.get(name, 50)
        
        # Build actual daily sales list
        seller_daily_sales_list = []
        for d in range(1, 32):
            seller_daily_sales_list.append({
                'date': f"{d:02d}/05",
                'sales_ht': round(sp['daily_sales'][d]['sales'], 2),
                'volume': int(sp['daily_sales'][d]['volume'])
            })
        
        result.append({
            'rank': idx + 1,
            'name': name,
            'sales_ht': round(ca, 2),
            'share_pct': round((ca / total_ca_ht * 100), 2),
            'invoices': invoices,
            'avg_basket': round((ca / invoices), 2) if invoices > 0 else 0.0,
            'unique_clients': unique_cls,
            'volume': unites,
            'recovery_rate': round(rec_rate * 100, 2),
            'outstanding': round(outstanding, 2),
            'top_product': top_prod_name.replace('"', '\\"'),
            'top_product_qty': top_prod_qty,
            'verdict': verdict,
            'top_products': top_products_list,
            'portfolio': seller_portfolios.get(name, 50),
            'active_days': seller_active_days.get(name, 20),
            'objective': seller_objectives.get(name, 5000000),
            'daily_sales': seller_daily_sales_list
        })
    return result

global_presales_json = build_presales_json(is_supervision=False)
supervision_presales_json = build_presales_json(is_supervision=True)

# Build audits array
audits_json = []
for sp in salespeople_list:
    name = sp['vendeur']
    ca = sp['ca']
    rec_global = global_rates.get(name, 0.95)
    
    rate_pct = round(rec_global * 100, 2)
    outstanding = round(ca * (1 - rec_global), 2)
    
    status = "Référence" if rate_pct >= 100 else ("Succès" if rate_pct >= 99 else ("Vigilance" if rate_pct >= 90 else "Critique"))
    status_ar = "مرجع" if rate_pct >= 100 else ("ممتاز" if rate_pct >= 99 else ("متابعة" if rate_pct >= 90 else "حرج"))
    
    symptoms = f"CA de {ca:,.2f} DA HT ({sp['unites']:,} u.) avec un reste à payer global de {outstanding:,.2f} DA."
    symptoms_ar = f"رقم أعمال بقيمة {ca:,.2f} د.ج ({sp['unites']:,} وحدة) مع مبالغ غير محصلة بقيمة {outstanding:,.2f} د.ج."
    
    if name == "SENOUCI ALI":
        causes = "Négligence critique du recouvrement. Encours extrêmement important accumulé sans apurement."
        causes_ar = "إهمال شديد في متابعة التحصيل المالي. تراكم ديون ضخمة للغاية دون أي سداد يذكر."
        actions = [
            "Geler immédiatement le compte crédit de Senouci Ali et suspendre les livraisons.",
            "Lancer un audit physique urgent auprès de ses clients débiteurs."
        ]
        actions_ar = [
            "تجميد حساب الائتمان فوراً للوكيل سنوسي علي ووقف جميع عمليات الشحن.",
            "إجراء تدقيق ميداني عاجل وشامل لجميع العملاء المدينين له."
        ]
    elif name == "KHALIFA ABDERAHMANE":
        causes = "Exposition élevée aux crédits. Bien que premier vendeur en volume, son recouvrement plafonne à 89.50%."
        causes_ar = "ارتفاع مستوى منح القروض للزبائن. على الرغم من كونه الوكيل الأول من حيث حجم المبيعات، فإن التحصيل يقتصر على 89.50٪."
        actions = [
            "Fixer un plafond d'encours strict à 1,000,000 DA pour Khalifa.",
            "Exiger un apurement immédiat de 50% de son encours sous 15 jours."
        ]
        actions_ar = [
            "تحديد سقف أقصى صارم للديون بقيمة 1,000,000 د.ج للوكيل خليفة.",
            "مطالبة الوكيل بتسوية 50٪ من ديونه المعلقة خلال 15 يوماً كشرط للاستمرار."
        ]
    elif rate_pct >= 100:
        causes = "Application rigoureuse de la politique de paiement cash à la livraison."
        causes_ar = "التطبيق الصارم لسياسة الدفع نقدًا عند التسليم."
        actions = [
            "Félicitations officielles pour le suivi du recouvrement.",
            "Dupliquer sa méthode d'encaissement direct sur les autres secteurs."
        ]
        actions_ar = [
            "تهنئة رسمية على المتابعة الدقيقة للتحصيل المالي.",
            "تعميم طريقته في التحصيل الفوري على باقي القطاعات الأخرى."
        ]
    else:
        causes = "Activité régulière avec un en-cours client gérable. Suivi standard requis."
        causes_ar = "نشاط منتظم مع ديون عملاء يمكن تسييرها. المتابعة القياسية مطلوبة."
        actions = [
            "Maintenir le suivi hebdomadaire des relances.",
            "Vérifier la solvabilité lors de l'ouverture de nouveaux comptes."
        ]
        actions_ar = [
            "الحفاظ على المتابعة الأسبوعية لإشعارات الدفع.",
            "التحقق من الملاءة المالية للعملاء عند فتح حسابات جديدة."
        ]
        
    audits_json.append({
        'rep': name,
        'status': status,
        'status_ar': status_ar,
        'outstanding': outstanding,
        'rate': rate_pct,
        'symptoms': symptoms,
        'symptoms_ar': symptoms_ar,
        'causes': causes,
        'causes_ar': causes_ar,
        'actions': actions,
        'actions_ar': actions_ar
    })

# Build products list
products_json = []
for idx, p in enumerate(products_list):
    products_json.append({
        'rank': idx + 1,
        'designation': p['produit'].replace('"', '\\"'),
        'volume': int(p['unites']),
        'revenue_ht': round(p['ca'], 2),
        'category': get_category(p['produit'])
    })

# Build clients list
client_purchases = {}
for tx in transactions:
    code = tx['client_code']
    if code and str(code).lower() not in ['nan', 'none', '']:
        client_name = tx['client']
        # Filter out LVs
        if client_name.startswith('LV ') or 'LV 0' in client_name or 'LIVREUR' in client_name.upper():
            continue
        if code not in client_purchases:
            client_purchases[code] = {'name': client_name, 'deliveries': 0, 'ca': 0.0}
        client_purchases[code]['deliveries'] += 1
        client_purchases[code]['ca'] += tx['ca']

sorted_clients = sorted(client_purchases.items(), key=lambda x: x[1]['ca'], reverse=True)
clients_json = []
for code, vals in sorted_clients:
    clients_json.append({
        'code': code,
        'name': vals['name'].replace('"', '\\"'),
        'deliveries': vals['deliveries'],
        'purchases_ht': round(vals['ca'], 2)
    })

# Build documents list
documents_json = [
    {
        'id': "supervision-final",
        'name': "Rapport_Performance_Supervision_Final.pdf",
        'title': "Rapport de Supervision Finale (Henkel)",
        'size': "6.5 KB",
        'description': "Supervision critique des KPIs de performance et de recouvrement du segment HENKEL pour Mai 2026.",
        'type': "Supervision Executive",
        'url': "/Rapport_Performance_Supervision_Final.pdf"
    },
    {
        'id': "performance-consolide",
        'name': "Rapport_Performance_HENKEL_Mai_2026_Consolide_ZoneParZone.pdf",
        'title': "Rapport de Performance Consolidé (Henkel)",
        'size': "6.5 KB",
        'description': "Consolidation complète des chiffres d'affaires et taux de recouvrement par prévendeur Henkel.",
        'type': "Consolidation Commerciale",
        'url': "/Rapport_Performance_HENKEL_Mai_2026_Consolide_ZoneParZone.pdf"
    },
    {
        'id': "ventes-zone",
        'name': "Rapport_Ventes_Par_Zone_HENKEL.pdf",
        'title': "Analyse des Ventes HENKEL par Zone",
        'size': "2.8 KB",
        'description': "Répartition géographique des volumes de vente et de la couverture territoriale des 5 prévendeurs Henkel.",
        'type': "Analyse Territoriale",
        'url': "/Rapport_Ventes_Par_Zone_HENKEL.pdf"
    },
    {
        'id': "comparatif-regions",
        'name': "Rapport_Comparatif_Regions_HENKEL.pdf",
        'title': "Comparatif Régions & Prévendeurs HENKEL",
        'size': "5.2 KB",
        'description': "Comparaison croisée des performances commerciales, de la rotation produits et du taux de recouvrement.",
        'type': "Audit Commercial",
        'url': "/Rapport_Comparatif_Regions_HENKEL.pdf"
    },
    {
        'id': "guide-kpis",
        'name': "GUIDE KPIs HENKEL - Mai 2026.pdf",
        'title': "Guide Opérationnel des KPIs HENKEL",
        'size': "14.9 KB",
        'description': "Document de référence définissant les indicateurs de performance commerciale, d'encours et de crédit.",
        'type': "Guide Opérationnel",
        'url': "/GUIDE KPIs HENKEL - Mai 2026.pdf"
    }
]

# Build MATRIX_AGENTS
matrix_agents_json = [sp['vendeur'] for sp in salespeople_list]

# Helper translation mapping for sectors
sector_translations = {
    "tiaret": "تيارت",
    "frenda": "فرندة",
    "franda": "فرندة",
    "souguer": "السوقر",
    "sougueur": "السوقر",
    "sougar": "السوقر",
    "souger": "السوقر",
    "mahdia": "مهدية",
    "rechaiga": "الرشايقة",
    "chelala": "شلالة",
    "tissemsilt": "تسمسيلت",
    "tissemssilt": "تسمسيلت",
    "thinia": "الثنية",
    "thenia": "الثنية",
    "ain dehab": "عين الذهب",
    "ain dheb": "عين الذهب",
    "ain hdid": "عين الحديد",
    "karmas": "كارماس",
    "larjam": "لرجام",
    "takhmaret": "تخمرت",
    "takhmart": "تخمرت",
    "rahwiya": "الرحوية",
    "hamadia": "حمادية"
}

def translate_sector(sec):
    sec_lower = sec.lower()
    translations = []
    for k, v in sector_translations.items():
        if k in sec_lower:
            translations.append(v)
    if not translations:
        return sec
    seen = set()
    unique_trans = [x for x in translations if not (x in seen or seen.add(x))]
    return " + ".join(unique_trans)

# Build REGIONAL_MATRIX
sector_matrix_dict = {}
for tx in transactions:
    sec = tx['secteur']
    v = tx['vendeur']
    ca = tx['ca']
    
    if sec not in sector_matrix_dict:
        sector_matrix_dict[sec] = {'sales': {agent: 0.0 for agent in matrix_agents_json}, 'total': 0.0}
    sector_matrix_dict[sec]['total'] += ca
    sector_matrix_dict[sec]['sales'][v] += ca

regional_matrix_json = []
for sec_name, vals in sector_matrix_dict.items():
    zone_ar = translate_sector(sec_name)
    regional_matrix_json.append({
        'zone': sec_name,
        'zone_ar': zone_ar,
        'sales': {agent: round(vals['sales'][agent], 2) for agent in matrix_agents_json},
        'total': round(vals['total'], 2)
    })
# Sort by total sales descending
regional_matrix_json = sorted(regional_matrix_json, key=lambda x: x['total'], reverse=True)

# Build brand_sales category matrix
brand_sales_categories = ['Soin du Linge', 'Soin de la Vaisselle', 'Nettoyants Surfaces']
brand_sales_categories_ar = {
    'Soin du Linge': 'العناية بالملابس',
    'Soin de la Vaisselle': 'العناية بالأواني',
    'Nettoyants Surfaces': 'منظفات الأسطح'
}
brand_sales_json = []
for cat in brand_sales_categories:
    cat_sales = {}
    cat_total = 0.0
    for sp in salespeople_list:
        agent_name = sp['vendeur']
        agent_ca = 0.0
        for prod_name, vals in sp['product_sales'].items():
            if get_category(prod_name) == cat:
                agent_ca += vals['ca']
        cat_sales[agent_name] = round(agent_ca, 2)
        cat_total += agent_ca
    brand_sales_json.append({
        'category': cat,
        'category_ar': brand_sales_categories_ar.get(cat, cat),
        'sales': cat_sales,
        'total': round(cat_total, 2)
    })

# Build product sales matrix
product_matrix_dict = {}
for prod_name, v in product_sales.items():
    product_matrix_dict[prod_name] = {
        'produit': prod_name,
        'category': get_category(prod_name),
        'sales': {sp: {'qty': 0, 'ca': 0.0} for sp in salespeople_map.keys()},
        'total_qty': int(v['qty']),
        'total_ca': round(v['ca'], 2)
    }

for sp, sp_data in salespeople_map.items():
    for prod_name, vals in sp_data['product_sales'].items():
        if prod_name in product_matrix_dict:
            product_matrix_dict[prod_name]['sales'][sp] = {
                'qty': int(vals['qty']),
                'ca': round(vals['ca'], 2)
            }

product_sales_matrix_json = list(product_matrix_dict.values())
product_sales_matrix_json = sorted(product_sales_matrix_json, key=lambda x: x['total_ca'], reverse=True)


# Build global actual daily sales
global_daily = {d: {'sales': 0.0, 'volume': 0.0} for d in range(1, 32)}
for sp in salespeople_list:
    for d in range(1, 32):
        global_daily[d]['sales'] += sp['daily_sales'][d]['sales']
        global_daily[d]['volume'] += sp['daily_sales'][d]['volume']

global_daily_sales_list = []
for d in range(1, 32):
    global_daily_sales_list.append({
        'date': f"{d:02d}/05",
        'sales_ht': round(global_daily[d]['sales'], 2),
        'volume': int(global_daily[d]['volume'])
    })

# Format datasets as Javascript strings
def dump_js_object(obj):
    return json.dumps(obj, indent=2, ensure_ascii=False)

def find_matching_brace(content, start_idx):
    brace_count = 0
    in_string = False
    string_char = None
    in_line_comment = False
    in_block_comment = False
    
    i = start_idx
    while i < len(content):
        char = content[i]
        
        if in_line_comment:
            if char == '\n':
                in_line_comment = False
            i += 1
            continue
            
        if in_block_comment:
            if char == '*' and i + 1 < len(content) and content[i+1] == '/':
                in_block_comment = False
                i += 2
            else:
                i += 1
            continue
            
        if in_string:
            if char == string_char and content[i-1] != '\\':
                in_string = False
            i += 1
            continue
            
        if char == '/' and i + 1 < len(content) and content[i+1] == '/':
            in_line_comment = True
            i += 2
            continue
        elif char == '/' and i + 1 < len(content) and content[i+1] == '*':
            in_block_comment = True
            i += 2
            continue
        elif char in ['"', "'", '`']:
            in_string = True
            string_char = char
            i += 1
            continue
            
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                return i + 1
        i += 1
    return -1

def find_matching_bracket(content, start_idx):
    bracket_count = 0
    in_string = False
    string_char = None
    in_line_comment = False
    in_block_comment = False
    
    i = start_idx
    while i < len(content):
        char = content[i]
        
        if in_line_comment:
            if char == '\n':
                in_line_comment = False
            i += 1
            continue
            
        if in_block_comment:
            if char == '*' and i + 1 < len(content) and content[i+1] == '/':
                in_block_comment = False
                i += 2
            else:
                i += 1
            continue
            
        if in_string:
            if char == string_char and content[i-1] != '\\':
                in_string = False
            i += 1
            continue
            
        if char == '/' and i + 1 < len(content) and content[i+1] == '/':
            in_line_comment = True
            i += 2
            continue
        elif char == '/' and i + 1 < len(content) and content[i+1] == '*':
            in_block_comment = True
            i += 2
            continue
        elif char in ['"', "'", '`']:
            in_string = True
            string_char = char
            i += 1
            continue
            
        if char == '[':
            bracket_count += 1
        elif char == ']':
            bracket_count -= 1
            if bracket_count == 0:
                return i + 1
        i += 1
    return -1

# Read App.jsx
app_jsx_path = "dashboard/src/App.jsx"
with open(app_jsx_path, 'r', encoding='utf-8') as file:
    content = file.read()

# Replace DATASET
dataset_declaration_str = "const DATASET = {"
dataset_start_idx = content.find(dataset_declaration_str)
if dataset_start_idx != -1:
    brace_start_idx = dataset_start_idx + len(dataset_declaration_str) - 1 # Index of '{'
    end_idx = find_matching_brace(content, brace_start_idx)
    if end_idx != -1:
        dataset_obj = {
            'global_erp': {
                'metrics': {
                    'title': "Routing HENKEL -- Consolidation Commerciale (Mai 2026)",
                    'consolidatedRevenue': round(total_ca_ht, 2),
                    'preSalesRevenue': round(total_ca_ht, 2),
                    'preSalesRevenueTTC': round(total_ca_ht * 1.19, 2),
                    'volumeDistributed': int(total_unites),
                    'casesSold': int(total_colis),
                    'averageBasket': round((total_ca_ht / total_factures), 2) if total_factures > 0 else 0.0,
                    'activePoints': total_unique_clients,
                    'invoices': total_factures,
                    'outstandingReceivables': round(total_reste_global, 2),
                    'recoveryRate': round(overall_recouv_rate_global * 100, 2),
                    'avgRevenuePerCase': round((total_ca_ht / total_colis), 2) if total_colis > 0 else 0.0
                },
                'preSales': global_presales_json,
                'daily_sales': global_daily_sales_list
            },
            'supervision_erp': {
                'metrics': {
                    'title': "Rapport de Supervision HENKEL (Audité Mai 2026)",
                    'consolidatedRevenue': round(total_ca_ht, 2),
                    'preSalesRevenue': round(total_ca_ht, 2),
                    'preSalesRevenueTTC': round(total_ca_ht * 1.19, 2),
                    'volumeDistributed': int(total_unites),
                    'casesSold': int(total_colis),
                    'averageBasket': round((total_ca_ht / total_factures), 2) if total_factures > 0 else 0.0,
                    'activePoints': total_unique_clients,
                    'invoices': total_factures,
                    'outstandingReceivables': round(total_reste_supervision, 2),
                    'recoveryRate': round(overall_recouv_rate_supervision * 100, 2),
                    'avgRevenuePerCase': round((total_ca_ht / total_colis), 2) if total_colis > 0 else 0.0
                },
                'preSales': supervision_presales_json,
                'daily_sales': global_daily_sales_list
            },
            'audits': audits_json,
            'products': products_json,
            'clients': clients_json,
            'documents': documents_json,
            'brand_sales': brand_sales_json,
            'product_sales_matrix': product_sales_matrix_json
        }
        new_dataset_str = f"const DATASET = {dump_js_object(dataset_obj)};"
        content = content[:dataset_start_idx] + new_dataset_str + content[end_idx:]
        print("Replaced DATASET successfully.")

# Replace MATRIX_AGENTS
matrix_agents_line = f"const MATRIX_AGENTS = {json.dumps(matrix_agents_json, ensure_ascii=False)};"
content = re.sub(r'const MATRIX_AGENTS\s*=\s*\[[^\]]*\];', matrix_agents_line, content)
print("Replaced MATRIX_AGENTS successfully.")

# Replace REGIONAL_MATRIX
matrix_declaration_str = "const REGIONAL_MATRIX = ["
matrix_start_idx = content.find(matrix_declaration_str)
if matrix_start_idx != -1:
    bracket_start_idx = matrix_start_idx + len(matrix_declaration_str) - 1 # Index of '['
    end_idx = find_matching_bracket(content, bracket_start_idx)
    if end_idx != -1:
        new_matrix_str = f"const REGIONAL_MATRIX = {dump_js_object(regional_matrix_json)};"
        content = content[:matrix_start_idx] + new_matrix_str + content[end_idx:]
        print("Replaced REGIONAL_MATRIX successfully.")

# Replace default selected pre-seller to top seller
content = content.replace("useState('MOUNIR')", "useState('KHALIFA ABDERAHMANE')")
print("Replaced default state name successfully.")

# Slice top clients mapping in React code to show only top 10
content = content.replace("DATASET.clients.slice(0, 5).map((c, i) => (", "DATASET.clients.slice(0, 10).map((c, i) => (")
content = content.replace("DATASET.clients.map((c, i) => (", "DATASET.clients.slice(0, 10).map((c, i) => (")
print("Sliced top clients mapping to top 10 successfully.")

content = content.replace('top_national_clients: { fr: "Top 5 Clients HENKEL", ar: "أفضل 5 زبائن لـ HENKEL" }', 'top_national_clients: { fr: "Top 10 Clients HENKEL", ar: "أفضل 10 زبائن لـ HENKEL" }')
content = content.replace('top_national_clients: { fr: "Top 5 Clients HENKEL", ar: "أفضل 5 زبائن لـ HENKEL" },', 'top_national_clients: { fr: "Top 10 Clients HENKEL", ar: "أفضل 10 زبائن لـ HENKEL" },')
print("Updated top clients widget title successfully.")

# Generate dynamic matrix insights based on parsed Henkel data
top_zone = regional_matrix_json[0]['zone']
top_zone_ar = regional_matrix_json[0]['zone_ar']
top_zone_val = regional_matrix_json[0]['total']
top_zone_pct = round((top_zone_val / total_ca_ht * 100), 2)

top_agent = salespeople_list[0]['vendeur']
top_agent_val = salespeople_list[0]['ca']
top_agent_pct = round((top_agent_val / total_ca_ht * 100), 2)

# Dynamic replacements for insights in App.jsx
old_insight_1 = 'matrix_insight_1: { fr: "Tiaret Gros est le secteur économique SILWANE numéro 1 (8.80M DA soit 29.52% du segment SILWANE), géré par Mounir.", ar: "تيارت الكبرى هي قطاع سيلوان الأول (8.80 مليون د.ج أو 29.52٪ من مبيعات سيلوان)، وتدار بواسطة Mounir." }'
new_insight_1 = f'matrix_insight_1: {{ fr: "{top_zone.title()} est le secteur économique HENKEL numéro 1 ({top_zone_val/1e6:.2f}M DA soit {top_zone_pct}% du segment HENKEL), géré par several agents.", ar: "{top_zone_ar} هي قطاع هينكل الأول ({top_zone_val/1e6:.2f} مليون د.ج أو {top_zone_pct}٪ من مبيعات هينكل)." }}'
content = content.replace(old_insight_1, new_insight_1)

old_insight_2 = "matrix_insight_2: { fr: \"Mounir concentre plus de 23.25% du chiffre d'affaires total du segment SILWANE avec 6.93M DA HT.\", ar: \"يستحوذ Mounir على أكثر من 23.25٪ من إجمالي رقم أعمال قطاع سيلوان بقيمة 6.93 مليون د.ج خ.ر.\" }"
new_insight_2 = f"matrix_insight_2: {{ fr: \"{top_agent.title()} concentre plus de {top_agent_pct}% du chiffre d'affaires total du segment HENKEL avec {top_agent_val/1e6:.2f}M DA HT.\", ar: \"يستحوذ {top_agent.title()} على أكثر من {top_agent_pct}٪ من إجمالي رقم أعمال قطاع هينكل بقيمة {top_agent_val/1e6:.2f} مليون د.ج خ.ر.\" }}"
content = content.replace(old_insight_2, new_insight_2)

# Replace all occurrences of Silwane / SILWANE with Henkel / HENKEL
content = content.replace('SILWANE', 'HENKEL')
content = content.replace('Silwane', 'Henkel')
content = content.replace('silwane', 'henkel')
print("Replaced brand names successfully.")

# Replace Arabic s-y-l-w-a-n (سيلوان) with h-y-n-k-l (هينكل)
content = content.replace('\\u0633\\u064a\\u0644\\u0648\\u0627\\u0646', '\\u0647\\u064a\\u0646\\u0643\\u0644')
content = content.replace('سيلوان', 'هينكل')
print("Replaced Arabic brand translations successfully.")

# Color theme change: Replace indigo colors with rose (Ruby/Burgundy style)
content = content.replace('indigo', 'rose')
print("Changed color scheme from indigo to rose successfully.")

# Replace translateProduct function with a robust Henkel product translator
translate_fn_str = "const translateProduct = (designation, lang) => {"
translate_start_idx = content.find(translate_fn_str)
if translate_start_idx != -1:
    brace_start_idx = translate_start_idx + len(translate_fn_str) - 1 # Index of '{'
    end_idx = find_matching_brace(content, brace_start_idx)
    if end_idx != -1:
        new_translate_fn = """const translateProduct = (designation, lang) => {
  if (!designation) return '';
  if (lang !== 'ar') return designation;
  
  let name = designation.replace(/\\u00e9/g, 'e').replace(/l\\u00efmit\\u00e9e/g, 'limitee');
  
  const dict = {
    "PRIL ISIS ANTIBACTERIEN 650 ML LEMON": "بريل إيزيس مضاد للبكتيريا 650 مل ليمون",
    "PRIL ISIS ULTRA POWER": "بريل إيزيس قوة قصوى",
    "PRIL ISIS LImited Edition": "بريل إيزيس طبعة محدودة",
    "PRIL ISIS Limited edition": "بريل إيزيس طبعة محدودة",
    "Pril ISIS": "بريل إيزيس",
    "PRIL ISIS": "بريل إيزيس",
    "PRIL": "بريل",
    
    "BREF JAVEL PURE POWER": "بريف جافيل قوة فائقة",
    "BREF JAVEL REGULAR PURE POWER": "بريف جافيل عادي قوة فائقة",
    "BREF TRIGGER MULTI-SURFACE": "بريف بخاخ متعدد الأسطح",
    "BREF MOUSSANT": "بريف رغوي",
    "BREF": "بريف",
    
    "LE CHAT HS ROSE": "لو شات غسيل يدوي وردي",
    "LE CHAT HS POUDRE": "لو شات غسيل يدوي مسحوق",
    "LE CHAT HS GEL": "لو شات غسيل يدوي جل",
    "LE CHAT HS": "لو شات غسيل يدوي",
    "LE CHAT REGULAR": "لو شات عادي",
    "LE CHAT PREMIUM RL": "لو شات ممتاز RL",
    "LE CHAT ROSE": "لو شات وردي",
    "LE CHAT SDM": "لو شات غسيل آلي SDM",
    "LE CHAT": "لو شات",
    
    "ISIS GOLD 5 EN 1 HS": "إيزيس ذهبي 5 في 1 غسيل يدوي",
    "ISIS GOLD 5 EN 1": "إيزيس ذهبي 5 في 1",
    "ISIS GOLD LS GEL": "إيزيس ذهبي غسيل آلي جل",
    "ISIS GOLD LAVENDER": "إيزيس ذهبي خزامى",
    "ISIS GOLD HDLD LAVENDER": "إيزيس ذهبي غسيل كثيف خزامى",
    "ISIS HS": "إيزيس غسيل يدوي",
    "ISIS LS BAG": "إيزيس غسيل آلي كيس",
    "ISIS BOUQUET JASMIN": "إيزيس باقة الياسمين",
    "ISIS BOUQUET LAVANDE": "إيزيس باقة الخزامى",
    "ISIS BOUQUET ROSE": "إيزيس باقة الورد",
    "ISIS": "إيزيس",
    
    "LEMON LIMITLESS": "ليمون لا محدود",
    "LIMITLESS": "لا محدود",
    "LEMON": "ليمون",
    "LAVANDE": "خزامى",
    "LAVENDER": "خزامى",
    "JASMIN": "ياسمين",
    "ROSE": "وردي / ورد",
    "JAVELISE": "بالكلور",
    "NETTOYANT MOUSSANT": "منظف رغوي",
    "edition limitee": "طبعة محدودة",
    "edition limite": "طبعة محدودة",
    "antibac": "مضاد للبكتيريا"
  };

  for (const [key, val] of Object.entries(dict)) {
    const regex = new RegExp(key, 'gi');
    name = name.replace(regex, val);
  }
  return name;
};"""
        content = content[:translate_start_idx] + new_translate_fn + content[end_idx:]
        print("Replaced translateProduct successfully.")

# =========================================================================
# 3. EXTRA COMPONENT-SPECIFIC REPLACEMENTS (Clean up hardcoded data)
# =========================================================================

# Replace CHECKLIST_TR (Plan d'Action Opérationnel)
old_checklist_tr = """const CHECKLIST_TR = {
  1: {
    fr: "Audit FETHI: détail exhaustif des impayés grossistes",
    ar: "تدقيق FETHI: تفاصيل شاملة لديون تجار الجملة العالقة"
  },
  2: {
    fr: "Accompagner MAHREZ sur le terrain (recouvrement de 89.20%)",
    ar: "مرافقة MAHREZ ميدانياً (نسبة تحصيل 89.20٪)"
  },
  3: {
    fr: "Féliciter MEKADIM pour son score parfait of 100.00%",
    ar: "تهنئة MEKADIM على نسبة تحصيل مثالية 100.00٪"
  },
  4: {
    fr: "Instaurer un plafond d'encours strict de 200 000 DA par client",
    ar: "تحديد سقف ديون صارم بمبلغ 200,000 د.ج لكل زبون"
  },
  5: {
    fr: "Généraliser la règle du paiement immédiat de Mekadim au comptant",
    ar: "تعميم قاعدة الدفع الفوري عند التسليم للوكيل Mekadim"
  }
};"""

# Wait, in the source file, it has "Féliciter MEKADIM pour son score parfait de 100.00%" (with "de" instead of "of").
# Let's adjust both just in case:
old_checklist_tr_variant = """const CHECKLIST_TR = {
  1: {
    fr: "Audit FETHI: détail exhaustif des impayés grossistes",
    ar: "تدقيق FETHI: تفاصيل شاملة لديون تجار الجملة العالقة"
  },
  2: {
    fr: "Accompagner MAHREZ sur le terrain (recouvrement de 89.20%)",
    ar: "مرافقة MAHREZ ميدانياً (نسبة تحصيل 89.20٪)"
  },
  3: {
    fr: "Féliciter MEKADIM pour son score parfait de 100.00%",
    ar: "تهنئة MEKADIM على نسبة تحصيل مثالية 100.00٪"
  },
  4: {
    fr: "Instaurer un plafond d'encours strict de 200 000 DA par client",
    ar: "تحديد سقف ديون صارم بمبلغ 200,000 د.ج لكل زبون"
  },
  5: {
    fr: "Généraliser la règle du paiement immédiat de Mekadim au comptant",
    ar: "تعميم قاعدة الدفع الفوري عند التسليم للوكيل Mekadim"
  }
};"""

new_checklist_tr = """const CHECKLIST_TR = {
  1: {
    fr: "Audit SENOUCI ALI: détail exhaustif des impayés grossistes",
    ar: "تدقيق سنوسي علي: تفاصيل شاملة لديون تجار الجملة العالقة"
  },
  2: {
    fr: "Accompagner KHALIFA ABDERAHMANE sur le terrain (recouvrement de 89.50%)",
    ar: "مرافقة خليفة ميدانياً (نسبة تحصيل 89.50٪)"
  },
  3: {
    fr: "Féliciter OUANE ABDELKADER pour son score parfait de 100.00%",
    ar: "تهنئة عوان على نسبة تحصيل مثالية 100.00٪"
  },
  4: {
    fr: "Instaurer un plafond d'encours strict de 1 000 000 DA pour Khalifa",
    ar: "تحديد سقف ديون صارم بمبلغ 1,000,000 د.ج للوكيل خليفة"
  },
  5: {
    fr: "Généraliser la règle du paiement immédiat d'Ouane au comptant",
    ar: "تعميم قاعدة الدفع الفوري عند التسليم للوكيل عوان"
  }
};"""

if old_checklist_tr in content:
    content = content.replace(old_checklist_tr, new_checklist_tr)
else:
    content = content.replace(old_checklist_tr_variant, new_checklist_tr)

# Replace initial checklist state
old_checklist_state = """  const [checklist, setChecklist] = useState([
    { id: 1, text: "Audit FETHI: détail exhaustif des impayés grossistes", category: "urgent", completed: false },
    { id: 2, text: "Accompagner MAHREZ sur le terrain (recouvrement de 89.20%)", category: "urgent", completed: false },
    { id: 3, text: "Féliciter MEKADIM pour son score parfait de 100.00%", category: "urgent", completed: true },
    { id: 4, text: "Instaurer un plafond d'encours strict de 200 000 DA par client", category: "short", completed: false },
    { id: 5, text: "Généraliser la règle du paiement immédiat de Mekadim au comptant", category: "short", completed: false }
  ]);"""

new_checklist_state = """  const [checklist, setChecklist] = useState([
    { id: 1, text: "Audit SENOUCI ALI: détail exhaustif des impayés grossistes", category: "urgent", completed: false },
    { id: 2, text: "Accompagner KHALIFA ABDERAHMANE sur le terrain (recouvrement de 89.50%)", category: "urgent", completed: false },
    { id: 3, text: "Féliciter OUANE ABDELKADER pour son score parfait de 100.00%", category: "urgent", completed: true },
    { id: 4, text: "Instaurer un plafond d'encours strict de 1 000 000 DA pour Khalifa", category: "short", completed: false },
    { id: 5, text: "Généraliser la règle du paiement immédiat d'Ouane au comptant", category: "short", completed: false }
  ]);"""

content = content.replace(old_checklist_state, new_checklist_state)

# Replace matrix insights using regex
new_insight_3 = 'matrix_insight_3: { fr: "MAAIZI ABDERAZZAK réalise un score commercial remarquable avec 6.68M DA et 98.50% de recouvrement (100k DA d\'impayés).", ar: "يحقق الوكيل معيزي أداءً تجاريًا بارزًا بـ 6.68 مليون د.ج و 100 ألف د.ج فقط كديون معلقة (98.50٪ تحصيل)." }'
new_insight_4 = 'matrix_insight_4: { fr: "OUANE ABDELKADER réalise une performance de référence absolue avec un taux parfait de 100.00% (0 DA d\'impayé sur 4.68M DA).", ar: "يحقق الوكيل عوان أداءً مرجعيًا مثاليًا بمعدل سداد كامل 100.00٪ (0 د.ج ديون على 4.68 مليون د.ج)." }'
content = re.sub(r'matrix_insight_3\s*:\s*\{[^}]*\}', new_insight_3, content)
content = re.sub(r'matrix_insight_4\s*:\s*\{[^}]*\}', new_insight_4, content)

# Replace generateProductBreakdown function definition (Répartition Produit en Valeur)
old_breakdown_fn = """const generateProductBreakdown = (totalSales) => {
  return [
    { name: "Pâtes & Couscous", value: Math.round(totalSales * 0.370) },
    { name: "Famico & Épicerie", value: Math.round(totalSales * 0.350) },
    { name: "Semoules & Farines", value: Math.round(totalSales * 0.209) },
    { name: "Riz & Légumes (SOS)", value: Math.round(totalSales * 0.064) },
    { name: "Autres", value: Math.round(totalSales * 0.007) }
  ];
};"""

new_breakdown_fn = """const generateProductBreakdown = (selectedPrevName, lang) => {
  if (!DATASET.brand_sales) return [];
  return DATASET.brand_sales.map(r => {
    const name = lang === 'ar' ? r.category_ar : r.category;
    const value = r.sales[selectedPrevName] || 0;
    return { name, value };
  });
};"""

content = content.replace(old_breakdown_fn, new_breakdown_fn)

# Replace prevProductData useMemo invocation
old_usememo = """  const prevProductData = useMemo(() => {
    return generateProductBreakdown(selectedPrev.sales_ht);
  }, [selectedPrev]);"""

new_usememo = """  const prevProductData = useMemo(() => {
    return generateProductBreakdown(selectedPrev.name, lang);
  }, [selectedPrev, lang]);"""

content = content.replace(old_usememo, new_usememo)

# Replace categories list in rotation section
content = content.replace("['Famico & Épicerie', 'Pâtes & Couscous', 'Semoules & Farines', 'Riz & Légumes SOS']", "['Soin du Linge', 'Soin de la Vaisselle', 'Nettoyants Surfaces']")

# Replace category translation lookup
old_cat_ar = """                          const catAr = cat === 'Famico & Épicerie' ? 'فاميكو ومواد البقالة' : 
                                        cat === 'Pâtes & Couscous' ? 'عجائن وكسكس' : 
                                        cat === 'Semoules & Farines' ? 'سميد وفرينة' : 
                                        cat === 'Riz & Légumes SOS' ? 'أرز وبقوليات SOS' : cat;"""

new_cat_ar = """                          const catAr = cat === 'Soin du Linge' ? 'العناية بالملابس' : 
                                        cat === 'Soin de la Vaisselle' ? 'العناية بالأواني' : 
                                        cat === 'Nettoyants Surfaces' ? 'منظفات الأسطح' : cat;"""

content = content.replace(old_cat_ar, new_cat_ar)

# Replace Alert 1 texts (Critique)
old_alert_1_p = """{lang === 'ar' ? <span><strong>60٪ من المبيعات</strong> تمت بواسطة 3 وكلاء فقط (<strong>Mounir، Mahrez، Zitouni</strong>).</span> : <span><strong>60% du CA</strong> est réalisé par seulement 3 vendeurs (<strong>Mounir, Mahrez, Zitouni</strong>).</span>}"""
new_alert_1_p = """{lang === 'ar' ? <span><strong>70٪ من المبيعات</strong> تمت بواسطة 3 وكلاء فقط (<strong>خليفة، معيزي، سنوسي علي</strong>).</span> : <span><strong>70% du CA</strong> est réalisé par seulement 3 vendeurs (<strong>KHALIFA, MAAIZI, SENOUCI ALI</strong>).</span>}"""
content = content.replace(old_alert_1_p, new_alert_1_p)

old_alert_1_outstanding = """{lang === 'ar' ? 'Fethi لديه 981 ألف د.ج ديون عالقة (تحصيل 78.09٪)، مما يهدد الخزينة.' : 'FETHI cumule 981k DA d\'impayés (78.09% recouv.), menaçant gravement la trésorerie.'}"""
new_alert_1_outstanding = """{lang === 'ar' ? 'سنوسي علي لديه 4.31 مليون د.ج ديون عالقة (تحصيل 25.80٪)، مما يهدد الخزينة.' : 'SENOUCI ALI cumule 4.31M DA d\'impayés (25.80% recouv.), menaçant gravement la trésorerie.'}"""
content = content.replace(old_alert_1_outstanding, new_alert_1_outstanding)

# Replace Alert 2 texts (Vigilance)
old_alert_2_title = """{lang === 'ar' ? 'يقظة : حالة MAHREZ' : 'VIGILANCE : Cas MAHREZ'}"""
new_alert_2_title = """{lang === 'ar' ? 'يقظة : حالة خليفة' : 'VIGILANCE : Cas KHALIFA'}"""
content = content.replace(old_alert_2_title, new_alert_2_title)

old_alert_2_p = """{lang === 'ar' ? <span>مبيعات بقيمة <strong>6.04 مليون د.ج</strong> مع ديون معلقة بقيمة <strong>652 ألف د.ج</strong>.</span> : <span>Volume de <strong>6.04M DA</strong> avec un reste à payer de <strong>652k DA</strong>.</span>}"""
new_alert_2_p = """{lang === 'ar' ? <span>مبيعات بقيمة <strong>8.41 مليون د.ج</strong> مع ديون معلقة بقيمة <strong>882 ألف د.ج</strong>.</span> : <span>Volume de <strong>8.41M DA</strong> avec un reste à payer de <strong>882k DA</strong>.</span>}"""
content = content.replace(old_alert_2_p, new_alert_2_p)

old_alert_2_outstanding = """{lang === 'ar' ? 'نسبة تحصيل تحت الإشراف 89.67٪. المتابعة الدقيقة مطلوبة.' : 'Recouvrement sous supervision de 89.67%. Suivi des relances requis.'}"""
new_alert_2_outstanding = """{lang === 'ar' ? 'نسبة تحصيل تحت الإشراف 89.50٪. المتابعة الدقيقة مطلوبة.' : 'Recouvrement sous supervision de 89.50%. Suivi des relances requis.'}"""
content = content.replace(old_alert_2_outstanding, new_alert_2_outstanding)

# Replace Recommendations texts
old_rec_1 = """{lang === 'ar' ? 'متابعة تحصيل الديون لـ MAHREZ في منطقة تيارت. تشجيع الوكلاء لتنويع المخاطر.' : `Geler MAHREZ si l'encours dépasse 1M DA. Pousser les vendeurs pour diversifier.`}"""
new_rec_1 = """{lang === 'ar' ? 'متابعة تحصيل الديون لـ خليفة في منطقة تسمسيلت. تشجيع الوكلاء لتنويع المخاطر.' : `Geler KHALIFA si l'encours dépasse 1M DA. Pousser les vendeurs pour diversifier.`}"""
content = content.replace(old_rec_1, new_rec_1)

old_rec_2 = """{lang === 'ar' ? 'ترقية مبيعات مرق مكعبات دجاج (63.7 مليون د.ج) وفاميكو (20.2 مليون د.ج) ذات القيمة العالية.' : 'Promouvoir Cube Poulet (63.7M DA) & Famico (20.2M DA) à forte valeur unitaire.'}"""
new_rec_2 = """{lang === 'ar' ? 'ترقية مبيعات لو شات السائل وبريل إيزيس جل ذات القيمة العالية.' : 'Promouvoir Le Chat Liquide & Pril Isis Gel à forte valeur unitaire.'}"""
content = content.replace(old_rec_2, new_rec_2)

old_rec_3 = """{lang === 'ar' ? 'تدقيق حساب FETHI (أدنى معدل تحصيل في قطاع هينكل: 78.09٪).' : `Bloquer les clients de FETHI et HOUARI ayant des retards de plus de 30 jours.`}"""
new_rec_3 = """{lang === 'ar' ? 'تدقيق حساب سنوسي علي (أدنى معدل تحصيل في قطاع هينكل: 25.80٪).' : `Bloquer les clients de SENOUCI ALI ayant des retards de plus de 30 jours.`}"""
content = content.replace(old_rec_3, new_rec_3)

# Save modified App.jsx
with open(app_jsx_path, 'w', encoding='utf-8') as file:
    file.write(content)
print("Saved updated App.jsx successfully!")

# Copy generated PDFs to dashboard public folder
print("Copying report PDFs to dashboard public folder...")
dest_dir = 'dashboard/public'
os.makedirs(dest_dir, exist_ok=True)
for f in glob.glob('*.pdf'):
    dest = os.path.join(dest_dir, os.path.basename(f))
    try:
        shutil.copy2(f, dest)
        print(f"Copied {f} to {dest}")
    except Exception as e:
        print(f"Error copying {f} to {dest}: {e}")

print("Dashboard update script execution complete!")
