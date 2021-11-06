# Form 表单

具有数据收集、校验和提交功能的表单，包含单选框、输入框、按钮等元素。

## Form 验证

<CodeRun auto editable>

```vue
<template>
  <Form
    class="text-test-page-form"
    label-width="20%"
    label-mark="："
    :model="the.data"
    :rules="the.rules"
    @onEvent="onFormEvent"
  >
    <Field label="开始日期" prop="startDate">
      <DatePicker
        v-model="the.data.startDate"
        type="date"
        placeholder="请选择日期"
      />
      <TimePicker v-model="the.data.startTime" placeholder="请选择日期与时间" />
    </Field>

    <Field label="截止时间" prop="endTime">
      <DatePicker
        v-model="the.data.endTime"
        type="datetime"
        placeholder="请选择日期与时间"
      />
      <Tooltip content="时间选择"> ？ </Tooltip>
    </Field>

    <Field>
      <Switch v-model="the.data.bool" @onEvent="onSwitch" />

      <RadioGroup v-model="the.data.bool" :list="the.radioGroupList" />

      <span>
        <Radio v-model="the.data.bool" value="true" name="test-radio-text2" />

        是1

        <Radio v-model="the.data.bool" value="false" name="test-radio-text2" />
        否0
      </span>
    </Field>

    <Field label="密码测试" prop="password">
      <Input
        v-model="the.data.password"
        type="password"
        placeholder="Enter password"
      />
    </Field>
    <Field label="组织ID" prop="ID">
      <Input
        v-model="the.data.ID"
        placeholder="请输入组织ID"
        type="number"
        icon="icon-sousuo"
        @onEvent="onGroupEvent"
      />
    </Field>

    <Field label="外键查询" prop="ID">
      <Input
        v-model="the.data.ID"
        placeholder="请输入ID"
        style="width:12rem"
        type="number"
        icon="icon-sousuo"
        @onEvent="onGroupEvent"
      />
    </Field>

    <Field>
      <Textarea
        v-model="the.url"
        placeholder="请输入多行文本框"
        spellcheck="false"
        rows="3"
      />
    </Field>
    <Field>
      <Textjson
        v-model="the.jsonValue"
        placeholder="请输入json"
        spellcheck="false"
        rows="15"
      />
    </Field>

    <Field label="基础组件选项" tip="测试">
      <Select v-model="the.data.type" @onEvent="onSizeEvent">
        <option
          v-for="(item, index) in the.data.typeList"
          :key="index"
          :value="index"
        >
          {{ item }}
        </option>
      </Select>
    </Field>

    <Field>
      <Checkbox value="all" @onEvent="onCheckEvent" /> 全选
      <Checkbox
        v-for="(item, index) in the.data.typeList"
        :key="index"
        v-model="the.data.typeCk"
        :value="index"
      >
        {{ item }};
      </Checkbox>
    </Field>
    <Field>
      <Button type="primary" long loading @click="btnEvent('save')">
        提交
      </Button>
    </Field>
  </Form>
</template>

<script>
const testdb = [
  { ID: 101, Title: '初始化' },
  { ID: 201, Title: '组织2' },
  { ID: 302, Title: '组织3' },
];

export default {
  setup(props, context) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const { reactive } = $plus.vue;

    const the = reactive({
      url: '',
      jsonValue: '',
      radioGroupList: {
        启用: true,
        停止: false,
      },
      data: {
        ID: 123,
        modelID: 0,
        userId: 0,
        name: '',
        password: 'abc',
        type: 2,
        typeCk: [3],
        typeList: ['初始', '正常', '已审', '撤审', '删除'],
        tel: 1890000000,
        startDate: '2020-09-02',
        startTime: '12:51:32',
        endTime: '2020-09-08 12:01',

        bool: false,
      },
      /** 规则 */
      rules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            message: '长度必须大于6位',
            trigger: 'blur',
          },
          { tip: '测试规则提示' },
        ],
      },
      ui: {
        attr: {
          ID: { v: 0, t: 'Int64', c: 'panel', api: '/Api/QF_Group/' },
          modelID: { v: 0, t: 'Int64', c: 'panel', api: '/Api/QF_Model/' },
          userId: { v: 0, t: 'Int64', c: '' },
          type: {
            ls: '0:初始,1:正常,2:已审,3:撤审,4:删除',
          },
          bool: { t: 'bool' },
          tel: { t: 'tel' },
          name: {},
        },
      },
      /** 对话框 */
      modal: {
        title: '请勾选',
        show: false,
      },
      /** 面板 */
      panel: {
        // 数据源地址
        api: '',
        // 返回绑定的主键
        named: '',
        // 查询字段
        field: {},
        // 查询数据
        list: [],
      },
      tag: {
        key: '',
        css: ['default', 'info', 'primary', 'success', 'error', 'warning'],
      },
    });

    const onSizeEvent = (data) => {
      console.log('onSizeEvent', data);
    };

    // 组织点击
    const onGroupEvent = (resp) => {
      console.log('onGroupEvent:', resp);

      switch (resp.cmd) {
        case 'icon':
          // 字段
          the.panel.field = {
            ID: '编号',
            Title: '描述',
          };

          // 数据
          the.panel.list = testdb;
          the.modal.show = true;
          break;

        case 'search':
          // 查询
          break;
      }
    };

    /** 输入事件 */
    const onInputEvent = (resp) => {
      console.log('onInput:', resp);

      // the.panel.api = '/Api/QF_Group/'

      let _api = '';

      if (the.ui.attr && resp.id) {
        _api = the.ui.attr[resp.id].api || '';
      }

      console.log('onInput:' + resp.id, _api);

      the.panel.api = _api;
      the.panel.named = resp.id;
      // the.modal.show = true
    };

    /** 日期触发 */
    const onDateEvent = (resp) => {
      console.log('onDateEvent', resp);
      switch (resp.cmd) {
        case 'InputPlus':
          // 输入框外挂事件
          break;
      }
    };

    /** 面板触发事件 */
    const onPanelEvent = (resp) => {
      console.log('onGroupEvent:', JSON.stringify(resp));

      switch (resp.cmd) {
        case 'checkAll':
          // 全选
          break;
        case 'checked':
          if (resp.item) {
            // 选择的数据选项
            the.data[resp.named] = resp.item.ID;
          }
          // the.modal.show = false
          break;

        case 'close':
          // 关闭窗口
          the.modal.show = false;
          break;
      }
    };

    /** 标签事件 */
    const onTagEvent = (resp) => {
      switch (resp.cmd) {
        case 'close':
          // 关闭
          the.tag.css.splice(parseInt(resp.name), 1);
          break;
        case 'click':
        default:
          console.log('onTagEvent:', resp);
          break;
      }
    };

    const onSwitch = (resp) => {
      console.log('onSwitch:', resp);
    };

    /** 全选 */
    const onCheckEvent = (resp) => {
      console.log('onCheckEvent:', resp);

      //resp.value 是组件自定义绑定值，根据实际应用定义
      if (resp.value === 'all') {
        // 全选
        let _list = [];
        if (resp.checked) {
          // 选中
          for (let i in the.data.typeList) {
            _list.push(i);
          }
        }
        the.data.typeCk = _list;
      }
    };

    /**
     * 回调验证事件
     */
    const onFormEvent = (resp) => {
      //  console.log('onFormEvent', resp)

      switch (resp.cmd) {
        case 'validator':
          // 数据验证
          the.rulesPass = resp.isPass;
          break;
        // case 'enter':
        //   //回车
        //   sendLogin()
        //   break;
      }
    };

    return {
      the,
      onSizeEvent,
      onGroupEvent,
      onInputEvent,
      onPanelEvent,
      onTagEvent,
      onSwitch,
      onCheckEvent,
      onDateEvent,
      onFormEvent,
    };
  },
};
</script>
```

