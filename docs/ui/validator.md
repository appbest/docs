# validator 验证规则

- [async-validator 库](https://npmjs.org/package/async-validator)

## validator 验证规则类型

integer -- 整形
float -- 浮点型
array -- 数组
regexp -- 正则表达式
object -- 对象
method -- 函数 function
email -- 邮箱
number -- 数字
date -- 日期 new Date()
url -- 网址
hex -- 十六进制数

- qveui > validator.js
- qve > attr.js
  - bindAttrRlus

<CodeRun auto editable>

```js
// <Input v-model="the.formData.phone"
//                  type="tel"
//                  style="width:90%"
//                  placeholder="请输入手机号"
//                  autofocus />
//{"t":"string","n":true,"v":"0","max":50}
//[{"required":true,"message":"必填"},{"max":50,"message":"长度不能大于50"}]

//{"t":"int32","n":true,"v":"1","c":"panel"}
//[{"required":true,"message":"必填"},{"type":"number","message":"请输入数字 "}]

//{"t":"string","max":2147483647,"tip":"请求时进行权限验证"}
//[{"tip":"请求时进行权限验证"}]

let rules = {
  phone: [
    { required: true, message: '请输入登录手机号' },
    { min: 11, message: '长度最小11位' }
  ],
  Code: [
    {
      //必填
      required: true,
      // 验证空格输入
      whitespace: true,
      message: '必填'
    },
    { max: 50, message: '长度不能大于50' }
  ],
  App_ID: [
    { required: true, message: '必填' },
    { type: 'number', message: '请输入数字 ' }
  ],
  Path: [{ tip: '请求时进行权限验证' }],
  Title: [
    { required: true, message: '必填' },
    { max: 200, message: '长度不能大于200' }
  ],
  Description: [{ max: 1000, message: '长度不能大于1000' }],
  MenuTitle: [{ max: 50, message: '长度不能大于50' }],
  MenuIcon: [{ max: 50, message: '长度不能大于50' }],
  MenuOpen: [{ max: 200, message: '长度不能大于200' }],
  CodeLang: [
    { required: true, message: '必填' },
    { max: 50, message: '长度不能大于50' }
  ],
  CodeVersion: [
    { required: true, message: '必填' },
    { max: 50, message: '长度不能大于50' }
  ],
  CodeTime: [{ required: true, message: '必填' }],
  CodeSource: [],
  CodeCompile: []
};

// 引入规则
const { validatorRule } = window.$Plus;
// tpl 模板规则转化转换绑定
const { bindAttrRlus } = window.$Plus.qve;

// 规则描述
const descriptor = {
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { type: 'string', min: 6, message: '长度必须大于6位', trigger: 'blur' }
  ],
  name: [
    {
      type: 'string',
      required: true,
      validator: (rule, value) => value === 'muji'
    }
  ]
};

// 对象内容
const model = { password: 'abc', name: 'us' };

// 执行验证
validatorRule(descriptor, model, (resp) => {
  console.log('validator.model', resp);
});

return {
  attr: bindAttrRlus({ t: 'string', n: true, v: '0', max: 50 })
};
```

</CodeRun>
