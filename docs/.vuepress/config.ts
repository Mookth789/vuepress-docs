import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';

export default defineUserConfig({
  base: '/',
  title: 'Gmth',
  description: 'เอกสารการใช้งาน ฝั่ง frontend-Backend',

  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
    // default theme options here
  }),
});
