// 样式库
import 'qveui/dist/fonts/iconfont.css';
import 'qveui/dist/styles/index.less';
import 'qve/dist/styles/index.less';
import 'quick-plugin-md/styles/index.css';
//import './styles/index.less';

/** vue原生方法 */
import * as $vue from './vue.api';

import quick from 'quick.lib';
import qveui from 'qveui';
import qve from 'qve';

import * as ui from 'qveui';
import * as $qve from 'qve';
import qpmd from 'quick-plugin-md';

const install = function(app, opts) {
  opts = opts || {};
  // 判断是否安装
  if (install.installed) return;

  // Object.keys(components).forEach(key => {
  //   app.component(key, components[key]);
  // });

  app.use(quick, {
    init: true,
  });

  // 插件库
  app.use(qpmd);

  app.use(qveui, {
    init: true,
    log: { isPrint: true },
    // 全局配置
    // config: {
    //   ui: {
    //     // 是否小屏幕
    //     isMobile: document.body.clientWidth < 1024,
    //   },
    // },
  });

  app.use(qve);

  // 全局挂载
  let $plus = {
    vue: $vue,
    // 自定义挂载
    quick,
    // url,
    // store: $store,
    // router: $router,
    ui,
    loading: ui.loading,
    confirm: ui.confirm, //对话
    message: ui.message, //消息
    frame: ui.frame, //弹窗
    qve: $qve,
    http: $qve.http,
    config: $qve.config,
  };

  let _resp = `version:${$plus.version}`;

  if (typeof window !== 'undefined' && opts.plus) {
    if (window.$plus) {
      // 添加其它自定义外挂
      for (let key in window.$plus) {
        $plus[key] = window.$plus[key];
      }
    }

    // 全局原生挂载
    window.$plus = $plus;
    // window.$qveui = qveui;
    // window.$quick = quick;
    _resp += ';window.$plus';

    // 读取当前外挂的组件
    _resp += '[';
    // 显示外挂的key
    for (let _key in $plus) {
      _resp += ',' + _key;
    }
    _resp += `];`;
  }

  // 调试日志
  if (typeof opts.log !== 'undefined') {
    //调试日志输出
    console.log('docs', _resp);
  }
};

// 导出该组件
export default {
  install,
};
