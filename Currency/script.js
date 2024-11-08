const populate = async (value, currency) => {
  let myStr = "";
  // url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_uXEgBp6oPizhwlbse6Xyr2vd2infncTCCkTqufNA&base_currency="+currency;
  // let response= await fetch(url);
  // let rJson=await response.json();
  let rJson=JSON.parse(`{
  "meta": {
    "last_updated_at": "2024-10-10T23:59:59Z"
  },
  "data": {
    "ADA": {
      "code": "ADA",
      "value": 2.9472868185
    },
    "AED": {
      "code": "AED",
      "value": 3.6721806202
    },
    "AFN": {
      "code": "AFN",
      "value": 67.6296630069
    },
    "ALL": {
      "code": "ALL",
      "value": 90.0886055978
    },
    "AMD": {
      "code": "AMD",
      "value": 387.3443369566
    },
    "ANG": {
      "code": "ANG",
      "value": 1.786070196
    },
    "AOA": {
      "code": "AOA",
      "value": 912.7929567242
    },
    "ARB": {
      "code": "ARB",
      "value": 1.9031252738
    },
    "ARS": {
      "code": "ARS",
      "value": 974.2415265798
    },
    "AUD": {
      "code": "AUD",
      "value": 1.4836501529
    },
    "AVAX": {
      "code": "AVAX",
      "value": 0.038677477
    },
    "AWG": {
      "code": "AWG",
      "value": 1.79
    },
    "AZN": {
      "code": "AZN",
      "value": 1.7
    },
    "BAM": {
      "code": "BAM",
      "value": 1.7873102484
    },
    "BBD": {
      "code": "BBD",
      "value": 2
    },
    "BDT": {
      "code": "BDT",
      "value": 119.9545412918
    },
    "BGN": {
      "code": "BGN",
      "value": 1.7827103477
    },
    "BHD": {
      "code": "BHD",
      "value": 0.376
    },
    "BIF": {
      "code": "BIF",
      "value": 2893.297990719
    },
    "BMD": {
      "code": "BMD",
      "value": 1
    },
    "BNB": {
      "code": "BNB",
      "value": 0.0017745615
    },
    "BND": {
      "code": "BND",
      "value": 1.305040254
    },
    "BOB": {
      "code": "BOB",
      "value": 6.9318712988
    },
    "BRL": {
      "code": "BRL",
      "value": 5.5813810072
    },
    "BSD": {
      "code": "BSD",
      "value": 1
    },
    "BTC": {
      "code": "BTC",
      "value": 0.0000165861
    },
    "BTN": {
      "code": "BTN",
      "value": 84.0004131821
    },
    "BWP": {
      "code": "BWP",
      "value": 13.2892023969
    },
    "BYN": {
      "code": "BYN",
      "value": 3.2699908933
    },
    "BYR": {
      "code": "BYR",
      "value": 32699.906498311
    },
    "BZD": {
      "code": "BZD",
      "value": 2
    },
    "CAD": {
      "code": "CAD",
      "value": 1.374440271
    },
    "CDF": {
      "code": "CDF",
      "value": 2852.5390785229
    },
    "CHF": {
      "code": "CHF",
      "value": 0.8564401642
    },
    "CLF": {
      "code": "CLF",
      "value": 0.0242000026
    },
    "CLP": {
      "code": "CLP",
      "value": 931.1624492425
    },
    "CNY": {
      "code": "CNY",
      "value": 7.0775111343
    },
    "COP": {
      "code": "COP",
      "value": 4200.0589841127
    },
    "CRC": {
      "code": "CRC",
      "value": 517.9267677154
    },
    "CUC": {
      "code": "CUC",
      "value": 1
    },
    "CUP": {
      "code": "CUP",
      "value": 24
    },
    "CVE": {
      "code": "CVE",
      "value": 100.8568494159
    },
    "CZK": {
      "code": "CZK",
      "value": 23.155513299
    },
    "DAI": {
      "code": "DAI",
      "value": 0.9994130135
    },
    "DJF": {
      "code": "DJF",
      "value": 177.721
    },
    "DKK": {
      "code": "DKK",
      "value": 6.822741127
    },
    "DOP": {
      "code": "DOP",
      "value": 60.1563705213
    },
    "DOT": {
      "code": "DOT",
      "value": 0.2457652925
    },
    "DZD": {
      "code": "DZD",
      "value": 133.6945259092
    },
    "EGP": {
      "code": "EGP",
      "value": 48.576778645
    },
    "ERN": {
      "code": "ERN",
      "value": 15
    },
    "ETB": {
      "code": "ETB",
      "value": 122.0640766724
    },
    "ETH": {
      "code": "ETH",
      "value": 0.0004193397
    },
    "EUR": {
      "code": "EUR",
      "value": 0.9144301292
    },
    "FJD": {
      "code": "FJD",
      "value": 2.2222203841
    },
    "FKP": {
      "code": "FKP",
      "value": 0.7656515776
    },
    "GBP": {
      "code": "GBP",
      "value": 0.765710079
    },
    "GEL": {
      "code": "GEL",
      "value": 2.7287204474
    },
    "GGP": {
      "code": "GGP",
      "value": 0.7656515666
    },
    "GHS": {
      "code": "GHS",
      "value": 15.8684322678
    },
    "GIP": {
      "code": "GIP",
      "value": 0.7656508928
    },
    "GMD": {
      "code": "GMD",
      "value": 56.7196072524
    },
    "GNF": {
      "code": "GNF",
      "value": 8620.4140586498
    },
    "GTQ": {
      "code": "GTQ",
      "value": 7.7176412361
    },
    "GYD": {
      "code": "GYD",
      "value": 208.8738921844
    },
    "HKD": {
      "code": "HKD",
      "value": 7.7686311061
    },
    "HNL": {
      "code": "HNL",
      "value": 24.8604531293
    },
    "HRK": {
      "code": "HRK",
      "value": 6.4821511549
    },
    "HTG": {
      "code": "HTG",
      "value": 133.746579105
    },
    "HUF": {
      "code": "HUF",
      "value": 366.8484695334
    },
    "IDR": {
      "code": "IDR",
      "value": 15640.024848256
    },
    "ILS": {
      "code": "ILS",
      "value": 3.7597406049
    },
    "IMP": {
      "code": "IMP",
      "value": 0.7656510682
    },
    "INR": {
      "code": "INR",
      "value": 83.9253719183
    },
    "IQD": {
      "code": "IQD",
      "value": 1307.8557063748
    },
    "IRR": {
      "code": "IRR",
      "value": 41994.537422113
    },
    "ISK": {
      "code": "ISK",
      "value": 135.9089604346
    },
    "JEP": {
      "code": "JEP",
      "value": 0.7656515548
    },
    "JMD": {
      "code": "JMD",
      "value": 157.7800659057
    },
    "JOD": {
      "code": "JOD",
      "value": 0.71
    },
    "JPY": {
      "code": "JPY",
      "value": 148.6887315154
    },
    "KES": {
      "code": "KES",
      "value": 128.9982864018
    },
    "KGS": {
      "code": "KGS",
      "value": 85.2837525462
    },
    "KHR": {
      "code": "KHR",
      "value": 4056.7861681736
    },
    "KMF": {
      "code": "KMF",
      "value": 449.6061017581
    },
    "KPW": {
      "code": "KPW",
      "value": 899.9671607968
    },
    "KRW": {
      "code": "KRW",
      "value": 1347.7647350818
    },
    "KWD": {
      "code": "KWD",
      "value": 0.3066200467
    },
    "KYD": {
      "code": "KYD",
      "value": 0.83333
    },
    "KZT": {
      "code": "KZT",
      "value": 492.3896237341
    },
    "LAK": {
      "code": "LAK",
      "value": 22106.17777795
    },
    "LBP": {
      "code": "LBP",
      "value": 89542.655791137
    },
    "LKR": {
      "code": "LKR",
      "value": 293.0733829244
    },
    "LRD": {
      "code": "LRD",
      "value": 192.9623485833
    },
    "LSL": {
      "code": "LSL",
      "value": 17.7174821055
    },
    "LTC": {
      "code": "LTC",
      "value": 0.0155614121
    },
    "LTL": {
      "code": "LTL",
      "value": 3.1578026784
    },
    "LVL": {
      "code": "LVL",
      "value": 0.6427545811
    },
    "LYD": {
      "code": "LYD",
      "value": 4.7820908448
    },
    "MAD": {
      "code": "MAD",
      "value": 9.8165312987
    },
    "MATIC": {
      "code": "MATIC",
      "value": 2.7110940043
    },
    "MDL": {
      "code": "MDL",
      "value": 17.5559928493
    },
    "MGA": {
      "code": "MGA",
      "value": 4584.3787083093
    },
    "MKD": {
      "code": "MKD",
      "value": 56.3397388395
    },
    "MMK": {
      "code": "MMK",
      "value": 2094.1295809448
    },
    "MNT": {
      "code": "MNT",
      "value": 3399.992735259
    },
    "MOP": {
      "code": "MOP",
      "value": 8.0049311761
    },
    "MRO": {
      "code": "MRO",
      "value": 356.999828
    },
    "MRU": {
      "code": "MRU",
      "value": 39.6900519786
    },
    "MUR": {
      "code": "MUR",
      "value": 46.0738086292
    },
    "MVR": {
      "code": "MVR",
      "value": 15.4452225614
    },
    "MWK": {
      "code": "MWK",
      "value": 1733.5163608234
    },
    "MXN": {
      "code": "MXN",
      "value": 19.4408033941
    },
    "MYR": {
      "code": "MYR",
      "value": 4.2893006353
    },
    "MZN": {
      "code": "MZN",
      "value": 63.571529954
    },
    "NAD": {
      "code": "NAD",
      "value": 17.4846322759
    },
    "NGN": {
      "code": "NGN",
      "value": 1627.4190105857
    },
    "NIO": {
      "code": "NIO",
      "value": 36.8167548195
    },
    "NOK": {
      "code": "NOK",
      "value": 10.7352414079
    },
    "NPR": {
      "code": "NPR",
      "value": 134.4119897525
    },
    "NZD": {
      "code": "NZD",
      "value": 1.6406802294
    },
    "OMR": {
      "code": "OMR",
      "value": 0.3838100539
    },
    "OP": {
      "code": "OP",
      "value": 0.643417987
    },
    "PAB": {
      "code": "PAB",
      "value": 0.9991801755
    },
    "PEN": {
      "code": "PEN",
      "value": 3.7672807186
    },
    "PGK": {
      "code": "PGK",
      "value": 3.9297105363
    },
    "PHP": {
      "code": "PHP",
      "value": 57.4787395524
    },
    "PKR": {
      "code": "PKR",
      "value": 277.5959954915
    },
    "PLN": {
      "code": "PLN",
      "value": 3.9325506188
    },
    "PYG": {
      "code": "PYG",
      "value": 7819.5533102717
    },
    "QAR": {
      "code": "QAR",
      "value": 3.6386104059
    },
    "RON": {
      "code": "RON",
      "value": 4.5501508275
    },
    "RSD": {
      "code": "RSD",
      "value": 106.7390636835
    },
    "RUB": {
      "code": "RUB",
      "value": 97.0267404834
    },
    "RWF": {
      "code": "RWF",
      "value": 1346.2256017214
    },
    "SAR": {
      "code": "SAR",
      "value": 3.7484105418
    },
    "SBD": {
      "code": "SBD",
      "value": 8.4061978265
    },
    "SCR": {
      "code": "SCR",
      "value": 14.9759218004
    },
    "SDG": {
      "code": "SDG",
      "value": 601.5
    },
    "SEK": {
      "code": "SEK",
      "value": 10.386841182
    },
    "SGD": {
      "code": "SGD",
      "value": 1.3059202321
    },
    "SHP": {
      "code": "SHP",
      "value": 0.7657101452
    },
    "SLL": {
      "code": "SLL",
      "value": 22506.493809861
    },
    "SOL": {
      "code": "SOL",
      "value": 0.0071970652
    },
    "SOS": {
      "code": "SOS",
      "value": 571.0445749464
    },
    "SRD": {
      "code": "SRD",
      "value": 31.9943844091
    },
    "STD": {
      "code": "STD",
      "value": 22614.853288443
    },
    "STN": {
      "code": "STN",
      "value": 22.6148713453
    },
    "SVC": {
      "code": "SVC",
      "value": 8.75
    },
    "SYP": {
      "code": "SYP",
      "value": 13030.512767748
    },
    "SZL": {
      "code": "SZL",
      "value": 17.5191633722
    },
    "THB": {
      "code": "THB",
      "value": 33.4353038218
    },
    "TJS": {
      "code": "TJS",
      "value": 10.6609618789
    },
    "TMT": {
      "code": "TMT",
      "value": 3.5
    },
    "TND": {
      "code": "TND",
      "value": 3.0652605724
    },
    "TOP": {
      "code": "TOP",
      "value": 2.3352204139
    },
    "TRY": {
      "code": "TRY",
      "value": 34.2454357144
    },
    "TTD": {
      "code": "TTD",
      "value": 6.785981288
    },
    "TWD": {
      "code": "TWD",
      "value": 32.2431656126
    },
    "TZS": {
      "code": "TZS",
      "value": 2716.5406122504
    },
    "UAH": {
      "code": "UAH",
      "value": 41.3116748921
    },
    "UGX": {
      "code": "UGX",
      "value": 3668.1016015671
    },
    "USD": {
      "code": "USD",
      "value": 1
    },
    "USDC": {
      "code": "USDC",
      "value": 0.999285275
    },
    "USDT": {
      "code": "USDT",
      "value": 1.0002558722
    },
    "UYU": {
      "code": "UYU",
      "value": 41.8290643058
    },
    "UZS": {
      "code": "UZS",
      "value": 12772.271047573
    },
    "VEF": {
      "code": "VEF",
      "value": 3760318.4583522
    },
    "VES": {
      "code": "VES",
      "value": 37.603202673
    },
    "VND": {
      "code": "VND",
      "value": 24818.030704745
    },
    "VUV": {
      "code": "VUV",
      "value": 119.0525000843
    },
    "WST": {
      "code": "WST",
      "value": 2.7129718739
    },
    "XAF": {
      "code": "XAF",
      "value": 599.8791211588
    },
    "XAG": {
      "code": "XAG",
      "value": 0.0321033615
    },
    "XAU": {
      "code": "XAU",
      "value": 0.0003798044
    },
    "XCD": {
      "code": "XCD",
      "value": 2.7
    },
    "XDR": {
      "code": "XDR",
      "value": 0.7454301135
    },
    "XOF": {
      "code": "XOF",
      "value": 599.8790974109
    },
    "XPD": {
      "code": "XPD",
      "value": 0.0009247771
    },
    "XPF": {
      "code": "XPF",
      "value": 109.0331429119
    },
    "XPT": {
      "code": "XPT",
      "value": 0.0010264527
    },
    "XRP": {
      "code": "XRP",
      "value": 1.8879056526
    },
    "YER": {
      "code": "YER",
      "value": 249.7760575465
    },
    "ZAR": {
      "code": "ZAR",
      "value": 17.5252929075
    },
    "ZMK": {
      "code": "ZMK",
      "value": 9001.2
    },
    "ZMW": {
      "code": "ZMW",
      "value": 26.4867549825
    },
    "ZWL": {
      "code": "ZWL",
      "value": 35214.385860318
    }
  }
}`)
  
  for (let key of Object.keys(rJson["data"])) {
    myStr +=`<tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
             </tr>
            `
  }
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = parseInt(document.querySelector("input[name='quantity']").value);
  const currency = document.querySelector("select[name='currency']").value;
  populate(value, currency);
})