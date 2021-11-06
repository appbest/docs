# Table 表格

用于展示大量结构化数据

## Table 求和

<CodeRun auto editable>

```vue
<template>
  <div>
    <Table
      border
      :columns="the.columns"
      :data="the.dataTest"
      :foots="the.foots"
      :checkeds="the.checkeds"
      show-foot
      style="width:70%"
      @onEvent="tableEvent"
    >
    </Table>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;

    // 触发按钮
    const btnIndex = (index) => {
      console.log(index, 'index');
      frame.open({
        title: '测试函数组件',
        model: {
          props: the.data[index],
          // 进行组件标记
          // 函数组件
          component: (props) => {
            return h('div', `${props.name}`);
          },
        },
      });
    };

    const the = reactive({
      columns: [
        {
          // 显示行号
          type: 'index',
          // 自定义样式
          style: 'width:1.5rem;text-align:left;',
          // 事件触发
          event: btnIndex,
        },
        {
          // 勾选
          type: 'check',
        },
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
          /**
           * 事件触发
           *
           */
          event: (value, event) => {
            //获取点击对象
            let el = event.currentTarget;
            el.innerHTML = 'ok';
            console.log(typeof value, 'event:' + value);
          },
        },
        {
          title: 'Address',
          key: 'address',
        },
        {
          title: '日期',
          key: 'date',
        },
      ],
      // 默认选择
      checkeds: [0, 2],
      dataTest: [
        {
          name: 'John Brown',
          age: 1,
          address: '<b>New York</b> No. 1 Lake Park',
          date: '2016-10-03',
        },
        {
          name: 'Jim Green',
          age: 2,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
        },
        {
          name: 'Joe Black',
          age: 3,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
        },
      ],
      // 表格底部
      foots: [
        {
          // 定义列名与 显示事件或者求和方法
          name: '合计',
          // 绑定方法(表格数据)
          age: (data) => {
            let value = 0;
            data.map((item) => {
              value += item.age;
            });
            //求和
            return value;
          },
        },
      ],
      data: [],
      // 查询分页标签
      paged: {
        // 查询地址
        api: '',
        // 查询模板类型 1:接口属性,2:只查询数据，不返回属性,其它自定义
        tpl: 2,
        // 查询条件
        where: [],
        // 查询扩展参数
        par: null,
        // 扩展外键查询
        join: null,
        // 当前页码
        index: 1,
        // 每页取数据条数
        size: 5,
        // 分页数
        sizes: [5, 10, 30, 50, 100],
        /** 总条数 */
        count: 0,
        // 是否小型分页
        // small: true,
        // 最大页码按钮数
        // max: 4,
        // 页码按钮
        // layout: 'count, sizes, prev, pager, next, jumper',
      },
    });

    /**
     * 表格触发事件
     *
     */
    const tableEvent = (resp) => {
      // 触发事件
      console.log('tableEvent', resp);
      switch (resp.cmd) {
        case 'td':
          if (resp.key === 'btn-td-index') {
            // 数据行点击
            btnIndex(resp.index);
          } else {
            // 数据行点击 ，获取点击对象
            resp.event.currentTarget.innerHTML = 'ok';
          }

          break;
        case 'checked':
          // 表格勾选
          the.checkeds = resp.checkeds;
          break;
        //thSort 表头排序
        case 'error_thSort':
          // 排序报错
          console.error('test.error_thSort', resp.error);
          $plus.message.error('排序错误，请检查配置:' + resp.data.key);
          break;
        default:
          console.log('test.tableEvent', JSON.stringify(resp));
          break;
      }
    };

    return { the, tableEvent };
  },
};
</script>
```

</CodeRun>

## Table props

| 属性     | 说明                                            | 类型   | 默认值          |
| -------- | ----------------------------------------------- | ------ | --------------- |
| data     | 显示的`JSON`结构化数据，数据内容支持 `html`标签 | Array  | []              |
| columns  | 表格列的配置                                    | Array  | []              |
| css      | 表格样式，可以设置表格宽度，例如`width:4rem`    | String | qv-table-border |
| rowMax   | 显示的行数，超过 10 条启用滑动条                | Number | 10              |
| foots    | 表格底部栏，显示数组，例如合计等                | Array  | []              |
| checkeds | 初始勾选中的数组                                | Array  | []              |

## Table events

| 事件名  | 说明                  | 返回值 |
| ------- | --------------------- | ------ |
| onEvent | 点击触发回调事件      | json   |
| cmd     | 指令 `click` ,`close` | string |

### Table cmd `td`

- 点击表格数据触发

| 参数名 | 说明           | 类型   |
| ------ | -------------- | ------ |
| index  | 当前行的索引   | Number |
| key    | 当前列的表头   | String |
| event  | 点击的回调事件 | Object |

### Table cmd `thSort`

- 点击表头排序触发

| 参数名 | 说明         | 类型   |
| ------ | ------------ | ------ |
| data   | 当前列的数据 | Object |

### Table cmd `checked`

- 点击勾选数据触发

| 参数名           | 说明               | 类型    |
| ---------------- | ------------------ | ------- |
| named            | 触发组件的命名     | string  |
| id               | 触发对象 id        | string  |
| checked          | 是否选中           | Boolean |
| index            | 当前选中列的索引值 | Number  |
| checked          | 是否全部选中       | Boolean |
| checkeds `0.4.5` | 所有选中的数组     | Array   |

### Table cmd `checkAll`

- 点击全选触发

| 参数名           | 说明               | 类型    |
| ---------------- | ------------------ | ------- |
| named            | 触发组件的命名     | string  |
| id               | 触发对象 id        | string  |
| key              | 当前列的表头       | String  |
| index            | 当前选中列的索引   | Number  |
| checked          | 是否全部选中       | Boolean |
| checkeds `0.4.5` | 所有当前数组的序号 | Array   |

- `0.5.1` 取消的属性
  - list 属性取消
  - start 开始的页数
