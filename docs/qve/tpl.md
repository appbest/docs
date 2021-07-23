# TPL 数据组件模板

## tpl 组件参数

```js
const testTpl = {
  //  是否从服务器取模板查询参数
  isHttp: false,

  tpl: {
    sql: '',
    field: {
      ID: 'ID',
      Code: '索引编码',
      App_ID: '应用ID',
      PageType: '类别',
      State: '页面状态',
      Path: '请求路径',
      Title: '页面标题',
      Description: '功能说明',
      MenuTitle: '菜单标题',
      MenuIcon: '菜单图标',
      MenuOpen: '菜单打开模式',
      CodeLang: '代码语言',
      CodeVersion: '代码版本',
      CodeTime: '代码更新',
      CodeSource: '源代码',
      CodeCompile: '编译代码',
      SF_ID: '编辑状态',
      MUser_ID: '编辑者',
      U_Time: '编辑时间',
    },
    // 前端自定义外键查询
    join: null,
    //join: {"MUser_ID":{"table":"QF_User","title":"LastFirst"}}
    // join: [
    //   {
    //     tField: 'QF_Group_ID',
    //     cTable: 'AP10000DB.[dbo].[QF_Group]',
    //     cTitle: 'NameShort'
    //   }
    // ],
    attr: {
      ID: {
        t: 'Int64',
        pk: 1,
        r: 1,
      },
      Code: {
        t: 'String',
        n: true,
        v: '0',
        max: 50,
      },
      App_ID: {
        t: 'Int32',
        n: true,
        v: '1',
        c: 'panel',
        api: '/Api/QF_Group/',
      },
      PageType: {
        t: 'Int32',
        n: true,
        v: '1',
        ls: '1:api接口,2:menu菜单,3:vue组件,5:html',
      },
      State: {
        t: 'Int32',
        n: true,
        v: '1',
        ls: '1:暂停,2:启用,3:停用,4:删除',
      },
      Path: {
        t: 'String',
        max: 2147483647,
        tip: '请求时进行权限验证',
      },
      Title: {
        t: 'String',
        n: true,
        max: 200,
      },
      Description: {
        t: 'String',
        max: 1000,
        w: 500,
      },
      MenuTitle: {
        t: 'String',
        max: 50,
        d: 1,
      },
      MenuIcon: {
        t: 'String',
        max: 50,
      },
      MenuOpen: {
        t: 'String',
        max: 200,
      },
      CodeLang: {
        t: 'String',
        n: true,
        v: 'vue',
        max: 50,
      },
      CodeVersion: {
        t: 'String',
        n: true,
        v: '0.0.1',
        max: 50,
      },
      CodeTime: {
        t: 'DateTime',
        n: true,
        v: 'getdate()',
      },
      CodeSource: {
        t: 'String',
        g: 'encode',
        max: 2147483647,
        h: 1,
        c: 'code',
      },
      CodeCompile: {
        t: 'String',
        max: 2147483647,
        h: 1,
      },
      SF_ID: {
        t: 'Int32',
        n: true,
        v: '1',
        r: 1,
        e: 1,
        a: 1,
      },
      MUser_ID: {
        t: 'Int64',
        n: true,
        v: '1',
        r: 1,
        e: 1,
      },
      U_Time: {
        t: 'DateTime',
        n: true,
        v: 'getdate()',
        r: 1,
        e: 1,
      },
    },
    // 按钮权限参数
    act: '1,2,3,4,5,6,7',
    // 自定义默认键
    keys: {
      // 主键
      primary: 'ID',
      // 审核字段
      auth: 'SF_ID',
    },
    // 自定义排序
    sort: null,
    th: null,
    // 列表界面配置
    listor: null,
    // 编辑窗体配置
    editor: null,
  },
};
```

## tpl.attr 组件规则

