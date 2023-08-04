# รายการการกำหนดค่าโครงการ

ใช้เพื่อแก้ไขการขึ้นต่อกันของโปรเจ็กต์ สิทธิ์ การจับคู่สี เค้าโครง การกำหนดเส้นทาง และการกำหนดค่าเริ่มต้นของคอมโพเนนต์

## การกำหนดค่าพื้นฐาน

- การกำหนดค่าพื้นฐานของโปรเจ็กต์อยู่ใน `manifest.json` ในไดเร็กทอรีรูทของโปรเจ็กต์
- ไฟล์ `manifest.json` เป็นไฟล์กำหนดค่าของแอปพลิเคชัน ซึ่งใช้เพื่อระบุชื่อ ไอคอน สิทธิ์ ฯลฯ ของแอปพลิเคชัน โปรเจ็กต์ที่สร้างโดย HBuilderX มีไฟล์นี้อยู่ในไดเร็กทอรีราก และโปรเจ็กต์ที่สร้างโดย CLI มีไฟล์นี้อยู่ในไดเร็กทอรี src

- สำหรับรายละเอียด โปรดดูที่ [เอกสารรายการ](https://uniapp.dcloud.io/collocation/manifest)

::: คำเตือน

* `Uni-app application ID (AppId)` ใน `basic configuration` ในไฟล์นั้นไม่ซ้ำกันและคุณต้องขอรับอีกครั้ง

*ในไฟล์ เลือก 'AppID' ใน 'WeChat Mini Program Configuration' คุณต้องสมัครโปรแกรมขนาดเล็กเพื่อกรอก AppID ของคุณ มิฉะนั้น คุณจะไม่สามารถ 'แสดงตัวอย่างอุปกรณ์จริง', 'แพ็คเกจ'

:::

### มุมมองที่มา

รหัสที่สมบูรณ์ของร้านค้าส่วนหน้า:

```จ
{
    "ชื่อ" : "7he、เควิน",
    "appid" : "__UNI__XXXXXXXXX",
    "คำอธิบาย" : "",
    "ชื่อเวอร์ชัน" : "1.0.0",
    "รหัสเวอร์ชัน" : "100",
    "transformPx" : เท็จ
    /* 5+เฉพาะแอพที่เกี่ยวข้อง */
    "แอปพลัส" : {
        "usingComponents" : จริง
        "nvueCompiler": "แอปเดียว",
        "compilerVersion" : 3,
        "หน้าจอ": {
            "alwaysShowBeforeRender" : จริง
            "รอ" : จริง,
            "ปิดอัตโนมัติ" : จริง
            "ล่าช้า" : 0
        },
        /* การกำหนดค่าโมดูล */
        "โมดูล" : {},
        /* ข้อมูลการเผยแพร่แอปพลิเคชัน */
        "แจกจ่าย" : {
            /* การกำหนดค่าบรรจุภัณฑ์ android */
            "แอนดรอยด์": {
                "สิทธิ์": [
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
            /* การกำหนดค่าบรรจุภัณฑ์ ios */
            "ไอโอเอส" : {},
            /* การกำหนดค่า SDK */
            "sdkConfigs": {}
        }
    },
    /* ด่วนที่เกี่ยวข้องกับแอปเฉพาะ */
    "แอปด่วน" : {},
    /* เกี่ยวข้องกับ Applet โดยเฉพาะ */
    "mp-weixin" : {
        "แอป" : "XXXXXXXXXXXXXXXXXX",
        "การตั้งค่า": {
            "urlCheck" : เท็จ,
            "ลดขนาด": จริง
        },
        "usingComponents" : จริง
        "ปลั๊กอิน" : {
            "tencentvideo" : {
                "เวอร์ชั่น" : "1.3.17",
                "ผู้ให้บริการ" : "XXXXXXXXXXXXXXXXXX"
            }
        },
        "การอนุญาต": {
            "ขอบเขต userLocation" : {
                "desc" : "รับตำแหน่งของผู้ใช้และสร้างฟังก์ชั่นตำแหน่งแผนที่"
            }
        }
    },
    "mp-alipay" : {
        "usingComponents" : จริง
    },
    "mp-baidu" : {
        "usingComponents" : จริง
    },
    "mp-toutiao" : {
        "usingComponents" : จริง
    },
    "ยูนิสถิติ" : {
        "เปิดใช้งาน" : เท็จ
    }
}

```