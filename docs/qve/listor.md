# 数据列表

- [请参考 tpl 参数配置](./tpl.md)

## Listor 数据查询列表

<CodeRun auto editable>

```vue
<!-- 列表组件 -->
<template>
  <div class="test-list-page">
    <Listor :config="the.config" @onEvent="onListorEvent" />

    <TextJson v-model="the.config" class="test-json" rows="10" />
  </div>
</template>

<script>
export default {
  setup(props, context) {
    const _tpl = {
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
      // 结合查询
      // "join": {
      //   "MUser_ID": {
      //     "table": "QF_User",
      //     "title": "LastFirst"
      //   },
      //   "App_ID": {
      //     "table": "QF_AppInfo",
      //     "title": "Title",
      //     "field": "ID"
      //   }
      // },
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
          j: 1, //外键查询
          c: 'panel', // 调用的面板
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
          w: 200,
        },
        Title: {
          t: 'String',
          n: true,
          max: 200,
          w: 120,
        },
        Description: {
          t: 'String',
          max: 1000,
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
          max: 2147483647,
          g: 'encode',
          h: 1,
          c: 'code',
        },
        CodeCompile: {
          t: 'String',
          max: 2147483647,
          g: 'encode',
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
      /** 数据与按钮权限*/
      act: '1,2,3,4,5,6,7,8,9,10,16',
      keys: {
        primary: 'ID',
        auth: 'SF_ID',
      },
      /** 查询排序 */
      sort: null,

      /** 自定义数据编辑ui */
      editor: null,
      /** 自定义数据列表ui */
      listor: {
        // 自定义查询分页
        //paged: null,
        /*查询组合*/
        // select: {},
        // /* 查询条件符号*/
        // options: [
        //   {
        //     value: '=',
        //     label: '=',
        //   }
        // ],
        // /** 不显示的列 */
        // cut: ['CodeSource'],
        show: {
          // 2新增
          btnNew: true,
          // 4删除
          btnDel: false,
          // 6审核
          btnAudit: false,
          // 7 超级撤审
          btnRevoke: false,
          // 8擦除
          btnErase: false,
          // 多个条件查询框状态
          dialog: false,
          /* 表格是否允许勾选*/
          check: true,
          // 是否显示编辑器
          editor: false,
        },
        // 列宽度
        // width:100,
        // 表合计列
        // sum: {
        //   // 是否显示合计列
        //   show: false,
        //   // 合计指定列, 默认不配置全表合计
        //   keys: [],
        // }
      },
    };

    const { reactive } = window.$plus.vue;

    /** 组件参数 */
    const the = reactive({
      config: {
        // 查询数据源, 默认true 取服务器
        isHttp: false,
        // 数据请求源配置
        http: {
          // 请求地址
          url: '',
          // 请求参数
          data: {
            tpl: 1,
          },
        },
        // 自定义界面
        tpl: _tpl,
      },
    });

    /**
     * 列表编辑器事件监听
     */
    const onListorEvent = (resp) => {
      console.log('onListorEvent', resp);
    };

    return { the, onListorEvent };
  },
};
</script>
<style lang="less">
.test-list-page {
  margin: 1rem;
  .test-json {
    width: 70%;
  }
}
</style>
```

</CodeRun>

## 自定义底部与求和

```js
/** 列表编辑 */
const _listor = {
  // 传入合计列
  sum: ['App_ID'],
  // 自定义底部
  foots: [
    {
      ID: '合',
      Code: (data) => {
        let value = 0;
        data.map((item) => {
          value += parseInt(item.Code);
        });
        //求和
        return value;
      },
    },
  ],
};
```

## 勾选触发事件

```js
/** 列表编辑 */
const tpl = {
  // 列表扩展配置
  listor: {
    // 自定义按钮
    btns: {
      btnAddTree: {
        title: '添加树节点',
      },
    },
    // 监听事件触发
    events: {
      /** 自定义按钮触发(listor 对象) */
      btnAddTree: (resp) => {
        console.log('btnAddTree', the.tree.onItem, resp.table.checkList);
      },
    },
  },
};
```

