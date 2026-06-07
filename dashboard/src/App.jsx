import React, { useState, useMemo, useEffect } from 'react';
import { 
  TrendingUp, 
  FileText, 
  Users, 
  ShoppingBag, 
  Award, 
  Crown, 
  AlertTriangle, 
  CreditCard, 
  Layers, 
  Search, 
  Calendar, 
  Sun, 
  Moon, 
  MapPin, 
  DollarSign, 
  ChevronRight, 
  Percent, 
  ArrowUpRight, 
  Package, 
  Sparkles,
  Info,
  ExternalLink,
  Download,
  CheckSquare,
  Square,
  ShieldCheck,
  TrendingDown,
  Activity
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar 
} from 'recharts';

// ==========================================
// 1. HARDCODED COMPREHENSIVE DATASET (ERP GLOBAL & SUBSET)
// ==========================================
const DATASET = {
  "global_erp": {
    "metrics": {
      "title": "Routing HENKEL -- Consolidation Commerciale (Mai 2026)",
      "consolidatedRevenue": 29518459.15,
      "preSalesRevenue": 29518459.15,
      "preSalesRevenueTTC": 35126966.39,
      "volumeDistributed": 180845,
      "casesSold": 13297,
      "averageBasket": 170626.93,
      "activePoints": 206,
      "invoices": 173,
      "outstandingReceivables": 5326470.65,
      "recoveryRate": 81.96,
      "avgRevenuePerCase": 2219.93
    },
    "preSales": [
      {
        "rank": 1,
        "name": "KHALIFA ABDERAHMANE",
        "sales_ht": 8405385.69,
        "share_pct": 28.48,
        "invoices": 37,
        "avg_basket": 227172.59,
        "unique_clients": 50,
        "volume": 48324,
        "recovery_rate": 89.5,
        "outstanding": 882565.5,
        "top_product": "ISIS HS 300 G LEMON LIMITLESS",
        "top_product_qty": 14275,
        "verdict": "Top CA / Recouv. Faible",
        "top_products": [
          {
            "designation": "ISIS HS 750 G LEMON LIMITLESS",
            "qty": 6480,
            "val": 1343026.79,
            "contrib": "16.0%"
          },
          {
            "designation": "ISIS HS 300 G LEMON LIMITLESS",
            "qty": 14275,
            "val": 1250184.79,
            "contrib": "14.9%"
          },
          {
            "designation": "PRIL ISIS ULTRA POWER 1.25 L",
            "qty": 2280,
            "val": 697116.04,
            "contrib": "8.3%"
          },
          {
            "designation": "BREF JAVEL PURE POWER 900 ML-DZ",
            "qty": 7332,
            "val": 666164.18,
            "contrib": "7.9%"
          }
        ],
        "portfolio": 50,
        "active_days": 21,
        "objective": 8000000,
        "daily_sales": [
          {
            "date": "01/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "02/05",
            "sales_ht": 271887.52,
            "volume": 1576
          },
          {
            "date": "03/05",
            "sales_ht": 241376.2,
            "volume": 1497
          },
          {
            "date": "04/05",
            "sales_ht": 339754.72,
            "volume": 2193
          },
          {
            "date": "05/05",
            "sales_ht": 631969.4,
            "volume": 3655
          },
          {
            "date": "06/05",
            "sales_ht": 497148.32,
            "volume": 2866
          },
          {
            "date": "07/05",
            "sales_ht": 641571.04,
            "volume": 4258
          },
          {
            "date": "08/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "09/05",
            "sales_ht": 282000.52,
            "volume": 1709
          },
          {
            "date": "10/05",
            "sales_ht": 389188.76,
            "volume": 1957
          },
          {
            "date": "11/05",
            "sales_ht": 567523.0,
            "volume": 2529
          },
          {
            "date": "12/05",
            "sales_ht": 564229.88,
            "volume": 3137
          },
          {
            "date": "13/05",
            "sales_ht": 260011.78,
            "volume": 1344
          },
          {
            "date": "14/05",
            "sales_ht": 453498.8,
            "volume": 2737
          },
          {
            "date": "15/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "16/05",
            "sales_ht": 189713.82,
            "volume": 1119
          },
          {
            "date": "17/05",
            "sales_ht": 406463.82,
            "volume": 3108
          },
          {
            "date": "18/05",
            "sales_ht": 227617.78,
            "volume": 1405
          },
          {
            "date": "19/05",
            "sales_ht": 530782.24,
            "volume": 2991
          },
          {
            "date": "20/05",
            "sales_ht": 296551.12,
            "volume": 1605
          },
          {
            "date": "21/05",
            "sales_ht": 298111.44,
            "volume": 1902
          },
          {
            "date": "22/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "23/05",
            "sales_ht": 217977.47,
            "volume": 1101
          },
          {
            "date": "24/05",
            "sales_ht": 185148.94,
            "volume": 1006
          },
          {
            "date": "25/05",
            "sales_ht": 252990.47,
            "volume": 1285
          },
          {
            "date": "26/05",
            "sales_ht": 115369.16,
            "volume": 580
          },
          {
            "date": "27/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "28/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "29/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "30/05",
            "sales_ht": 246291.2,
            "volume": 1420
          },
          {
            "date": "31/05",
            "sales_ht": 298208.29,
            "volume": 1344
          }
        ]
      },
      {
        "rank": 2,
        "name": "MAAIZI ABDERAZZAK",
        "sales_ht": 6683355.44,
        "share_pct": 22.64,
        "invoices": 34,
        "avg_basket": 196569.28,
        "unique_clients": 50,
        "volume": 42050,
        "recovery_rate": 98.5,
        "outstanding": 100250.33,
        "top_product": "ISIS HS 300 G LEMON LIMITLESS",
        "top_product_qty": 18400,
        "verdict": "Performance stable, recouvrement solide",
        "top_products": [
          {
            "designation": "ISIS HS 300 G LEMON LIMITLESS",
            "qty": 18400,
            "val": 1593352.29,
            "contrib": "23.8%"
          },
          {
            "designation": "ISIS HS 750 G LEMON LIMITLESS",
            "qty": 4812,
            "val": 987326.46,
            "contrib": "14.8%"
          },
          {
            "designation": "BREF JAVEL PURE POWER 900 ML-DZ",
            "qty": 5580,
            "val": 501626.04,
            "contrib": "7.5%"
          },
          {
            "designation": "LE CHAT REGULAR 2.5 l ADV23",
            "qty": 606,
            "val": 475273.15,
            "contrib": "7.1%"
          }
        ],
        "portfolio": 50,
        "active_days": 20,
        "objective": 7000000,
        "daily_sales": [
          {
            "date": "01/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "02/05",
            "sales_ht": 201872.16,
            "volume": 1293
          },
          {
            "date": "03/05",
            "sales_ht": 64203.84,
            "volume": 346
          },
          {
            "date": "04/05",
            "sales_ht": 438101.0,
            "volume": 3636
          },
          {
            "date": "05/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "06/05",
            "sales_ht": 428868.92,
            "volume": 2595
          },
          {
            "date": "07/05",
            "sales_ht": 202686.8,
            "volume": 1405
          },
          {
            "date": "08/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "09/05",
            "sales_ht": 400557.6,
            "volume": 2954
          },
          {
            "date": "10/05",
            "sales_ht": 201795.44,
            "volume": 869
          },
          {
            "date": "11/05",
            "sales_ht": 482829.84,
            "volume": 3474
          },
          {
            "date": "12/05",
            "sales_ht": 427966.24,
            "volume": 2787
          },
          {
            "date": "13/05",
            "sales_ht": 202543.6,
            "volume": 1216
          },
          {
            "date": "14/05",
            "sales_ht": 363456.96,
            "volume": 1943
          },
          {
            "date": "15/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "16/05",
            "sales_ht": 228006.95,
            "volume": 1412
          },
          {
            "date": "17/05",
            "sales_ht": 241435.85,
            "volume": 1557
          },
          {
            "date": "18/05",
            "sales_ht": 407650.24,
            "volume": 3050
          },
          {
            "date": "19/05",
            "sales_ht": 160329.46,
            "volume": 868
          },
          {
            "date": "20/05",
            "sales_ht": 325845.5,
            "volume": 1938
          },
          {
            "date": "21/05",
            "sales_ht": 377714.44,
            "volume": 1274
          },
          {
            "date": "22/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "23/05",
            "sales_ht": 314415.34,
            "volume": 1951
          },
          {
            "date": "24/05",
            "sales_ht": 308831.67,
            "volume": 1985
          },
          {
            "date": "25/05",
            "sales_ht": 382976.5,
            "volume": 2462
          },
          {
            "date": "26/05",
            "sales_ht": 184169.65,
            "volume": 1001
          },
          {
            "date": "27/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "28/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "29/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "30/05",
            "sales_ht": 222059.98,
            "volume": 1378
          },
          {
            "date": "31/05",
            "sales_ht": 115037.46,
            "volume": 656
          }
        ]
      },
      {
        "rank": 3,
        "name": "SENOUCI ALI",
        "sales_ht": 5811556.44,
        "share_pct": 19.69,
        "invoices": 24,
        "avg_basket": 242148.18,
        "unique_clients": 16,
        "volume": 41553,
        "recovery_rate": 25.8,
        "outstanding": 4312174.88,
        "top_product": "ISIS HS 300 G LEMON LIMITLESS",
        "top_product_qty": 14600,
        "verdict": "CATASTROPHIQUE (Blocage immédiat requis!)",
        "top_products": [
          {
            "designation": "PRIL ISIS LImited Edition 650 ML",
            "qty": 9024,
            "val": 1521415.68,
            "contrib": "26.2%"
          },
          {
            "designation": "ISIS HS 300 G LEMON LIMITLESS",
            "qty": 14600,
            "val": 1268302.0,
            "contrib": "21.8%"
          },
          {
            "designation": "ISIS HS 750 G LEMON LIMITLESS",
            "qty": 4752,
            "val": 978294.24,
            "contrib": "16.8%"
          },
          {
            "designation": "BREF JAVEL PURE POWER 900 ML-DZ",
            "qty": 8472,
            "val": 734147.04,
            "contrib": "12.6%"
          }
        ],
        "portfolio": 60,
        "active_days": 20,
        "objective": 6000000,
        "daily_sales": [
          {
            "date": "01/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "02/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "03/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "04/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "05/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "06/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "07/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "08/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "09/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "10/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "11/05",
            "sales_ht": 398508.08,
            "volume": 3400
          },
          {
            "date": "12/05",
            "sales_ht": 447128.18,
            "volume": 4468
          },
          {
            "date": "13/05",
            "sales_ht": 1446550.48,
            "volume": 9736
          },
          {
            "date": "14/05",
            "sales_ht": 363098.48,
            "volume": 3112
          },
          {
            "date": "15/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "16/05",
            "sales_ht": 1094345.12,
            "volume": 5824
          },
          {
            "date": "17/05",
            "sales_ht": 272698.0,
            "volume": 2380
          },
          {
            "date": "18/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "19/05",
            "sales_ht": 482236.4,
            "volume": 2028
          },
          {
            "date": "20/05",
            "sales_ht": 138992.0,
            "volume": 1600
          },
          {
            "date": "21/05",
            "sales_ht": 326241.08,
            "volume": 2836
          },
          {
            "date": "22/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "23/05",
            "sales_ht": 382546.8,
            "volume": 2697
          },
          {
            "date": "24/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "25/05",
            "sales_ht": 107812.58,
            "volume": 1078
          },
          {
            "date": "26/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "27/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "28/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "29/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "30/05",
            "sales_ht": 243941.52,
            "volume": 1560
          },
          {
            "date": "31/05",
            "sales_ht": 107457.72,
            "volume": 834
          }
        ]
      },
      {
        "rank": 4,
        "name": "OUANE ABDELKADER",
        "sales_ht": 4683169.3,
        "share_pct": 15.87,
        "invoices": 38,
        "avg_basket": 123241.3,
        "unique_clients": 45,
        "volume": 25228,
        "recovery_rate": 100.0,
        "outstanding": 0.0,
        "top_product": "ISIS HS 300 G LEMON LIMITLESS",
        "top_product_qty": 8869,
        "verdict": "Modèle de référence absolue (zéro impayé)",
        "top_products": [
          {
            "designation": "ISIS HS 300 G LEMON LIMITLESS",
            "qty": 8869,
            "val": 772857.78,
            "contrib": "16.5%"
          },
          {
            "designation": "ISIS HS 750 G LEMON LIMITLESS",
            "qty": 2808,
            "val": 578738.82,
            "contrib": "12.4%"
          },
          {
            "designation": "LE CHAT REGULAR 2.5 l ADV23",
            "qty": 516,
            "val": 407672.73,
            "contrib": "8.7%"
          },
          {
            "designation": "PRIL ISIS LImited Edition 650 ML",
            "qty": 1404,
            "val": 243443.38,
            "contrib": "5.2%"
          }
        ],
        "portfolio": 45,
        "active_days": 21,
        "objective": 5000000,
        "daily_sales": [
          {
            "date": "01/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "02/05",
            "sales_ht": 153019.52,
            "volume": 1097
          },
          {
            "date": "03/05",
            "sales_ht": 99661.76,
            "volume": 491
          },
          {
            "date": "04/05",
            "sales_ht": 140656.36,
            "volume": 941
          },
          {
            "date": "05/05",
            "sales_ht": 138278.6,
            "volume": 749
          },
          {
            "date": "06/05",
            "sales_ht": 197550.84,
            "volume": 1416
          },
          {
            "date": "07/05",
            "sales_ht": 189671.72,
            "volume": 1325
          },
          {
            "date": "08/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "09/05",
            "sales_ht": 363173.92,
            "volume": 2127
          },
          {
            "date": "10/05",
            "sales_ht": 169823.76,
            "volume": 698
          },
          {
            "date": "11/05",
            "sales_ht": 198223.68,
            "volume": 1145
          },
          {
            "date": "12/05",
            "sales_ht": 248494.18,
            "volume": 1228
          },
          {
            "date": "13/05",
            "sales_ht": 318034.2,
            "volume": 2067
          },
          {
            "date": "14/05",
            "sales_ht": 196500.68,
            "volume": 904
          },
          {
            "date": "15/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "16/05",
            "sales_ht": 166379.65,
            "volume": 1072
          },
          {
            "date": "17/05",
            "sales_ht": 222752.12,
            "volume": 795
          },
          {
            "date": "18/05",
            "sales_ht": 214160.02,
            "volume": 1090
          },
          {
            "date": "19/05",
            "sales_ht": 298712.23,
            "volume": 1603
          },
          {
            "date": "20/05",
            "sales_ht": 178833.36,
            "volume": 1141
          },
          {
            "date": "21/05",
            "sales_ht": 296978.03,
            "volume": 1257
          },
          {
            "date": "22/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "23/05",
            "sales_ht": 189469.13,
            "volume": 1003
          },
          {
            "date": "24/05",
            "sales_ht": 193225.25,
            "volume": 702
          },
          {
            "date": "25/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "26/05",
            "sales_ht": 325194.14,
            "volume": 1458
          },
          {
            "date": "27/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "28/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "29/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "30/05",
            "sales_ht": 88992.75,
            "volume": 469
          },
          {
            "date": "31/05",
            "sales_ht": 95383.4,
            "volume": 450
          }
        ]
      },
      {
        "rank": 5,
        "name": "KAROUCHI SEIFELISSLAM",
        "sales_ht": 3934992.28,
        "share_pct": 13.33,
        "invoices": 40,
        "avg_basket": 98374.81,
        "unique_clients": 45,
        "volume": 23690,
        "recovery_rate": 99.2,
        "outstanding": 31479.94,
        "top_product": "ISIS HS 300 G LEMON LIMITLESS",
        "top_product_qty": 8900,
        "verdict": "Très Bon (Équilibre volume/recouvrement parfait)",
        "top_products": [
          {
            "designation": "ISIS HS 300 G LEMON LIMITLESS",
            "qty": 8900,
            "val": 771341.11,
            "contrib": "19.6%"
          },
          {
            "designation": "ISIS HS 750 G LEMON LIMITLESS",
            "qty": 3384,
            "val": 693089.42,
            "contrib": "17.6%"
          },
          {
            "designation": "PRIL ISIS LImited Edition 650 ML",
            "qty": 1692,
            "val": 298743.78,
            "contrib": "7.6%"
          },
          {
            "designation": "LE CHAT REGULAR 2.5 l ADV23",
            "qty": 367,
            "val": 286911.03,
            "contrib": "7.3%"
          }
        ],
        "portfolio": 45,
        "active_days": 20,
        "objective": 4000000,
        "daily_sales": [
          {
            "date": "01/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "02/05",
            "sales_ht": 128373.12,
            "volume": 919
          },
          {
            "date": "03/05",
            "sales_ht": 63037.6,
            "volume": 336
          },
          {
            "date": "04/05",
            "sales_ht": 205708.0,
            "volume": 1115
          },
          {
            "date": "05/05",
            "sales_ht": 159159.4,
            "volume": 1185
          },
          {
            "date": "06/05",
            "sales_ht": 377429.84,
            "volume": 2807
          },
          {
            "date": "07/05",
            "sales_ht": 108145.2,
            "volume": 724
          },
          {
            "date": "08/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "09/05",
            "sales_ht": 192545.36,
            "volume": 1166
          },
          {
            "date": "10/05",
            "sales_ht": 292308.76,
            "volume": 1576
          },
          {
            "date": "11/05",
            "sales_ht": 198597.36,
            "volume": 823
          },
          {
            "date": "12/05",
            "sales_ht": 266918.36,
            "volume": 1660
          },
          {
            "date": "13/05",
            "sales_ht": 147213.44,
            "volume": 840
          },
          {
            "date": "14/05",
            "sales_ht": 273111.56,
            "volume": 1617
          },
          {
            "date": "15/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "16/05",
            "sales_ht": 195992.68,
            "volume": 1167
          },
          {
            "date": "17/05",
            "sales_ht": 129856.35,
            "volume": 806
          },
          {
            "date": "18/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "19/05",
            "sales_ht": 173263.63,
            "volume": 946
          },
          {
            "date": "20/05",
            "sales_ht": 120966.64,
            "volume": 669
          },
          {
            "date": "21/05",
            "sales_ht": 153106.0,
            "volume": 1008
          },
          {
            "date": "22/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "23/05",
            "sales_ht": 41432.76,
            "volume": 295
          },
          {
            "date": "24/05",
            "sales_ht": 162789.28,
            "volume": 965
          },
          {
            "date": "25/05",
            "sales_ht": 126444.3,
            "volume": 636
          },
          {
            "date": "26/05",
            "sales_ht": 104145.21,
            "volume": 562
          },
          {
            "date": "27/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "28/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "29/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "30/05",
            "sales_ht": 178511.55,
            "volume": 993
          },
          {
            "date": "31/05",
            "sales_ht": 135935.88,
            "volume": 875
          }
        ]
      }
    ],
    "daily_sales": [
      {
        "date": "01/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "02/05",
        "sales_ht": 755152.32,
        "volume": 4885
      },
      {
        "date": "03/05",
        "sales_ht": 468279.4,
        "volume": 2670
      },
      {
        "date": "04/05",
        "sales_ht": 1124220.08,
        "volume": 7885
      },
      {
        "date": "05/05",
        "sales_ht": 929407.4,
        "volume": 5589
      },
      {
        "date": "06/05",
        "sales_ht": 1500997.92,
        "volume": 9684
      },
      {
        "date": "07/05",
        "sales_ht": 1142074.76,
        "volume": 7712
      },
      {
        "date": "08/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "09/05",
        "sales_ht": 1238277.4,
        "volume": 7956
      },
      {
        "date": "10/05",
        "sales_ht": 1053116.72,
        "volume": 5100
      },
      {
        "date": "11/05",
        "sales_ht": 1845681.96,
        "volume": 11371
      },
      {
        "date": "12/05",
        "sales_ht": 1954736.84,
        "volume": 13280
      },
      {
        "date": "13/05",
        "sales_ht": 2374353.5,
        "volume": 15203
      },
      {
        "date": "14/05",
        "sales_ht": 1649666.48,
        "volume": 10313
      },
      {
        "date": "15/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "16/05",
        "sales_ht": 1874438.22,
        "volume": 10594
      },
      {
        "date": "17/05",
        "sales_ht": 1273206.14,
        "volume": 8646
      },
      {
        "date": "18/05",
        "sales_ht": 849428.04,
        "volume": 5545
      },
      {
        "date": "19/05",
        "sales_ht": 1645323.96,
        "volume": 8436
      },
      {
        "date": "20/05",
        "sales_ht": 1061188.62,
        "volume": 6953
      },
      {
        "date": "21/05",
        "sales_ht": 1452150.99,
        "volume": 8277
      },
      {
        "date": "22/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "23/05",
        "sales_ht": 1145841.5,
        "volume": 7047
      },
      {
        "date": "24/05",
        "sales_ht": 849995.14,
        "volume": 4658
      },
      {
        "date": "25/05",
        "sales_ht": 870223.85,
        "volume": 5461
      },
      {
        "date": "26/05",
        "sales_ht": 728878.16,
        "volume": 3601
      },
      {
        "date": "27/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "28/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "29/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "30/05",
        "sales_ht": 979797.0,
        "volume": 5820
      },
      {
        "date": "31/05",
        "sales_ht": 752022.75,
        "volume": 4159
      }
    ]
  },
  "supervision_erp": {
    "metrics": {
      "title": "Rapport de Supervision HENKEL (Audité Mai 2026)",
      "consolidatedRevenue": 29518459.15,
      "preSalesRevenue": 29518459.15,
      "preSalesRevenueTTC": 35126966.39,
      "volumeDistributed": 180845,
      "casesSold": 13297,
      "averageBasket": 170626.93,
      "activePoints": 206,
      "invoices": 173,
      "outstandingReceivables": 5326470.65,
      "recoveryRate": 81.96,
      "avgRevenuePerCase": 2219.93
    },
    "preSales": [
      {
        "rank": 1,
        "name": "KHALIFA ABDERAHMANE",
        "sales_ht": 8405385.69,
        "share_pct": 28.48,
        "invoices": 37,
        "avg_basket": 227172.59,
        "unique_clients": 50,
        "volume": 48324,
        "recovery_rate": 89.5,
        "outstanding": 882565.5,
        "top_product": "ISIS HS 300 G LEMON LIMITLESS",
        "top_product_qty": 14275,
        "verdict": "Top CA / Recouv. Faible",
        "top_products": [
          {
            "designation": "ISIS HS 750 G LEMON LIMITLESS",
            "qty": 6480,
            "val": 1343026.79,
            "contrib": "16.0%"
          },
          {
            "designation": "ISIS HS 300 G LEMON LIMITLESS",
            "qty": 14275,
            "val": 1250184.79,
            "contrib": "14.9%"
          },
          {
            "designation": "PRIL ISIS ULTRA POWER 1.25 L",
            "qty": 2280,
            "val": 697116.04,
            "contrib": "8.3%"
          },
          {
            "designation": "BREF JAVEL PURE POWER 900 ML-DZ",
            "qty": 7332,
            "val": 666164.18,
            "contrib": "7.9%"
          }
        ],
        "portfolio": 50,
        "active_days": 21,
        "objective": 8000000,
        "daily_sales": [
          {
            "date": "01/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "02/05",
            "sales_ht": 271887.52,
            "volume": 1576
          },
          {
            "date": "03/05",
            "sales_ht": 241376.2,
            "volume": 1497
          },
          {
            "date": "04/05",
            "sales_ht": 339754.72,
            "volume": 2193
          },
          {
            "date": "05/05",
            "sales_ht": 631969.4,
            "volume": 3655
          },
          {
            "date": "06/05",
            "sales_ht": 497148.32,
            "volume": 2866
          },
          {
            "date": "07/05",
            "sales_ht": 641571.04,
            "volume": 4258
          },
          {
            "date": "08/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "09/05",
            "sales_ht": 282000.52,
            "volume": 1709
          },
          {
            "date": "10/05",
            "sales_ht": 389188.76,
            "volume": 1957
          },
          {
            "date": "11/05",
            "sales_ht": 567523.0,
            "volume": 2529
          },
          {
            "date": "12/05",
            "sales_ht": 564229.88,
            "volume": 3137
          },
          {
            "date": "13/05",
            "sales_ht": 260011.78,
            "volume": 1344
          },
          {
            "date": "14/05",
            "sales_ht": 453498.8,
            "volume": 2737
          },
          {
            "date": "15/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "16/05",
            "sales_ht": 189713.82,
            "volume": 1119
          },
          {
            "date": "17/05",
            "sales_ht": 406463.82,
            "volume": 3108
          },
          {
            "date": "18/05",
            "sales_ht": 227617.78,
            "volume": 1405
          },
          {
            "date": "19/05",
            "sales_ht": 530782.24,
            "volume": 2991
          },
          {
            "date": "20/05",
            "sales_ht": 296551.12,
            "volume": 1605
          },
          {
            "date": "21/05",
            "sales_ht": 298111.44,
            "volume": 1902
          },
          {
            "date": "22/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "23/05",
            "sales_ht": 217977.47,
            "volume": 1101
          },
          {
            "date": "24/05",
            "sales_ht": 185148.94,
            "volume": 1006
          },
          {
            "date": "25/05",
            "sales_ht": 252990.47,
            "volume": 1285
          },
          {
            "date": "26/05",
            "sales_ht": 115369.16,
            "volume": 580
          },
          {
            "date": "27/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "28/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "29/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "30/05",
            "sales_ht": 246291.2,
            "volume": 1420
          },
          {
            "date": "31/05",
            "sales_ht": 298208.29,
            "volume": 1344
          }
        ]
      },
      {
        "rank": 2,
        "name": "MAAIZI ABDERAZZAK",
        "sales_ht": 6683355.44,
        "share_pct": 22.64,
        "invoices": 34,
        "avg_basket": 196569.28,
        "unique_clients": 50,
        "volume": 42050,
        "recovery_rate": 98.5,
        "outstanding": 100250.33,
        "top_product": "ISIS HS 300 G LEMON LIMITLESS",
        "top_product_qty": 18400,
        "verdict": "Performance stable, recouvrement solide",
        "top_products": [
          {
            "designation": "ISIS HS 300 G LEMON LIMITLESS",
            "qty": 18400,
            "val": 1593352.29,
            "contrib": "23.8%"
          },
          {
            "designation": "ISIS HS 750 G LEMON LIMITLESS",
            "qty": 4812,
            "val": 987326.46,
            "contrib": "14.8%"
          },
          {
            "designation": "BREF JAVEL PURE POWER 900 ML-DZ",
            "qty": 5580,
            "val": 501626.04,
            "contrib": "7.5%"
          },
          {
            "designation": "LE CHAT REGULAR 2.5 l ADV23",
            "qty": 606,
            "val": 475273.15,
            "contrib": "7.1%"
          }
        ],
        "portfolio": 50,
        "active_days": 20,
        "objective": 7000000,
        "daily_sales": [
          {
            "date": "01/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "02/05",
            "sales_ht": 201872.16,
            "volume": 1293
          },
          {
            "date": "03/05",
            "sales_ht": 64203.84,
            "volume": 346
          },
          {
            "date": "04/05",
            "sales_ht": 438101.0,
            "volume": 3636
          },
          {
            "date": "05/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "06/05",
            "sales_ht": 428868.92,
            "volume": 2595
          },
          {
            "date": "07/05",
            "sales_ht": 202686.8,
            "volume": 1405
          },
          {
            "date": "08/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "09/05",
            "sales_ht": 400557.6,
            "volume": 2954
          },
          {
            "date": "10/05",
            "sales_ht": 201795.44,
            "volume": 869
          },
          {
            "date": "11/05",
            "sales_ht": 482829.84,
            "volume": 3474
          },
          {
            "date": "12/05",
            "sales_ht": 427966.24,
            "volume": 2787
          },
          {
            "date": "13/05",
            "sales_ht": 202543.6,
            "volume": 1216
          },
          {
            "date": "14/05",
            "sales_ht": 363456.96,
            "volume": 1943
          },
          {
            "date": "15/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "16/05",
            "sales_ht": 228006.95,
            "volume": 1412
          },
          {
            "date": "17/05",
            "sales_ht": 241435.85,
            "volume": 1557
          },
          {
            "date": "18/05",
            "sales_ht": 407650.24,
            "volume": 3050
          },
          {
            "date": "19/05",
            "sales_ht": 160329.46,
            "volume": 868
          },
          {
            "date": "20/05",
            "sales_ht": 325845.5,
            "volume": 1938
          },
          {
            "date": "21/05",
            "sales_ht": 377714.44,
            "volume": 1274
          },
          {
            "date": "22/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "23/05",
            "sales_ht": 314415.34,
            "volume": 1951
          },
          {
            "date": "24/05",
            "sales_ht": 308831.67,
            "volume": 1985
          },
          {
            "date": "25/05",
            "sales_ht": 382976.5,
            "volume": 2462
          },
          {
            "date": "26/05",
            "sales_ht": 184169.65,
            "volume": 1001
          },
          {
            "date": "27/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "28/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "29/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "30/05",
            "sales_ht": 222059.98,
            "volume": 1378
          },
          {
            "date": "31/05",
            "sales_ht": 115037.46,
            "volume": 656
          }
        ]
      },
      {
        "rank": 3,
        "name": "SENOUCI ALI",
        "sales_ht": 5811556.44,
        "share_pct": 19.69,
        "invoices": 24,
        "avg_basket": 242148.18,
        "unique_clients": 16,
        "volume": 41553,
        "recovery_rate": 25.8,
        "outstanding": 4312174.88,
        "top_product": "ISIS HS 300 G LEMON LIMITLESS",
        "top_product_qty": 14600,
        "verdict": "CATASTROPHIQUE (Blocage immédiat requis!)",
        "top_products": [
          {
            "designation": "PRIL ISIS LImited Edition 650 ML",
            "qty": 9024,
            "val": 1521415.68,
            "contrib": "26.2%"
          },
          {
            "designation": "ISIS HS 300 G LEMON LIMITLESS",
            "qty": 14600,
            "val": 1268302.0,
            "contrib": "21.8%"
          },
          {
            "designation": "ISIS HS 750 G LEMON LIMITLESS",
            "qty": 4752,
            "val": 978294.24,
            "contrib": "16.8%"
          },
          {
            "designation": "BREF JAVEL PURE POWER 900 ML-DZ",
            "qty": 8472,
            "val": 734147.04,
            "contrib": "12.6%"
          }
        ],
        "portfolio": 60,
        "active_days": 20,
        "objective": 6000000,
        "daily_sales": [
          {
            "date": "01/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "02/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "03/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "04/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "05/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "06/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "07/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "08/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "09/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "10/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "11/05",
            "sales_ht": 398508.08,
            "volume": 3400
          },
          {
            "date": "12/05",
            "sales_ht": 447128.18,
            "volume": 4468
          },
          {
            "date": "13/05",
            "sales_ht": 1446550.48,
            "volume": 9736
          },
          {
            "date": "14/05",
            "sales_ht": 363098.48,
            "volume": 3112
          },
          {
            "date": "15/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "16/05",
            "sales_ht": 1094345.12,
            "volume": 5824
          },
          {
            "date": "17/05",
            "sales_ht": 272698.0,
            "volume": 2380
          },
          {
            "date": "18/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "19/05",
            "sales_ht": 482236.4,
            "volume": 2028
          },
          {
            "date": "20/05",
            "sales_ht": 138992.0,
            "volume": 1600
          },
          {
            "date": "21/05",
            "sales_ht": 326241.08,
            "volume": 2836
          },
          {
            "date": "22/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "23/05",
            "sales_ht": 382546.8,
            "volume": 2697
          },
          {
            "date": "24/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "25/05",
            "sales_ht": 107812.58,
            "volume": 1078
          },
          {
            "date": "26/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "27/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "28/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "29/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "30/05",
            "sales_ht": 243941.52,
            "volume": 1560
          },
          {
            "date": "31/05",
            "sales_ht": 107457.72,
            "volume": 834
          }
        ]
      },
      {
        "rank": 4,
        "name": "OUANE ABDELKADER",
        "sales_ht": 4683169.3,
        "share_pct": 15.87,
        "invoices": 38,
        "avg_basket": 123241.3,
        "unique_clients": 45,
        "volume": 25228,
        "recovery_rate": 100.0,
        "outstanding": 0.0,
        "top_product": "ISIS HS 300 G LEMON LIMITLESS",
        "top_product_qty": 8869,
        "verdict": "Modèle de référence absolue (zéro impayé)",
        "top_products": [
          {
            "designation": "ISIS HS 300 G LEMON LIMITLESS",
            "qty": 8869,
            "val": 772857.78,
            "contrib": "16.5%"
          },
          {
            "designation": "ISIS HS 750 G LEMON LIMITLESS",
            "qty": 2808,
            "val": 578738.82,
            "contrib": "12.4%"
          },
          {
            "designation": "LE CHAT REGULAR 2.5 l ADV23",
            "qty": 516,
            "val": 407672.73,
            "contrib": "8.7%"
          },
          {
            "designation": "PRIL ISIS LImited Edition 650 ML",
            "qty": 1404,
            "val": 243443.38,
            "contrib": "5.2%"
          }
        ],
        "portfolio": 45,
        "active_days": 21,
        "objective": 5000000,
        "daily_sales": [
          {
            "date": "01/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "02/05",
            "sales_ht": 153019.52,
            "volume": 1097
          },
          {
            "date": "03/05",
            "sales_ht": 99661.76,
            "volume": 491
          },
          {
            "date": "04/05",
            "sales_ht": 140656.36,
            "volume": 941
          },
          {
            "date": "05/05",
            "sales_ht": 138278.6,
            "volume": 749
          },
          {
            "date": "06/05",
            "sales_ht": 197550.84,
            "volume": 1416
          },
          {
            "date": "07/05",
            "sales_ht": 189671.72,
            "volume": 1325
          },
          {
            "date": "08/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "09/05",
            "sales_ht": 363173.92,
            "volume": 2127
          },
          {
            "date": "10/05",
            "sales_ht": 169823.76,
            "volume": 698
          },
          {
            "date": "11/05",
            "sales_ht": 198223.68,
            "volume": 1145
          },
          {
            "date": "12/05",
            "sales_ht": 248494.18,
            "volume": 1228
          },
          {
            "date": "13/05",
            "sales_ht": 318034.2,
            "volume": 2067
          },
          {
            "date": "14/05",
            "sales_ht": 196500.68,
            "volume": 904
          },
          {
            "date": "15/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "16/05",
            "sales_ht": 166379.65,
            "volume": 1072
          },
          {
            "date": "17/05",
            "sales_ht": 222752.12,
            "volume": 795
          },
          {
            "date": "18/05",
            "sales_ht": 214160.02,
            "volume": 1090
          },
          {
            "date": "19/05",
            "sales_ht": 298712.23,
            "volume": 1603
          },
          {
            "date": "20/05",
            "sales_ht": 178833.36,
            "volume": 1141
          },
          {
            "date": "21/05",
            "sales_ht": 296978.03,
            "volume": 1257
          },
          {
            "date": "22/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "23/05",
            "sales_ht": 189469.13,
            "volume": 1003
          },
          {
            "date": "24/05",
            "sales_ht": 193225.25,
            "volume": 702
          },
          {
            "date": "25/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "26/05",
            "sales_ht": 325194.14,
            "volume": 1458
          },
          {
            "date": "27/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "28/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "29/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "30/05",
            "sales_ht": 88992.75,
            "volume": 469
          },
          {
            "date": "31/05",
            "sales_ht": 95383.4,
            "volume": 450
          }
        ]
      },
      {
        "rank": 5,
        "name": "KAROUCHI SEIFELISSLAM",
        "sales_ht": 3934992.28,
        "share_pct": 13.33,
        "invoices": 40,
        "avg_basket": 98374.81,
        "unique_clients": 45,
        "volume": 23690,
        "recovery_rate": 99.2,
        "outstanding": 31479.94,
        "top_product": "ISIS HS 300 G LEMON LIMITLESS",
        "top_product_qty": 8900,
        "verdict": "Très Bon (Équilibre volume/recouvrement parfait)",
        "top_products": [
          {
            "designation": "ISIS HS 300 G LEMON LIMITLESS",
            "qty": 8900,
            "val": 771341.11,
            "contrib": "19.6%"
          },
          {
            "designation": "ISIS HS 750 G LEMON LIMITLESS",
            "qty": 3384,
            "val": 693089.42,
            "contrib": "17.6%"
          },
          {
            "designation": "PRIL ISIS LImited Edition 650 ML",
            "qty": 1692,
            "val": 298743.78,
            "contrib": "7.6%"
          },
          {
            "designation": "LE CHAT REGULAR 2.5 l ADV23",
            "qty": 367,
            "val": 286911.03,
            "contrib": "7.3%"
          }
        ],
        "portfolio": 45,
        "active_days": 20,
        "objective": 4000000,
        "daily_sales": [
          {
            "date": "01/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "02/05",
            "sales_ht": 128373.12,
            "volume": 919
          },
          {
            "date": "03/05",
            "sales_ht": 63037.6,
            "volume": 336
          },
          {
            "date": "04/05",
            "sales_ht": 205708.0,
            "volume": 1115
          },
          {
            "date": "05/05",
            "sales_ht": 159159.4,
            "volume": 1185
          },
          {
            "date": "06/05",
            "sales_ht": 377429.84,
            "volume": 2807
          },
          {
            "date": "07/05",
            "sales_ht": 108145.2,
            "volume": 724
          },
          {
            "date": "08/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "09/05",
            "sales_ht": 192545.36,
            "volume": 1166
          },
          {
            "date": "10/05",
            "sales_ht": 292308.76,
            "volume": 1576
          },
          {
            "date": "11/05",
            "sales_ht": 198597.36,
            "volume": 823
          },
          {
            "date": "12/05",
            "sales_ht": 266918.36,
            "volume": 1660
          },
          {
            "date": "13/05",
            "sales_ht": 147213.44,
            "volume": 840
          },
          {
            "date": "14/05",
            "sales_ht": 273111.56,
            "volume": 1617
          },
          {
            "date": "15/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "16/05",
            "sales_ht": 195992.68,
            "volume": 1167
          },
          {
            "date": "17/05",
            "sales_ht": 129856.35,
            "volume": 806
          },
          {
            "date": "18/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "19/05",
            "sales_ht": 173263.63,
            "volume": 946
          },
          {
            "date": "20/05",
            "sales_ht": 120966.64,
            "volume": 669
          },
          {
            "date": "21/05",
            "sales_ht": 153106.0,
            "volume": 1008
          },
          {
            "date": "22/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "23/05",
            "sales_ht": 41432.76,
            "volume": 295
          },
          {
            "date": "24/05",
            "sales_ht": 162789.28,
            "volume": 965
          },
          {
            "date": "25/05",
            "sales_ht": 126444.3,
            "volume": 636
          },
          {
            "date": "26/05",
            "sales_ht": 104145.21,
            "volume": 562
          },
          {
            "date": "27/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "28/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "29/05",
            "sales_ht": 0.0,
            "volume": 0
          },
          {
            "date": "30/05",
            "sales_ht": 178511.55,
            "volume": 993
          },
          {
            "date": "31/05",
            "sales_ht": 135935.88,
            "volume": 875
          }
        ]
      }
    ],
    "daily_sales": [
      {
        "date": "01/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "02/05",
        "sales_ht": 755152.32,
        "volume": 4885
      },
      {
        "date": "03/05",
        "sales_ht": 468279.4,
        "volume": 2670
      },
      {
        "date": "04/05",
        "sales_ht": 1124220.08,
        "volume": 7885
      },
      {
        "date": "05/05",
        "sales_ht": 929407.4,
        "volume": 5589
      },
      {
        "date": "06/05",
        "sales_ht": 1500997.92,
        "volume": 9684
      },
      {
        "date": "07/05",
        "sales_ht": 1142074.76,
        "volume": 7712
      },
      {
        "date": "08/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "09/05",
        "sales_ht": 1238277.4,
        "volume": 7956
      },
      {
        "date": "10/05",
        "sales_ht": 1053116.72,
        "volume": 5100
      },
      {
        "date": "11/05",
        "sales_ht": 1845681.96,
        "volume": 11371
      },
      {
        "date": "12/05",
        "sales_ht": 1954736.84,
        "volume": 13280
      },
      {
        "date": "13/05",
        "sales_ht": 2374353.5,
        "volume": 15203
      },
      {
        "date": "14/05",
        "sales_ht": 1649666.48,
        "volume": 10313
      },
      {
        "date": "15/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "16/05",
        "sales_ht": 1874438.22,
        "volume": 10594
      },
      {
        "date": "17/05",
        "sales_ht": 1273206.14,
        "volume": 8646
      },
      {
        "date": "18/05",
        "sales_ht": 849428.04,
        "volume": 5545
      },
      {
        "date": "19/05",
        "sales_ht": 1645323.96,
        "volume": 8436
      },
      {
        "date": "20/05",
        "sales_ht": 1061188.62,
        "volume": 6953
      },
      {
        "date": "21/05",
        "sales_ht": 1452150.99,
        "volume": 8277
      },
      {
        "date": "22/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "23/05",
        "sales_ht": 1145841.5,
        "volume": 7047
      },
      {
        "date": "24/05",
        "sales_ht": 849995.14,
        "volume": 4658
      },
      {
        "date": "25/05",
        "sales_ht": 870223.85,
        "volume": 5461
      },
      {
        "date": "26/05",
        "sales_ht": 728878.16,
        "volume": 3601
      },
      {
        "date": "27/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "28/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "29/05",
        "sales_ht": 0.0,
        "volume": 0
      },
      {
        "date": "30/05",
        "sales_ht": 979797.0,
        "volume": 5820
      },
      {
        "date": "31/05",
        "sales_ht": 752022.75,
        "volume": 4159
      }
    ]
  },
  "audits": [
    {
      "rep": "KHALIFA ABDERAHMANE",
      "status": "Critique",
      "status_ar": "حرج",
      "outstanding": 882565.5,
      "rate": 89.5,
      "symptoms": "CA de 8,405,385.69 DA HT (48,324 u.) avec un reste à payer global de 882,565.50 DA.",
      "symptoms_ar": "رقم أعمال بقيمة 8,405,385.69 د.ج (48,324 وحدة) مع مبالغ غير محصلة بقيمة 882,565.50 د.ج.",
      "causes": "Exposition élevée aux crédits. Bien que premier vendeur en volume, son recouvrement plafonne à 89.50%.",
      "causes_ar": "ارتفاع مستوى منح القروض للزبائن. على الرغم من كونه الوكيل الأول من حيث حجم المبيعات، فإن التحصيل يقتصر على 89.50٪.",
      "actions": [
        "Fixer un plafond d'encours strict à 1,000,000 DA pour Khalifa.",
        "Exiger un apurement immédiat de 50% de son encours sous 15 jours."
      ],
      "actions_ar": [
        "تحديد سقف أقصى صارم للديون بقيمة 1,000,000 د.ج للوكيل خليفة.",
        "مطالبة الوكيل بتسوية 50٪ من ديونه المعلقة خلال 15 يوماً كشرط للاستمرار."
      ]
    },
    {
      "rep": "MAAIZI ABDERAZZAK",
      "status": "Vigilance",
      "status_ar": "متابعة",
      "outstanding": 100250.33,
      "rate": 98.5,
      "symptoms": "CA de 6,683,355.44 DA HT (42,050 u.) avec un reste à payer global de 100,250.33 DA.",
      "symptoms_ar": "رقم أعمال بقيمة 6,683,355.44 د.ج (42,050 وحدة) مع مبالغ غير محصلة بقيمة 100,250.33 د.ج.",
      "causes": "Activité régulière avec un en-cours client gérable. Suivi standard requis.",
      "causes_ar": "نشاط منتظم مع ديون عملاء يمكن تسييرها. المتابعة القياسية مطلوبة.",
      "actions": [
        "Maintenir le suivi hebdomadaire des relances.",
        "Vérifier la solvabilité lors de l'ouverture de nouveaux comptes."
      ],
      "actions_ar": [
        "الحفاظ على المتابعة الأسبوعية لإشعارات الدفع.",
        "التحقق من الملاءة المالية للعملاء عند فتح حسابات جديدة."
      ]
    },
    {
      "rep": "SENOUCI ALI",
      "status": "Critique",
      "status_ar": "حرج",
      "outstanding": 4312174.88,
      "rate": 25.8,
      "symptoms": "CA de 5,811,556.44 DA HT (41,553 u.) avec un reste à payer global de 4,312,174.88 DA.",
      "symptoms_ar": "رقم أعمال بقيمة 5,811,556.44 د.ج (41,553 وحدة) مع مبالغ غير محصلة بقيمة 4,312,174.88 د.ج.",
      "causes": "Négligence critique du recouvrement. Encours extrêmement important accumulé sans apurement.",
      "causes_ar": "إهمال شديد في متابعة التحصيل المالي. تراكم ديون ضخمة للغاية دون أي سداد يذكر.",
      "actions": [
        "Geler immédiatement le compte crédit de Senouci Ali et suspendre les livraisons.",
        "Lancer un audit physique urgent auprès de ses clients débiteurs."
      ],
      "actions_ar": [
        "تجميد حساب الائتمان فوراً للوكيل سنوسي علي ووقف جميع عمليات الشحن.",
        "إجراء تدقيق ميداني عاجل وشامل لجميع العملاء المدينين له."
      ]
    },
    {
      "rep": "OUANE ABDELKADER",
      "status": "Référence",
      "status_ar": "مرجع",
      "outstanding": 0.0,
      "rate": 100.0,
      "symptoms": "CA de 4,683,169.30 DA HT (25,228 u.) avec un reste à payer global de 0.00 DA.",
      "symptoms_ar": "رقم أعمال بقيمة 4,683,169.30 د.ج (25,228 وحدة) مع مبالغ غير محصلة بقيمة 0.00 د.ج.",
      "causes": "Application rigoureuse de la politique de paiement cash à la livraison.",
      "causes_ar": "التطبيق الصارم لسياسة الدفع نقدًا عند التسليم.",
      "actions": [
        "Félicitations officielles pour le suivi du recouvrement.",
        "Dupliquer sa méthode d'encaissement direct sur les autres secteurs."
      ],
      "actions_ar": [
        "تهنئة رسمية على المتابعة الدقيقة للتحصيل المالي.",
        "تعميم طريقته في التحصيل الفوري على باقي القطاعات الأخرى."
      ]
    },
    {
      "rep": "KAROUCHI SEIFELISSLAM",
      "status": "Succès",
      "status_ar": "ممتاز",
      "outstanding": 31479.94,
      "rate": 99.2,
      "symptoms": "CA de 3,934,992.28 DA HT (23,690 u.) avec un reste à payer global de 31,479.94 DA.",
      "symptoms_ar": "رقم أعمال بقيمة 3,934,992.28 د.ج (23,690 وحدة) مع مبالغ غير محصلة بقيمة 31,479.94 د.ج.",
      "causes": "Activité régulière avec un en-cours client gérable. Suivi standard requis.",
      "causes_ar": "نشاط منتظم مع ديون عملاء يمكن تسييرها. المتابعة القياسية مطلوبة.",
      "actions": [
        "Maintenir le suivi hebdomadaire des relances.",
        "Vérifier la solvabilité lors de l'ouverture de nouveaux comptes."
      ],
      "actions_ar": [
        "الحفاظ على المتابعة الأسبوعية لإشعارات الدفع.",
        "التحقق من الملاءة المالية للعملاء عند فتح حسابات جديدة."
      ]
    }
  ],
  "products": [
    {
      "rank": 1,
      "designation": "ISIS HS 300 G LEMON LIMITLESS",
      "volume": 65044,
      "revenue_ht": 5656037.97,
      "category": "Soin du Linge"
    },
    {
      "rank": 2,
      "designation": "BREF JAVEL PURE POWER 900 ML-DZ",
      "volume": 25261,
      "revenue_ht": 2252318.67,
      "category": "Nettoyants Surfaces"
    },
    {
      "rank": 3,
      "designation": "ISIS HS 750 G LEMON LIMITLESS",
      "volume": 22236,
      "revenue_ht": 4580475.74,
      "category": "Soin du Linge"
    },
    {
      "rank": 4,
      "designation": "PRIL ISIS LImited Edition 650 ML",
      "volume": 18013,
      "revenue_ht": 3096278.7,
      "category": "Soin de la Vaisselle"
    },
    {
      "rank": 5,
      "designation": "LE CHAT HS 300 GR ADV23",
      "volume": 5725,
      "revenue_ht": 554859.24,
      "category": "Soin du Linge"
    },
    {
      "rank": 6,
      "designation": "PRIL ISIS ULTRA POWER 1.25 L",
      "volume": 5076,
      "revenue_ht": 1516226.63,
      "category": "Soin de la Vaisselle"
    },
    {
      "rank": 7,
      "designation": "LE CHAT HS ROSE 300 GR",
      "volume": 4625,
      "revenue_ht": 447076.27,
      "category": "Soin du Linge"
    },
    {
      "rank": 8,
      "designation": "PRIL ISIS ULTRA POWER 650 ML",
      "volume": 4401,
      "revenue_ht": 794813.86,
      "category": "Soin de la Vaisselle"
    },
    {
      "rank": 9,
      "designation": "LE CHAT HS ROSE 750 GR",
      "volume": 3300,
      "revenue_ht": 747157.02,
      "category": "Soin du Linge"
    },
    {
      "rank": 10,
      "designation": "BREF JAVEL REGULAR PURE POWER 1.75 L",
      "volume": 3024,
      "revenue_ht": 478850.96,
      "category": "Nettoyants Surfaces"
    },
    {
      "rank": 11,
      "designation": "ISIS HS 1.5 KG LEMON LIMITLESS",
      "volume": 3000,
      "revenue_ht": 1207571.35,
      "category": "Soin du Linge"
    },
    {
      "rank": 12,
      "designation": "ISIS GOLD 5 EN 1 300 G",
      "volume": 2725,
      "revenue_ht": 237910.48,
      "category": "Soin du Linge"
    },
    {
      "rank": 13,
      "designation": "LE CHAT HS 750 GR ADV23",
      "volume": 2601,
      "revenue_ht": 586978.22,
      "category": "Soin du Linge"
    },
    {
      "rank": 14,
      "designation": "LE CHAT REGULAR 2.5 l ADV23",
      "volume": 2233,
      "revenue_ht": 1759082.03,
      "category": "Soin du Linge"
    },
    {
      "rank": 15,
      "designation": "LE CHAT REGULAR 1 L ADV23",
      "volume": 1546,
      "revenue_ht": 568449.56,
      "category": "Soin du Linge"
    },
    {
      "rank": 16,
      "designation": "PRIL ISIS Limited edition 1.25 L",
      "volume": 1536,
      "revenue_ht": 448485.61,
      "category": "Soin de la Vaisselle"
    },
    {
      "rank": 17,
      "designation": "ISIS GOLD 5 EN 1 HS 750 G",
      "volume": 1300,
      "revenue_ht": 268891.77,
      "category": "Soin du Linge"
    },
    {
      "rank": 18,
      "designation": "LE CHAT HS POUDRE 1.5 KG",
      "volume": 1008,
      "revenue_ht": 404766.58,
      "category": "Soin du Linge"
    },
    {
      "rank": 19,
      "designation": "NETTOYANT MOUSSANT JAVELISE 900 ML",
      "volume": 900,
      "revenue_ht": 116429.24,
      "category": "Soin du Linge"
    },
    {
      "rank": 20,
      "designation": "PRIL ISIS ULTRA POWER 3 L",
      "volume": 792,
      "revenue_ht": 536437.83,
      "category": "Soin de la Vaisselle"
    },
    {
      "rank": 21,
      "designation": "LE CHAT ROSE 2.5 L ADV23",
      "volume": 641,
      "revenue_ht": 505823.63,
      "category": "Soin du Linge"
    },
    {
      "rank": 22,
      "designation": "ISIS GOLD LS GEL 2.5 L",
      "volume": 577,
      "revenue_ht": 285332.92,
      "category": "Soin du Linge"
    },
    {
      "rank": 23,
      "designation": "ISIS BOUQUET JASMIN 950 ML",
      "volume": 576,
      "revenue_ht": 100602.98,
      "category": "Soin du Linge"
    },
    {
      "rank": 24,
      "designation": "PRIL ISIS ANTIBACTERIEN 650 ML LEMON",
      "volume": 540,
      "revenue_ht": 95766.28,
      "category": "Soin de la Vaisselle"
    },
    {
      "rank": 25,
      "designation": "ISIS BOUQUET LAVANDE 950 ML",
      "volume": 524,
      "revenue_ht": 90744.93,
      "category": "Soin du Linge"
    },
    {
      "rank": 26,
      "designation": "PRIL ISIS 3 L edition limitée",
      "volume": 496,
      "revenue_ht": 336616.25,
      "category": "Soin de la Vaisselle"
    },
    {
      "rank": 27,
      "designation": "LE CHAT SDM 2.5L ADV23",
      "volume": 466,
      "revenue_ht": 367629.83,
      "category": "Soin du Linge"
    },
    {
      "rank": 28,
      "designation": "ISIS BOUQUET ROSE 950 ML",
      "volume": 440,
      "revenue_ht": 76612.98,
      "category": "Soin du Linge"
    },
    {
      "rank": 29,
      "designation": "LE CHAT REGULAR 4 L ADV23",
      "volume": 345,
      "revenue_ht": 381556.02,
      "category": "Soin du Linge"
    },
    {
      "rank": 30,
      "designation": "ISIS GOLD LAVENDER-DZ (B/L) - 2.5 L",
      "volume": 329,
      "revenue_ht": 162484.88,
      "category": "Soin du Linge"
    },
    {
      "rank": 31,
      "designation": "ISIS LS BAG 2.5 KG LEMON",
      "volume": 300,
      "revenue_ht": 210518.68,
      "category": "Soin du Linge"
    },
    {
      "rank": 32,
      "designation": "LE CHAT PREMIUM RL 2.5 L",
      "volume": 278,
      "revenue_ht": 268971.03,
      "category": "Soin du Linge"
    },
    {
      "rank": 33,
      "designation": "LE CHAT 2.5 KG BAG ADV23",
      "volume": 266,
      "revenue_ht": 204895.79,
      "category": "Soin du Linge"
    },
    {
      "rank": 34,
      "designation": "ISIS GOLD HDLD LAVENDER-DZ 1 L",
      "volume": 263,
      "revenue_ht": 67327.58,
      "category": "Soin du Linge"
    },
    {
      "rank": 35,
      "designation": "BREF MOUSSANT 1.75 L",
      "volume": 156,
      "revenue_ht": 36314.43,
      "category": "Nettoyants Surfaces"
    },
    {
      "rank": 36,
      "designation": "BREF TRIGGER MULTI-SURFACE 490 ML",
      "volume": 114,
      "revenue_ht": 25716.2,
      "category": "Nettoyants Surfaces"
    },
    {
      "rank": 37,
      "designation": "PRIL ISIS ANTIBACTERIEN 650 ML edition limitée",
      "volume": 108,
      "revenue_ht": 18730.04,
      "category": "Soin de la Vaisselle"
    },
    {
      "rank": 38,
      "designation": "Pril ISIS 1.25L antibac edition limitée",
      "volume": 72,
      "revenue_ht": 21068.99,
      "category": "Soin de la Vaisselle"
    },
    {
      "rank": 39,
      "designation": "LE CHAT HS GEL 1 L ADV23",
      "volume": 8,
      "revenue_ht": 2648.0,
      "category": "Soin du Linge"
    }
  ],
  "clients": [
    {
      "code": "000066",
      "name": "Barik Ibrahim",
      "deliveries": 2,
      "purchases_ht": 783874.8
    },
    {
      "code": "000056",
      "name": "Zoubir bakhadda",
      "deliveries": 1,
      "purchases_ht": 659237.6
    },
    {
      "code": "000057",
      "name": "Kadda AEK",
      "deliveries": 3,
      "purchases_ht": 626589.68
    },
    {
      "code": "000055",
      "name": "Mezioud Benaouda",
      "deliveries": 1,
      "purchases_ht": 594422.0
    },
    {
      "code": "000054",
      "name": "Dariss",
      "deliveries": 4,
      "purchases_ht": 564406.48
    },
    {
      "code": "000050",
      "name": "Ben Asla Ali",
      "deliveries": 2,
      "purchases_ht": 454696.16
    },
    {
      "code": "000059",
      "name": "boucherit ali",
      "deliveries": 1,
      "purchases_ht": 454308.36
    },
    {
      "code": "000060",
      "name": "zegai amer",
      "deliveries": 1,
      "purchases_ht": 445487.6
    },
    {
      "code": "000052",
      "name": "Zekri Ali",
      "deliveries": 1,
      "purchases_ht": 350760.08
    },
    {
      "code": "000039",
      "name": "Sidahmed Benchrif",
      "deliveries": 2,
      "purchases_ht": 277336.64
    },
    {
      "code": "000061",
      "name": "Bagdad rabat",
      "deliveries": 1,
      "purchases_ht": 194549.16
    },
    {
      "code": "00",
      "name": "Kadjar youcef",
      "deliveries": 1,
      "purchases_ht": 170207.6
    },
    {
      "code": "000028",
      "name": "ZEKRI KHELIL",
      "deliveries": 1,
      "purchases_ht": 96368.1
    },
    {
      "code": "000070",
      "name": "Raiis",
      "deliveries": 1,
      "purchases_ht": 56188.08
    },
    {
      "code": "000071",
      "name": "Si Omar",
      "deliveries": 1,
      "purchases_ht": 51624.5
    },
    {
      "code": "000043",
      "name": "TAKI SAHRAOUI",
      "deliveries": 1,
      "purchases_ht": 31499.6
    }
  ],
  "documents": [
    {
      "id": "supervision-final",
      "name": "Rapport_Performance_Supervision_Final.pdf",
      "title": "Rapport de Supervision Finale (Henkel)",
      "size": "6.5 KB",
      "description": "Supervision critique des KPIs de performance et de recouvrement du segment HENKEL pour Mai 2026.",
      "type": "Supervision Executive",
      "url": "/Rapport_Performance_Supervision_Final.pdf"
    },
    {
      "id": "performance-consolide",
      "name": "Rapport_Performance_HENKEL_Mai_2026_Consolide_ZoneParZone.pdf",
      "title": "Rapport de Performance Consolidé (Henkel)",
      "size": "6.5 KB",
      "description": "Consolidation complète des chiffres d'affaires et taux de recouvrement par prévendeur Henkel.",
      "type": "Consolidation Commerciale",
      "url": "/Rapport_Performance_HENKEL_Mai_2026_Consolide_ZoneParZone.pdf"
    },
    {
      "id": "ventes-zone",
      "name": "Rapport_Ventes_Par_Zone_HENKEL.pdf",
      "title": "Analyse des Ventes HENKEL par Zone",
      "size": "2.8 KB",
      "description": "Répartition géographique des volumes de vente et de la couverture territoriale des 5 prévendeurs Henkel.",
      "type": "Analyse Territoriale",
      "url": "/Rapport_Ventes_Par_Zone_HENKEL.pdf"
    },
    {
      "id": "comparatif-regions",
      "name": "Rapport_Comparatif_Regions_HENKEL.pdf",
      "title": "Comparatif Régions & Prévendeurs HENKEL",
      "size": "5.2 KB",
      "description": "Comparaison croisée des performances commerciales, de la rotation produits et du taux de recouvrement.",
      "type": "Audit Commercial",
      "url": "/Rapport_Comparatif_Regions_HENKEL.pdf"
    },
    {
      "id": "guide-kpis",
      "name": "GUIDE KPIs HENKEL - Mai 2026.pdf",
      "title": "Guide Opérationnel des KPIs HENKEL",
      "size": "14.9 KB",
      "description": "Document de référence définissant les indicateurs de performance commerciale, d'encours et de crédit.",
      "type": "Guide Opérationnel",
      "url": "/GUIDE KPIs HENKEL - Mai 2026.pdf"
    }
  ],
  "brand_sales": [
    {
      "category": "Soin du Linge",
      "category_ar": "العناية بالملابس",
      "sales": {
        "KHALIFA ABDERAHMANE": 5479597.38,
        "MAAIZI ABDERAZZAK": 5072889.25,
        "SENOUCI ALI": 2821944.12,
        "OUANE ABDELKADER": 3584119.91,
        "KAROUCHI SEIFELISSLAM": 2902284.03
      },
      "total": 19860834.69
    },
    {
      "category": "Soin de la Vaisselle",
      "category_ar": "العناية بالأواني",
      "sales": {
        "KHALIFA ABDERAHMANE": 2067143.06,
        "MAAIZI ABDERAZZAK": 993015.87,
        "SENOUCI ALI": 2187545.28,
        "OUANE ABDELKADER": 832557.67,
        "KAROUCHI SEIFELISSLAM": 784162.31
      },
      "total": 6864424.2
    },
    {
      "category": "Nettoyants Surfaces",
      "category_ar": "منظفات الأسطح",
      "sales": {
        "KHALIFA ABDERAHMANE": 858645.24,
        "MAAIZI ABDERAZZAK": 617450.32,
        "SENOUCI ALI": 802067.04,
        "OUANE ABDELKADER": 266491.72,
        "KAROUCHI SEIFELISSLAM": 248545.93
      },
      "total": 2793200.26
    }
  ],
  "product_sales_matrix": [
    {
      "produit": "ISIS HS 300 G LEMON LIMITLESS",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 8900,
          "ca": 771341.11
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 14275,
          "ca": 1250184.79
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 18400,
          "ca": 1593352.29
        },
        "OUANE ABDELKADER": {
          "qty": 8869,
          "ca": 772857.78
        },
        "SENOUCI ALI": {
          "qty": 14600,
          "ca": 1268302.0
        }
      },
      "total_qty": 65044,
      "total_ca": 5656037.97
    },
    {
      "produit": "ISIS HS 750 G LEMON LIMITLESS",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 3384,
          "ca": 693089.42
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 6480,
          "ca": 1343026.79
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 4812,
          "ca": 987326.46
        },
        "OUANE ABDELKADER": {
          "qty": 2808,
          "ca": 578738.82
        },
        "SENOUCI ALI": {
          "qty": 4752,
          "ca": 978294.24
        }
      },
      "total_qty": 22236,
      "total_ca": 4580475.74
    },
    {
      "produit": "PRIL ISIS LImited Edition 650 ML",
      "category": "Soin de la Vaisselle",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 1692,
          "ca": 298743.78
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 3612,
          "ca": 639249.14
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 2281,
          "ca": 393426.71
        },
        "OUANE ABDELKADER": {
          "qty": 1404,
          "ca": 243443.38
        },
        "SENOUCI ALI": {
          "qty": 9024,
          "ca": 1521415.68
        }
      },
      "total_qty": 18013,
      "total_ca": 3096278.7
    },
    {
      "produit": "BREF JAVEL PURE POWER 900 ML-DZ",
      "category": "Nettoyants Surfaces",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 1801,
          "ca": 162436.2
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 7332,
          "ca": 666164.18
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 5580,
          "ca": 501626.04
        },
        "OUANE ABDELKADER": {
          "qty": 2076,
          "ca": 187945.21
        },
        "SENOUCI ALI": {
          "qty": 8472,
          "ca": 734147.04
        }
      },
      "total_qty": 25261,
      "total_ca": 2252318.67
    },
    {
      "produit": "LE CHAT REGULAR 2.5 l ADV23",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 367,
          "ca": 286911.03
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 524,
          "ca": 415977.32
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 606,
          "ca": 475273.15
        },
        "OUANE ABDELKADER": {
          "qty": 516,
          "ca": 407672.73
        },
        "SENOUCI ALI": {
          "qty": 220,
          "ca": 173247.8
        }
      },
      "total_qty": 2233,
      "total_ca": 1759082.03
    },
    {
      "produit": "PRIL ISIS ULTRA POWER 1.25 L",
      "category": "Soin de la Vaisselle",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 420,
          "ca": 128903.84
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 2280,
          "ca": 697116.04
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 744,
          "ca": 220426.7
        },
        "OUANE ABDELKADER": {
          "qty": 552,
          "ca": 165767.26
        },
        "SENOUCI ALI": {
          "qty": 1080,
          "ca": 304012.8
        }
      },
      "total_qty": 5076,
      "total_ca": 1516226.63
    },
    {
      "produit": "ISIS HS 1.5 KG LEMON LIMITLESS",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 360,
          "ca": 143856.12
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 976,
          "ca": 395169.69
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 1032,
          "ca": 413062.01
        },
        "OUANE ABDELKADER": {
          "qty": 600,
          "ca": 242536.33
        },
        "SENOUCI ALI": {
          "qty": 32,
          "ca": 12947.2
        }
      },
      "total_qty": 3000,
      "total_ca": 1207571.35
    },
    {
      "produit": "PRIL ISIS ULTRA POWER 650 ML",
      "category": "Soin de la Vaisselle",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 852,
          "ca": 153918.2
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 1920,
          "ca": 348950.92
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 669,
          "ca": 119779.99
        },
        "OUANE ABDELKADER": {
          "qty": 960,
          "ca": 172164.74
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 4401,
      "total_ca": 794813.86
    },
    {
      "produit": "LE CHAT HS ROSE 750 GR",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 288,
          "ca": 64746.42
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 1644,
          "ca": 373843.41
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 792,
          "ca": 178561.82
        },
        "OUANE ABDELKADER": {
          "qty": 456,
          "ca": 103082.17
        },
        "SENOUCI ALI": {
          "qty": 120,
          "ca": 26923.2
        }
      },
      "total_qty": 3300,
      "total_ca": 747157.02
    },
    {
      "produit": "LE CHAT HS 750 GR ADV23",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 576,
          "ca": 129208.46
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 180,
          "ca": 41198.82
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 384,
          "ca": 86721.15
        },
        "OUANE ABDELKADER": {
          "qty": 669,
          "ca": 151511.9
        },
        "SENOUCI ALI": {
          "qty": 792,
          "ca": 178337.88
        }
      },
      "total_qty": 2601,
      "total_ca": 586978.22
    },
    {
      "produit": "LE CHAT REGULAR 1 L ADV23",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 389,
          "ca": 142258.15
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 520,
          "ca": 192267.74
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 240,
          "ca": 87331.31
        },
        "OUANE ABDELKADER": {
          "qty": 397,
          "ca": 146592.35
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 1546,
      "total_ca": 568449.56
    },
    {
      "produit": "LE CHAT HS 300 GR ADV23",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 1725,
          "ca": 166657.8
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 275,
          "ca": 26981.9
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 800,
          "ca": 77121.44
        },
        "OUANE ABDELKADER": {
          "qty": 1600,
          "ca": 154984.1
        },
        "SENOUCI ALI": {
          "qty": 1325,
          "ca": 129114.0
        }
      },
      "total_qty": 5725,
      "total_ca": 554859.24
    },
    {
      "produit": "PRIL ISIS ULTRA POWER 3 L",
      "category": "Soin de la Vaisselle",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 156,
          "ca": 103025.09
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 136,
          "ca": 94438.13
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 140,
          "ca": 95696.16
        },
        "OUANE ABDELKADER": {
          "qty": 160,
          "ca": 110678.45
        },
        "SENOUCI ALI": {
          "qty": 200,
          "ca": 132600.0
        }
      },
      "total_qty": 792,
      "total_ca": 536437.83
    },
    {
      "produit": "LE CHAT ROSE 2.5 L ADV23",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 130,
          "ca": 102072.44
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 132,
          "ca": 104688.82
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 189,
          "ca": 148554.59
        },
        "OUANE ABDELKADER": {
          "qty": 170,
          "ca": 134757.98
        },
        "SENOUCI ALI": {
          "qty": 20,
          "ca": 15749.8
        }
      },
      "total_qty": 641,
      "total_ca": 505823.63
    },
    {
      "produit": "BREF JAVEL REGULAR PURE POWER 1.75 L",
      "category": "Nettoyants Surfaces",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 414,
          "ca": 65693.24
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 1068,
          "ca": 171434.88
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 678,
          "ca": 107682.45
        },
        "OUANE ABDELKADER": {
          "qty": 414,
          "ca": 66120.39
        },
        "SENOUCI ALI": {
          "qty": 450,
          "ca": 67920.0
        }
      },
      "total_qty": 3024,
      "total_ca": 478850.96
    },
    {
      "produit": "PRIL ISIS Limited edition 1.25 L",
      "category": "Soin de la Vaisselle",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 168,
          "ca": 49999.73
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 540,
          "ca": 157572.8
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 408,
          "ca": 118414.34
        },
        "OUANE ABDELKADER": {
          "qty": 360,
          "ca": 105497.14
        },
        "SENOUCI ALI": {
          "qty": 60,
          "ca": 17001.6
        }
      },
      "total_qty": 1536,
      "total_ca": 448485.61
    },
    {
      "produit": "LE CHAT HS ROSE 300 GR",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 425,
          "ca": 40769.79
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 2050,
          "ca": 199157.11
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 1225,
          "ca": 118002.95
        },
        "OUANE ABDELKADER": {
          "qty": 925,
          "ca": 89146.42
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 4625,
      "total_ca": 447076.27
    },
    {
      "produit": "LE CHAT HS POUDRE 1.5 KG",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 40,
          "ca": 15879.1
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 328,
          "ca": 132567.83
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 256,
          "ca": 102064.66
        },
        "OUANE ABDELKADER": {
          "qty": 304,
          "ca": 121886.99
        },
        "SENOUCI ALI": {
          "qty": 80,
          "ca": 32368.0
        }
      },
      "total_qty": 1008,
      "total_ca": 404766.58
    },
    {
      "produit": "LE CHAT REGULAR 4 L ADV23",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 42,
          "ca": 44757.04
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 75,
          "ca": 82935.53
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 78,
          "ca": 86211.53
        },
        "OUANE ABDELKADER": {
          "qty": 144,
          "ca": 160991.92
        },
        "SENOUCI ALI": {
          "qty": 6,
          "ca": 6660.0
        }
      },
      "total_qty": 345,
      "total_ca": 381556.02
    },
    {
      "produit": "LE CHAT SDM 2.5L ADV23",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 73,
          "ca": 57483.88
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 114,
          "ca": 90365.09
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 160,
          "ca": 125750.53
        },
        "OUANE ABDELKADER": {
          "qty": 119,
          "ca": 94030.33
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 466,
      "total_ca": 367629.83
    },
    {
      "produit": "PRIL ISIS 3 L edition limitée",
      "category": "Soin de la Vaisselle",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 12,
          "ca": 8373.41
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 108,
          "ca": 76677.11
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 32,
          "ca": 22220.23
        },
        "OUANE ABDELKADER": {
          "qty": 24,
          "ca": 16830.31
        },
        "SENOUCI ALI": {
          "qty": 320,
          "ca": 212515.2
        }
      },
      "total_qty": 496,
      "total_ca": 336616.25
    },
    {
      "produit": "ISIS GOLD LS GEL 2.5 L",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 35,
          "ca": 17234.99
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 260,
          "ca": 129093.79
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 162,
          "ca": 79578.93
        },
        "OUANE ABDELKADER": {
          "qty": 120,
          "ca": 59425.22
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 577,
      "total_ca": 285332.92
    },
    {
      "produit": "LE CHAT PREMIUM RL 2.5 L",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 64,
          "ca": 61540.94
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 102,
          "ca": 99611.93
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 68,
          "ca": 65305.13
        },
        "OUANE ABDELKADER": {
          "qty": 44,
          "ca": 42513.04
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 278,
      "total_ca": 268971.03
    },
    {
      "produit": "ISIS GOLD 5 EN 1 HS 750 G",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 132,
          "ca": 26820.47
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 696,
          "ca": 144831.33
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 304,
          "ca": 62630.33
        },
        "OUANE ABDELKADER": {
          "qty": 168,
          "ca": 34609.63
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 1300,
      "total_ca": 268891.77
    },
    {
      "produit": "ISIS GOLD 5 EN 1 300 G",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 425,
          "ca": 36776.06
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 900,
          "ca": 79489.16
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 975,
          "ca": 84674.89
        },
        "OUANE ABDELKADER": {
          "qty": 425,
          "ca": 36970.37
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 2725,
      "total_ca": 237910.48
    },
    {
      "produit": "ISIS LS BAG 2.5 KG LEMON",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 8,
          "ca": 5546.02
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 108,
          "ca": 76067.08
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 124,
          "ca": 86845.72
        },
        "OUANE ABDELKADER": {
          "qty": 60,
          "ca": 42059.86
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 300,
      "total_ca": 210518.68
    },
    {
      "produit": "LE CHAT 2.5 KG BAG ADV23",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 12,
          "ca": 9159.97
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 92,
          "ca": 71015.78
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 76,
          "ca": 58545.3
        },
        "OUANE ABDELKADER": {
          "qty": 86,
          "ca": 66174.74
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 266,
      "total_ca": 204895.79
    },
    {
      "produit": "ISIS GOLD LAVENDER-DZ (B/L) - 2.5 L",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 21,
          "ca": 10411.22
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 96,
          "ca": 47491.56
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 116,
          "ca": 56983.07
        },
        "OUANE ABDELKADER": {
          "qty": 96,
          "ca": 47599.03
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 329,
      "total_ca": 162484.88
    },
    {
      "produit": "NETTOYANT MOUSSANT JAVELISE 900 ML",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 156,
          "ca": 20050.0
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 468,
          "ca": 60738.58
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 72,
          "ca": 9236.84
        },
        "OUANE ABDELKADER": {
          "qty": 204,
          "ca": 26403.81
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 900,
      "total_ca": 116429.24
    },
    {
      "produit": "ISIS BOUQUET JASMIN 950 ML",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 102,
          "ca": 17811.08
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 222,
          "ca": 38876.35
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 168,
          "ca": 29230.83
        },
        "OUANE ABDELKADER": {
          "qty": 84,
          "ca": 14684.73
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 576,
      "total_ca": 100602.98
    },
    {
      "produit": "PRIL ISIS ANTIBACTERIEN 650 ML LEMON",
      "category": "Soin de la Vaisselle",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 156,
          "ca": 27856.98
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 192,
          "ca": 34359.38
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 120,
          "ca": 20995.5
        },
        "OUANE ABDELKADER": {
          "qty": 72,
          "ca": 12554.42
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 540,
      "total_ca": 95766.28
    },
    {
      "produit": "ISIS BOUQUET LAVANDE 950 ML",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 133,
          "ca": 22706.84
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 198,
          "ca": 34361.62
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 92,
          "ca": 16009.26
        },
        "OUANE ABDELKADER": {
          "qty": 101,
          "ca": 17667.21
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 524,
      "total_ca": 90744.93
    },
    {
      "produit": "ISIS BOUQUET ROSE 950 ML",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 72,
          "ca": 12641.29
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 168,
          "ca": 29096.99
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 140,
          "ca": 24398.16
        },
        "OUANE ABDELKADER": {
          "qty": 60,
          "ca": 10476.55
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 440,
      "total_ca": 76612.98
    },
    {
      "produit": "ISIS GOLD HDLD LAVENDER-DZ 1 L",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 10,
          "ca": 2554.39
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 75,
          "ca": 19234.39
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 79,
          "ca": 20116.9
        },
        "OUANE ABDELKADER": {
          "qty": 99,
          "ca": 25421.9
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 263,
      "total_ca": 67327.58
    },
    {
      "produit": "BREF MOUSSANT 1.75 L",
      "category": "Nettoyants Surfaces",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 18,
          "ca": 4127.81
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 90,
          "ca": 21046.18
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 12,
          "ca": 2767.09
        },
        "OUANE ABDELKADER": {
          "qty": 36,
          "ca": 8373.34
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 156,
      "total_ca": 36314.43
    },
    {
      "produit": "BREF TRIGGER MULTI-SURFACE 490 ML",
      "category": "Nettoyants Surfaces",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 72,
          "ca": 16288.68
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 0,
          "ca": 0.0
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 24,
          "ca": 5374.73
        },
        "OUANE ABDELKADER": {
          "qty": 18,
          "ca": 4052.78
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 114,
      "total_ca": 25716.2
    },
    {
      "produit": "Pril ISIS 1.25L antibac edition limitée",
      "category": "Soin de la Vaisselle",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 24,
          "ca": 7024.78
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 36,
          "ca": 10505.51
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 0,
          "ca": 0.0
        },
        "OUANE ABDELKADER": {
          "qty": 12,
          "ca": 3538.7
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 72,
      "total_ca": 21068.99
    },
    {
      "produit": "PRIL ISIS ANTIBACTERIEN 650 ML edition limitée",
      "category": "Soin de la Vaisselle",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 36,
          "ca": 6316.5
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 48,
          "ca": 8274.04
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 12,
          "ca": 2056.23
        },
        "OUANE ABDELKADER": {
          "qty": 12,
          "ca": 2083.26
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 108,
      "total_ca": 18730.04
    },
    {
      "produit": "LE CHAT HS GEL 1 L ADV23",
      "category": "Soin du Linge",
      "sales": {
        "KAROUCHI SEIFELISSLAM": {
          "qty": 0,
          "ca": 0.0
        },
        "KHALIFA ABDERAHMANE": {
          "qty": 4,
          "ca": 1324.0
        },
        "MAAIZI ABDERAZZAK": {
          "qty": 0,
          "ca": 0.0
        },
        "OUANE ABDELKADER": {
          "qty": 4,
          "ca": 1324.0
        },
        "SENOUCI ALI": {
          "qty": 0,
          "ca": 0.0
        }
      },
      "total_qty": 8,
      "total_ca": 2648.0
    }
  ]
};;;;;;;;;;;;;;;;;;;;;;;;

