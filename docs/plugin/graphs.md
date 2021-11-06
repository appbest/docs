# 图表组件

- [示例文档](https://github.com/mermaid-js/mermaid/tree/develop/docs)
- [mermaid-live-editor 在线编辑器](https://mermaidjs.github.io/mermaid-live-editor/)
- [github 语法示例](https://mermaid-js.github.io/mermaid/#/)

当撰写文档的时候，需要使用绘制流程图。 Mermaid.js 可以看成是 Markdown 文档中一款绘图插件，其语法完全是 markdownish 的，可以直接呈现图形与在线实时编辑。

## VSCode 流程图兼容

安装以下插件，可实现项目编辑与发布一致性

- Markdown Preview Enhanced
- Mermaid Markdown Syntax Highlighting

## markdown 画图

- 代码头部加标签 `mermaid`,会转为绘图组件显示。

- 代码第一行为以下类型，也会转为绘图组件显示。
  `['gitGraph', 'classDiagram', 'sequenceDiagram', 'gantt']`

## 流程图 graph

```mermaid
graph TB
    id1(圆角矩形)--普通线-->id2[矩形]
    subgraph 子图表
        id2==粗线==>id3{菱形}
        id3-.虚线.->id4>右向旗帜]
        id3--无箭头---id5((圆形))
end
```

## 甘特图 gantt

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title mermaid 甘特图功能
    section A部分
    完成任务        :done, des1,2019-01-06,2019-01-08
    正进行任务      :active, des2,2019-01-09,3d
    待开始任务      :des3, after des2, 5d
    待开始任务2     :des4, after des3, 5d
    section 紧急任务
    完成任务        :crit,done,2019-01-06,24h
    实现parser     :crit,done,after des1, 2d
    为parser编写test :crit, active, 3d
    待完成任务      :crit,5d
    为rendere编写test: 2d
    将功能加入到mermaid: 1d
```

## 类别图 classDiagram

```mermaid
classDiagram

  Class01 <|-- AveryLongClass: Cool
  <<interface>> Class01
  Class09-->C2: Where am i?
  Class09 --* C3
  Class09 --|> Class07
  Class07: equals()
  Class07: Object[] elementData
  Class01: size()
  Class01: int chimp
  Class01: int gorilla
  class Class10 {
    <<service>>
    int id
    size()
  }

```

## 状态图 stateDiagram

```mermaid
stateDiagram

    [*]-->Active
    state Active {
        [*]-->NumLockOff
        NumLockOff-->NumLockOn : EvNumLockPressed
        NumLockOn-->NumLockOff : EvNumLockPressed
        --
        [*]-->CapsLockOff
        CapsLockOff-->CapsLockOn : EvCapsLockPressed
        CapsLockOn-->CapsLockOff : EvCapsLockPressed
        --
        [*]-->ScrollLockOff
        ScrollLockOff-->ScrollLockOn : EvCapsLockPressed
        ScrollLockOn-->ScrollLockOff : EvCapsLockPressed
            }
```

## 实体关系图 erDiagram

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses

```

## 饼图

-[pie.md](https://github.com/mermaid-js/mermaid/blob/develop/docs/pie.md)

```mermaid
pie
    title 产品X中的关键成分
    "钙" : 10.5
    "钾" : 24.5
    "镁" : 30.0
    "铁" : 35.0
```
