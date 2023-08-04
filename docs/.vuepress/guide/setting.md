# 项目配置项

用于修改项目的依赖、权限、配色、布局、路由、组件默认配置

## 基本配置

- 项目的基本配置位于项目根目录下的  `manifest.json`
- `manifest.json` 文件是应用的配置文件，用于指定应用的名称、图标、权限等。HBuilderX 创建的工程此文件在根目录，CLI 创建的工程此文件在 src 目录。

- 具体可以参考 [manifest 文档](https://uniapp.dcloud.io/collocation/manifest)

::: warning 注意

*文件内 `基础配置` 中 `uni-app应用标识(AppId)`, 是唯一的，是需要您重新获取

*文件内选择 `微信小程序配置` 中 `AppID` 需要您申请小程序填写您的AppID，否则无法 `真机预览`、`打包` 

:::

### 源码视图

前端铺子完整代码：

```js
{
    "name" : "7he丶Kevin",
    "appid" : "__UNI__XXXXXXXX",
    "description" : "",
    "versionName" : "1.0.0",
    "versionCode" : "100",
    "transformPx" : false,
    /* 5+App特有相关 */
    "app-plus" : {
        "usingComponents" : true,
        "nvueCompiler" : "uni-app",
        "compilerVersion" : 3,
        "splashscreen" : {
            "alwaysShowBeforeRender" : true,
            "waiting" : true,
            "autoclose" : true,
            "delay" : 0
        },
        /* 模块配置 */
        "modules" : {},
        /* 应用发布信息 */
        "distribute" : {
            /* android打包配置 */
            "android" : {
                "permissions" : [
                    "<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\"/>",
                    "<uses-permission android:name=\"android.permission.MOUNT_UNMOUNT_FILESYSTEMS\"/>",
                    "<uses-permission android:name=\"android.permission.READ_CONTACTS\"/>",
                    "<uses-permission android:name=\"android.permission.VIBRATE\"/>",
                    "<uses-permission android:name=\"android.permission.READ_LOGS\"/>",
                    "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\"/>",
                    "<uses-feature android:name=\"android.hardware.camera.autofocus\"/>",
                    "<uses-permission android:name=\"android.permission.WRITE_CONTACTS\"/>",
                    "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\"/>",
                    "<uses-permission android:name=\"android.permission.CAMERA\"/>",
                    "<uses-permission android:name=\"android.permission.RECORD_AUDIO\"/>",
                    "<uses-permission android:name=\"android.permission.GET_ACCOUNTS\"/>",
                    "<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>",
                    "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\"/>",
                    "<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\"/>",
                    "<uses-permission android:name=\"android.permission.WAKE_LOCK\"/>",
                    "<uses-permission android:name=\"android.permission.CALL_PHONE\"/>",
                    "<uses-permission android:name=\"android.permission.FLASHLIGHT\"/>",
                    "<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\"/>",
                    "<uses-feature android:name=\"android.hardware.camera\"/>",
                    "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\"/>",
                    "<uses-permission android:name=\"android.permission.WRITE_SETTINGS\"/>"
                ]
            },
            /* ios打包配置 */
            "ios" : {},
            /* SDK配置 */
            "sdkConfigs" : {}
        }
    },
    /* 快应用特有相关 */
    "quickapp" : {},
    /* 小程序特有相关 */
    "mp-weixin" : {
        "appid" : "XXXXXXXXXXXXXXXX",
        "setting" : {
            "urlCheck" : false,
            "minified" : true
        },
        "usingComponents" : true,
        "plugins" : {
            "tencentvideo" : {
                "version" : "1.3.17",
                "provider" : "XXXXXXXXXXXXXXXXX"
            }
        },
        "permission" : {
            "scope.userLocation" : {
                "desc" : "获取用户位置，制作地图定位功能"
            }
        }
    },
    "mp-alipay" : {
        "usingComponents" : true
    },
    "mp-baidu" : {
        "usingComponents" : true
    },
    "mp-toutiao" : {
        "usingComponents" : true
    },
    "uniStatistics" : {
        "enable" : false
    }
}

```