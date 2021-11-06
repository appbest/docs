# quick.lib

lib 方法

## quick.lib 使用

```js
// 方法名
export { md5, base64Encode, base64Decode, ubbDecode, ubbEncode, imgMin };

// 项目引入
import { lib } from 'quick.lib';
```

## `md5` 加密

<CodeRun dll="lib" editable>

```js
/**
 * md5 算法模块
 * @param {*} str 传入内容
 * 返回 小写密文
 */
return lib.md5('acd12344');
```

</CodeRun>

## `base64Encode` base64 编码

<CodeRun dll="lib" editable>

```js
/**
 * base64 编码
 * @param {string} str 需要编码的内容
 * @param {string} encodeChars 自定义字典，默认为空
 */
return lib.base64Encode('acd12344');
```

</CodeRun>

## `base64Decode` base64 解码

<CodeRun dll="lib" editable>

```js
/**
 *  base64 解码
 * @param {string} str 需要解码的内容
 * @param {Array} decodeChars 解码字典
 */
return lib.base64Decode('YWNkMTIzNDQ=');
```

</CodeRun>

## `ubbEncode` html 转码 ubb

<CodeRun dll="lib" ubb editable>

```js
/**
 * html 转ubb
 * @param {String} str
 */
let resp = lib.ubbEncode('<div>abc</div>');
//console.log('ubb', resp);
alert('完成\r\n' + resp);
return resp;
```

</CodeRun>

## `ubbDecode` ubb 转码 html

<CodeRun dll="lib" ubb editable>

```js
/**
 * ubb转html
 * @param {String} str
 */
let resp = lib.ubbDecode('&lt;div&gt;abc&lt;/div&gt;');
//console.log('ubb', resp);
alert('完成\r\n' + resp);
return resp;
```

</CodeRun>

## `imgMin` 图片压缩加水印

```js
/**
 * 图片压缩组件 canvas
 * @param {*} options 传入参数
 * {file:'需要压缩的图片',callback:'压缩后回调(options)'
 * ,type:'空默认文件类型',name:'空默认文件名'
 * ,maxsize:'图片限制大小'
 * ,max:'图片尺寸缩放比例默认1'
 * ,scale:'图片清晰度压缩比例，默认1'
 * ,marktext:'加水印文字'
 * ,markstyle:'水印文字样式||rgba( 255 , 255 , 255 , 0.5 )'
 * ,markfont:'水印文字大小||bold 1rem Arial'
 * ,markx:'左边距|| 10',
 * ,marky:'顶边距|| 20'
 * }
 * 返回{base64,size,width,height}
 */

      let _file = {
        // 没超过max,可以上传
        isUpload: true,
        // 文件名
        name: file.name,
        lastModified: file.lastModified,
        // 尺寸大小
        size: file.size,
        // 文件类型
        type: file.type,
        // 文件数据
        data: null,
        // 图片转换base64
        src: null,
        // 文件描述
        title: ''
      }

 lib.imgMin({
                // 文件读取
                reader: new FileReader(),
                // 文件
                file,
                // 最大长度
                maxsize: props.max * 1024,
                // 图片的质量等级
                ratio: 0.6,
                // 图片尺寸缩放比例
                scale: 0.7,
                // 回调函数
                callback (data) {
                  _file.title = '压缩：' + (data.size / (1024 * 1024)).toFixed(2) + 'M';

                  if (data.size > props.max * 1024) {
                    _file.title += '，超过' + ((data.size - props.max) / (1024 * 1024)).toFixed(2) + 'M 限制,无法上传';
                    _file.isUpload = false;
                  }

                  // 上传文件对象
                  _file.src = data.base64;
                  _file.size = data.size;

                  if (_file.isUpload) {
                    // 上传触发事件
                  }

               
                }
})
```
