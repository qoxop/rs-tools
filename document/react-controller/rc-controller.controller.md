<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [rc-controller](./rc-controller.md) &gt; [Controller](./rc-controller.controller.md)

## Controller class

控制器 - 模拟 class 组件行为

<b>Signature:</b>

```typescript
declare class Controller<State = any, Props = any> 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(props)](./rc-controller.controller._constructor_.md) |  | Constructs a new instance of the <code>Controller</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [Context](./rc-controller.controller.context.md) | <code>static</code> | Context&lt;any&gt; | 存放实例对象的 Context |
|  [forceUpdate](./rc-controller.controller.forceupdate.md) | <code>readonly</code> | () =&gt; any | 强制更新组件 |
|  [props](./rc-controller.controller.props.md) | <code>readonly</code> | Props | 组件的 props 引用 |
|  [Provider](./rc-controller.controller.provider.md) | <code>static</code> | FunctionComponent&lt;{ controller: unknown; children: unknown; }&gt; | 提供实例对象的 Provider |
|  [setState](./rc-controller.controller.setstate.md) | <code>readonly</code> | (updater: Partial&lt;State&gt; \| FunctionType&lt;\[State\], void&gt;) =&gt; any | 模拟 class 组件的 setState |
|  [state](./rc-controller.controller.state.md) | <code>readonly</code> | State | 模拟 class 组件的 state |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [useHooks()](./rc-controller.controller.usehooks.md) |  | hooks 回调函数，需要被使用者重写 |