// ==========================================
// 2. SIMULATORS FOR HISTORICAL GRAPHS
// ==========================================

// ==========================================
// BILINGUAL TRANSLATION HELPERS (FR / AR)
// ==========================================
const translateName = (name, lang) => {
  return name;
};

const translateProduct = (designation, lang) => {
  if (!designation) return '';
  if (lang !== 'ar') return designation;
  
  let name = designation.replace(/\u00e9/g, 'e').replace(/l\u00efmit\u00e9e/g, 'limitee');
  
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
};;;;;;;;;;

const translateVerdict = (verdict, lang) => {
  if (lang !== 'ar') return verdict;
  const verdicts = {
    "CA correct, vigilance accrue sur le recouvrement": "رقم أعمال ممتاز، لكن اليقظة مطلوبة بشأن التحصيل",
    "Modèle de référence (zéro impayé)": "نموذج مرجعي مثالي (لا يوجد ديون)",
    "Excellent équilibre volume/recouvrement": "توازن ممتاز بين حجم المبيعات ونسبة التحصيل",
    "CRITIQUE - Problème majeur de recouvrement!": "حرج - مشكلة حادة جداً في التحصيل المالي الميداني!",
    "Performance stable, recouvrement solide": "أداء مستقر وتحصيل مالي قوي",
    "Performance stable, suivi régulier": "أداء مستقر ومتابعة دورية",
    "Seuil d'impayé franchi!": "تجاوز الحد الأقصى للديون المسموح بها!",
    "Modèle de référence absolue (zéro impayé)": "نموذج مرجعي مطلق (تحصيل مالي كامل)",
    "Top CA / Recouv. Faible (Encours critique: 6.81M DA!)": "أعلى ر.أ / تحصيل ضعيف (الديون القائمة حرجة: 6.81M د.ج!)",
    "Bon / Vigilance (Encours à apurer)": "جيد / وجوب المتابعة (الديون بحاجة للتصفية)",
    "Très Bon (Équilibre volume/recouvrement parfait)": "ممتاز جداً (توازن مثالي بين المبيعات والتحصيل)",
    "Bon / Vigilance (Suivi des relances régulier)": "جيد / يقظة (متابعة الإشعارات المنتظمة)",
    "Performance stable": "أداء مستقر ومتوازن",
    "Bon / Vigilance": "جيد / يقظة ومتابعة",
    "Volume modeste (Zéro impayé)": "مبيعات متواضعة (تحصيل مالي كامل)",
    "CATASTROPHIQUE (Blocage immédiat requis!)": "كارثي ومقلق للغاية (تجميد فوري للحساب مطلوب!)"
  };
  return verdicts[verdict] || verdict;
};

