<!-- ---
sidebar: auto
sidebarDepth: 2
title: 3.x handle 把手
--- -->

# handle 拖拽把手

`0.3.9`

带有把手的区域固定大小（固定宽度或者高度），不带把手的部分跟随弹性盒子变化。

## Handle 拖拽把手


<CodeRun auto editable>

```vue
<template>
  <div>
    <Poptip float
            :style="popStyled">
      <HandleHeight named="handleT"
                    @onEvent="HandleChange" style=" background-color: #7fca38; height:0.25rem;" />
      <div style="display:flex;">
        <HandleWidth named="handleL"
                     @onEvent="HandleChange" style="background-color: #ca3838;width:0.25rem;" />
        <div :style="styled">
          内容区
        </div>
        <HandleWidth @onEvent="HandleChange" style="background-color: #ca3838;width:0.25rem;" />
      </div>
      <HandleHeight @onEvent="HandleChange" style=" background-color: #7fca38; height:0.25rem;" />
    </Poptip>

  </div>
</template>

<script>

export default {
  setup() {
    
   const { ref } = window.$plus.vue;

    // 外框位置
    const popStyled = ref('');

    // 设置内容的高度
    const styled = ref('');

    let size = {
      top: 200,
      left:400,
      height: 200,
      width: 150,
    };

    /**
    * 样式生成
    */
    const initStyle = (_move) => {

      if (size.width <= 100) {
        return
      }

      if (size.height <= 100) {
        return
      }

      let _style = '';
      for (let p in size) {

        // 修改移动坐标
        if (_move) {
          switch (p) {
            case 'top':
              _style += p + ':' + size[p] + 'px;';
              break;
            case 'left':
              _style += p + ':' + size[p] + 'px;';
              break;
          }

        } else if (p == 'z-index') {
          _style += p + ':' + size[p] + ';';
        } else {
          _style += p + ':' + size[p] + 'px;';
        }
      }
      // console.log('drag.style', _style)
      return _style;
    };

    /** 调整高度 */
    const HandleChange = (resp) => {
    //  console.log('HandleChange', resp);

      switch (resp.named) {
        case 'handleL':
          size.width -= resp.value;
          // 调整左边位置
          size.left += resp.value;
          break;
        case 'handleX':
          // 默认命名调整宽度
          size.width += resp.value;
          break;
        case 'handleT':
          // 顶部把手,调整位置
          size.height -= resp.value;
          size.top += resp.value;
          break;

        case 'handleY':
          // 默认命名调整高度
          size.height += resp.value;
          break;

      }

      const _style = initStyle();

     // console.log('HandleChange.end', _style);
      if (_style) {
        styled.value = _style;
        popStyled.value = initStyle(true);
      }


    };

    popStyled.value = initStyle(true);
    styled.value = initStyle();

    return {
      styled, popStyled, HandleChange
    };
  },
};
</script>
```

</CodeRun>

