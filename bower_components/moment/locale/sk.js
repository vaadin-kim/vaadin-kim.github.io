!function(e,t){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?t(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],t):t(e.moment)}(this,function(e){"use strict";function t(e){return e>1&&e<5}function n(e,n,r,o){var s=e+" ";switch(r){case"s":return n||o?"pár sekúnd":"pár sekundami";case"m":return n?"minúta":o?"minútu":"minútou";case"mm":return n||o?s+(t(e)?"minúty":"minút"):s+"minútami";case"h":return n?"hodina":o?"hodinu":"hodinou";case"hh":return n||o?s+(t(e)?"hodiny":"hodín"):s+"hodinami";case"d":return n||o?"deň":"dňom";case"dd":return n||o?s+(t(e)?"dni":"dní"):s+"dňami";case"M":return n||o?"mesiac":"mesiacom";case"MM":return n||o?s+(t(e)?"mesiace":"mesiacov"):s+"mesiacmi";case"y":return n||o?"rok":"rokom";case"yy":return n||o?s+(t(e)?"roky":"rokov"):s+"rokmi"}}var r="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),o="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),s=e.defineLocale("sk",{months:r,monthsShort:o,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return s});