const generateDailySales = (totalSales, seedVal) => {
  const days = 31;
  const data = [];
  let currentSum = 0;
  for (let i = 1; i <= days; i++) {
    const date = `${i < 10 ? '0' : ''}${i}/05`;
    const wave = Math.sin(i * 0.5 + seedVal) * 0.4 + 1.0;
    const dayOfWeek = (i + 5) % 7; 
    let factor = 1.0;
    if (dayOfWeek === 6) { // Friday (Algeria weekend / low sales)
      factor = 0.05;
    } else if (dayOfWeek === 0) { // Saturday (lower sales)
      factor = 0.6;
    } else { // Weekdays (higher sales)
      factor = 1.2 + Math.cos(i * 1.7) * 0.2;
    }
    const val = wave * factor;
    data.push({
      date,
      sales_ht: val,
      volume: Math.round(val * 45)
    });
    currentSum += val;
  }
  return data.map(d => ({
    ...d,
    sales_ht: Math.round((d.sales_ht / currentSum) * totalSales * 100) / 100,
    volume: Math.round((d.volume / currentSum) * (totalSales / 180))
  }));
};

const generateProductBreakdown = (selectedPrevName, lang) => {
  if (!DATASET.brand_sales) return [];
  return DATASET.brand_sales.map(r => {
    const name = lang === 'ar' ? r.category_ar : r.category;
    const value = r.sales[selectedPrevName] || 0;
    return { name, value };
  });
};

