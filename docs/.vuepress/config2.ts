import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';

export default defineUserConfig({
  base: '/',
  title: 'Gmth',
  description: 'เอกสาร frontend-Backend',

  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
    // default theme options here
  }),
});