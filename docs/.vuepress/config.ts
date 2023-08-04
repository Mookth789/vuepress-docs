// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
 module.exports = {
  title: '前端铺子',
  lang: 'zh-CN',
  // base:'/proj/qdpz-docs/',
  description: '一个开箱即用web移动端组件',
  head: createHead(),
  themeConfig: {
    repo: 'jekip/naive-ui-admin',
    docsRepo: 'jekip/naive-ui-admin-docs',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'Vbenjs Team' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'vben, vitejs, vite, ant-design-vue, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'vue vben admin docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: '指南',
      link: '/guide/introduction'
    },
    {
      text: '组件说明',
      link: '/components/mapLocus',
    },
	{
	  text: '功能教程',
	  link: '/fun/uploadQn',
	},
    {
      text: '相关链接',
      items: [
        {
          text: '在线预览',
          link: '/other/see',
        },
        {
          text: '项目源码',
          link: 'https://gitee.com/kevin_chou/qdpz',
        },
        {
          text: '文档源码',
          link: 'https://gitee.com/kevin_chou/qdpz-docs',
        },
		{
		  text: '点赞支持',
		  link: 'https://gitee.com/kevin_chou/qdpz/stargazers',
		}
      ],
    },
    {
      text: '赞助',
      link: '/other/donate',
    },
  ];
}

function createSidebar() {
  return {
	  '/fun/': [
	    {
	      text: '功能教程',
	      children: [
	        {
	          text: 'uniapp 上传七牛云',
	          link: '/fun/uploadQn',
	        }
	      ],
	    }
	],
    '/components/': [
      {
        text: '常用组件',
        children: [
          {
            text: '轨迹回放',
            link: '/components/mapLocus',
          },{
            text: '图表展示',
            link: '/components/ucharts',
          } ,
          {
            text: '自定义相机',
            link: '/components/camera',
          },
          {
            text: '聊天室',
            link: '/components/chat',
          },
          {
            text: '自定义键盘',
            link: '/components/keyboard',
          }
        ],
      },
	  {
	    text: '样式组件',
	    children: [
	      {
	        text: '证件识别',
	        link: '/components/cssDiscern',
	      },
		  {
		    text: '排行榜',
		    link: '/components/cssRankingList',
		  },
		  {
		    text: '登录合集',
		    link: '/components/cssLogin',
		  }
	    ],
	  },
	  {
	    text: '付费组件',
	    children: [
	      {
	        text: '智能抠图',
	        link: '/components/pay_matting',
	      },
		  {
		    text: '海报编辑器',
		    link: '/components/pay_poster',
		  }
	    ],
	  },
    ],
    '/': [
      {
        text: '基础',
        children: [
          {
            text: '介绍',
            link: '/guide/introduction',
          },
          {
            text: '开始',
            link: '/guide/',
          },
          {
            text: '项目配置',
            link: '/guide/settings',
          },
          {
            text: '路由',
            link: '/guide/router',
          },
          {
            text: '数据&联调',
            link: '/guide/mock',
          },
          {
            text: '组件使用',
            link: '/guide/component',
          },
          {
            text: '样式',
            link: '/guide/design',
          },
          {
            text: '构建&部署',
            link: '/guide/deploy',
          },
        ],
      }
    ],
  };
}
