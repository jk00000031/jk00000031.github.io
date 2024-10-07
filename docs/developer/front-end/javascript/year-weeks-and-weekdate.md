---
title: JS 获取某年有多少周及每周日期
---

# JS 获取某年有多少周及每周日期

```js
function formatNumber(n) {
  return n.toString().length > 1 ? n : "0" + n;
}

var getWeek = {
  run: function (year) {
    var days = getWeek.getDate(year || new Date().getFullYear());
    var weeks = {};

    for (var i = 0; i < days.length; i++) {
      var weeksKeyLen = Object.keys(weeks).length;
      var daySplit = days[i].split("_");

      if (weeks[weeksKeyLen] == undefined) {
        weeks[weeksKeyLen + 1] = [daySplit[0]];
      } else {
        if (daySplit[1] == "1") {
          weeks[weeksKeyLen + 1] = [daySplit[0]];
        } else {
          weeks[weeksKeyLen].push(daySplit[0]);
        }
      }
    }
    return weeks;
  },
  getDate: function (year) {
    var dates = [];
    for (var i = 1; i <= 12; i++) {
      for (var j = 1; j <= new Date(year, i, 0).getDate(); j++) {
        dates.push(
          year + "-" + formatNumber(i) + "-" + formatNumber(j) + "_" + new Date([year, i, j].join("-")).getDay()
        );
      }
    }
    return dates;
  },
};
```