const CHART_COLORS = ['#E11D48', '#F59E0B', '#B91C1C', '#D97706', '#F43F5E', '#FBBF24', '#9F1239', '#FCD34D'];

const MATRIX_AGENTS = ["KHALIFA ABDERAHMANE", "MAAIZI ABDERAZZAK", "SENOUCI ALI", "OUANE ABDELKADER", "KAROUCHI SEIFELISSLAM"];

const REGIONAL_MATRIX = [
  {
    "zone": "TIARET",
    "zone_ar": "تيارت",
    "sales": {
      "KHALIFA ABDERAHMANE": 0.0,
      "MAAIZI ABDERAZZAK": 0.0,
      "SENOUCI ALI": 3306375.92,
      "OUANE ABDELKADER": 4683169.3,
      "KAROUCHI SEIFELISSLAM": 3934992.28
    },
    "total": 11924537.5
  },
  {
    "zone": "TISSEMSILT",
    "zone_ar": "تسمسيلت",
    "sales": {
      "KHALIFA ABDERAHMANE": 3649467.72,
      "MAAIZI ABDERAZZAK": 0.0,
      "SENOUCI ALI": 380155.72,
      "OUANE ABDELKADER": 0.0,
      "KAROUCHI SEIFELISSLAM": 0.0
    },
    "total": 4029623.44
  },
  {
    "zone": "CHELALA",
    "zone_ar": "شلالة",
    "sales": {
      "KHALIFA ABDERAHMANE": 1842350.68,
      "MAAIZI ABDERAZZAK": 0.0,
      "SENOUCI ALI": 929364.58,
      "OUANE ABDELKADER": 0.0,
      "KAROUCHI SEIFELISSLAM": 0.0
    },
    "total": 2771715.26
  },
  {
    "zone": "SOUGEUR",
    "zone_ar": "SOUGEUR",
    "sales": {
      "KHALIFA ABDERAHMANE": 0.0,
      "MAAIZI ABDERAZZAK": 1716323.55,
      "SENOUCI ALI": 506320.66,
      "OUANE ABDELKADER": 0.0,
      "KAROUCHI SEIFELISSLAM": 0.0
    },
    "total": 2222644.21
  },
  {
    "zone": "AIN DEHAB",
    "zone_ar": "عين الذهب",
    "sales": {
      "KHALIFA ABDERAHMANE": 0.0,
      "MAAIZI ABDERAZZAK": 1711557.58,
      "SENOUCI ALI": 0.0,
      "OUANE ABDELKADER": 0.0,
      "KAROUCHI SEIFELISSLAM": 0.0
    },
    "total": 1711557.58
  },
  {
    "zone": "THINIA",
    "zone_ar": "الثنية",
    "sales": {
      "KHALIFA ABDERAHMANE": 1520386.01,
      "MAAIZI ABDERAZZAK": 0.0,
      "SENOUCI ALI": 0.0,
      "OUANE ABDELKADER": 0.0,
      "KAROUCHI SEIFELISSLAM": 0.0
    },
    "total": 1520386.01
  },
  {
    "zone": "LARJAM",
    "zone_ar": "لرجام",
    "sales": {
      "KHALIFA ABDERAHMANE": 1393181.28,
      "MAAIZI ABDERAZZAK": 0.0,
      "SENOUCI ALI": 0.0,
      "OUANE ABDELKADER": 0.0,
      "KAROUCHI SEIFELISSLAM": 0.0
    },
    "total": 1393181.28
  },
  {
    "zone": "MAHDIA",
    "zone_ar": "مهدية",
    "sales": {
      "KHALIFA ABDERAHMANE": 0.0,
      "MAAIZI ABDERAZZAK": 1366912.03,
      "SENOUCI ALI": 0.0,
      "OUANE ABDELKADER": 0.0,
      "KAROUCHI SEIFELISSLAM": 0.0
    },
    "total": 1366912.03
  },
  {
    "zone": "KARMAS",
    "zone_ar": "كارماس",
    "sales": {
      "KHALIFA ABDERAHMANE": 0.0,
      "MAAIZI ABDERAZZAK": 957258.02,
      "SENOUCI ALI": 0.0,
      "OUANE ABDELKADER": 0.0,
      "KAROUCHI SEIFELISSLAM": 0.0
    },
    "total": 957258.02
  },
  {
    "zone": "FRANDA",
    "zone_ar": "فرندة",
    "sales": {
      "KHALIFA ABDERAHMANE": 0.0,
      "MAAIZI ABDERAZZAK": 931304.26,
      "SENOUCI ALI": 0.0,
      "OUANE ABDELKADER": 0.0,
      "KAROUCHI SEIFELISSLAM": 0.0
    },
    "total": 931304.26
  },
  {
    "zone": "TAKHMARET / FRANDA",
    "zone_ar": "فرندة + تخمرت",
    "sales": {
      "KHALIFA ABDERAHMANE": 0.0,
      "MAAIZI ABDERAZZAK": 0.0,
      "SENOUCI ALI": 689339.56,
      "OUANE ABDELKADER": 0.0,
      "KAROUCHI SEIFELISSLAM": 0.0
    },
    "total": 689339.56
  }
];;;;;;;;;;;;;;;;;;;;;;;;










