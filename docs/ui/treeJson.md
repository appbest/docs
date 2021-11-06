# TreeJson 树组件

## TreeJson 示例

<CodeRun auto editable>

```vue
<template>
  <TreeJson :data="testData" @onEvent="onTreeEvent" />
</template>

<script>
export default {
  setup() {
    const testData = {
      index: 0,
      total: 0,
      count: 0,
      tpl: {
        sql: '@ID,@Code,@Title,@AppKey,@DBName,@TableName,@AttrJson,@StateFlag,@Record,@Verify,@Encode,@EncodeField,@Remark,@Q_Time,@Q_UserID,@Q_StateFlag',
        field: {
          ID: '编号',
          Code: '索引编码',
          Title: '描述',
          AppKey: '应用Key',
          DBName: '分布数据库名',
          TableName: '数据表名',
          AttrJson: '属性',
          StateFlag: '启用审核',
          Record: '启用操作记录',
          Verify: '启用验证',
          Encode: '启用加密',
          EncodeField: '加密多字段',
          Remark: '备注',
          Q_Time: '编辑时间',
          Q_UserID: '编辑者',
          Q_StateFlag: '编辑状态',
        },
        attr: {
          ID: { v: '编号', r: 1 },
          Code: { v: '索引编码', n: true, t: 'String', max: 100 },
          Title: { v: '描述', n: false, t: 'String', max: 200, d: 1 },
          AppKey: { v: '应用Key', n: false, t: 'String', max: 100 },
          DBName: { v: '分布数据库名', n: false, t: 'String', max: 50 },
          TableName: { v: '数据表名', n: false, t: 'String', max: 50 },
          AttrJson: { v: '属性', n: false, t: 'String' },
          StateFlag: {
            v: '启用审核',
            n: true,
            t: 'Int32',
            tip: '数据审批',
            ls: '0:未用,1:启用',
          },
          Record: {
            v: '启用操作记录',
            n: true,
            t: 'Int32',
            tip: '数据验证算法',
            ls: '0:未用,1:启用',
          },
          Verify: {
            v: '启用验证',
            n: true,
            t: 'Int32',
            tip: '数据验证算法',
            ls: '0:未用,1:启用',
          },
          Encode: {
            v: '启用加密',
            n: true,
            t: 'Int32',
            tip: '数据加密',
            ls: '0:未用,1:启用',
          },
          EncodeField: {
            v: '加密多字段',
            n: false,
            t: 'String',
            max: 500,
            tip: '多个用,号隔开',
          },
          Remark: { v: '备注', n: false, t: 'String' },
        },
        act: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16],
      },
      code: 1,
      err: false,
      objType: 1,
      statusCode: 200,
    };

    const onTreeEvent = (resp) => {
      console.log('tree', resp);
    };

    return {
      testData,
      onTreeEvent,
    };
  },
};
</script>
```

</CodeRun>
