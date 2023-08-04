# uniApp上传文件至七牛云 (Nodejs)
> 纯干货！全网最全教程，前端同学即可操作！包含两种方式上传

::: tip 🔰 温馨提醒：
本教程针对有一定基础的同学，会搭建后端Nodejs，并且有云服务器及七牛云账号
:::

## 七牛云 操作
 - Step 1： 注册登录七牛云
 - Step 2： 个人中心 - 密钥管理 - 创建密钥（之后有用）
<p><img src="https://cdn.zhoukaiwen.com/wd_qn_01.png" width="90%" style="text-align: left;border:1px solid #dddddd"/></p>

 - Step 3： 对象存储Kodo中新建空间，用于存放资源，CDN 加速域名可自行绑定
	1. 开通对象存储七牛云会赠送30天免费空间域名；
	2. CDN 加速域名添加CNAME记录需要在您的域名厂商处配置，比如您在 阿里云 / 腾讯云等处购买的域名，您需要前往购买域名的厂商相应管理控制台，添加域名解析，[可参考七牛云文档](https://developer.qiniu.com/fusion/kb/1322/how-to-configure-cname-domain-name) 
 - Step 4：<span style="color:green;"> ✅ 创建完成后显示以下空间图 </span>
<p><img src="https://cdn.zhoukaiwen.com/wd_qn_02.png" width="90%" style="text-align: left;border:1px solid #dddddd"/></p>

## Nodejs 服务端
::: tip 💫 项目搭建：
Nodejs项目搭建教程不在本教程内说明，后端源码可查看我的开源项目，[点此链接](https://gitee.com/kevin_chou/qdpz-nodejs)
:::

<span style="font-weight: bold;"> 🟢 Step 1：项目安装七牛云依赖： npm install qiniu</span>

<span style="font-weight: bold;"> 🟢 Step 2： routes 里创建接口：/api/upload</span>
 ```js
 if (method === 'POST' && req.path === '/api/upload') {
 	const uploadPromise = uploadFun();
 	return uploadPromise.then(uploadData =>{
 		if(uploadData){
 			const result = {
 				qnToken: uploadData
 			}
 			return new SuccessModel(result);
 		}else{
 			return new ErrorModel('上传失败...');
 		}
 	});
 }
 ```
 <span style="font-weight: bold;"> 🟢 Step 3： controllers 编写逻辑代码</span>
  ```js
  // 第一步
  const qiniu = require('qiniu');	//引入七牛云服务
  var accessKey = 'afLEwxUxxxxxxxxxxxxxxxNvL9xxxxxxxxBq';	//your access key
  var secretKey = '0qNDxxxxxxxxVWFmcIxxxxxQxxxxxxLQkMPP';	//your secret key
  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);	//声明Mac
  
  //第二步，我使用的是最简单的方式，默认qnToken时间
  const uploadFun = () => {
  	return new Promise(resolve => {
  		var options = {
  			scope: 'funski',	//存储空间名称
  		};
  		var putPolicy = new qiniu.rs.PutPolicy(options);
  		var uploadToken = putPolicy.uploadToken(mac);
  		// console.log('七牛云token:', uploadToken);
  		resolve(uploadToken);
  	})
  }
  ```
<span style="font-weight: bold;color:green">这样就大功告成，前端访问接口：`https://api.xxxxx.com/api/upload ` 就可以拿到七牛云返回的Token！</span>
<p><img src="https://cdn.zhoukaiwen.com/wd_qn_03.png" width="60%" style="text-align: left;border:1px solid #dddddd"/></p>


## uniApp 客户端	
::: tip 🎴 说明：
	以下上传代码为uniApp端，如使用其他平台(例如：后台管理系统、Ajax、Axios等)，上传请选择SDK方案，与uniApp有差异
:::
<span style="font-weight: bold;">uniapp上传文件至七牛云，有两种方案，以下代码可自行选择</span>
```js
// 上传图片
 ChooseImage() {
 	uni.chooseImage({
 		count: 1, //上传张数
 		sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
 		sourceType: ['album'], //从相册选择
 		success: (res) => {
 			this.uploadFun(res.tempFilePaths)
 		}
 	});
 },
 
 // 图片上传至七牛云 - 包含两种方案
 uploadFun(imgPath) {
 	let opts = {
 		url: 'api/upload',
 		method: 'post'
 	};
 	request.httpRequest(opts).then(res => {
 		var qnToken = res.data.data.qnToken;	// 获取到七牛云Token
		// 方案一（推荐）：
		// 需要引入七牛云SDK，安全性高，功能齐全！
		// import qiniuUploader from '@/common/qiniuUploader.js'  //使用时将sdk,地址中的文件单独拿出
 		imgPath.forEach(itme => {
 			let key = 'FunSki-' + new Date().getTime() + Math.floor( Math.random(1000))
 			qiniuUploader.upload(itme, (res) => {
 				// 成功后的操作，例如：替换网页原图片等...
 			}, (error) => {
 				console.log('error: ' + error);
 			}, {
				//所在区域：ECN, SCN, NCN, NA, ASG，分别对应七牛云的：华东，华南，华北，北美，新加坡 5 个区域
 				region: 'NCN', //服务器区域号
 				domain: 'funskicdn.zhoukaiwen.com', //七牛云域名
 				key: key, // 上传到七牛云图片就是这路径
 				uptoken: qnToken, // 由其他程序生成七牛 uptoken 
 			}, (res) => {
 				console.log('上传进度', res.progress)
 				console.log('已经上传的数据长度', res.totalBytesSent)
 				console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
 			}, (res) => {
 				// 取消上传
 			}, (res) => {
 				// `before` 上传前执行的操作
 			}, (err) => {
 				// `complete` 上传接受后执行的操作(无论成功还是失败都执行)
 			});
 		})
 		return;
		
 		// 'https://up.qiniup.com';		//代表华东区域
 		// 'https://up-z1.qiniup.com';	//代表华北区域
 		// 'https://up-z2.qiniup.com';	//代表华南区域
 		// 'https://up-as0.qiniup.com';	//代表东南亚区域
 		// 'https://up-na0.qiniup.com';	//代表北美区域
 		// 方案二：uniapp自带上传方案，不需要装七牛云SDK（但功能有限制，安全性低 - 不能自定义文件名，空间固定，无上传进度等等）
 		wx.uploadFile({
 			url: 'https://up-z1.qiniup.com', //此处为华北地区
 			name: 'file',
 			filePath: imgPath,
 			header: {
 				"Content-Type": "multipart/form-data"
 			},
 			formData: {
 				token: qnToken, //后端返回的token
 			},
 			success: function(res) {
 				console.log(res)
 			},
 			fail: function(res) {
 				console.log(res)
 			}
 		});
 	});
 },
 ```
 <span style="font-weight: bold; color:green;">uniapp小程序选择图片上传成功</span>
 <p><img src="https://cdn.zhoukaiwen.com/wd_qn_04.png" width="90%" style="text-align: left;border:1px solid #dddddd"/></p>
 
 >   [七牛云SDK 下载](https://cdn.zhoukaiwen.com/qiniuUploader.zip)

## SDK下载
::: tip 使用方案一
- 使用方案1 的同学，SKD的js文件我已经上传到云，下载解压导入即可[七牛云SDK 下载](https://cdn.zhoukaiwen.com/qiniuUploader.zip)
:::

**如您有其他方面的定制开发，可以联系作者微信：280224091（备注：外包需求）**

