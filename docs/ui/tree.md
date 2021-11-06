# Tree 树形组件

用来展示树形结构的数据，具有展开关闭等功能

## Tree 示例

<CodeRun auto editable>

```vue
<template>
  <div>
    <Row>
      <Col span="4">
        <Tree checked :data="the.tree.list" @onEvent="onTreeEvent" />
      </Col>
      <Col span="20">
        <div>{{ the.tree.onItem.id }}{{ the.tree.onItem.title }}</div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const { reactive } = $plus.vue;
    const { bll } = $plus.quick;

    const the = reactive({
      tree: {
        // 当前点击节点
        onItem: {},
        // 勾选数组
        onChecks: [],
        // 节点数据列表
        list: [
          {
            title: '组织',
            id: 1,
          },
          {
            title: '角色',
            id: 2,
            children: [
              {
                id: 21,
                title: '人民',
              },
              {
                id: 22,
                title: '群众',
              },
            ],
          },
        ],
      },
    });

    /** 树点击事件 */
    const onTreeEvent = (resp) => {
      console.log('onTreeEvent', resp.item);
      switch (resp.cmd) {
        case 'open':
          getTree(resp.bind, resp.item);
          break;
        case 'click':
          the.tree.onItem = resp.item;
          break;
        case 'check':
          //勾选
          if (resp.checked) {
            // 添加新的
            the.tree.onChecks.push(resp.value);
          } else {
            // 取消勾选
            bll.array.del(the.tree.onChecks, resp.value);
          }
          console.log('onTreeEvent.check', resp);
          break;
      }
    };

    return { the, onTreeEvent };
  },
};
</script>
```

</CodeRun>

## Tree Props

| 属性    | 说明               | 类型    | 默认值       |
| ------- | ------------------ | ------- | ------------ |
| theme   | 默认黑暗主题       | String  | qv-tree-dark |
| active  | 自定义激活节点     | String  | -            |
| data    | 绑定的数据         | Array   | -            |
| checked | 是否启用勾选       | Boolean | false        |
| primary | 绑定勾选取值的字段 | String  | id           |

### Tree data 绑定的数据

| 属性     | 说明           | 类型   | 默认值 |
| -------- | -------------- | ------ | ------ |
| id       | 节点勾选绑定值 | String |        |
| title    | 节点描述       | String | -      |
| children | 子节点         | Array  | -      |

## Tree events

| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| onEvent | 点击触发回调事件 | json   |

#### Events cmd `open`

- 展开子项触发返回

| 参数名 | 说明         | 类型   |
| ------ | ------------ | ------ |
| active | 当前层级     | String |
| item   | 当前选中的项 | Object |
