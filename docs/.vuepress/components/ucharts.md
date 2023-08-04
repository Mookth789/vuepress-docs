# 图表展示
基于 `uCharts` 组件进行整合的页面，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）

## 官方体验

::: tip 温馨提醒
一套代码编到7个平台，依次扫描二维码，亲自体验uCharts图表跨平台效果！IOS因demo比较简单无法上架，请自行编译
:::
<img src="https://box.kancloud.cn/58092090f2bccc6871ca54dbec268811_654x479.png" width="70%" />

## 快速上手
::: warning 注意事项
注意前提条件【版本要求：HBuilderX 3.1.0+】
:::
 1. 插件市场点击右侧绿色按钮【使用HBuilderX导入插件】，或者【使用HBuilderX导入示例项目】查看完整示例工程
 2. 依赖uniapp的vue-cli项目：请将uni-modules目录复制到src目录，即src/uni_modules。（请升级uniapp依赖为最新版本）
 3. 页面中直接按下面用法直接调用即可，无需在页面中注册组件qiun-data-charts
 4. 注意父元素class='charts-box'这个样式需要有宽高


## 基本用法

 - template代码：[（建议使用在线工具生成）](https://demo.ucharts.cn/#/)

```vue
<view class="charts-box">
    <qiun-data-charts type="column" :chartData="chartData" />
</view>
```
 - 标准数据格式1：（折线图、柱状图、区域图等需要categories的直角坐标系图表类型）
 
```json
chartData:{
  categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
  series: [{
    name: "目标值",
    data: [35, 36, 31, 33, 13, 34]
  }, {
    name: "完成量",
    data: [18, 27, 21, 24, 6, 28]
  }]
}
```

 - 标准数据格式2：（饼图、圆环图、漏斗图等不需要categories的图表类型）
 ```json
 chartData:{
   series: [{
     data: [
       {
         name: "一班",
         value: 50
       }, {
         name: "二班",
         value: 30
       }, {
         name: "三班",
         value: 20
       }, {
         name: "四班",
         value: 18
       }, {
         name: "五班",
         value: 8
       }
     ]
   }]
 }
 ```
注：其他特殊图表类型，请参考mockdata文件夹下的数据格式，v2.0版本的uCharts已兼容ECharts的数据格式，v2.0版本仍然支持v1.0版本的数据格式。


### localdata数据渲染用法
- 使用localdata数据格式渲染图表的优势：数据结构简单，无需自行拼接chartData的categories及series，从后端拿回的数据简单处理即可生成图表。
- localdata数据的缺点：并不是所有的图表类型均可通过localdata渲染图表，例如混合图，组件并不能识别哪个series分组需要渲染成折线还是柱状图，涉及到复杂的图表，仍需要由chartData传入。

- template代码：[（建议使用在线工具生成）](https://demo.ucharts.cn/#/)

```vue
<view class="charts-box">
    <qiun-data-charts type="column" :localdata="localdata" />
</view>
```
 - 标准数据格式1：（折线图、柱状图、区域图等需要categories的直角坐标系图表类型）
 
其中value代表数据的数值，text代表X轴的categories数据点，group代表series分组的类型名称即series[i].name。
```json
localdata:[
  {value:35, text:"2016", group:"目标值"},
  {value:18, text:"2016", group:"完成量"},
  {value:36, text:"2017", group:"目标值"},
  {value:27, text:"2017", group:"完成量"},
  {value:31, text:"2018", group:"目标值"},
  {value:21, text:"2018", group:"完成量"},
  {value:33, text:"2019", group:"目标值"},
  {value:24, text:"2019", group:"完成量"},
  {value:13, text:"2020", group:"目标值"},
  {value:6, text:"2020", group:"完成量"},
  {value:34, text:"2021", group:"目标值"},
  {value:28, text:"2021", group:"完成量"}
]
```

 - 标准数据格式2：（饼图、圆环图、漏斗图等不需要categories的图表类型）

其中value代表数据的数值，text代表value数值对应的描述。
```json
localdata:[
  {value:50, text:"一班"},
  {value:30, text:"二班"},
  {value:20, text:"三班"},
  {value:18, text:"四班"},
  {value:8, text:"五班"},
]
```
注意，localdata的数据格式必需要符合datacom组件规范[【详见datacom组件】](https://uniapp.dcloud.io/component/datacom?id=mixindatacom)。


## 组件事件/方法

| 事件名             | 说明                                 |
| ---------------- | ----------------------------------- |
| @complete     | 图表渲染完成事件，渲染完成会返回图表实例{complete: true, id:"xxxxx"(canvasId), type:"complete"}。可以引入config-ucharts.js/config-echarts.js来根据返回的id，调用uCharts或者ECharts实例的相关方法，详见other.vue其他图表高级应用。               |
| @getIndex  | 获取点击数据索引，点击后返回图表索引currentIndex，图例索引（仅uCharts）legendIndex，等信息。返回数据：{type: "getIndex", currentIndex: 3, legendIndex: -1, id:"xxxxx"(canvasId), event: {x: 100, y: 100}（点击坐标值）}             |
| @error  | 当组件发生错误时会触发该事件。返回数据：返回数据：{type:"error",errorShow:true/false(组件props中的errorShow状态值) , msg:"错误消息xxxx", id: "xxxxx"(canvasId)}             |
| @getTouchStart  | （仅uCharts）拖动开始监听事件。返回数据：{type:"touchStart",event:{x: 100, y: 100}（点击坐标值）,id:"xxxxx"(canvasId)}             |
| @getTouchMove  | （仅uCharts）拖动中监听事件。返回数据：{type:"touchMove",event:{x: 100, y: 100}（点击坐标值）,id:"xxxxx"(canvasId)}             |
| @getTouchEnd  | （仅uCharts）拖动结束监听事件。返回数据：{type:"touchEnd",event:{x: 100, y: 100}（点击坐标值）,id:"xxxxx"(canvasId)}             |
| @scrollLeft  | （仅uCharts）开启滚动条后，滚动条到最左侧触发的事件，用于动态打点，需要自行编写防抖方法。返回数据：{type:"scrollLeft", scrollLeft: true, id: "xxxxx"(canvasId)}             |
| @scrollRight  | （仅uCharts）开启滚动条后，滚动条到最右侧触发的事件，用于动态打点，需要自行编写防抖方法。返回数据：返回数据：{type:"scrollRight", scrollRight: true, id: "xxxxx"(canvasId)}             |

## 相关链接
 - [DCloud插件市场地址](https://ext.dcloud.net.cn/plugin?id=271)
 - [uCharts官网](https://www.ucharts.cn/)
 - [uCharts在线生成工具](http://demo.ucharts.cn/) （注：v2.0版本后将不提供配置手册，请通过在线生成工具生成图表配置）
 - [uCharts码云开源托管地址](https://gitee.com/uCharts/uCharts)
 - [uCharts基础库更新记录](https://gitee.com/uCharts/uCharts/wikis/%E6%9B%B4%E6%96%B0%E8%AE%B0%E5%BD%95?sort_id=1535998)
 - [uCharts改造教程](https://gitee.com/uCharts/uCharts/wikis/%E6%94%B9%E9%80%A0uCharts%E6%89%93%E9%80%A0%E4%B8%93%E5%B1%9E%E5%9B%BE%E8%A1%A8?sort_id=1535997)
 - [图表组件在项目中的应用 UReport数据报表](https://ext.dcloud.net.cn/plugin?id=4651)
 - [ECharts官网](https://echarts.apache.org/zh/index.html)
 - [ECharts配置手册](https://echarts.apache.org/zh/option.html)
 - [`wkiwi` 提供的w-loading组件地址](https://ext.dcloud.net.cn/plugin?id=504)