## 自定义监听事件

```js
/** 列表编辑 */
const tpl = {
  listor: {
    // 监听事件触发，事件名不能重复
    events: {
      // 后台配置传入是 function 函数代码
      App_ID: `  
        (resp) => {
          console.log('td.App_ID', resp);
          console.log('传入的参数集合：', arguments);

          //  console.log('td.App_ID', resp);
          const { message } = window.$plus.ui;
          message.info(resp.data.ID);

        } `,
      // 前端可以直接写函数
      Code: (resp) => {
        // console.log('td.App_ID', resp);
        //  console.log('传入的参数集合：', arguments);

        //  console.log('td.Code', resp);
        const { message } = window.$plus.ui;
        message.info(resp.data.ID);
      },
    },
  },
};

/** 控件内全局事件定义，自定义事件名请勿重名 */
let useEvents = {
  /**
   * 添加按钮事件
   */
  btnAdd: () => {
    const _win = openEditor(
      '新增',
      {
        cmd: 'add',
        ui: the.tpl,
        data: {},
      },
      (_resp) => {
        // console.log('onEditorEvent', _win)
        // 窗口回调
        onEditorEvent(_resp, () => {
          // 关闭窗口
          _win.close();
          // 查询最新数据
          httpSearch();
        });
      }
    );
  },
  /** 审核按钮 */
  btnAudit: () => {
    httpApi('audit');
  },
  /** 撤销审核 */
  btnResc: () => {
    httpApi('resc');
  },
  /** 标记删除按钮 */
  btnDel: () => {
    btnDelEvent('del'); // 删除
  },
  /** 物理删除 */
  btnErase: () => {
    btnDelEvent('erase'); // 物理擦除
  },
  /** 搜索按钮 */
  btnSearch: () => {
    httpSearch();
  },
  /** 显示更多按钮 */
  btnMore: () => {
    // case 'more':
    //   // 显示更多按钮
    the.show.dialog = !the.show.dialog;
  },
  /** 重置初始化按钮 */
  btnInit: () => {
    init();
  },
  /** 表头列关闭显示 */
  btnThCut: () => {
    //关闭显示列
    if (the.select.sort.length > 0) {
      // 取出不显示的字段
      the.row.cut = the.select.sort;
      // the.row.cut = bindFieldCut(the.select.sort, the.row.cut);
      // 清空当前选择
      the.select.sort = [];

      bindTplColumns();
    } else {
      message.info('请勾选需要关闭显示的列');
    }
  },
  btnTdSum: () => {
    // 是否显示求和，排除合计的列
    //if (the.select.sort.length > 0) {
    // 清空当前选择
    the.table.sumField = the.select.sort;
    // 清空当前选择
    the.select.sort = [];
    // if(the.table.sumField)
    the.table.foots = BindSum(the.tpl.listor.foots, the.table.sumField);
    // } else {
    //   message.info('请勾选需要排除合计的列');
    // }
  },
};
```

## tpl.listor 参数

