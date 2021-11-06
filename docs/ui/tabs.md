# Tabs 标签页

## 说明

选项卡切换组件，常用于平级区域大块内容的的收纳和展现。

## 代码示例

<CodeRun auto editable>

```vue
<!-- 帮助 -->
<template>
  <div>
    <Tabs
      :list="the.tabs.list"
      :active="the.tabs.active"
      closable
      scrolled
      @onEvent="onTabsEvent"
    >
      <template #qv-tabs-2> 插槽内容 2 </template>
      <template #qv-tabs-3> 插槽内容 3 </template>
      <template #qv-tabs-4> 插槽内容 4 </template>
    </Tabs>
  </div>
</template>

<script>
// 引用方式
//import { reactive, h } from '../../components/vue.api';

export default {
  setup() {
    // 外挂vue
    const { reactive, h } = window.$plus.vue;

    const the = reactive({
      tabs: {
        active: 0,
        list: [
          {
            title: '架构关系',
            dot: true,
            body: '<b>html 内容，不是用插槽</b>',
          },
          {
            title: '架构分组',
            // dot: true,
            // tip: "item.tip",
            model: {
              props: {
                title: ' 函数组件 传入的参数',
              },
              // 进行组件标记
              //  component: Help,
              // 函数组件
              component: (props, { emit }) => {
                //let _text = props.text || ''

                const btnEvent = () => {
                  console.log('btnEvent');
                  emit('onEvent', { cmd: 'init', data: props.title });
                };

                //  return h('div', `${props.title}`)
                return h('div', [
                  h(
                    'Button',
                    {
                      class: ['foo', 'bar'],
                      style: { margin: '10px' },
                      // attrs: attrs,
                      onClick: btnEvent,
                    },
                    `${props.title}`
                  ),
                ]);

                // return () => (
                //   <div>{props.text}</div>
                // )
              },
            },
            /** 监听组件回调 */
            onEvent: (resp) => {
              the.tabs.list[1].tip = '99';
              console.log('onEvent', resp);
            },
          },
          {
            title: '应用授权',
          },
          {
            title: '服务器',
          },
          {
            title: '组织列表',
          },
        ],
      },
    });

    const onTabsEvent = (resp) => {
      console.log('onTabsEvent', resp);
      switch (resp.cmd) {
        case 'click':
          // 标签点击切换触发
          break;
        case 'close':
          // 标签点击关闭触发
          the.tabs.list.splice(resp.index, 1);
          break;
      }
    };

    return { the, onTabsEvent };
  },
};
</script>
```

</CodeRun>

## Tabs props

| 属性          | 说明                 | 类型    | 默认值         |
| ------------- | -------------------- | ------- | -------------- |
| named `0.4.2` | 组件触发事件名称     | String  | tabs           |
| css `0.4.2`   | 样式皮肤，默认带框线 | String  | qv-tabs-border |
| active        | 选中页的序号         | Number  | -              |
| closable      | 默认是否有关闭按钮   | Boolean | false          |
| scrolled      | 默认是否有滑动按钮   | Boolean | false          |
| list          | 标签页的数据         | Array   | []             |

### Tabs.list props

| 参数名  | 说明                        | 类型     |
| ------- | --------------------------- | -------- |
| title   | 菜单名称                    | String   |
| body    | html 内容                   | String   |
| model   | 绑定组件`{props,component}` | josn     |
| onEvent | 监听子项组件回调            | function |

## Tabs slot

| 名称                   | 说明               |
| ---------------------- | ------------------ |
| bar `0.4.2`            | 插入头部标签条     |
| extra                  | 头部标签条右边扩展 |
| qv-tabs-'当前项的索引' | 标签序号内容插槽   |
| 无                     | 标签内容插槽       |

## Tabs events

| 事件名  | 说明                  | 值     |
| ------- | --------------------- | ------ |
| onEvent | 点击触发回调事件      | json   |
| cmd     | 指令 `click` ,`close` | string |
| named   | 组件命名              | string |
| index   | 当前标签页的索引      | Number |
| item    | 当前点击对象          | Object |
