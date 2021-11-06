<!-- .vitepress/theme/Layout.vue -->
<template>
  <!-- LoadingBar 全局加载进度组件 -->
  <LoadingBar />
  <!-- Message 全局提示通知组件 -->
  <Message />
  <!-- Frames 全局浮动窗口组件 -->
  <Frames :mobile="frameMobile"
          :specs="frameSpecs"
          dynamic />
  <Layout>
    <template #sidebar-top>
      <!-- 搜索 -->
      <SearchBar @onEvent="SearchEvent"
                 :words="keywords" />
    </template>
  </Layout>
  <!-- <Content /> make sure to include markdown outlet -->
</template>
<script>
//import 'quick-plugin-md/dist/styles/index.css'
import { onMounted, ref } from 'vue'
import { html } from 'quick.lib'
import { useRouter, useData } from 'vitepress'
//import Theme from '/@theme/index';
//import theme from 'vitepress/dist/client/theme-default/index.js';
import DefaultTheme from 'vitepress/theme';
const Layout = DefaultTheme.Layout

//const { theme } = useData()
//import Layout from 'vitepress/dist/client/theme-default/Layout.vue';

/**
 * 搜索根目下的全局数据
 */
import keywords from "../../../keywords.json";

export default {
  components: { Layout },
  setup () {

    // const { siteData } = useSiteData()
    const { site } = useData()

    /** 路由 */
    const router = useRouter();
    /** 搜索事件触发 */
    const SearchEvent = (data) => {
      // 发布根目录
      let _url = site.value.base + data.url.substr(1);
      // let _url = data.url.substr(1);
      // let _url = data.url;
      console.log('SearchEvent：', _url);
      router.go(_url);
    };

    // 浮窗初始化 是否小屏幕尺寸，全屏打开
    const frameMobile = ref(false)
    // 浮窗基础参数配置
    const frameSpecs = ref({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    })

    const onResize = () => {
      // 页面基础字体 缩放
      const rem = html.fontRem();

      // 初始化 基础字体大小
      // fontSize(rem.fontSize)

      // 小屏幕尺寸，全屏打开
      frameMobile.value = rem.offsetWidth < 1024 ? true : false;

      // 窗体宽度
      frameSpecs.value = {
        width: rem.offsetWidth,
        height: document.body.clientHeight
      }
      // console.log('App.frameSpecs:' + frameMobile.value, JSON.stringify(frameSpecs.value));
      // console.log('App.onResize:' + frameMobile.value, rem);
    }

    onMounted(() => {
      // 执行基础字体缩放
      onResize()
      // 窗口发生变化时
      window.onresize = onResize;
    })

    return { keywords, SearchEvent, frameMobile, frameSpecs }
  }
}
</script>

<style lang="less">
.sidebar {
  width: 16rem !important;

  .sidebar-link-item {
    font-size: 0.8rem !important;
  }
}
</style>