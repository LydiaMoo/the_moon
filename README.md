#The Moon
A site hopefully where you can find out more about the moon. Including the current and upcoming phases where you are.

Currently using the https://www.solunar.org/ api which uses location and date to return lots of information in JSON.

e.g. `https://api.solunar.org/solunar/42.66,-84.07,20180225,-4` will return the following.

```javascript
  {
    "sunRise":"8:19",
    "sunTransit":"13:50",
    "sunSet":"19:21",
    "moonRise":"14:44",
    "moonTransit":"9:53",
    "moonUnder":"22:24",
    "moonSet":"5:02",
    "moonPhase":"Waxing Gibbous",
    "moonIllumination":0.8250623465710724,
    "sunRiseDec":8.316666666666666,
    "sunTransitDec":13.833333333333334,
    "sunSetDec":19.35,
    "moonRiseDec":14.733333333333333,
    "moonSetDec":5.033333333333333,
    "moonTransitDec":9.883333333333333,
    "moonUnderDec":22.4,
    "minor1StartDec":14.233333333333333,
    "minor1Start":"14:14",
    "minor1StopDec":15.233333333333333,
    "minor1Stop":"15:14",
    "minor2StartDec":4.533333333333333,
    "minor2Start":"04:32",
    "minor2StopDec":5.533333333333333,
    "minor2Stop":"05:32",
    "major1StartDec":8.883333333333333,
    "major1Start":"08:53",
    "major1StopDec":10.883333333333333,
    "major1Stop":"10:53",
    "major2StartDec":21.4,
    "major2Start":"21:24",
    "major2StopDec":23.4,
    "major2Stop":"23:24",
    "dayRating":0,
    "hourlyRating":{
        "0":0,
        "1":0,
        "2":0,
        "3":0,
        "4":0,
        "5":20,
        "6":20,
        "7":0,
        "8":40,
        "9":40,
        "10":20,
        "11":20,
        "12":0,
        "13":0,
        "14":20,
        "15":20,
        "16":0,
        "17":0,
        "18":0,
        "19":20,
        "20":20,
        "21":20,
        "22":20,
        "23":20
    }
  }
```