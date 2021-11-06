# Picker 时间日期选择器

## 说明

选择或输入时间日期

## DatePicker 日期时间

| 属性    | 说明                                   | 类型   | 默认值 |
| ------- | -------------------------------------- | ------ | ------ |
| v-model | 双向绑定数据                           | String | -      |
| type    | 显示类型,可选值为`date`,`datetime`     | String | date   |
| format  | 输出格式转换 `default `, `iso `, `utc` | Date   | -      |

### 代码示例

<CodeRun auto editable>

```vue
<template>
  <div>
    <DatePicker
      v-model="the.data.startDate"
      type="date"
      placeholder="请选择日期"
    />
    <Tooltip content="日期选择"> ？ </Tooltip>

    <DatePicker
      v-model="the.data.endTime"
      type="datetime"
      placeholder="请选择日期与时间"
    />
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;

    const the = reactive({
      data: {
        startDate: '2020-09-02',
        endTime: '2020-01-02 09:20:12',
      },
    });

    return { the };
  },
};
</script>
```

</CodeRun>

## TimePicker 时间面板

| 属性    | 说明                                   | 类型   | 默认值    |
| ------- | -------------------------------------- | ------ | --------- |
| named   | 组件自定义命名，用于区别多组件触发事件 | String | timePanel |
| v-model | 双向绑定数据                           | String | -         |

### 代码示例

<CodeRun auto editable>

```vue
<template>
  <div>
    <TimePicker v-model="the.data.startTime" placeholder="请选择时间" />
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // 使用外挂方式引入，具体查看demo
    const { reactive } = window.$plus.vue;
    const the = reactive({
      data: {
        startTime: '12:51:32',
      },
    });

    return { the };
  },
};
</script>
```

</CodeRun>

## DatePanel 日历面板

日历，具体参考下面示例

| 属性    | 说明                                   | 类型   | 默认值    |
| ------- | -------------------------------------- | ------ | --------- |
| named   | 组件自定义命名，用于区别多组件触发事件 | String | datePanel |
| v-model | 双向绑定数据                           | String | -         |
| type    | 显示类型,可选值为`date`,`datetime`     | String | date      |
| format  | 输出格式转换 `default `, `iso `, `utc` | Date   | -         |
| marks   | 日期徽标提示                           | Object | null      |

## DateBar 日期栏

按横向列表显示日期与周

| 属性  | 说明                                   | 类型         | 默认值     |
| ----- | -------------------------------------- | ------------ | ---------- |
| named | 组件自定义命名，用于区别多组件触发事件 | String       | dateBar    |
| now   | 选中日期，默认为当天                   | String, Date | new Date() |
| marks | 日期徽标提示                           | Object       | null       |

<CodeRun auto editable>

```vue
<template>
  <div>
    <Poptip
      v-if="the.date.isShow"
      style="margin-top: 4rem;margin-left:2.5rem;"
      float
    >
      <DatePanel v-model="the.date.now" type="date" @onEvent="onDateEvent" />
    </Poptip>

    <Card :styles="'padding: 0.1rem;'">
      <template #title>
        <DateBar
          :now="the.date.now"
          :marks="the.date.marks"
          @onEvent="onDateEvent"
        />
      </template>
      <!--卡片右上角-->
      <template #extra>
        <Button size="small" shape="circle" icon="icon-suo" @click="btnEvent" />
      </template>

      内容
    </Card>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;

    const the = reactive({
      date: {
        isShow: false,
        value: '',
        // 当前选中的日期
        now: null,
        // 日期标记
        marks: {
          '2021-03-11': '99',
          '2021-03-12': true,
        },
      },
    });

    const btnEvent = (cmd) => {
      console.log(cmd);

      switch (cmd) {
        case 'next':
          the.date.isShow = !the.date.isShow;
          break;
      }
    };

    /** 监听日期事件 */
    const onDateEvent = (resp) => {
      console.log(resp);

      switch (resp.cmd) {
        case 'click':
          the.date.now = resp.data.date;
          break;
        case 'next':
          the.date.isShow = !the.date.isShow;
          // the.date.now = resp.data.date;
          break;
      }
    };

    return { the, btnEvent, onDateEvent };
  },
};
</script>
```

</CodeRun>

## 时间格式与序列化

System.Text.Json 作为微软内置 json 处理，会将其转换为 ISO 标准时间：

"2009-02-15T00:00:00Z"

非以上格式会报错
`The JSON value could not be converted to System.DateTime`

<CodeRun auto editable>

```js
const d = new Date(); //生成一个时间对象

return {
  //当前时间戳为：123456789//数字整形
  timer: d.getTime(),
  //  Thu Jan 18 2018
  date: d.toDateString(),
  // Thu, 18 Jan 2018 10:23:54 GMT
  gmt: d.toGMTString(),
  //2018-01-18T10:23:54.815Z
  iso: d.toISOString(),
  // 2018-01-18T10:23:54.815Z
  json: d.toJSON(),
  //2018/1/18
  ldate: d.toLocaleDateString(),
  //2018/1/18 下午6:23:54
  l: d.toLocaleString(),
  //下午6:23:54
  lt: d.toLocaleTimeString(),
  //Thu Jan 18 2018 18:23:54 GMT+0800 (中国标准时间)
  to: d.toString(),
  //18:23:54 GMT+0800 (中国标准时间)
  time: d.toTimeString(),
  //Thu, 18 Jan 2018 10:23:54 GMT
  utc: d.toUTCString(),
};
```

</CodeRun>