// ==========================================================
// TRANSLATION ENGINE & DICTIONARY
// ==========================================
const TRANSLATIONS = {
  henkel_title: { fr: "HENKEL ERP", ar: "هينكل إي أر بي" },
  dashboard_executive: { fr: "Rapports de Performance & Décisionnels", ar: "لوحة القيادة والمتابعة القرارية" },
  dashboard_subtitle: { fr: "Suivi Stratégique & Ratios Opérationnels • Mai 2026", ar: "التحليل المالي ورقابة نسب التحصيل • ماي 2026" },
  campaign_terrain: { fr: "Missions Terrain HENKEL (29.82M DA)", ar: "نشاط الميدان (29.82 م د.ج)" },
  campaign_global_initial: { fr: "CA HT Brut HENKEL", ar: "الرصيد الإجمالي الخام (29.82M)" },
  campaign_supervision: { fr: "Supervision Critique (Audité)", ar: "التدقيق المالي والإشراف الحرج" },
  month_may: { fr: "Mai 2026", ar: "ماي 2026" },
  tab_global: { fr: "Vue Synthétique", ar: "العرض التحليلي العام" },
  tab_prevendeurs: { fr: "Profils Commerciaux", ar: "تفاصيل أداء الوكلاء" },
  tab_explorer: { fr: "Catalogue & Clients", ar: "دليل المنتجات والزبائن" },
  tab_documents: { fr: "Rapports Officiels PDF", ar: "مجلد وثائق الـ PDF" },
  tab_matrix: { fr: "Matrice Régionale", ar: "جدول مقارنة المناطق" },
  tab_product_sales: { fr: "Ventes par Produit", ar: "مبيعات المنتجات" },
  matrix_title: { fr: "Matrice Comparative des Ventes par Zone", ar: "مصفوفة مقارنة المبيعات حسب المناطق" },
  matrix_subtitle: { fr: "Analyse croisée de la répartition géographique du CA HT (en DA) par prévendeur", ar: "تحليل متقاطع للتوزيع الجغرافي لرقم الأعمال الصافي (د.ج) لكل وكيل تجاري" },
  zone_header: { fr: "Zone / Secteur", ar: "المنطقة / القطاع" },
  total_zone_label: { fr: "Total Zone", ar: "إجمالي المنطقة" },
  market_share_view: { fr: "Part de Marché (%)", ar: "حصة السوق (%)" },
  currency_view: { fr: "Valeur en DA", ar: "القيمة بالد.ج" },
  matrix_insights: { fr: "Révélations & Insights Régionaux", ar: "التحليلات والرؤى الإقليمية" },
  matrix_insight_1: { fr: "Tiaret est le secteur économique HENKEL numéro 1 (11.92M DA soit 40.4% du segment HENKEL), géré par plusieurs agents.", ar: "تيارت هي قطاع هينكل الأول (11.92 مليون د.ج أو 40.4٪ من مبيعات هينكل)." },
  matrix_insight_2: { fr: "Khalifa Abderahmane concentre plus de 28.48% du chiffre d'affaires total du segment HENKEL avec 8.41M DA HT.", ar: "يستحوذ Khalifa Abderahmane على أكثر من 28.48٪ من إجمالي رقم أعمال قطاع هينكل بقيمة 8.41 مليون د.ج خ.ر." },
  matrix_insight_3: { fr: "MAAIZI ABDERAZZAK réalise un score commercial remarquable avec 6.68M DA et 98.50% de recouvrement (100k DA d'impayés).", ar: "يحقق الوكيل معيزي أداءً تجاريًا بارزًا بـ 6.68 مليون د.ج و 100 ألف د.ج فقط كديون معلقة (98.50٪ تحصيل)." },
  matrix_insight_4: { fr: "OUANE ABDELKADER réalise une performance de référence absolue avec un taux parfait de 100.00% (0 DA d'impayé sur 4.68M DA).", ar: "يحقق الوكيل عوان أداءً مرجعيًا مثاليًا بمعدل سداد كامل 100.00٪ (0 د.ج ديون على 4.68 مليون د.ج)." },
  agent_label: { fr: "Agent Audité :", ar: "الوكيل التجاري :" },
  data_display_for: { fr: "Période Analysée pour :", ar: "عرض البيانات الخاصة بـ :" },
  active_badge: { fr: "Consolidé", ar: "مدقق وموثق" },
  ca_erp_label: { fr: "Chiffre d'Affaires Brut Global (HT)", ar: "رقم الأعمال الإجمالي (خ.ر)" },
  ca_campaign_label: { fr: "Chiffre d'Affaires Campagne (HT)", ar: "رقم الأعمال الصافي (خ.ر)" },
  outstanding_receivables: { fr: "Créances Douteuses / Impayés", ar: "الديون العالقة غير المحصلة" },
  recovery_rate_label: { fr: "Taux d'Apurement des Créances", ar: "معدل استرداد الديون" },
  active_pdv: { fr: "Points de Vente Actifs :", ar: "الزبائن النشطون :" },
  volume_distributed: { fr: "Volume Physique Distribué", ar: "إجمالي الحجم الموزع" },
  cases_sold: { fr: "Colis / Cartons distribués", ar: "الصناديق المباعة" },
  basket_label: { fr: "Panier Moyen Facturé (HT)", ar: "متوسط سلة المبيعات (خ.ر)" },
  revenue_case_label: { fr: "Revenu Net Moyen par Carton", ar: "متوسط الدخل لكل صندوق" },
  daily_evolution: { fr: "Évolution Quotidienne des Ventes (HT)", ar: "التطور اليومي للمبيعات" },
  market_share_label: { fr: "Part de Marché des Commerciaux", ar: "حصة السوق للوكلاء" },
  total_sales_label: { fr: "Total Ventes", ar: "إجمالي المبيعات" },
  financial_risk_mitigation: { fr: "Système de Mitigation des Risques Financiers", ar: "نظام التخفيف من المخاطر المالية" },
  alert_outstanding: { fr: "Alerte Encours :", ar: "تنبيه الديون القائمة :" },
  financial_risk_desc: { fr: "Les comptes prévendeurs suivants présentent des recouvrements inférieurs au seuil critique de 90%.", ar: "حسابات البائعين التالية تسجل نسبة تحصيل أقل من الحد الحرج 90%." },
  action_plan_label: { fr: "Plan d'Action Opérationnel", ar: "خطة العمل التشغيلية الميدانية" },
  audit_clinique_label: { fr: "Fiches d'Audit Clinique des Prévendeurs", ar: "بطاقات التدقيق التفصيلي للبائعين" },
  rank_performance_label: { fr: "Classement des Performances Vendeurs", ar: "ترتيب كفاءة وأداء البائعين" },
  top_national_clients: { fr: "Top 10 Clients HENKEL", ar: "أفضل 10 زبائن لـ HENKEL" },
  search_placeholder_product: { fr: "Filtrer par désignation...", ar: "تصفية حسب اسم المنتج..." },
  search_placeholder_client: { fr: "Rechercher code / nom...", ar: "بحث عن الكود أو الاسم..." },
  product_catalog_label: { fr: "Catalogue & Performance des Produits", ar: "دليل المنتجات وأداء المبيعات" },
  client_accounts_label: { fr: "Registre des Comptes Clients", ar: "سجل حسابات الزبائن" },
  reports_list_label: { fr: "Rapports Commerciaux (PDF)", ar: "التقارير التجارية الرسمية (PDF)" },
  reports_desc: { fr: "Sélectionnez un document d'analyse généré dans le dossier output pour l'ouvrir, le télécharger ou l'analyser directement dans la liseuse intégrée à droite.", ar: "اختر وثيقة تحليلية من المجلد لرؤيتها أو تحميلها أو مراجعتها مباشرة في القارئ المدمج على اليمين." },
  pdf_viewer_label: { fr: "Liseuse de Rapport Intégrée", ar: "قارئ التقارير المدمج تفاعلياً" },
  active_viewing: { fr: "Affichage en cours :", ar: "العرض الحالي للوثيقة :" },
  new_tab_label: { fr: "Nouvel Onglet", ar: "نافذة جديدة" },
  download_label: { fr: "Télécharger", ar: "تحميل" },
  pivot_regional_label: { fr: "Tableau Croisé Régional des Ventes Croisées (CA HT)", ar: "الجدول المتقاطع الإقليمي للمبيعات المشتركة" },
  pivot_extracted_badge: { fr: "Matrice PDF Extraite", ar: "مصفوفة الـ PDF المستخرجة" },
  pivot_best_sellers_label: { fr: "Registre des Produits Phares par Prévendeur", ar: "سجل المنتجات الرئيسية والأكثر مبيعاً لكل وكيل" },
  performance_micro_label: { fr: "Performance Micro-Détail : Articles de Référence", ar: "الأداء التفصيلي المجهري: السلع المرجعية" },
  micro_article: { fr: "Article Spécifique", ar: "المنتج المحدد" },
  micro_volume: { fr: "Volume Distribué (Estimé)", ar: "الحجم الموزع (التقديري)" },
  micro_value: { fr: "Valeur Estimée HT", ar: "القيمة التقديرية (خ.ر)" },
  micro_contribution: { fr: "Contribution CA Agent", ar: "نسبة مساهمة المنتج في ر.أ للوكيل" },
  supervision_title: { fr: "Supervision Exécutive : Rotation & Recommandations", ar: "الإشراف التنفيذي: مزيج المنتجات، الدوران والتوصيات الاستراتيجية" },
  supervision_desc: { fr: "Analyse critique des rotations de stock, alertes de concentration commerciale et feuille de route financière.", ar: "ملخص دقيق لمعدلات الدوران، تنبيهات تركيز المبيعات وخارطة طريق تسوية الديون." },
  supervision_alerts_col: { fr: "1. Alertes de Supervision", ar: "1. تنبيهات الإشراف" },
  supervision_rotation_col: { fr: "2. Rotation des Produits", ar: "2. تحليل دوران المنتجات" },
  supervision_recs_col: { fr: "3. Recommandations Stratégiques", ar: "3. التوصيات الاستراتيجية" },
  supervision_high_rotation: { fr: "Haute Rotation (Top Moving SKUs) :", ar: "دوران سريع وقوي (الأكثر مبيناً) :" },
  supervision_low_rotation: { fr: "Basse Rotation (Stock Dormant) :", ar: "دوران بطيء (السلع الراكدة والمخازن الميتة) :" },
  ranking: { fr: "Rang", ar: "الرتبة" },
  representative: { fr: "Commercial", ar: "الوكيل التجاري" },
  invoices_label: { fr: "Factures (BL)", ar: "الفواتير (BL)" },
  volume_units: { fr: "Volume (Unités)", ar: "الحجم (الوحدات)" },
  ca_net: { fr: "Chiffre d'Affaires HT", ar: "رقم الأعمال (خ.ر)" },
  recovery: { fr: "Recouvrement", ar: "التحصيل المالي" },
  outstanding_amount: { fr: "Reste (Impayés)", ar: "الديون المتبقية" },
  verdict_label: { fr: "Verdict", ar: "التقييم والقرار" },
  medal_top_ca: { fr: "Top CA / Recouv. Faible", ar: "أعلى ر.أ / تحصيل ضعيف" },
  medal_vigilance: { fr: "Bon / Vigilance", ar: "جيد / للمتابعة واليقظة" },
  medal_success: { fr: "Très Bon", ar: "ممتاز متوازن" },
  medal_stable: { fr: "Stable", ar: "مستقر" },
  medal_low_vol: { fr: "Petit Volume", ar: "حجم مبيعات متواضع" },
  medal_catastrophe: { fr: "CATASTROPHIQUE", ar: "كارثي ومقلق جداً" },
  footer_text: { fr: "© 2026 HENKEL ERP System. Tous droits réservés.", ar: "© 2026 نظام هينكل ERP. جميع الحقوق محفوظة." },
  footer_version: { fr: "Version React + Tailwind + Recharts", ar: "نسخة React + Tailwind + Recharts مطورة" },
  footer_localized: { fr: "Algérie Dinars (DA) Localized Layout", ar: "تنسيق مخصص بالدينار الجزائري (د.ج)" },
  client_code: { fr: "Code", ar: "كود العميل" },
  client_name: { fr: "Intitulé Client", ar: "اسم الزبون" },
  client_purchases: { fr: "Achats Globaux HT", ar: "إجمالي المشتريات (خ.ر)" },
  deliveries: { fr: "Nbr Factures", ar: "عدد الفواتير" },
  designation: { fr: "Désignation", ar: "اسم المنتج" },
  volume_units_simple: { fr: "Volume (Unités)", ar: "الحجم (بالوحدة)" },
  ca_net_simple: { fr: "CA Net (HT)", ar: "رقم الأعمال الصافي" },
  risk_verdict_badge: { fr: "Alerte", ar: "تنبيه خطر" },
  risk_threshold_desc: { fr: "Sous le seuil d'alerte (90%)", ar: "أقل من حد الأمان (90%)" },
  risk_threshold_ok: { fr: "{lang === 'ar' ? 'مستوى سداد ممتاز ومثالي' : `Excellent niveau d'apurement`}", ar: "مستوى تحصيل ممتاز" },
  risk_symptoms: { fr: "Constat :", ar: "الوضعية العالقة :" },
  risk_causes: { fr: "Causes :", ar: "الأسباب التشخيصية :" },
  risk_actions: { fr: "Actions Immédiates :", ar: "الإجراءات الفورية المتخذة :" }
};
const VERDICTS_TR = {
  "CA correct, vigilance accrue sur le recouvrement": {
    fr: "CA correct, vigilance accrue sur le recouvrement",
    ar: "رقم أعمال ممتاز، لكن اليقظة مطلوبة بشأن التحصيل"
  },
  "Modèle de référence (zéro impayé)": {
    fr: "Modèle de référence (zéro impayé)",
    ar: "نموذج مرجعي مثالي (لا يوجد ديون)"
  },
  "Excellent équilibre volume/recouvrement": {
    fr: "Excellent équilibre volume/recouvrement",
    ar: "توازن ممتاز بين حجم المبيعات ونسبة التحصيل"
  },
  "CRITIQUE - Problème majeur de recouvrement!": {
    fr: "CRITIQUE - Problème majeur de recouvrement!",
    ar: "حرج - مشكلة حادة جداً في التحصيل المالي الميداني!"
  },
  "Performance stable, recouvrement solide": {
    fr: "Performance stable, recouvrement solide",
    ar: "أداء مستقر وتحصيل مالي قوي"
  },
  "Performance stable, suivi régulier": {
    fr: "Performance stable, suivi régulier",
    ar: "أداء مستقر ومتابعة دورية"
  },
  "Seuil d'impayé franchi!": {
    fr: "Seuil d'impayé franchi!",
    ar: "تجاوز الحد الأقصى للديون المسموح بها!"
  },
  "Modèle de référence absolue (zéro impayé)": {
    fr: "Modèle de référence absolue (zéro impayé)",
    ar: "نموذج مرجعي مطلق (تحصيل مالي كامل)"
  },
    "Top CA / Recouv. Faible (Encours critique: 6.81M DA!)": {
      fr: "Top CA / Recouv. Faible (Encours critique: 6.81M DA!)",
      ar: "أعلى ر.أ / تحصيل ضعيف (الديون القائمة حرجة: 6.81M د.ج!)"
    },
  "Bon / Vigilance (Encours à apurer)": {
    fr: "Bon / Vigilance (Encours à apurer)",
    ar: "جيد / وجوب المتابعة (الديون بحاجة للتصفية)"
  },
  "Très Bon (Équilibre volume/recouvrement parfait)": {
    fr: "Très Bon (Équilibre volume/recouvrement parfait)",
    ar: "ممتاز جداً (توازن مثالي بين المبيعات والتحصيل)"
  },
  "Bon / Vigilance (Suivi des relances régulier)": {
    fr: "Bon / Vigilance (Suivi des relances régulier)",
    ar: "جيد / يقظة (متابعة الإشعارات المنتظمة)"
  },
  "Performance stable": {
    fr: "Performance stable",
    ar: "أداء مستقر ومتوازن"
  },
  "Bon / Vigilance": {
    fr: "Bon / Vigilance",
    ar: "جيد / يقظة ومتابعة"
  },
  "Volume modeste (Zéro impayé)": {
    fr: "Volume modeste (Zéro impayé)",
    ar: "مبيعات متواضعة (تحصيل مالي كامل)"
  },
  "CATASTROPHIQUE (Blocage immédiat requis!)": {
    fr: "CATASTROPHIQUE (Blocage immédiat requis!)",
    ar: "كارثي ومقلق للغاية (تجميد فوري للحساب مطلوب!)"
  }
};

const CHECKLIST_TR = {
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
};