</CodeRun>

## Form props

| 属性          | 说明                                        | 类型    | 默认值 |
| ------------- | ------------------------------------------- | ------- | ------ |
| named         | 组件命名                                    | String  | form   |
| model         | 表单数据对象                                | Object  |        |
| rules         | 表单验证规则 validator                      | Object  | null   |
| labelMark     | 符号标记                                    | String  |        |
| labelWidth    | 表单域标签宽度                              | String  |        |
| labelPosition | 表单域标签的位置，可选值为 left、right、top | String  | right  |
| inline        | 表单样式，是否水平排列                      | Boolean | false  |
| showMessage   | 是否显示验证规则提示消息                    | Boolean | true   |

## Field props

Field 默认从属于 Form 子组件规则

| 属性       | 说明                               | 类型    | 默认值 |
| ---------- | ---------------------------------- | ------- | ------ |
| label      | 表单域标签显示文本                 | String  |        |
| labelMark  | 符号标记                           | String  |        |
| labelWidth | 表单域标签宽度                     | String  |        |
| required   | 是否必填规则                       | Boolean | false  |
| rules      | 表单字段单个验证规则数组 validator | Array   |        |
| prop       | 表单验证规则命名                   | String  |        |
| class      | 标签样式，自定义                   | String  | -      |

## Rules 表单验证规则

- [validator 规则验证](./validator)

| 属性          | 说明                 | 类型    | 默认值 |
| ------------- | -------------------- | ------- | ------ |
| required      | 是否必填             | Boolean | false  |
| type          | 输入类型             | String  | -      |
| message       | 提示内容             | String  | -      |
| trigger       | 触发方式，可选`blur` | String  | -      |
| min           | 输入最短长度         | Number  | -      |
| value `0.4.8` | 输入的内容           |         |        |
