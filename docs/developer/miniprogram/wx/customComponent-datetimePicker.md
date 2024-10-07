---
title: 微信小程序 DatetimePicker 组件
---

# 微信小程序 DatetimePicker 组件

先创建小程序组件目录，在通过开发者工具可直接生成组件套件，这里采用的是 TS+Scss 模板。

### 组件目录

```base
| components
| - datetime-picker
| -- datetime-picker.json
| -- datetime-picker.scss
| -- datetime-picker.ts
| -- datetime-picker.wxml
```

### wxml

picker 开发里面用到了小程序开放的几个标签组件 ([page-container](https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html), [picker-view](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html), [picker-view-column](https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html)) 和插槽 ([slot](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html))，以下是文件源代码，没有注释：

```html
<!-- datetime-picker.wxml -->
<view class="picker-component">
  <view class="picker-trigger" bindtap="handleUsePicker">
    <slot></slot>
  </view>
  <page-container show="{{ show }}" round>
    <view class="picker-container">
      <view class="picker-header">日期时间选择器</view>
      <view class="picker-body">
        <picker-view
          indicator-style="height: 50px;"
          class="picker-view"
          value="{{ selection }}"
          bindchange="handleUpdatePickerValue"
        >
          <picker-view-column>
            <view wx:for="{{ years }}" wx:key="years" class="picker-column-item">{{ item }}</view>
          </picker-view-column>
          <picker-view-column>
            <view wx:for="{{ months }}" wx:key="months" class="picker-column-item">{{ item }}</view>
          </picker-view-column>
          <picker-view-column>
            <view wx:for="{{ dates }}" wx:key="dates" class="picker-column-item">{{ item }}</view>
          </picker-view-column>
          <picker-view-column>
            <view wx:for="{{ hours }}" wx:key="hours" class="picker-column-item">{{ item }}</view>
          </picker-view-column>
          <picker-view-column>
            <view wx:for="{{ minutes }}" wx:key="minutes" class="picker-column-item">{{ item }}</view>
          </picker-view-column>
          <picker-view-column wx:if="{{ second }}">
            <view wx:for="{{ seconds }}" wx:key="seconds" class="picker-column-item">{{ item }}</view>
          </picker-view-column>
        </picker-view>
      </view>
      <view class="picker-footer">
        <button bindtap="handleCancel">取消</button>
        <button type="primary" bindtap="handleConfirm">确认</button>
      </view>
    </view>
  </page-container>
</view>
```

### typescript

```typescript
// datetime-picker.ts
interface DateTimePickerOptions {
  show: Boolean;

  years: Array<number | string>;
  months: Array<number | string>;
  dates: Array<number | string>;
  hours: Array<number | string>;
  minutes: Array<number | string>;
  seconds: Array<number | string>;

  selection: Array<number>;
}

const _n = (n: number) => (n >= 10 ? n : `0${n}`);

/**
 * 获取指定长度的年份，已当前年份为中间值
 * @param offsetLength 年份上下偏差
 * @returns 年份数组
 */
function getYears(type: "picker" | "normal", offsetLength: number = 20) {
  let _years = [];
  let currentYear = new Date().getFullYear();

  for (let i = type === "picker" ? currentYear - offsetLength : currentYear; i < currentYear + offsetLength; i++) {
    _years.push(i);
  }

  return _years;
}

/**
 * 根据传入的年月获取日期数量
 * @param year 年份
 * @param month 月份
 * @returns 月份拥有的日期
 */
function getDates(year?: number, month?: number) {
  year = year || new Date().getFullYear();
  month = month || new Date().getMonth() + 1;

  let monthMaxDateLength = new Date(year, month, 0).getDate();
  let dates = [];

  for (let i = 1; i <= monthMaxDateLength; i++) {
    dates.push(_n(i));
  }

  return dates;
}

function getNumberArray(length: number = 12) {
  let nums = [];
  for (let i = 1; i <= length; i++) {
    nums.push(_n(i));
  }
  return nums;
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: String,
    second: Boolean,
    normal: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: <DateTimePickerOptions>{},

  lifetimes: {
    ready() {
      this.init();
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      let options: DateTimePickerOptions = {
        show: false,
        years: getYears(this.data.normal ? "normal" : "picker"),
        months: getNumberArray(),
        dates: getDates(),
        hours: getNumberArray(24),
        minutes: getNumberArray(60),
        seconds: getNumberArray(60),
        selection: [],
      };

      if (!this.data.value) {
        let _d = new Date();
        options.selection = [
          options.years.indexOf(_d.getFullYear()),
          options.months.indexOf(_n(_d.getMonth() + 1)),
          options.dates.indexOf(_n(_d.getDate())),
          options.hours.indexOf(_n(_d.getHours())),
          options.minutes.indexOf(_n(_d.getMinutes())),
          options.seconds.indexOf(_n(_d.getSeconds())),
        ];
      }

      this.setData(options);
      this.setData({
        selection: options.selection,
      });
    },

    handleUsePicker() {
      this.setData({ show: true });
    },

    handleUpdatePickerValue(e: any) {
      this.setData({ selection: e.detail.value });
    },

    handleCancel() {
      this.setData({ show: false });
    },

    handleConfirm() {
      let value = [
        this.data.years[this.data.selection[0]],
        this.data.months[this.data.selection[1]],
        this.data.dates[this.data.selection[2]],
        this.data.hours[this.data.selection[3]],
        this.data.minutes[this.data.selection[4]],
      ];

      if (this.data.second) {
        value.push(this.data.seconds[this.data.selection[5]]);
      }

      let format = [
        [value[0], value[1], value[2]].join("/"),
        [value[3], value[4], this.data.second ? value[5] : ""].join(":"),
      ].join(" ");

      this.triggerEvent("confirm", {
        value,
        format,
      });
      this.setData({
        show: false,
      });
    },
  },
});
```

### scss

```css
// datetime-picker.scss

.picker-container {
  padding-bottom: env(safe-area-inset-bottom);
}

.picker-header {
  text-align: center;
  padding: 32rpx;
}

.picker-body {
  height: 40vh;

  .picker-view {
    height: 100%;

    .picker-column-item {
      height: 50px;
      text-align: center;
    }
  }
}

.picker-footer {
  display: flex;
  padding: 20rpx 32rpx 0;

  button {
    margin: 0 16rpx;
    padding: 24rpx 0;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
```
