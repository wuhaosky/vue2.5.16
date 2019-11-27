declare type VNodeChildren = Array<?VNode | string | VNodeChildren> | string;

declare type VNodeComponentOptions = {
  Ctor: Class<Component>;   // Vue组件构造函数
  propsData: ?Object;       // 有效的props
  listeners: ?Object;       // 非dom事件
  children: ?Array<VNode>;  // 孩子
  tag?: string;             //
};

declare type MountedComponentVNode = {
  context: Component;
  componentOptions: VNodeComponentOptions;
  componentInstance: Component;
  parent: VNode;
  data: VNodeData;
};

// interface for vnodes in update modules
declare type VNodeWithData = {
  tag: string;                                   // 标签名
  data: VNodeData;                               // VNodeData 包含大多数vnode信息
  children: ?Array<VNode>;                       // 子VNode
  text: void;                                    // 文本
  elm: any;                                      // dom元素
  ns: string | void;
  context: Component;                            //
  key: string | number | void;                   // key diff算法使用
  parent?: VNodeWithData;                        // _render函数里，建立Vue组件的VNode之间的单向父子关系，只能子组件VNode找到父组件VNode
  componentOptions?: VNodeComponentOptions;      // vue组件选项
  componentInstance?: Component;                 // vue组件的实例
  isRootInsert: boolean;
};

declare interface VNodeData {
  key?: string | number;
  slot?: string;
  ref?: string;
  is?: string;
  pre?: boolean;
  tag?: string;
  staticClass?: string;
  class?: any;
  staticStyle?: { [key: string]: any };
  style?: Array<Object> | Object;
  normalizedStyle?: Object;
  props?: { [key: string]: any };
  attrs?: { [key: string]: string };
  domProps?: { [key: string]: any };
  hook?: { [key: string]: Function };
  on?: ?{ [key: string]: Function | Array<Function> };
  nativeOn?: { [key: string]: Function | Array<Function> };
  transition?: Object;
  show?: boolean; // marker for v-show
  inlineTemplate?: {
    render: Function;
    staticRenderFns: Array<Function>;
  };
  directives?: Array<VNodeDirective>;
  keepAlive?: boolean;
  scopedSlots?: { [key: string]: Function };
  model?: {
    value: any;
    callback: Function;
  };
};

declare type VNodeDirective = {
  name: string;
  rawName: string;
  value?: any;
  oldValue?: any;
  arg?: string;
  modifiers?: ASTModifiers;
  def?: Object;
};

declare type ScopedSlotsData = Array<{ key: string, fn: Function } | ScopedSlotsData>;