```js
let listor = {
  /** 指定显示的表头[] */
  th: null,
  /*查询组合*/
  select: {
    /** 查询排序的字段，默认是ID */
    sort: ['ID'],
    /**  查询模式：降序还是升序*/
    desc: true,
    /** 查询的字段,默认等于 tpl.field*/
    terms: {},
    /** 选择的查询条件符号*/
    cate: '=',
    /** 查询字段 */
    field: 'ID',
    /** 输入的查询内容 */
    word: null,
    /**是否开启多条件查询*/
    cate_more: false,
    /** 需锁定不可修改的查询字段 */
    lock: [],
    /** 传入查询组合条件 */
    where: [],
  },
  /* 查询条件符号*/
  options: [
    {
      value: '=',
      label: '=',
    },
    {
      value: '≠',
      label: '<>',
    },
    {
      value: '<',
      label: '<',
    },
    {
      value: '<=',
      label: '<=',
    },
    {
      value: '>',
      label: '>',
    },
    {
      value: '>=',
      label: '>=',
    },
    {
      // 全文排除相似
      value: 'likeNot',
      label: '≠%',
    },
    {
      // 全文相似
      value: 'like',
      label: '%',
    },
    {
      // 从头部相似
      value: 'likeE',
      label: '<%',
    },
    {
      // 从尾部相似
      value: 'likeB',
      label: '>%',
    },
    {
      // 复数查询 1,2,3,4
      value: 'in',
      label: 'in',
    },
    {
      // 日期区间
      value: 'between',
      label: 'T+1',
    },
  ],
  /** 不显示的列 */
  cut: ['CodeSource'],
  show: {
    // 显示工具栏
    toolbar: true,
    // 显示更多按钮
    btnMore: true,
    /* 表格是否允许勾选*/
    check: true,
    // 是否显示编辑器
    editor: true,
    // 分页栏
    paged: true,
    // 更多选项框
    dialog: false,
  },
  // 表格列自定义平均宽度
  width: 100,
  // 表合计列
  sum: {
    // 是否显示合计列
    show: false,
    // 合计指定列, 默认不配置全表合计
    keys: [],
  },
  /** 查询分页参数 */
  paged: {
    // 当前页码
    index: 1,
    // 每页取数据条数
    size: 5,
    // 分页数
    sizes: [5, 10, 30, 50, 100],
    /** 总条数 */
    count: 0,
  },
};
```

## 锁定查询配置

- v1.0.9
  项目运行中，经常会根据不通的权限，锁定用户查询的条件。

```js
/** 列表编辑 */
let listor = {
  /* 查询组合*/
  select: {
    /** 指定查询的字段*/
    terms: { ID: '编号', RadiusCode: '服务器编码' },
    /** 需锁定不可修改的查询字段 */
    lock: ['QF_Group_ID'],
    // 组合查询, 条件q必须放最后,无此参数默认为'='
    where: [{ QF_Group_ID: 256, q: '<' }],
  },
};
```

### 外键配置

- 外键关系配置

```json
{
  "MUser_ID": { "table": "QF_User", "fields": "LastFirst" },
  "LoginCode": {
    "table": "QF_UserPhoneJoin",
    "primary": "Phone",
    "fields": "Department,NickName"
  }
}
```

- 外键列表显示配置

```js
let tpl = {
  // 显示字段
  field: {
    ID: 'ID',
    LoginCode: '登陆账户',
    // 自定义显示的字段与显示名称
    't.LoginCode.Department': '部门',
  },
  // 字段属性
  attr: {
    ID: {
      t: 'Int64',
      pk: 1,
      r: 1,
    },
    LoginCode: {
      t: 'String',
      n: true,
      max: 50,
      r: 1,
      // 默认不配置，将用外键查询最后字段内容进行替换显示， 设置为LoginCode，不进行外键替换显示
      j: 'NickName',
      tip: '默认会员手机号码',
    },
  },
  // 列表参数配置
  listor: {
    // 自定义显示字段列表
    th: ['ID', 'LoginCode', 't.LoginCode.NickName', 't.LoginCode.Department'],
    // 查询配置
    select: {
      lock: ['QF_Group_ID'],
      where: [
        {
          QF_Group_ID: 256,
        },
      ],
    },
  },
};
```

## 列宽度

- Listor 所有列平均宽度

```js
let listor = {
  // 表格列自定义平均宽度
  width: 100,
};
```

- 单列宽度

```js
let tpl = {
  // 属性参数
  attr: {
    // 自定义字段
    title: {
      w: 500,
    },
  },
};
```

## Listor props

| 属性   | 说明         | 类型   | 默认值 |
| ------ | ------------ | ------ | ------ |
| named  | 组件命名     | string | listor |
| config | tpl 配置模板 | Object |        |
| list   | 传入的数据   | Array  |        |

## Listor slot

| 名称  | 插入位置     |
| ----- | ------------ |
| -     | 主体内容     |
| tools | 工具栏       |
| more  | 扩展选项底部 |
