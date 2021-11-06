# upload 上传组件

- qveui `0.5.6`支持

- [imgMin 图片压缩函数](../lib/lib.md)

多文件选择上传，图片显示预览

## upload 文件图片压缩上传

<CodeRun auto editable>

```vue

<template>
  <div>
    <Upload v-model="the.file"  @onEvent="onUploadEvent">上传图片</Upload>
    <Upload :mark="the.mark" @onEvent="onUploadEvent">上传图片</Upload>
    <Upload :multiple="true"
                named="file"
                type="execl"
                @onEvent="onUploadEvent">上传文件</Upload>
  </div>
</template>

<script>
export default {
  setup (props, { emit }) {

    const $plus = window.$plus;
    const frame  = $plus.frame;
    const reactive = $plus.vue.reactive;

   const the = reactive({
     // 图片水印
     mark: { text: 'Quick', font: 'bold 10rem Arial', y: 100 },
     // 支持单张图片双向绑定 base64
     file:''
   });

    /**
     * 上传事件 
     * 
    */
    const onUploadEvent = (res) => {
      console.log('onUploadEvent:' + res.data.length, res);
      switch (res.cmd) {
        case 'delete':
          console.log('onUploadEvent.', res.cmd);
          break;
        case 'imageZoom':
          // 预览图点击放大
          frame.open('<img width="100%" src="' + res.data.src + '" />');
          break;
        case 'execl': // type 参数事件

          // 结果输出，触发上传事件
          break;
        case 'base64':
           console.log('onUpload.base64',the.file);
        // 图片转码结果输出，触发上传事件,返回本地文件内容
        // res.data=[{
        // // 没超过max,可以上传
        // isUpload: true,
        // // 文件名
        // name: file.name,
        // lastModified: file.lastModified,
        // // 尺寸大小
        // size: file.size,
        // // 文件类型
        // type: file.type,
        // // 文件数据
        // data: null,
        // // 图片转换base64
        // src: null,
        // // 文件描述
        // title: ''
        // }]
          break;
      }
    };

    return {the, onUploadEvent}
  }
}
</script>

```

</CodeRun>

## upload props

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


## upload onEvent

- 组件事件触发

| 参数名        | 说明                                              | 类型    |
| ------------- | ------------------------------------------------- | ------- |
| cmd           |命令：imageZoom,delete,base64  | String |
| named | 组件命名，建议字段名                                          | String  |
| type `0.4.2`  | 组件初始传入值类型,String,Object                  | String  |
| data          | 事件数据                                | Array  |
| index       | 点击或删除序号                           | Number |