| 事件名    | 说明                                                                                | 类型    | 列表控件 | 编辑控件 |
| --------- | ----------------------------------------------------------------------------------- | ------- | -------- | -------- |
| h         | 控件表头字段不显示,1                                                                | Number  | -        |          |
| a         | 内容需审核字段标识,1                                                                | Number  |          |          |
| e         | 列表扩展显示,1                                                                      | Number  |          |          |
| r         | 只读,1                                                                              | Number  |          |          |
| n         | 必填字段,非空格                                                                     | Boolean |          |          |
| v         | 新增默认值,`泛型`                                                                   |         |          |          |
| t         | 数据库字段类型                                                                      | String  |          |          |
| ls        | 多选项                                                                              | Number  |          |          |
| tip       | 内容提示                                                                            | Number  |          | ？       |
| max       | 输入内容最大值                                                                      | Number  |          |          |
| api       | 外键查询面板数据接口                                                                | Number  |          | c:panel  |
| c         | [自定义显示控件名](./tpl.md)                                                        | String  |          |          |
| g         | 自定义内容编码格式，`encode`                                                        | String  |          |          |
| w         | 列表宽度                                                                            | Number  |          |          |
| f         | 自定义数据库字段名，`field`                                                         | String  | -        | -        |
| k `0.4.3` | 自定义点击触发的字段名                                                              | String  | listor   |          |
| j `0.4.4` | 自定义外键表显示的字段名,默认不配置匹配最后一个字段，或配置为本字段名不显示外键内容 | String  | listor   |          |

## attr.k eventKey 点击触发

点击触发事件名，用于接收事件 cmd 响应

```js
let _th = {
  title: _value,
  key: _key,
  //  resizable: true,
  //  width: the.row.width,
};

if (_attr.k) {
  // 点击触发事件名，用于接收事件cmd响应
  _th.eventKey = _attr.k;
}

// 主建 the.tpl.keys.primary
if (_attr.pk) {
  _th.width = _th.width || 50;
  _th.className = 'qv-table-index';
  _th.eventKey = _key;
  // 主建
  _th.primary = true;
  // console.log(key, _attr);
}
```

## attr.j 外键索引字段

- 外键查询数据返回字段规则

t.索引键.外键显示字段名

- 同表外键多个查询返回值，需要指定外键显示字段，不指定默认匹配最后一个值

```js
// 以下示例，j:指定关联外键字段
const tpl = {
  // 属性规则
  attr: {
    App_ID: {
      t: 'Int32',
      n: true,
      v: '1',
      c: 'panel',
      api: '/Api/QF_Group/',
      j: 'Title', //自定义显示的关联外键字段
    },
    MUser_ID: {
      t: 'Int64',
      n: true,
      v: '1',
      r: 1,
      e: 1,
    },
  },
};

const list = [
  {
    ID: 5,
    App_ID: 1,
    Title: '客户关系管理',
    SF_ID: 2,
    MUser_ID: 2,
    U_Time: '2012-05-06 10:23:30',
    't.MUser_ID.LastFirst': '架构管理员',
    't.App_ID.Title': '初始化',
    't.App_ID.AppKey': null,
  },
];
```

# join 外键查询

- QF_Model 数据对象管理
  fields 外键表显示字段, 默认显示最后一个字段 Title

```js
const join = {
  MUser_ID: { table: 'QF_User', fields: 'LastFirst' },
  // 主表外键关联字段
  LoginCode: {
    // 不需要跨服务器查询
    server: false,
    // 外键表
    table: 'QF_UserPhoneJoin',
    // 外键表关联字段
    primary: 'Phone',
    // 外键表显示字段
    fields: 'Department,NickName',
  },
  App_ID: {
    table: 'QF_AppInfo',
    fields: 'AppKey,AppWeb,Title',
    primary: 'ID',
  },
};
```

## attr.c 自定义组件

| 控件名 | 说明     | 列表控件 | 编辑控件    |
| ------ | -------- | -------- | ----------- |
| panel  | 外键查询 | -        | PanelListor |

- 外键查询面板

```js
const tpl = {
  // 服务器配置，无需下发前端
  attr: {
    App_ID: {
      t: 'Int32',
      n: true,
      v: '1',
      c: 'panel', //定义外键查询面板
      // api: '/Api/QF_Group/', // 自定义数据源，默认为空，取当前表格数据源
    },
  },
};
```
