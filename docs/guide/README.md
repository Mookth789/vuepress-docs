# Guide

# 路由

项目路由配置存放于 [主目录/package.json](https://gitee.com/kevin_chou/qdpz/blob/develop/pages.json) ，通过在package.json文件中增加uni-app扩展节点，可实现自定义条件编译平台（如钉钉小程序、微信服务号等平台）

::: warning 注意事项

- UNI_PLATFORM仅支持填写uni-app默认支持的基准平台，目前仅限如下枚举值：h5、mp-weixin、mp-alipay、mp-baidu、mp-toutiao、mp-qq
- BROWSER 仅在UNI_PLATFORM为h5时有效,目前仅限如下枚举值：Chrome、Firefox、IE、Edge、Safari、HBuilderX
- package.json文件中不允许出现注释，否则扩展配置无效
- vue-cli需更新到最新版，HBuilderX需升级到 2.1.6+ 版本
:::

## 示例

### 示例：初始项目
package.json扩展配置用法（拷贝代码记得去掉注释！）：
```js
{
    /**
     package.json其它原有配置 
     */
    "uni-app": {// 扩展配置
        "scripts": {
            "custom-platform": { //自定义编译平台配置，可通过cli方式调用
                "title":"自定义扩展名称", // 在HBuilderX中会显示在 运行/发行 菜单中
                "BROWSER":"",  //运行到的目标浏览器，仅当UNI_PLATFORM为h5时有效
                "env": {//环境变量
                    "UNI_PLATFORM": "",  //基准平台
                    "MY_TEST": "", // ... 其他自定义环境变量
                 },
                "define": { //自定义条件编译
                    "CUSTOM-CONST": true //自定义条件编译常量，建议为大写
                }
            }
        }    
    }
}
```

### 示例：钉钉小程序
如下是一个自定义钉钉小程序（MP-DINGTALK）的package.json示例配置（拷贝代码记得去掉注释）：
```js
"uni-app": {
    "scripts": {
        "mp-dingtalk": { 
        "title":"钉钉小程序", 
            "env": { 
                "UNI_PLATFORM": "mp-alipay" 
            },
            "define": { 
                "MP-DINGTALK": true 
            }
        }
    }
}
```
#### 在代码中使用自定义平台
开发者可在代码中使用MP-DINGTALK进行条件编译，如下：
```js
// #ifdef MP
小程序平台通用代码（含钉钉）
// #endif
// #ifdef MP-ALIPAY
支付宝平台通用代码（含钉钉）
// #endif
// #ifdef MP-DINGTALK
钉钉平台特有代码
// #endif
```

### 示例：微信服务号
如下是一个自定义微信服务号平台（H5-WEIXIN）的示例配置：
```js
"uni-app": {
    "scripts": {
        "h5-weixin": { 
            "title":"微信服务号",
            "BROWSER":"Chrome",  
            "env": {
                "UNI_PLATFORM": "h5"  
             },
            "define": { 
                "H5-WEIXIN": true 
            }
        }
    }    
}
```
开发者可在代码块中使用H5-WEIXIN变量，如下：
```
// #ifdef H5
H5平台通用代码（含微信服务号）
// #endif
// #ifdef H5-WEIXIN
微信服务号特有代码
// #endif
```

### 示例：前端铺子完整示例
小程序项目打包有大小限制(2M)，故项目中做了分包处理(subPackages[{}])：
```js
{
	"easycom": {
		"^u-(.*)": "@/uview-ui/components/u-$1/u-$1.vue"
	},
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index/tabbar",
			"style": {
				"navigationBarTitleText": "宅家学IT",
				"navigationStyle": "custom"
			}
		},
		{
			"path": "pages/me/salary",
			"style": {
				"navigationBarTitleText": "薪资排行",
				"navigationStyle": "custom"
			}
		},
		{
			"path": "pages/me/aboutMe",
			"style": {
				"navigationBarTitleText": "关于作者",
				"navigationStyle": "custom"
			}
		},
		{
			"path": "pages/me/mentalTest/list",
			"style": {
				"navigationBarTitleText": "答题测试",
				"navigationStyle": "custom"
			}
		},
		{
			"path": "pages/me/mentalTest/index",
			"style": {
				"navigationBarTitleText": "答题测试",
				"navigationStyle": "custom"
			}
		},
		{
			"path": "pages/me/mentalTest/explain",
			"style": {
				"navigationBarTitleText": "答题规则说明"
			}
		},
		{
			"path": "pages/news/news",
			"style": {
				"navigationBarTitleText": "资讯详情"
			}
		},
		{
			"path": "pages/video",
			"style": {
				"navigationBarTitleText": "视频播放",
				"usingComponents": {
					// #ifdef  MP-WEIXIN 
					"txv-video": "plugin://tencentvideo/video"
					// #endif
				}
			}
		},
		{
			"path": "pages/project/list",
			"style": {
				"navigationBarTitleText": "项目展示",
				"navigationStyle": "custom"
			}
		},
		{
			"path": "pages/project/project",
			"style": {
				"navigationBarTitleText": "项目展示",
				"navigationStyle": "custom"
			}
		},
		{
			"path": "pages/timeline",
			"style": {
				"navigationStyle": "custom"
			}
		},
		{
			"path": "pages/design",
			"style": {
				"navigationStyle": "custom"
			}
		},
		{
			"path": "pages/main/customCamera",
			"style": {
				"navigationBarTitleText": "自定义相机/图片编辑器"
			}
		}
	],
	"subPackages": [{
		"root": "tn_components",
		"pages": [{
				"path": "pano",
				"style": {}
			}, {
				"path": "bggrad",
				"style": {
					"navigationStyle": "custom"
				}
			}, {
				"path": "bgcolor",
				"style": {
					"navigationStyle": "custom"
				}
			}, {
				"path": "ancube",
				"style": {
					"navigationStyle": "custom"
				}
			}, {
				"path": "anloading",
				"style": {
					"navigationStyle": "custom"
				}
			}, {
				"path": "mimicry",
				"style": {
					"navigationStyle": "custom"
				}
			}, {
				"path": "mapLocus",
				"style": {
					"navigationStyle": "custom"
				}
			},
			{
				"path": "charts",
				"style": {
					"navigationBarTitleText": "图表展示"
				}
			},
			{
				"path": "poster",
				"style": {
					"navigationStyle": "custom"
				}
			},
			{
				"path": "discern",
				"style": {
					"navigationStyle": "custom"
				}
			}, {
				"path": "sign",
				"style": {
					"navigationBarTitleText": "电子签名"
				}
			}, {
				"path": "district",
				"style": {
					"navigationBarTitleText": "行政区图"
				}
			},
			{
				"path": "search",
				"style": {
					"navigationStyle": "custom",
					"navigationBarTitleText": "便捷查询"
				}
			},
			{
				"path": "salary",
				"style": {
					"navigationBarTitleText": "排行榜",
					"navigationStyle": "custom"
				}
			},
			{
				"path": "course",
				"style": {
					"navigationBarTitleText": "班级课程",
					"navigationStyle": "custom"
				}
			},
			{
				"path": "openDocument",
				"style": {
					"navigationStyle": "custom",
					"navigationBarTitleText": "文档预览"
				}
			},
			{
				"path": "company",
				"style": {
					"navigationBarTitleText": "自定义相机"
				}
			},
			{
				"path": "timeline",
				"style": {
					"navigationBarTitleText": "时间轴"
				}
			},
			{
				"path": "guide",
				"style": {
					"navigationStyle": "custom",
					"navigationBarTitleText": "引导页面"
				}
			},
			{
				"path": "request",
				"style": {
					"navigationStyle": "custom",
					"navigationBarTitleText": "模拟数据加载"
				}
			},
			{
				"path": "keyboard",
				"style": {
					"navigationStyle": "custom"
				}
			},
			{
				"path": "drag_demo/index",
				"style": {
					"navigationBarTitleText": "悬浮球"
				}
			},
			{
				"path": "timetables",
				"style": {
					"navigationStyle": "custom",
					"navigationBarTitleText": "课程表"
				}
			},
			{
				"path": "imageEditor",
				"style": {
					"navigationBarTitleText": "图片编辑器"
				}
			},
			{
				"path": "clock",
				"style": {
					"navigationStyle": "custom",
					"navigationBarTitleText": "每日签到"
				}
			},
			{
				"path": "medal",
				"style": {
					"navigationStyle": "custom",
					"navigationBarTitleText": "权益页面"
				}
			}
		]
	}],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "uni-app",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8"
	}
}
```