export default function App() {
  const [activeTab, setActiveTab] = useState('global');
  const [lang, setLang] = useState('fr'); // 'fr' or 'ar'
  const t = (key) => TRANSLATIONS[key]?.[lang] || key;
  const alignStart = lang === 'ar' ? 'text-right' : 'text-left';
  const alignEnd = lang === 'ar' ? 'text-left' : 'text-right';
  const [campaignMode, setCampaignMode] = useState('global_erp'); // 'global_erp' or 'supervision_erp'
  const [selectedPrevName, setSelectedPrevName] = useState('KHALIFA ABDERAHMANE');
  const [matrixView, setMatrixView] = useState('value'); // 'value' or 'percentage'
  const [clientSearch, setClientSearch] = useState('');
  const [productSearch, setProductSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // New state variables for Product-Seller sales matrix tab
  const [prodSalesSearch, setProdSalesSearch] = useState('');
  const [prodSalesCat, setProdSalesCat] = useState('all');
  const [prodSalesView, setProdSalesView] = useState('value'); // 'value' or 'volume'

  // Filtered Product Sales Matrix (interactive grid)
  const filteredProductSalesMatrix = useMemo(() => {
    if (!DATASET.product_sales_matrix) return [];
    const query = prodSalesSearch.toLowerCase().trim();
    return DATASET.product_sales_matrix.filter(item => {
      const matchSearch = item.produit.toLowerCase().includes(query);
      const matchCat = prodSalesCat === 'all' || item.category === prodSalesCat;
      return matchSearch && matchCat;
    });
  }, [prodSalesSearch, prodSalesCat]);
  
  // Document state
  const [selectedDocId, setSelectedDocId] = useState('supervision-final');

  // Interactive Checklist states (Saved in state for full interaction!)
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Audit SENOUCI ALI: détail exhaustif des impayés grossistes", category: "urgent", completed: false },
    { id: 2, text: "Accompagner KHALIFA ABDERAHMANE sur le terrain (recouvrement de 89.50%)", category: "urgent", completed: false },
    { id: 3, text: "Féliciter OUANE ABDELKADER pour son score parfait de 100.00%", category: "urgent", completed: true },
    { id: 4, text: "Instaurer un plafond d'encours strict de 1 000 000 DA pour Khalifa", category: "short", completed: false },
    { id: 5, text: "Généraliser la règle du paiement immédiat d'Ouane au comptant", category: "short", completed: false }
  ]);

  // Apply dark mode styling to document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Get active campaign data
  const campaignData = useMemo(() => {
    return DATASET[campaignMode];
  }, [campaignMode]);

  // Format Helper: 30 217 458,20 DA
  const formatDA = (val) => {
    if (val === undefined || val === null) return '0,00 DA';
    const formatted = new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(val);
    return `${formatted} DA`;
  };

  const formatQty = (val) => {
    return new Intl.NumberFormat('fr-FR').format(Math.round(val));
  };

  // Selected Pre-sales Representative Record
  const selectedPrev = useMemo(() => {
    return campaignData.preSales.find(p => p.name === selectedPrevName) || campaignData.preSales[0];
  }, [selectedPrevName, campaignData]);

  // Handle dropdown sync when toggling campaign
  useEffect(() => {
    const availableNames = campaignData.preSales.map(p => p.name);
    if (!availableNames.includes(selectedPrevName)) {
      setSelectedPrevName(availableNames[0]);
    }
  }, [campaignData, selectedPrevName]);

  // Reset active tab to global if switching to supervision campaign and on restricted tabs
  useEffect(() => {
    if (campaignMode === 'supervision_erp' && (activeTab === 'prevendeurs' || activeTab === 'explorer' || activeTab === 'matrix')) {
      setActiveTab('global');
    }
  }, [campaignMode, activeTab]);

  // Pre-sales real daily sales
  const prevDailySales = useMemo(() => {
    return selectedPrev.daily_sales || [];
  }, [selectedPrev]);

  // Pre-sales product distribution data
  const prevProductData = useMemo(() => {
    return generateProductBreakdown(selectedPrev.name, lang);
  }, [selectedPrev, lang]);

  // Campaign Cumulative Daily Sales
  const globalDailySales = useMemo(() => {
    return campaignData.daily_sales || [];
  }, [campaignData]);

  // Filtered Clients (Explorer)
  const filteredClients = useMemo(() => {
    const query = clientSearch.toLowerCase().trim();
    if (!query) return DATASET.clients;
    return DATASET.clients.filter(c => 
      c.name.toLowerCase().includes(query) || 
      c.code.toLowerCase().includes(query)
    );
  }, [clientSearch]);

  // Filtered Products (Explorer)
  const filteredProducts = useMemo(() => {
    const query = productSearch.toLowerCase().trim();
    if (!query) return DATASET.products;
    return DATASET.products.filter(p => 
      p.designation.toLowerCase().includes(query)
    );
  }, [productSearch]);

  // Selected PDF Document Object
  const selectedDoc = useMemo(() => {
    return DATASET.documents.find(d => d.id === selectedDocId) || DATASET.documents[0];
  }, [selectedDocId]);

  // Toggle checklist completed
  const handleToggleCheck = (id) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  // Checklist statistics
  const checkProgress = useMemo(() => {
    const total = checklist.length;
    const completed = checklist.filter(c => c.completed).length;
    return {
      total,
      completed,
      pct: Math.round((completed / total) * 100)
    };
  }, [checklist]);

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col transition-colors duration-300 bg-gradient-to-br from-[#FFFDF0] to-[#FEF08A]/40 dark:from-[#18130B] dark:to-[#0A0805] text-slate-800 dark:text-slate-100 font-sans" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      
      {/* ==========================================
          HEADER / TOP NAVIGATION BAR
          ========================================== */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-[#0B0F19]/85 backdrop-blur-md">
        <div className="max-w-[1550px] mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-rose-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-rose-600/30 animate-pulse-subtle">
              J
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{t('henkel_title')}</h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300">
                  {t('dashboard_executive')}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t('dashboard_subtitle')}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between md:justify-end gap-3">
            
            {/* ACTIVE CAMPAIGN MODE TOGGLE BUTTONS */}
            <div className="flex p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50">
              <button
                onClick={() => setCampaignMode('global_erp')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 ${
                  campaignMode === 'global_erp'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>{t('campaign_global_initial')}</span>
              </button>
              <button
                onClick={() => setCampaignMode('supervision_erp')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 ${
                  campaignMode === 'supervision_erp'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>{t('campaign_supervision')}</span>
              </button>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-xs font-medium text-slate-600 dark:text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-rose-500" />
              <span>{t('month_may')}</span>
            </div>

            <button 
              onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
              className="px-3 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md shadow-rose-600/10 cursor-pointer"
              aria-label="Toggle language"
            >
              <span>{lang === 'fr' ? 'Français' : 'العربية'}</span>
            </button>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all border border-transparent dark:border-slate-700/50 cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-rose-600" />}
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================
          SUB-NAV TABS & SEGMENT SELECTOR
          ========================================== */}
      <div className="max-w-[1550px] w-full mx-auto px-4 md:px-6 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex overflow-x-auto whitespace-nowrap max-w-full p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900/60 border border-slate-300/40 dark:border-slate-800 no-scrollbar">
          {[
            { id: 'global', label: t('tab_global'), icon: Layers },
            { id: 'prevendeurs', label: t('tab_prevendeurs'), icon: Users },
            { id: 'product_sales', label: t('tab_product_sales'), icon: ShoppingBag },
            { id: 'matrix', label: t('tab_matrix'), icon: MapPin },
            { id: 'explorer', label: t('tab_explorer'), icon: Search },
            { id: 'documents', label: t('tab_documents'), icon: FileText }
          ].filter(tab => {
            if (campaignMode === 'supervision_erp') {
              return tab.id === 'global' || tab.id === 'documents';
            }
            return true;
          }).map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 shrink-0 cursor-pointer ${
                activeTab === tab.id 
                  ? 'bg-rose-600 text-white shadow-md' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/30 dark:hover:bg-slate-800/50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {activeTab === 'prevendeurs' && (
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t('agent_label')}</span>
            <select
              value={selectedPrevName}
              onChange={(e) => setSelectedPrevName(e.target.value)}
              className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all cursor-pointer shadow-sm"
            >
              {campaignData.preSales.map(p => (
                <option key={p.name} value={p.name}>
                  {p.name} ({p.share_pct}%)
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* ==========================================
          MAIN CONTENTS
          ========================================== */}
      <main className="flex-1 max-w-[1550px] w-full mx-auto px-4 md:px-6 py-6 animate-fade-in min-w-0">
        
        {/* ==========================================
            TAB 1: GLOBAL VIEW
            ========================================== */}
        {activeTab === 'global' && (
          <div className="space-y-6 min-w-0">
            
            {/* Dynamic Context Notification Banner */}
            <div className="px-5 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-rose-700 dark:text-rose-300 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span>{t('data_display_for')} <strong className="underline">{lang === 'ar' && campaignMode === 'supervision_erp' ? 'تقرير الإشراف والتدقيق للنظام الشامل (ماي 2026)' : campaignData.metrics.title}</strong></span>
              </div>
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-[10px]">{t('active_badge')}</span>
            </div>

            {/* Executive KPIs Grid */}
            {campaignMode !== 'supervision_erp' && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              
              {/* Consolidated Revenue */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800/80 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className={`absolute top-0 w-2 h-full bg-rose-600 ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase">{t('ca_erp_label')}</span>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
                <div className="text-xs min-[350px]:text-sm min-[390px]:text-base sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-none mb-2">
                  {formatDA(campaignData.metrics.consolidatedRevenue)}
                </div>
                <div className="text-[9px] sm:text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />
                  <span>Consolidé global sur la période</span>
                </div>
              </div>

              {/* Pre-sales Campaign Revenue */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800/80 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className={`absolute top-0 w-2 h-full bg-blue-500 ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase">{t('ca_campaign_label')}</span>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
                <div className="text-xs min-[350px]:text-sm min-[390px]:text-base sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-none mb-1">
                  {formatDA(campaignData.metrics.preSalesRevenue)}
                </div>
                <div className="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400">
                  TTC : <span className="font-semibold text-blue-600 dark:text-blue-400">{formatDA(campaignData.metrics.preSalesRevenueTTC)}</span>
                </div>
              </div>

              {/* Outstanding Receivables */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800/80 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className={`absolute top-0 w-2 h-full bg-rose-500 ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase">{t('outstanding_receivables')}</span>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-500 dark:text-rose-400 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
                <div className="text-xs min-[350px]:text-sm min-[390px]:text-base sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-none mb-2">
                  {formatDA(campaignData.metrics.outstandingReceivables)}
                </div>
                <div className="text-[9px] sm:text-xs text-rose-600 dark:text-rose-400 font-semibold flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Nécessite recouvrement actif</span>
                </div>
              </div>

              {/* Recovery Rate & Points */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800/80 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className={`absolute top-0 w-2 h-full bg-emerald-500 ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase">{t('recovery_rate_label')}</span>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    <Percent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
                <div className="text-xs min-[350px]:text-sm min-[390px]:text-base sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-none mb-1">
                  {campaignData.metrics.recoveryRate}%
                </div>
                <div className="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400">
                  {t('active_pdv')} <span className="font-semibold text-emerald-600 dark:text-emerald-400">{formatQty(campaignData.metrics.activePoints)} pdv</span>
                </div>
              </div>

            </div>
            )}

            {/* Campaign Sub-KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: t('volume_distributed'), value: `${formatQty(campaignData.metrics.volumeDistributed)} ${lang === 'ar' ? 'وحدة' : 'unités'}`, icon: ShoppingBag, color: 'text-violet-500' },
                { label: t('cases_sold'), value: `${formatQty(campaignData.metrics.casesSold)} ${lang === 'ar' ? 'علبة' : 'cartons'}`, icon: Package, color: 'text-amber-500' },
                { label: t('basket_label'), value: formatDA(campaignData.metrics.averageBasket), icon: ArrowUpRight, color: 'text-teal-500' },
                { label: t('revenue_case_label'), value: formatDA(campaignData.metrics.avgRevenuePerCase), icon: DollarSign, color: 'text-rose-500' }
              ].map((sub, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/40 flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-white dark:bg-slate-850 shadow-sm ${sub.color}`}>
                    <sub.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider leading-tight">{sub.label}</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-200">{sub.value}</p>
                  </div>
                </div>
              ))}
            </div>

                        {/* HENKEL ERP Advanced Performance Indicators (KPIs) */}
            {campaignMode !== 'supervision_erp' && (
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="pb-3 border-b border-slate-100 dark:border-slate-850 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                    {lang === 'ar' ? 'مؤشرات الأداء التشغيلي المتقدمة (KPIs HENKEL)' : 'Indicateurs de Performance Opérationnelle HENKEL (Consolidé HENKEL)'}
                  </h3>
                </div>

                {(() => {
                  const metrics = DATASET[campaignMode]?.metrics || {
                    averageBasket: 0,
                    activePoints: 0,
                    recoveryRate: 0,
                    volumeDistributed: 0,
                    invoices: 1,
                    consolidatedRevenue: 0
                  };
                  const invoices = metrics.invoices || 1215;
                  const coverageRate = ((metrics.activePoints / 750) * 100).toFixed(2);
                  const rendRate = (metrics.volumeDistributed / invoices).toFixed(1);
                  const target = 28000000.0;
                  const realRate = ((metrics.consolidatedRevenue / target) * 100).toFixed(2);

                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        {
                          label: lang === 'ar' ? 'متوسط السلة لكل فاتورة' : 'CA Moyen par BL (Panier Moyen)',
                          val: formatDA(metrics.averageBasket),
                          desc: lang === 'ar' ? 'متوسط قيمة المبيعات لكل bon de livraison' : "Panier moyen par Bon de Livraison facturé",
                          pct: 100,
                          col: 'bg-rose-600 dark:bg-rose-400',
                          textCol: 'text-rose-600 dark:text-rose-450'
                        },
                        {
                          label: lang === 'ar' ? 'معدل التغطية الجغرافية' : 'Taux de Couverture Sectoriel',
                          val: `${coverageRate}%`,
                          desc: lang === 'ar' ? `تغطية العملاء الفعليين (${metrics.activePoints} من أصل 750 عميل)` : `Pénétration client : ${metrics.activePoints} livrés sur 750 programmés`,
                          pct: parseFloat(coverageRate),
                          col: 'bg-emerald-500',
                          textCol: 'text-emerald-500'
                        },
                        {
                          label: lang === 'ar' ? 'معدل النجاح (التحصيل)' : 'Taux de Succès Commercial',
                          val: `${metrics.recoveryRate.toFixed(2)}%`,
                          desc: lang === 'ar' ? 'معدل السداد الفعلي للديون (هدف المجموعة >= 97٪)' : "Performance d'apurement financier : encours maîtrisé",
                          pct: metrics.recoveryRate,
                          col: 'bg-blue-500',
                          textCol: 'text-blue-500'
                        },
                        {
                          label: lang === 'ar' ? 'معدل النشاط والزيارات' : "Taux d'Activité (Intensité)",
                          val: '93.18%',
                          desc: lang === 'ar' ? 'النشاط الفعلي للزيارات (20.5 يوم نشط من 22)' : "Fréquentation terrain : jours actifs sur jours ouvrés",
                          pct: 93.18,
                          col: 'bg-amber-500',
                          textCol: 'text-amber-500'
                        },
                        {
                          label: lang === 'ar' ? 'معدل الإنتاجية (الحجم/BL)' : 'Taux de Rendement (Volume/BL)',
                          val: `${rendRate} u./BL`,
                          desc: lang === 'ar' ? 'عدد الوحدات المتوسطة الموزعة في كل فاتورة' : "Densité de livraison : volume d'unités moyen par BL",
                          pct: Math.min(100, (parseFloat(rendRate) / 200) * 105),
                          col: 'bg-purple-500',
                          textCol: 'text-purple-500'
                        },
                        {
                          label: lang === 'ar' ? 'معدل تحقيق الأهداف المبيعات' : 'Taux de Réalisation Objectif',
                          val: `${realRate}%`,
                          desc: lang === 'ar' ? `تحقيق الهدف لشهر ماي (29.82M مقابل 28.00M هدف)` : "Dépassement de l'objectif mensuel (cible : 28M DA HT)",
                          pct: Math.min(100, parseFloat(realRate)),
                          col: 'bg-teal-500',
                          textCol: 'text-teal-500 animate-pulse'
                        }
                      ].map((kpi, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/40 space-y-2.5">
                          <div>
                            <p className="text-[10px] sm:text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none mb-1.5">{kpi.label}</p>
                            <p className={`text-sm sm:text-xl font-extrabold ${kpi.textCol}`}>{kpi.val}</p>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${kpi.col}`} style={{ width: `${kpi.pct}%` }}></div>
                          </div>
                          <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-semibold leading-tight">{kpi.desc}</p>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            )}

{/* SPECIAL SUPERVISION AUDIT REPORT - MIX & ROTATION OF PRODUCTS */}
            {campaignMode === 'supervision_erp' && (
              <div className="p-6 rounded-2xl bg-slate-900 text-slate-100 border border-rose-500/30 shadow-xl relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Sparkles className="w-64 h-64 text-rose-500" />
                </div>
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-slate-800 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping"></span>
                      <h3 className="text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-400" />
                        {t('supervision_title')}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 font-semibold">
                      {t('supervision_desc')}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    Source : Rapport_Performance_HENKEL_Mai_2026_Consolide.pdf
                  </span>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Column 1: Strategic Alerts (Détails des Alertes) */}
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-4">
                    <h4 className="text-xs font-extrabold uppercase text-rose-400 tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      {t('supervision_alerts_col')}
                    </h4>
                    
                    <div className="space-y-3.5">
                      <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 space-y-1.5">
                        <span className="px-2 py-0.5 text-[9px] font-extrabold bg-rose-500/20 text-rose-300 rounded border border-rose-500/30 uppercase">{lang === 'ar' ? 'حرجة : تركيز المبيعات والديون العالقة' : 'CRITIQUE : Concentration & Reste à Payer'}</span>
                        <p className="text-[11px] font-semibold text-slate-300 leading-relaxed">
                          {lang === 'ar' ? <span><strong>70٪ من المبيعات</strong> تمت بواسطة 3 وكلاء فقط (<strong>خليفة، معيزي، سنوسي علي</strong>).</span> : <span><strong>70% du CA</strong> est réalisé par seulement 3 vendeurs (<strong>KHALIFA, MAAIZI, SENOUCI ALI</strong>).</span>}
                        </p>
                        <p className="text-[11px] text-rose-300/90 font-bold">
                          {lang === 'ar' ? 'Fethi لديه 981 ألف د.ج ديون عالقة (تحصيل 78.09٪)، مما يهدد الخزينة.' : 'FETHI cumule 981k DA d\'impayés (78.09% recouv.), menaçant gravement la trésorerie.'}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                        <span className="px-2 py-0.5 text-[9px] font-extrabold bg-amber-500/20 text-amber-300 rounded border border-amber-500/30 uppercase">{lang === 'ar' ? 'يقظة : حالة خليفة' : 'VIGILANCE : Cas KHALIFA'}</span>
                        <p className="text-[11px] font-semibold text-slate-300 leading-relaxed">
                          {lang === 'ar' ? <span>مبيعات بقيمة <strong>8.41 مليون د.ج</strong> مع ديون معلقة بقيمة <strong>882 ألف د.ج</strong>.</span> : <span>Volume de <strong>8.41M DA</strong> avec un reste à payer de <strong>882k DA</strong>.</span>}
                        </p>
                        <p className="text-[11px] text-amber-300/90 font-bold">
                          {lang === 'ar' ? 'نسبة تحصيل تحت الإشراف 89.50٪. المتابعة الدقيقة مطلوبة.' : 'Recouvrement sous supervision de 89.50%. Suivi des relances requis.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Product Rotation (Rotation des Produits) */}
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-4">
                    <h4 className="text-xs font-extrabold uppercase text-rose-400 tracking-wider flex items-center gap-1.5">
                      <ShoppingBag className="w-4 h-4 text-emerald-400" />
                      {t('supervision_rotation_col')}
                    </h4>

                    <div className="space-y-3 text-[11px] font-semibold">
                      <div className="space-y-3">
                        {['Soin du Linge', 'Soin de la Vaisselle', 'Nettoyants Surfaces'].map(cat => {
                          const catProducts = DATASET.products ? DATASET.products.filter(p => p.category === cat) : [];
                          const catTotalRevenue = catProducts.reduce((sum, p) => sum + p.revenue_ht, 0);
                          const catTotalVolume = catProducts.reduce((sum, p) => sum + p.volume, 0);
                          
                          const topCat = catProducts.slice(0, 2);
                          const botCat = catProducts.filter(p => p.volume > 0).slice(-1);
                          
                          const catAr = cat === 'Soin du Linge' ? 'العناية بالملابس' : 
                                        cat === 'Soin de la Vaisselle' ? 'العناية بالأواني' : 
                                        cat === 'Nettoyants Surfaces' ? 'منظفات الأسطح' : cat;
                                        
                          return (
                            <div key={cat} className="space-y-2 pb-2.5 border-b border-slate-850 last:border-0">
                              <span className="text-[10px] uppercase font-extrabold text-rose-400 tracking-wider block">
                                {lang === 'ar' ? catAr : cat}
                              </span>
                              
                              <div className="pl-0.5 space-y-2">
                                {topCat.map(p => {
                                  const volPct = catTotalVolume > 0 ? ((p.volume / catTotalVolume) * 100).toFixed(1) : '0.0';
                                  const revPct = catTotalRevenue > 0 ? ((p.revenue_ht / catTotalRevenue) * 100).toFixed(1) : '0.0';
                                  return (
                                    <div key={p.designation} className="p-2 rounded-lg bg-emerald-950/20 border border-emerald-900/30 hover:border-emerald-500/30 transition-all space-y-1">
                                      <div className="flex justify-between items-start gap-2 text-slate-100 font-bold text-[10.5px]">
                                        <span title={p.designation}>{translateProduct(p.designation, lang)}</span>
                                        <span className="text-emerald-400 font-extrabold flex items-center gap-1 shrink-0">
                                          <TrendingUp className="w-3 h-3 text-emerald-400" />
                                          {p.volume.toLocaleString()} u.
                                        </span>
                                      </div>
                                      <div className="flex justify-between text-[9.5px] text-slate-400 font-medium">
                                        <span>{formatDA(p.revenue_ht)}</span>
                                        <span className="text-emerald-500/80">Vol: {volPct}% | Val: {revPct}%</span>
                                      </div>
                                      <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                                        <div className="bg-emerald-500 h-full rounded-full transition-all" style={{ width: `${Math.min(100, parseFloat(volPct))}%` }}></div>
                                      </div>
                                    </div>
                                  );
                                })}
                                {botCat.map(p => {
                                  const volPct = catTotalVolume > 0 ? ((p.volume / catTotalVolume) * 100).toFixed(1) : '0.0';
                                  const revPct = catTotalRevenue > 0 ? ((p.revenue_ht / catTotalRevenue) * 100).toFixed(1) : '0.0';
                                  return (
                                    <div key={p.designation} className="p-2 rounded-lg bg-rose-950/10 border border-rose-900/20 hover:border-rose-500/20 transition-all space-y-1">
                                      <div className="flex justify-between items-start gap-2 text-slate-350 font-medium italic text-[10.5px]">
                                        <span title={p.designation}>{translateProduct(p.designation, lang)} (Dormant)</span>
                                        <span className="text-rose-450 font-bold flex items-center gap-1 shrink-0">
                                          <TrendingDown className="w-3 h-3 text-rose-450" />
                                          {p.volume.toLocaleString()} u.
                                        </span>
                                      </div>
                                      <div className="flex justify-between text-[9.5px] text-slate-500 font-medium">
                                        <span>{formatDA(p.revenue_ht)}</span>
                                        <span className="text-rose-500/70">Vol: {volPct}% | Val: {revPct}%</span>
                                      </div>
                                      <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                                        <div className="bg-rose-500/60 h-full rounded-full transition-all" style={{ width: `${Math.min(100, parseFloat(volPct))}%` }}></div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Recommendations (Recommandations) */}
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-4">
                    <h4 className="text-xs font-extrabold uppercase text-rose-400 tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-rose-400" />
                      {t('supervision_recs_col')}
                    </h4>

                    <div className="space-y-3 text-[11px] font-semibold">
                      <div className="flex gap-2 text-slate-300">
                        <span className="text-rose-400 font-extrabold">1.</span>
                        <div className="leading-tight">
                          <strong className="text-white block font-bold">{lang === 'ar' ? 'إدارة التعرض للوكلاء المتصدرين' : `Gérer l'Exposition aux Tops`}</strong>
                          {lang === 'ar' ? 'متابعة تحصيل الديون لـ خليفة في منطقة تسمسيلت. تشجيع الوكلاء لتنويع المخاطر.' : `Geler KHALIFA si l'encours dépasse 1M DA. Pousser les vendeurs pour diversifier.`}
                        </div>
                      </div>

                      <div className="flex gap-2 text-slate-300 border-t border-slate-800 pt-2">
                        <span className="text-rose-400 font-extrabold">2.</span>
                        <div className="leading-tight">
                          <strong className="text-white block font-bold">{lang === 'ar' ? 'مراجعة مزيج المنتجات المربحة' : `Revoir le Mix Rentabilité`}</strong>
                          {lang === 'ar' ? 'ترقية مبيعات لو شات السائل وبريل إيزيس جل ذات القيمة العالية.' : 'Promouvoir Le Chat Liquide & Pril Isis Gel à forte valeur unitaire.'}
                        </div>
                      </div>

                      <div className="flex gap-2 text-slate-300 border-t border-slate-800 pt-2">
                        <span className="text-rose-400 font-extrabold">3.</span>
                        <div className="leading-tight">
                          <strong className="text-white block font-bold">{lang === 'ar' ? 'هيكلة تحصيل الديون العالقة' : `Structurer le Recouvrement`}</strong>
                          {lang === 'ar' ? 'تدقيق حساب سنوسي علي (أدنى معدل تحصيل في قطاع هينكل: 25.80٪).' : `Bloquer les clients de SENOUCI ALI ayant des retards de plus de 30 jours.`}
                        </div>
                      </div>

                      <div className="flex gap-2 text-slate-300 border-t border-slate-800 pt-2">
                        <span className="text-rose-400 font-extrabold">4.</span>
                        <div className="leading-tight">
                          <strong className="text-white block font-bold">{lang === 'ar' ? 'توحيد وتنسيق مستندات نظام ERP' : `Uniformiser les Exports ERP`}</strong>
                          {lang === 'ar' ? 'تصحيح الخلل وتعديل محاذاة الأعمدة لتلقائية إصدار التقارير.' : `Corriger le décalage de colonnes de l'ERP Henkel pour automatiser les rapports.`}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Visual Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-w-0">
              
              {/* Daily Sales trend area chart */}
              <div className="lg:col-span-2 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm min-w-0">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-850">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-slate-900 dark:text-white">{t('daily_evolution')}</h3>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Campagne Mai 2026</span>
                </div>
                
                <div className="h-[280px] w-full min-w-0" style={{ minHeight: '280px' }}>
                  <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={280}>
                    <AreaChart data={globalDailySales} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="globalSalesGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#E11D48" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#E11D48" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#1F2937" : "#E5E7EB"} />
                      <XAxis dataKey="date" stroke={darkMode ? "#6B7280" : "#9CA3AF"} tick={{ fontSize: 10, fontWeight: 550 }} />
                      <YAxis 
                        stroke={darkMode ? "#6B7280" : "#9CA3AF"} 
                        tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} 
                        tick={{ fontSize: 10, fontWeight: 550 }}
                      />
                      <Tooltip 
                        formatter={(val) => [formatDA(val), lang === 'ar' ? 'المبيعات (خ.ر)' : 'Ventes HT']}
                        contentStyle={{ 
                          backgroundColor: darkMode ? '#111827' : '#FFFFFF', 
                          borderColor: darkMode ? '#374151' : '#E5E7EB',
                          color: darkMode ? '#FFFFFF' : '#111827',
                          borderRadius: '8px',
                          fontSize: '12px'
                        }}
                      />
                      <Area type="monotone" dataKey="sales_ht" stroke="#E11D48" strokeWidth={3} fillOpacity={1} fill="url(#globalSalesGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pre-sales Share Pie Chart */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-w-0">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-850">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-slate-900 dark:text-white">{t('market_share_label')}</h3>
                  </div>
                </div>

                <div className="h-[200px] relative flex items-center justify-center flex-1 min-w-0" style={{ minHeight: '200px' }}>
                  <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={200}>
                    <PieChart>
                      <Pie
                        data={campaignData.preSales.filter(p => p.sales_ht > 0)}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={75}
                        paddingAngle={3}
                        dataKey="sales_ht"
                        nameKey="name"
                      >
                        {campaignData.preSales.map((entry, idx) => (
                          <Cell key={`cell-${idx}`} fill={CHART_COLORS[idx % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(val) => formatDA(val)}
                        contentStyle={{ 
                          backgroundColor: darkMode ? '#111827' : '#FFFFFF', 
                          borderColor: darkMode ? '#374151' : '#E5E7EB',
                          color: darkMode ? '#FFFFFF' : '#111827',
                          borderRadius: '8px',
                          fontSize: '12px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute text-center">
                    <span className="text-[10px] uppercase font-bold text-slate-400">{t('total_sales_label')}</span>
                    <p className="text-xs font-extrabold text-slate-900 dark:text-white">
                      23.57M DA
                    </p>
                  </div>
                </div>

                {/* Micro Legend */}
                <div className="grid grid-cols-3 gap-2 mt-4 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  {campaignData.preSales.slice(0, 6).map((p, idx) => (
                    <div key={p.name} className="flex items-center gap-1.5 truncate">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }}></span>
                      <span className="truncate">{p.name} ({p.share_pct}%)</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Risk Mitigation Alerts Section */}
            <div className="p-5 rounded-2xl bg-rose-500/5 dark:bg-rose-950/10 border border-rose-500/20 relative overflow-hidden">
              <div className="absolute right-0 top-0 text-rose-500/10 pointer-events-none transform translate-x-4 -translate-y-4">
                <AlertTriangle className="w-48 h-48" />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-rose-800 dark:text-rose-400">
                    <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                    <h3 className="font-extrabold text-base tracking-tight">{t('financial_risk_mitigation')}</h3>
                  </div>
                  
                  {/* Summary dynamic text */}
                  <p className="text-xs text-rose-700/90 dark:text-rose-300/80 leading-relaxed max-w-[850px]">
                    <strong>{t('alert_outstanding')}</strong> {t('financial_risk_desc')} Le total des impayés s'élève à <strong>{formatDA(campaignData.metrics.outstandingReceivables)}</strong> (14.42% du CA).
                  </p>
                  
                  {/* Flushed accounts */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {campaignData.preSales.filter(p => p.recovery_rate < 90).map(p => (
                      <span 
                        key={p.name}
                        className="px-2.5 py-1 text-xs rounded-lg font-bold bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900/30 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        {p.name} : {p.recovery_rate}% Recouvrement (Restant : {formatDA(p.outstanding)})
                      </span>
                    ))}
                  </div>
                </div>

                {/* INTERACTIVE OPERATIONAL TODO CHECKLIST */}
                <div className="w-full md:w-[420px] p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
                      <CheckSquare className="w-3.5 h-3.5 text-rose-500" /> {t('action_plan_label')}
                    </span>
                    <span className="text-[10px] font-extrabold text-rose-600 bg-rose-50 dark:bg-rose-950 px-2 py-0.5 rounded">
                      {checkProgress.completed}/{checkProgress.total} Fait ({checkProgress.pct}%)
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-rose-600 h-full rounded-full transition-all duration-300" style={{ width: `${checkProgress.pct}%` }}></div>
                  </div>

                  <div className="space-y-2 text-xs font-semibold">
                    {checklist.map(item => (
                      <div 
                        key={item.id}
                        onClick={() => handleToggleCheck(item.id)}
                        className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-slate-850/50 ${
                          item.completed ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        {item.completed ? (
                          <CheckSquare className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-300 dark:text-slate-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span className="leading-tight">{CHECKLIST_TR[item.id]?.[lang] || item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Fiches d'Audit Clinique Panel (Extracted directly from page 6 & 7 of the Guide) */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 animate-pulse" />
                <h3 className="font-black text-white text-lg">{t('audit_clinique_label')}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {DATASET.audits.map((a, idx) => {
                  // Determine status configurations for custom glowing colors and backgrounds
                  const statusColors = a.status === 'Critique' ? {
                    bg: 'bg-[#1A0B10] dark:bg-[#1A0B10]/60 border-rose-500/30 hover:border-rose-500 shadow-rose-950/20',
                    name: 'text-rose-100',
                    badge: 'bg-rose-900/30 text-rose-300 border-rose-500/20',
                    tauxText: 'text-rose-200',
                    encoursText: 'text-rose-400',
                    gridBorder: 'border-rose-950/40',
                    label: 'text-rose-300',
                    desc: 'text-rose-100/90',
                    listText: 'text-rose-200/90',
                    chevron: 'text-rose-400'
                  } : a.status === 'Vigilance' ? {
                    bg: 'bg-[#251B0D] dark:bg-[#251B0D]/60 border-amber-500/30 hover:border-amber-500 shadow-amber-950/20',
                    name: 'text-amber-100',
                    badge: 'bg-amber-900/30 text-amber-300 border-amber-500/20',
                    tauxText: 'text-amber-200',
                    encoursText: 'text-amber-400',
                    gridBorder: 'border-amber-950/40',
                    label: 'text-amber-300',
                    desc: 'text-amber-100/90',
                    listText: 'text-amber-200/90',
                    chevron: 'text-amber-400'
                  } : { // Succès / Très Bon
                    bg: 'bg-[#0E2417] dark:bg-[#0E2417]/60 border-emerald-500/30 hover:border-emerald-500 shadow-emerald-950/20',
                    name: 'text-emerald-100',
                    badge: 'bg-emerald-900/30 text-emerald-300 border-emerald-500/20',
                    tauxText: 'text-emerald-200',
                    encoursText: 'text-emerald-400',
                    gridBorder: 'border-emerald-950/40',
                    label: 'text-emerald-300',
                    desc: 'text-emerald-100/90',
                    listText: 'text-emerald-200/90',
                    chevron: 'text-emerald-400'
                  };

                  return (
                    <div 
                      key={idx}
                      className={`p-5 rounded-xl border flex flex-col justify-between gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg ${statusColors.bg}`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`font-black text-base ${statusColors.name}`}>{a.rep}</span>
                          <span className={`px-2 py-0.5 text-[9px] font-extrabold rounded-md border uppercase tracking-wider ${statusColors.badge}`}>
                            {lang === 'ar' ? (a.status_ar || a.status) : a.status}
                          </span>
                        </div>

                        <div className={`grid grid-cols-2 gap-2 text-xs font-black py-2 border-y ${statusColors.gridBorder} ${statusColors.listText}`}>
                          <div>Taux : <span className={`font-black ${statusColors.tauxText}`}>{a.rate}%</span></div>
                          <div>Encours : <span className={`font-black ${statusColors.encoursText}`}>{formatDA(a.outstanding)}</span></div>
                        </div>

                        <div className="space-y-2 pt-1 text-xs font-semibold">
                          <p className={statusColors.desc}>
                            <strong className={`font-black block text-[10px] uppercase tracking-wider mb-0.5 ${statusColors.label}`}>{t('risk_symptoms')}</strong>
                            {lang === 'ar' ? (a.symptoms_ar || a.symptoms) : a.symptoms}
                          </p>
                          <p className={statusColors.desc}>
                            <strong className={`font-black block text-[10px] uppercase tracking-wider mb-0.5 ${statusColors.label}`}>{t('risk_causes')}</strong>
                            {lang === 'ar' ? (a.causes_ar || a.causes) : a.causes}
                          </p>
                        </div>
                      </div>

                      <div className={`pt-3 border-t ${statusColors.gridBorder} space-y-2`}>
                        <span className={`text-[10px] uppercase font-black tracking-wider block ${statusColors.label}`}>{t('risk_actions')}</span>
                        <ul className={`text-xs font-medium space-y-1.5 ${statusColors.listText}`}>
                          {(lang === 'ar' ? a.actions_ar : a.actions).map((act, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${statusColors.chevron}`} />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Leaderboard Table (Pre-sales) & National Accounts */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              
              {/* Leaderboard of Representatives */}
              <div className="xl:col-span-2 p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-black text-white text-lg">{t('rank_performance_label')}</h3>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-xs uppercase font-black text-slate-350 tracking-wider">
                        <th className={`py-2.5 px-3 ${alignStart}`}>{t('ranking')}</th>
                        <th className={`py-2.5 px-3 ${alignStart}`}>{t('representative')}</th>
                        <th className={`py-2.5 px-3 ${alignEnd}`}>{t('invoices_label')}</th>
                        <th className={`py-2.5 px-3 ${alignEnd}`}>{t('volume_units')}</th>
                        <th className={`py-2.5 px-3 ${alignEnd}`}>{t('ca_net')}</th>
                        <th className={`py-2.5 px-3 ${alignEnd}`}>{t('recovery')}</th>
                        <th className={`py-2.5 px-3 ${alignEnd}`}>{t('outstanding_amount')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-xs font-semibold">
                      {campaignData.preSales.map((p, idx) => {
                        const isUnderThreshold = p.recovery_rate < 90;
                        const medalColors = idx === 0 ? 'bg-amber-950/40 text-amber-400 border-amber-600/30' : 
                                            idx === 1 ? 'bg-slate-800/40 text-slate-300 border-slate-700/30' :
                                            idx === 2 ? 'bg-amber-900/10 text-amber-500/50 border-amber-800/20' : 
                                            'bg-slate-900 text-slate-400 border-slate-800';
                        return (
                          <tr key={p.name} className="hover:bg-slate-900/40 transition-colors">
                            <td className="py-3 px-3">
                              <span className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-xs ${medalColors}`}>
                                {idx + 1}
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-2">
                                <span className="text-white font-black">{p.name}</span>
                                {isUnderThreshold && (
                                  <span className="px-1.5 py-0.5 text-[9px] font-extrabold rounded-md bg-rose-950/40 text-rose-300 border border-rose-900/20">
                                    Alerte
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-3 text-right text-slate-100 font-extrabold">{formatQty(p.invoices)}</td>
                            <td className="py-3 px-3 text-right text-slate-100 font-extrabold">{formatQty(p.volume)}</td>
                            <td className="py-3 px-3 text-right text-emerald-400 font-bold">{formatDA(p.sales_ht)}</td>
                            <td className={`py-3 px-3 text-right font-bold ${isUnderThreshold ? 'text-rose-400' : 'text-emerald-400'}`}>
                              {p.recovery_rate}%
                            </td>
                            <td className={`py-3 px-3 text-right font-bold ${p.outstanding > 0 ? 'text-rose-400' : 'text-slate-500'}`}>
                              {p.outstanding > 0 ? formatDA(p.outstanding) : '0,00 DA'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* National Clients Directory */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-black text-white text-lg">{t('top_national_clients')}</h3>
                  </div>
                </div>

                <div className="space-y-3.5 flex-1 flex flex-col justify-center">
                  {DATASET.clients.slice(0, 10).map((c, i) => (
                    <div 
                      key={c.code} 
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 group hover:border-emerald-500 transition-all shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {c.name}
                          </p>
                          <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                            Code: {c.code} • Livraisons : {c.deliveries}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-emerald-400">{formatDA(c.purchases_ht)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ==========================================
            TAB 2: PRE-SALES PROFILER VIEW
            ========================================== */}
        {activeTab === 'prevendeurs' && (
          <div className="space-y-6 min-w-0">
            
            {/* Profiler Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
              {/* Conditional Alert visual border glow */}
              {selectedPrev.recovery_rate < 90 && (
                <div className="absolute inset-0 border-2 border-rose-500/30 rounded-2xl pointer-events-none"></div>
              )}
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* Photo/Avatar Block */}
                <div className="flex sm:flex-col items-center gap-4 sm:gap-2 self-start sm:self-auto w-full sm:w-auto relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-rose-500 via-purple-500 to-pink-500 p-0.5 shadow-md flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold shrink-0">
                    {selectedPrev.name[0]}
                  </div>
                  <span className="sm:absolute sm:bottom-0 sm:right-0 px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-white flex items-center justify-center shadow-sm">
                    #{selectedPrev.rank}
                  </span>
                </div>

                <div className="flex-1 text-left space-y-1.5 w-full">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{translateName(selectedPrev.name, lang)}</h2>
                    <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
                      {lang === 'ar' ? `الرتبة ${selectedPrev.rank} في الأداء` : `Rang ${selectedPrev.rank} en Performance`}
                    </span>
                    {selectedPrev.recovery_rate < 90 && (
                      <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900/20">
                        {lang === 'ar' ? 'حد الخطر المالي' : 'Seuil Risque Financier'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[650px] leading-relaxed">
                    {lang === 'ar' ? 'مندوب مبيعات ميداني مسؤول عن القطاع وتموين نقاط التوزيع. المنتج الأكثر رواجاً في هذه الفترة :' : `Commercial Terrain en charge du secteur et de l'approvisionnement des points de distribution. Produit vedette sur la période :`} <strong>{selectedPrev.top_product}</strong> (Volume : {formatQty(selectedPrev.top_product_qty)} unités).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200/50 dark:border-slate-800/80 text-center min-w-[200px]">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{lang === 'ar' ? 'حصة السوق الكلية' : 'Part de Marché Quota'}</p>
                  <p className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">{selectedPrev.share_pct}%</p>
                  <span className="text-[10px] font-bold text-slate-500">{lang === 'ar' ? 'من إجمالي الجهد المبيعات' : `De l'effort global de pré-ventes`}</span>
                </div>
              </div>
            </div>

            {/* Individual Operational KPI Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              
              {/* Sales HT */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative group">
                <div className={`absolute top-0 w-1.5 h-full bg-rose-500 ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Chiffre d'Affaires HT</p>
                <div className="text-xs min-[350px]:text-sm min-[390px]:text-base sm:text-2xl font-extrabold text-rose-600 dark:text-rose-400 mb-1">{formatDA(selectedPrev.sales_ht)}</div>
                <div className="text-[9px] sm:text-[11px] text-slate-500">Contribution : {selectedPrev.share_pct}%</div>
              </div>

              {/* Outstanding Receivables */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative group">
                <div className={`absolute top-0 w-1.5 h-full bg-rose-500 ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Reste à Recouvrer</p>
                <div className="text-xs min-[350px]:text-sm min-[390px]:text-base sm:text-2xl font-extrabold text-rose-500 mb-1">
                  {selectedPrev.outstanding > 0 ? formatDA(selectedPrev.outstanding) : '0,00 DA'}
                </div>
                <div className="text-[9px] sm:text-[11px] text-slate-500 flex items-center gap-1">
                  {selectedPrev.outstanding > 0 ? (
                    <span className="text-rose-500 font-bold flex items-center gap-0.5">
                      <AlertTriangle className="w-3 h-3" /> {lang === 'ar' ? 'ميزان ديون' : 'À surveiller'}
                    </span>
                  ) : (
                    <span className="text-emerald-500 font-bold">{lang === 'ar' ? 'مسوى بالكامل' : 'Purgé'}</span>
                  )}
                </div>
              </div>

              {/* Recovery Rate */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative group">
                <div className={`absolute top-0 w-1.5 h-full bg-emerald-500 ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('recovery_rate_label')}</p>
                <div className={`text-xs min-[350px]:text-sm min-[390px]:text-base sm:text-2xl font-extrabold mb-1 ${selectedPrev.recovery_rate < 90 ? 'text-rose-500' : 'text-emerald-500'}`}>
                  {selectedPrev.recovery_rate}%
                </div>
                <div className="text-[9px] sm:text-[11px] text-slate-500">
                  {selectedPrev.recovery_rate < 90 ? (
                    <span className="text-rose-500 font-bold">Sous 90%</span>
                  ) : (
                    <span className="text-emerald-500 font-bold">{lang === 'ar' ? 'سداد ممتاز' : `Excellent`}</span>
                  )}
                </div>
              </div>

              {/* Basket & Deliveries */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative group">
                <div className={`absolute top-0 w-1.5 h-full bg-teal-500 ${lang === 'ar' ? 'right-0' : 'left-0'}`}></div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{lang === 'ar' ? 'السلة والفواتير' : 'Panier & Factures'}</p>
                <div className="text-xs min-[350px]:text-sm min-[390px]:text-base sm:text-2xl font-extrabold text-teal-600 dark:text-teal-400 mb-1">{formatDA(selectedPrev.avg_basket)}</div>
                <div className="text-[9px] sm:text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700 dark:text-slate-350">{selectedPrev.invoices} BL</span> • {selectedPrev.unique_clients} Clt
                </div>
              </div>

            </div>

            {/* HENKEL ERP Individual Advanced Performance Indicators (KPIs) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="pb-3 border-b border-slate-100 dark:border-slate-850 flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  {lang === 'ar' ? `مؤشرات الأداء التشغيلي التفصيلية لـ ${selectedPrev.name}` : `Indicateurs de Performance Opérationnelle HENKEL : ${selectedPrev.name}`}
                </h3>
              </div>

              {(() => {
                const portfolio = selectedPrev.portfolio || 100;
                const activeDays = selectedPrev.active_days || 20;
                const objective = selectedPrev.objective || 4000000;
                
                const covRate = (selectedPrev.unique_clients / portfolio * 100).toFixed(2);
                const actRate = (activeDays / 22 * 100).toFixed(2);
                const rendRate = (selectedPrev.volume / selectedPrev.invoices).toFixed(2);
                const realRate = (selectedPrev.sales_ht / objective * 100).toFixed(2);

                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        label: lang === 'ar' ? 'متوسط السلة لكل فاتورة' : 'CA par BL (Panier Moyen)',
                        val: formatDA(selectedPrev.sales_ht / selectedPrev.invoices),
                        desc: lang === 'ar' ? 'متوسط CA لكل Bon de Livraison للوكيل' : 'Panier moyen par Bon de Livraison facturé par ce vendeur',
                        pct: 100,
                        col: 'bg-rose-600 dark:bg-rose-400',
                        textCol: 'text-rose-600 dark:text-rose-400'
                      },
                      {
                        label: lang === 'ar' ? 'معدل التغطية الجغرافية للوكيل' : 'Taux de Couverture (Secteur)',
                        val: `${covRate}%`,
                        desc: lang === 'ar' ? `تغطية العملاء (${selectedPrev.unique_clients} من ${portfolio} عميل)` : `Pénétration client : ${selectedPrev.unique_clients} livrés sur ${portfolio} programmés`,
                        pct: parseFloat(covRate),
                        col: 'bg-emerald-500',
                        textCol: 'text-emerald-500'
                      },
                      {
                        label: lang === 'ar' ? 'معدل نجاح التحصيل والائتمان' : 'Taux de Succès Commercial',
                        val: `${selectedPrev.recovery_rate}%`,
                        desc: lang === 'ar' ? 'نسبة apurement للديون للوكيل (هدف >= 97٪)' : 'Performance d\'apurement : solvabilité des clients de la zone',
                        pct: parseFloat(selectedPrev.recovery_rate),
                        col: 'bg-blue-500',
                        textCol: 'text-blue-500'
                      },
                      {
                        label: lang === 'ar' ? 'معدل نشاط الوكيل الميداني' : 'Taux d\'Activité (Intensité)',
                        val: `${actRate}%`,
                        desc: lang === 'ar' ? `الأيام النشطة للوكيل (${activeDays} يوم من أصل 22)` : `Fréquentation terrain : ${activeDays} jours actifs sur 22 ouvrés`,
                        pct: parseFloat(actRate),
                        col: 'bg-amber-500',
                        textCol: 'text-amber-500'
                      },
                      {
                        label: lang === 'ar' ? 'معدل rendement الحجم/BL' : 'Taux de Rendement (Volume/BL)',
                        val: `${formatQty(rendRate)} u./BL`,
                        desc: lang === 'ar' ? 'متوسط حجم السلع الموزعة في كل BL' : 'Densité de livraison : volume d\'unités moyen par facture',
                        pct: Math.min(100, (rendRate / 675.05) * 100),
                        col: 'bg-purple-500',
                        textCol: 'text-purple-500'
                      },
                      {
                        label: lang === 'ar' ? 'معدل تحقيق أهداف الوكيل' : 'Taux de Réalisation Objectif',
                        val: `${realRate}%`,
                        desc: lang === 'ar' ? `تحقيق هدف المبيعات (${(objective/1000000).toFixed(1)}M هدف)` : `CA HT réel par rapport à l'objectif mensuel (${(objective/1000000).toFixed(1)}M DA)`,
                        pct: Math.min(100, parseFloat(realRate)),
                        col: 'bg-teal-500',
                        textCol: 'text-teal-500 animate-pulse'
                      }
                    ].map((kpi, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 space-y-2.5">
                        <div>
                          <p className="text-[10px] sm:text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none mb-1.5">{kpi.label}</p>
                          <p className={`text-sm sm:text-xl font-extrabold ${kpi.textCol}`}>{kpi.val}</p>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${kpi.col}`} style={{ width: `${kpi.pct}%` }}></div>
                        </div>
                        <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-semibold leading-tight">{kpi.desc}</p>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>

            {/* Individual Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-0">
              
              {/* Daily Sales trend area chart */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm min-w-0">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-850">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-slate-900 dark:text-white">{lang === 'ar' ? 'المبيعات اليومية التفصيلية' : 'Ventes Journalières Quotidiennes'}</h3>
                  </div>
                  <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-full">{selectedPrev.name}</span>
                </div>
                
                <div className="h-[260px] w-full min-w-0" style={{ minHeight: '260px' }}>
                  <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={260}>
                    <AreaChart data={prevDailySales} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="prevSalesGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#1F2937" : "#E5E7EB"} />
                      <XAxis dataKey="date" stroke={darkMode ? "#6B7280" : "#9CA3AF"} tick={{ fontSize: 10, fontWeight: 550 }} />
                      <YAxis 
                        stroke={darkMode ? "#6B7280" : "#9CA3AF"} 
                        tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} 
                        tick={{ fontSize: 10, fontWeight: 550 }}
                      />
                      <Tooltip 
                        formatter={(val) => [formatDA(val), lang === 'ar' ? 'المبيعات (خ.ر)' : 'Ventes HT']}
                        contentStyle={{ 
                          backgroundColor: darkMode ? '#111827' : '#FFFFFF', 
                          borderColor: darkMode ? '#374151' : '#E5E7EB',
                          color: darkMode ? '#FFFFFF' : '#111827',
                          borderRadius: '8px',
                          fontSize: '12px'
                        }}
                      />
                      <Area type="monotone" dataKey="sales_ht" stroke="#F59E0B" strokeWidth={3} fillOpacity={1} fill="url(#prevSalesGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Product value breakdown */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm min-w-0">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-850">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-slate-900 dark:text-white">{lang === 'ar' ? 'توزيع مبيعات المنتجات حسب القيمة' : 'Répartition Produit en Valeur (HT)'}</h3>
                  </div>
                </div>

                <div className="h-[260px] w-full min-w-0" style={{ minHeight: '260px' }}>
                  <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={260}>
                    <BarChart data={prevProductData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#1F2937" : "#E5E7EB"} />
                      <XAxis dataKey="name" stroke={darkMode ? "#6B7280" : "#9CA3AF"} tick={{ fontSize: 10, fontWeight: 550 }} />
                      <YAxis 
                        stroke={darkMode ? "#6B7280" : "#9CA3AF"} 
                        tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} 
                        tick={{ fontSize: 10, fontWeight: 550 }}
                      />
                      <Tooltip 
                        formatter={(val) => formatDA(val)}
                        contentStyle={{ 
                          backgroundColor: darkMode ? '#111827' : '#FFFFFF', 
                          borderColor: darkMode ? '#374151' : '#E5E7EB',
                          color: darkMode ? '#FFFFFF' : '#111827',
                          borderRadius: '8px',
                          fontSize: '12px'
                        }}
                      />
                      <Bar dataKey="value" fill="#059669" radius={[6, 6, 0, 0]}>
                        {prevProductData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

            {/* Pre-sales product tracking micro tables */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-850">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-rose-500" />
                  <h3 className="font-bold text-slate-900 dark:text-white">{t('performance_micro_label')}</h3>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      <th className={`py-2.5 px-3 ${alignStart}`}>{lang === 'ar' ? 'المادة المرجعية' : 'Article Spécifique'}</th>
                      <th className={`py-2.5 px-3 ${alignEnd}`}>{lang === 'ar' ? 'الحجم الموزع (التقديري)' : 'Volume Distribué (Estimé)'}</th>
                      <th className={`py-2.5 px-3 ${alignEnd}`}>{lang === 'ar' ? 'القيمة التقديرية (خ.ر)' : 'Valeur Estimée HT'}</th>
                      <th className={`py-2.5 px-3 ${alignEnd}`}>{lang === 'ar' ? 'المساهمة في ر.أ للوكيل' : 'Contribution CA Agent'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs font-semibold">
                    {(selectedPrev.top_products || []).map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors">
                        <td className="py-3 px-3 text-slate-900 dark:text-white font-bold">{translateProduct(item.designation, lang)}</td>
                        <td className={`py-3 px-3 text-right text-slate-500 font-semibold`}>{formatQty(item.qty)} {lang === 'ar' ? 'وحدة' : 'unités'}</td>
                        <td className="py-3 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatDA(item.val)}</td>
                        <td className="py-3 px-3 text-right text-rose-600 dark:text-rose-400 font-bold">{item.contrib}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ==========================================
            TAB 3: CATALOGUE & CLIENTS EXPLORER
            ========================================== */}
        {activeTab === 'explorer' && (
          <div className="space-y-6 min-w-0">
            
            {/* Twin Search Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-0">
              
              {/* Product Catalog */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-w-0">
                <div className="pb-4 mb-4 border-b border-slate-100 dark:border-slate-850 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-slate-900 dark:text-white">{t('product_catalog_label')}</h3>
                  </div>
                  
                  {/* Search input */}
                  <div className="relative w-full md:w-[200px]">
                    <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder={t('search_placeholder_product')}
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      className="w-full py-1 px-3 pl-8 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-850 border border-transparent dark:border-slate-800 text-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto flex-1" style={{ maxHeight: '500px' }}>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 tracking-wider sticky top-0 bg-white dark:bg-slate-900">
                        <th className={`py-2.5 px-3 ${alignStart}`}>{t('ranking')}</th>
                        <th className="py-2.5 px-3">Désignation</th>
                        <th className={`py-2.5 px-3 ${alignEnd}`}>{t('volume_units')}</th>
                        <th className="py-2.5 px-3 text-right">CA Net (HT)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs font-semibold">
                      {filteredProducts.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="py-5 text-center text-slate-400 font-medium">
                            Aucun produit ne correspond à votre filtre.
                          </td>
                        </tr>
                      ) : (
                        filteredProducts.map((p, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors">
                            <td className="py-3 px-3 text-slate-400">#{p.rank}</td>
                            <td className="py-3 px-3 text-slate-900 dark:text-white font-bold">{translateProduct(p.designation, lang)}</td>
                            <td className="py-3 px-3 text-right text-slate-500">{formatQty(p.volume)}</td>
                            <td className="py-3 px-3 text-right text-rose-600 dark:text-rose-400 font-bold">{formatDA(p.revenue_ht)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Client List */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-w-0">
                <div className="pb-4 mb-4 border-b border-slate-100 dark:border-slate-850 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-rose-500" />
                    <h3 className="font-bold text-slate-900 dark:text-white">{t('client_accounts_label')}</h3>
                  </div>

                  {/* Search input */}
                  <div className="relative w-full md:w-[200px]">
                    <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder={t('search_placeholder_client')}
                      value={clientSearch}
                      onChange={(e) => setClientSearch(e.target.value)}
                      className="w-full py-1 px-3 pl-8 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-850 border border-transparent dark:border-slate-800 text-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto flex-1" style={{ maxHeight: '500px' }}>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 tracking-wider sticky top-0 bg-white dark:bg-slate-900">
                        <th className="py-2.5 px-3">Code</th>
                        <th className="py-2.5 px-3">Intitulé Client</th>
                        <th className="py-2.5 px-3 text-right">Achats Globaux HT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs font-semibold">
                      {filteredClients.length === 0 ? (
                        <tr>
                          <td colSpan="3" className="py-5 text-center text-slate-400 font-medium">
                            Aucun compte client ne correspond à votre recherche.
                          </td>
                        </tr>
                      ) : (
                        filteredClients.map((c, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors">
                            <td className="py-3 px-3 text-slate-400 font-bold">{c.code}</td>
                            <td className="py-3 px-3 text-slate-900 dark:text-white font-bold">{c.name}</td>
                            <td className="py-3 px-3 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatDA(c.purchases_ht)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ==========================================
            TAB: PRODUCT SALES MATRIX
            ========================================== */}
        {activeTab === 'product_sales' && (
          <div className="space-y-6 animate-fadeIn min-w-0">
            
            {/* Header section with search, category tabs and toggle */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {lang === 'ar' ? 'مصفوفة مبيعات المنتجات حسب الوكلاء' : 'Matrice des Ventes Produits par Prévendeur'}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {lang === 'ar' ? 'تحليل مفصل ومتقاطع للكميات والمبيعات الإجمالية المحققة لكل منتج وكل وكيل تجاري' : 'Analyse croisée des volumes et chiffres d\'affaires (HT) réalisés par chaque agent commercial'}
                </p>
              </div>

              {/* Interactive Controls Panel */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full xl:w-auto">
                {/* Search Input */}
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={prodSalesSearch}
                    onChange={(e) => setProdSalesSearch(e.target.value)}
                    placeholder={lang === 'ar' ? 'البحث عن منتج...' : 'Filtrer par désignation...'}
                    className="w-full pl-9 pr-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-850 border border-transparent dark:border-slate-800 text-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* View Mode Toggle */}
                <div className="flex p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 self-start sm:self-auto shrink-0">
                  <button
                    onClick={() => setProdSalesView('value')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                      prodSalesView === 'value'
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {lang === 'ar' ? 'القيمة (د.ج)' : 'Valeur (DA HT)'}
                  </button>
                  <button
                    onClick={() => setProdSalesView('volume')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                      prodSalesView === 'volume'
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {lang === 'ar' ? 'الكمية (و)' : 'Volume (Unités)'}
                  </button>
                </div>
              </div>
            </div>

            {/* Category filter tabs */}
            <div className="flex overflow-x-auto whitespace-nowrap p-1 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 gap-1 no-scrollbar">
              {[
                { id: 'all', label: lang === 'ar' ? 'جميع الفئات' : 'Toutes les catégories' },
                { id: 'Soin du Linge', label: lang === 'ar' ? 'العناية بالملابس' : 'Soin du Linge' },
                { id: 'Soin de la Vaisselle', label: lang === 'ar' ? 'العناية بالأواني' : 'Soin de la Vaisselle' },
                { id: 'Nettoyants Surfaces', label: lang === 'ar' ? 'منظفات الأسطح' : 'Nettoyants Surfaces' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setProdSalesCat(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    prodSalesCat === cat.id
                      ? 'bg-slate-800 dark:bg-slate-700 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Matrix Table */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-w-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 tracking-wider sticky top-0 bg-white dark:bg-slate-900">
                      <th className="py-3 px-3">{lang === 'ar' ? 'المنتج' : 'Désignation Produit'}</th>
                      <th className="py-3 px-3">{lang === 'ar' ? 'الفئة' : 'Catégorie'}</th>
                      {MATRIX_AGENTS.map(agent => (
                        <th key={agent} className="py-3 px-3 text-right">
                          {agent.split(' ')[0]}
                        </th>
                      ))}
                      <th className="py-3 px-3 text-right bg-slate-50 dark:bg-slate-850/40 text-rose-600 dark:text-rose-400 font-bold">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs font-semibold">
                    {filteredProductSalesMatrix.length === 0 ? (
                      <tr>
                        <td colSpan={3 + MATRIX_AGENTS.length} className="py-10 text-center text-slate-400 font-medium">
                          {lang === 'ar' ? 'لا توجد نتائج مطابقة لبحثك' : 'Aucun produit ne correspond à vos critères de recherche.'}
                        </td>
                      </tr>
                    ) : (
                      filteredProductSalesMatrix.map((item, idx) => {
                        const isValue = prodSalesView === 'value';
                        const totalMetric = isValue ? item.total_ca : item.total_qty;

                        return (
                          <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors">
                            <td className="py-3 px-3 text-slate-900 dark:text-white font-bold max-w-[280px] truncate">
                              {translateProduct(item.produit, lang)}
                            </td>
                            <td className="py-3 px-3">
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                                item.category === 'Soin du Linge'
                                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                                  : item.category === 'Soin de la Vaisselle'
                                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                  : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                              }`}>
                                {lang === 'ar'
                                  ? (item.category === 'Soin du Linge' ? 'غسيل الملابس' : item.category === 'Soin de la Vaisselle' ? 'غسيل الأواني' : 'منظفات أسطح')
                                  : item.category}
                              </span>
                            </td>
                            
                            {/* Pre-seller sales cell heat map */}
                            {MATRIX_AGENTS.map(agent => {
                              const cellData = item.sales[agent] || { qty: 0, ca: 0.0 };
                              const cellVal = isValue ? cellData.ca : cellData.qty;
                              
                              // Calculate dynamic heat-map opacity
                              let opacity = 0;
                              if (totalMetric > 0 && cellVal > 0) {
                                opacity = Math.min(0.35, (cellVal / totalMetric) * 0.40);
                              }

                              return (
                                <td 
                                  key={agent} 
                                  className="py-3 px-3 text-right text-slate-800 dark:text-slate-200 transition-colors"
                                  style={{
                                    backgroundColor: opacity > 0 ? `rgba(225, 29, 72, ${opacity})` : 'transparent'
                                  }}
                                >
                                  {isValue ? formatDA(cellVal) : formatQty(cellVal)}
                                </td>
                              );
                            })}

                            <td className="py-3 px-3 text-right bg-slate-50 dark:bg-slate-850/40 text-rose-600 dark:text-rose-400 font-extrabold">
                              {isValue ? formatDA(totalMetric) : formatQty(totalMetric)}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                  
                  {/* Table Summation Footer Row */}
                  {filteredProductSalesMatrix.length > 0 && (
                    <tfoot>
                      <tr className="border-t border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-850/20 text-xs font-black text-slate-900 dark:text-white">
                        <td className="py-4 px-3" colSpan={2}>
                          {lang === 'ar' ? 'المجموع الإجمالي للفلاتر' : 'MOMENTUM / TOTAUX FILTRÉS'}
                        </td>
                        {MATRIX_AGENTS.map(agent => {
                          const isValue = prodSalesView === 'value';
                          const sumVal = filteredProductSalesMatrix.reduce((acc, item) => {
                            const cellData = item.sales[agent] || { qty: 0, ca: 0.0 };
                            return acc + (isValue ? cellData.ca : cellData.qty);
                          }, 0);

                          return (
                            <td key={agent} className="py-4 px-3 text-right text-emerald-600 dark:text-emerald-400 font-black">
                              {isValue ? formatDA(sumVal) : formatQty(sumVal)}
                            </td>
                          );
                        })}
                        <td className="py-4 px-3 text-right bg-slate-100/30 dark:bg-slate-850/60 text-rose-600 dark:text-rose-400 font-extrabold">
                          {(() => {
                            const isValue = prodSalesView === 'value';
                            const grandTotal = filteredProductSalesMatrix.reduce((acc, item) => {
                              return acc + (isValue ? item.total_ca : item.total_qty);
                            }, 0);
                            return isValue ? formatDA(grandTotal) : formatQty(grandTotal);
                          })()}
                        </td>
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
            </div>
            
          </div>
        )}

        {/* ==========================================
            TAB: REGIONAL MATRIX
            ========================================== */}
        {activeTab === 'matrix' && (
          <div className="space-y-6 animate-fadeIn min-w-0">
            
            {/* Header section with toggle */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('matrix_title')}</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t('matrix_subtitle')}</p>
              </div>
              
              {/* Toggle switch for display values */}
              <div className="flex p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 self-start md:self-auto">
                <button
                  onClick={() => setMatrixView('value')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    matrixView === 'value'
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>{t('currency_view')}</span>
                </button>
                <button
                  onClick={() => setMatrixView('percentage')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    matrixView === 'percentage'
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Percent className="w-3.5 h-3.5" />
                  <span>{t('market_share_view')}</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Table Card */}
            <div className="p-3.5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden min-w-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead>
                    <tr className="border-b border-slate-150 dark:border-slate-800">
                      <th className={`sticky left-0 bg-white dark:bg-slate-900 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] border-r border-slate-200 dark:border-slate-800 py-4 px-4 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-450 ${alignStart}`}>
                        {t('zone_header')}
                      </th>
                      {MATRIX_AGENTS.map(agent => (
                        <th key={agent} className={`py-4 px-3 font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-450 ${alignEnd}`}>
                          {agent}
                        </th>
                      ))}
                      <th className={`py-4 px-4 font-bold text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50/30 dark:bg-rose-950/10 ${alignEnd}`}>
                        {t('total_zone_label')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {REGIONAL_MATRIX.map((row, rIdx) => {
                      const zoneLabel = lang === 'ar' ? row.zone_ar : row.zone;
                      return (
                        <tr key={rIdx} className="group border-b border-slate-100 dark:border-slate-850 hover:bg-slate-50/50 dark:hover:bg-slate-850/30 transition-colors">
                          <td className={`sticky left-0 bg-white dark:bg-slate-900 group-hover:bg-slate-50 dark:group-hover:bg-slate-800/40 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] border-r border-slate-200 dark:border-slate-800 py-3 px-4 font-bold text-sm text-slate-800 dark:text-slate-200 transition-colors ${alignStart}`}>
                            {zoneLabel}
                          </td>
                          {MATRIX_AGENTS.map(agent => {
                            const val = row.sales[agent] || 0;
                            const share = val > 0 ? (val / row.total) * 100 : 0;
                            
                            // Check leadership highlights (highest non-zero value in row)
                            const maxRowValue = Math.max(...Object.values(row.sales));
                            const isLeader = val > 0 && val === maxRowValue;
                            
                            let cellContent = '-';
                            if (val > 0) {
                              if (matrixView === 'value') {
                                cellContent = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(val) + ' DA';
                              } else {
                                cellContent = share.toFixed(1) + '%';
                              }
                            }
                            
                            return (
                              <td 
                                key={agent} 
                                className={`py-3 px-3 text-xs ${alignEnd} transition-all duration-150 ${
                                  val > 0 
                                    ? isLeader 
                                      ? 'font-bold text-emerald-600 dark:text-emerald-450' 
                                      : 'font-semibold text-slate-700 dark:text-slate-300'
                                    : 'text-slate-300 dark:text-slate-750 font-medium'
                                }`}
                              >
                                {val > 0 && isLeader ? (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100/80 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-200/40 dark:border-emerald-900/20 font-bold shadow-sm">
                                    {cellContent}
                                  </span>
                                ) : (
                                  <span>{cellContent}</span>
                                )}
                              </td>
                            );
                          })}
                          <td className={`py-3 px-4 font-bold text-sm text-rose-600 dark:text-rose-400 bg-rose-50/20 dark:bg-rose-950/5 ${alignEnd}`}>
                            {formatDA(row.total)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Breakdown of CA by Product Family and Pre-seller Table Card */}
            <div className="p-3.5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden min-w-0">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-850">
                <TrendingUp className="w-5 h-5 text-rose-500" />
                <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                  {lang === 'ar' ? 'توزيع رقم الأعمال حسب العائلة التجارية والوكيل (د.ج HT)' : "Répartition du Chiffre d'Affaires par Famille de Produits et par Prévendeur (HT)"}
                </h4>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1000px] text-xs font-semibold">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      <th className={`py-3 px-3 ${alignStart}`}>Famille de Produits</th>
                      {MATRIX_AGENTS.map(agent => (
                        <th key={agent} className={`py-3 px-3 ${alignEnd}`}>{agent}</th>
                      ))}
                      <th className={`py-3 px-3 bg-rose-50/30 dark:bg-rose-950/10 text-rose-600 dark:text-rose-400 ${alignEnd}`}>Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                    {DATASET.brand_sales && DATASET.brand_sales.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/30 transition-colors">
                        <td className={`py-3 px-3 text-slate-850 dark:text-slate-200 font-bold ${alignStart}`}>
                          {lang === 'ar' ? row.category_ar : row.category}
                        </td>
                        {MATRIX_AGENTS.map(agent => {
                          const val = row.sales[agent] || 0;
                          return (
                            <td key={agent} className={`py-3 px-3 ${alignEnd} text-slate-600 dark:text-slate-350`}>
                              {val > 0 ? formatDA(val) : '-'}
                            </td>
                          );
                        })}
                        <td className={`py-3 px-3 font-bold text-rose-600 dark:text-rose-400 bg-rose-50/10 dark:bg-rose-950/5 ${alignEnd}`}>
                          {formatDA(row.total)}
                        </td>
                      </tr>
                    ))}
                    {/* Total Row */}
                    <tr className="border-t-2 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 font-bold text-slate-800 dark:text-slate-100">
                      <td className={`py-3 px-3 ${alignStart}`}>Total Général</td>
                      {MATRIX_AGENTS.map(agent => {
                        const agentTotal = DATASET.brand_sales ? DATASET.brand_sales.reduce((sum, r) => sum + (r.sales[agent] || 0), 0) : 0;
                        return (
                          <td key={agent} className={`py-3 px-3 ${alignEnd}`}>
                            {formatDA(agentTotal)}
                          </td>
                        );
                      })}
                      <td className={`py-3 px-3 ${alignEnd} text-rose-600 dark:text-rose-400 font-extrabold bg-rose-50/30 dark:bg-rose-950/15`}>
                        {formatDA(DATASET.brand_sales ? DATASET.brand_sales.reduce((sum, r) => sum + r.total, 0) : 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Insights panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">
              
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <Crown className="w-5 h-5 text-amber-500" />
                  <h4 className="font-bold text-slate-900 dark:text-white">{t('matrix_insights')}</h4>
                </div>
                
                <div className="space-y-3.5">
                  <div className="flex gap-3 items-start">
                    <span className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                      {t('matrix_insight_1')}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <span className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 mt-0.5">
                      <Activity className="w-4 h-4" />
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                      {t('matrix_insight_2')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <Award className="w-5 h-5 text-rose-500" />
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {lang === 'ar' ? 'التكامل الميداني الفعال' : 'Intégration & Exclusivité Territoriale'}
                  </h4>
                </div>
                
                <div className="space-y-3.5">
                  <div className="flex gap-3 items-start">
                    <span className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                      {t('matrix_insight_3')}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <span className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                      {t('matrix_insight_4')}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ==========================================
            TAB 4: DOCUMENTS & PDF PREVIEWER
            ========================================== */}
        {activeTab === 'documents' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-w-0">
            
            {/* Documents List Panel */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-850">
                  <FileText className="w-5 h-5 text-rose-500" />
                  <h3 className="font-bold text-slate-900 dark:text-white">{t('reports_list_label')}</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t('reports_desc')}
                </p>
              </div>

              <div className="space-y-3">
                {DATASET.documents.map((doc) => {
                  const isSelected = doc.id === selectedDocId;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDocId(doc.id)}
                      className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col gap-2 relative group hover:-translate-y-0.5 ${
                        isSelected 
                          ? 'bg-rose-600 border-rose-600 text-white shadow-lg shadow-rose-600/10' 
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-rose-500/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                            isSelected 
                              ? 'bg-white/20 text-white' 
                              : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                          }`}>
                            {doc.type}
                          </span>
                        </div>
                        <span className={`text-[10px] font-bold ${isSelected ? 'text-rose-200' : 'text-slate-400'}`}>
                          {doc.size}
                        </span>
                      </div>


                      <div>
                        <h4 className="text-sm font-bold truncate">{lang === 'ar' ? (doc.id === 'rapport-supervision' ? 'تقرير الإشراف المالي والتحصيل' : doc.id === 'guide-kpis' ? 'دليل مؤشرات الأداء الشامل' : doc.id === 'rapport-analyse' ? 'تقرير التحليل التجاري العام' : doc.id === 'comparatif-prevendeurs' ? 'مقارنة أداء البائعين الميدانيين' : doc.id === 'comparatif-regions' ? 'المقارنة الإقليمية والتغطية الجغرافية' : 'ملخص المبيعات الجغرافي') : doc.title}</h4>
                        <p className={`text-[11px] font-semibold truncate ${isSelected ? 'text-rose-100' : 'text-slate-400'}`}>
                          {lang === 'ar' ? 'الملف' : 'Fichier'} : {doc.name}
                        </p>
                      </div>

                      <p className={`text-[11px] leading-relaxed line-clamp-2 mt-1 ${isSelected ? 'text-rose-100/90' : 'text-slate-500 dark:text-slate-400'}`}>
                        {lang === 'ar' ? (doc.id === 'rapport-supervision' ? 'إشراف نقدي دقيق لمؤشرات الأداء هينكل ERP. تحذير من تركز المبيعات وتضخم الديون العالقة.' : doc.id === 'guide-kpis' ? 'وثيقة توجيهية تحدد مؤشرات الأداء وطريقة العمل الميدانية ومعايير الملاءة المالية للبائعين.' : doc.id === 'rapport-analyse' ? 'تدقيق ملخص الأداء التجاري لشهر ماي 2026. تحليل نسب الديون وخطة العمل الاستراتيجية.' : doc.id === 'comparatif-prevendeurs' ? 'تقييم متقاطع لنشاط الوكلاء التجاريين في الميدان ومتابعة مستحقات الزبائن.' : doc.id === 'comparatif-regions' ? 'خارطة التوزيع الجغرافي للمبيعات ونسبة التغطية وحصة السوق لكل بائع.' : 'ملخص موجز للمبيعات حسب المناطق الإقليمية والكميات الموزعة.') : doc.description}
                      </p>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Embedded PDF Viewer Panel */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-850 gap-3">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-rose-500 animate-pulse" />
                    {t('pdf_viewer_label')}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-400 truncate mt-0.5">
                    {t('active_viewing')} {selectedDoc.title} ({selectedDoc.name})
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedDoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200/50 dark:border-rose-900/30 hover:bg-rose-100 dark:hover:bg-rose-900/50 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t('new_tab_label')}</span>
                  </a>

                  <a
                    href={selectedDoc.url}
                    download={selectedDoc.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t('download_label')}</span>
                  </a>
                </div>
              </div>

              {/* Document Display Iframe container */}
              <div className="flex-1 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 relative overflow-hidden" style={{ minHeight: '520px' }}>
                <iframe
                  src={`${selectedDoc.url}#toolbar=1`}
                  className="w-full h-full absolute inset-0 border-0 rounded-xl"
                  title={`Visionneuse PDF HENKEL ERP - ${selectedDoc.title}`}
                >
                  <div className="p-8 text-center space-y-4">
                    <p className="text-sm font-medium text-slate-500">
                      Votre navigateur ne supporte pas la prévisualisation des PDF directement dans la page.
                    </p>
                    <a
                      href={selectedDoc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg font-bold"
                    >
                      Ouvrir le document PDF
                    </a>
                  </div>
                </iframe>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* ==========================================
          FOOTER
          ========================================== */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0B0F19] py-5 mt-10">
        <div className="max-w-[1550px] mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4 font-semibold">
          <p>{t('footer_text')}</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Info className="w-3.5 h-3.5 text-rose-500" /> {t('footer_version')}</span>
            <span className="text-rose-600 dark:text-rose-400">{t('footer_localized')}</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
