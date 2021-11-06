# Menu 导航菜单

## Menu 菜单

用于页面导航的菜单列表，建议一次取出全部菜单到前端处理

## 代码示例

<CodeRun auto editable>

```vue
<template>
  <div class="menu-ui-page">
    <Menu :data="the.sidebar" @onEvent="onMenuEvent" />
  </div>
</template>

<script>
export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;

    const the = reactive({
      sidebar: [
        {
          icon: 'icon-rili',
          path: '/workplace',
          title: '工作台',
          dot: true,
          // 子菜单
          children: [
            {
              icon: 'icon-menu',
              path: '/TestTree',
              title: '树列表',
            },
            {
              icon: 'icon-menu',
              path: '/TestTree',
              title: '树列表',
              dot: '99',
            },
            { icon: 'icon-menu', path: '/TestTree', title: '树列表' },
          ],
        },
        {
          icon: 'icon-rili',
          path: '/home',
          title: '首页',
        },
      ],
    });

    /**
     *  菜单点击
     */
    const onMenuEvent = (resp) => {
      console.log('btnMenu', resp);
      switch (resp.cmd) {
        case 'click':
          break;
      }
    };

    return { the, onMenuEvent };
  },
};
</script>
<style lang="less">
.menu-ui-page {
  ul,
  li {
    list-style: none outside none;
  }
  background-color: #1a202c;
  width: 8rem;
  .title {
    font-size: 0.6rem;
  }
}
</style>
```

</CodeRun>

## Menu props

| 属性          | 说明       | 类型   | 默认值 |
| ------------- | ---------- | ------ | ------ |
| named `0.4.8` | 组件命名   | String | menu   |
| data          | 子菜单数据 | Array  | -      |

## Menu events

| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| onEvent | 点击触发回调事件 | json   |

#### Events cmd `click`

- 选择子菜单触发

| 参数名        | 说明     | 类型   |
| ------------- | -------- | ------ |
| named `0.4.8` | 组件命名 | String |
| active        | 当前层级 | String |
| item          | 当前对象 | Object |

### MenuItem props

- [badge](./badge.md)

| 属性  | 说明                          | 类型                  | 默认值 |
| ----- | ----------------------------- | --------------------- | ------ |
| icon  | 图标，参考图标库              | String                | -      |
| path  | 路径                          | String                | -      |
| title | 显示文字                      | String                | -      |
| dot   | 显示小红点,或者自定义显示内容 | Boolean,String,Number | true   |
