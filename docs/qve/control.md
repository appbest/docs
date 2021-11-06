# Control 动态控件

根据 json 参数动态创建组件

- [Tpl 参数](./tpl.md)

## Control 动态控件

<CodeRun auto editable>

```vue
<!-- 动态控件测试 -->
<template>
  <div>
    <div v-for="(item, index) in the.form" :key="index">
      <Control
        v-model="item.value"
        :named="item.named"
        :attr="item.attr"
        @onEvent="onControlEvent"
      />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const $plus = window.$plus;
    const { reactive } = $plus.vue;
    const message = $plus.message;

    /**    修改编辑json 改变控件 */
    const the = reactive({
      form: [
        {
          value: 12,
          named: 'App_ID',
          attr: { t: 'int', j: 1, c: 'panel' },
        },
        {
          value: null,
          named: 'UserName',
          attr: { t: 'string' },
        },
        {
          value: null,
          named: 'UserDate',
          attr: { t: 'date' },
        },
        {
          value: null,
          named: 'time',
          attr: { t: 'datetime' },
        },
        {
          value: null,
          named: 'title',
          attr: { t: 'text' },
        },
      ],
    });

    const onControlEvent = (resp) => {
      console.log('onControlEvent', JSON.stringify(resp));
      message.info(JSON.stringify(resp));
    };

    return { the, onControlEvent };
  },
};
</script>
```

```json
{
  /** 组件配置参数 */
  "attr": {
    // 传入的类型
    "type": Object,
    // 指定默认的值对应 pager
    "default": null
  },
  /** 是否只读 */
  "read": {
    "type": Boolean,
    "default": false
  },
  /** 是否动态响应组件 */
  "dynamic": Boolean
}
```

```js
// 组件类型
switch (_type.toLowerCase()) {
  case 'int':
  case 'int32':
  case 'int64':
  case 'long':
  case 'number':
    //   console.log('bindEditor:' + _type, JSON.stringify(_attr));
    model = InputNumber;
    break;
  case 'tel':
    // 手机号
    model = InputTel;
    break;
  case 'bool':
    model = SwitchTpl;
    break;
  case 'boolean':
    model = RadioTpl;
    break;
  case 'time':
    model = DateTpl('time');
    break;
  case 'date':
    model = DateTpl('date');
    break;
  case 'datetime':
    model = DateTpl();
    break;
  case 'json':
    model = TextJson;
    model.attrs.disabled = false;
    break;
  case 'ubb':
    model = TextUbb;
    model.attrs.disabled = false;
    break;
  case 'code':
    model = CodeEditorTpl;
    // 编辑模式
    model.attrs.disabled = false;
    break;
  case 'text': //多行文本
    model = Textarea;
    //  console.log('control.text', JSON.stringify(model));
    break;
  case 'panel':
    // 设置默认图标
    // console.log('control.panel', JSON.stringify(_attrs));
    // model = PanelTpl(_attrs.props.icon || 'icon-sousuo'icon-jiantouxia);
    model = PanelTpl('icon-sousuo');
    break;
  case 'string':
    break;
  default:
    // 未知属性
    console.warn('control.EditorBind.type', _type);
    break;
}
```

</CodeRun>

## vue 动态控件

```vue
<!-- 动态控件测试 -->
<template>
  <div>
    <component :is="htmlTpl" v-bind="par" />
  </div>
</template>

<script>
import {
  resolveDynamicComponent,
  // defineComponent
} from 'vue';

export default {
  setup() {
    const par = { val: 'qqq' };

    const htmlTpl = resolveDynamicComponent({
      template: '<div class="qv-field-read">{{val}}</div>',
      props: {
        val: {
          type: String,
          default: 'aaa',
        },
      },
    });
    // 直接加载组件名
    //const htmlTpl = resolveDynamicComponent('CodeEditor')

    return { htmlTpl, par };
  },
};
</script>
```


## Control props

| 属性 | 说明                          | 类型                  | 参数 | 默认值 |
| ---- | ----------------------------- | --------------------- | ------ | ------ |
| named  | 组件命名 |  String |     | upload   |
| type  | 上传文件类型,返回监听组件事件名cmd |  String  |  'base64', 'execl'|  base64 |
| multiple  | 是否开启多文件上传 |  Boolean  |  |  false |
| accept  | 指定上传文件类型 |  String  |type=base64,默认为`image/*`   |  null |
| max  | 最大上传尺寸单位为KB,默认3M |  Number  |  |   3 * 1024 |
| ratio  | 图片压缩质量等级  |  Number  |  |   0.6|
| scale  | 图片压缩缩放尺寸比例 |  Number  |  |  0.7 |
| mark  | 图片加水印 |  json  | {text:'加水印文字',style:'水印文字样式',font:'水印文字大小',x:'左边距',y:'顶边距'} |   null |
