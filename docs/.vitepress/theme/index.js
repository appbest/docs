// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
//const Layout = DefaultTheme.Layout;
import Layout from './Layout.vue';

import startup from './startup';

export default {
  // ...DefaultTheme,
  Layout,
  NotFound: DefaultTheme.NotFound, // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    // app.component('Picture', Picture);
    // 注册全局组件
    app.use(startup, {
      plus: true,
      log: true
    });
  }
};
