# PanelListor

## PanelListor 外键查询面板

基于 [Listor](./listor.md) 组件，参数配置一致

<CodeRun editable>

```vue
<template>
  <div>
    <Input
      v-model="the.App_ID"
      named="App_ID"
      placeholder="请选中应用ID"
      type="number"
      readonly
      icon="icon-jiantouxia"
      @onEvent="onInputEvent"
    />
    <Modal :show="the.modal.show" footer-hide>
      <PanelListor
        :named="the.panel.named"
        :config="the.panel"
        :list="the.panel.list"
        @onEvent="onPanelEvent"
      />
    </Modal>
  </div>
</template>

<script>
export default {
  setup() {
    const $plus = window.$plus;
    const { reactive } = $plus.vue;
    const message = $plus.message;

    const the = reactive({
      modal:{
         show:false
      },
      App_ID:1,
      panel:{
        named:'App_ID',
        // 数据请求源配置
        http: {
           // 请求地址
          url: '',
           // 请求参数
          data: {
            tpl: 1,
          },
        },
        field:{
          ID:'ID'
          Title: '应用'
        },
        list:[
          {ID:1,Title:'应用1'},
          {ID:2,Title:'应用1'},
          {ID:3,Title:'应用1'}
        ]
      }
    })

    const onPanelEvent = (resp) => {
      console.log('onControlEvent', JSON.stringify(resp));
      message.info(JSON.stringify(resp));
    };

    return { the, onPanelEvent };
  }
}
</script>
```

</CodeRun>
