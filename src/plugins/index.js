/**
 * Vue通过use(...) 加载对象的install方法，将插件挂载在实例对象Vue上
 */

export default {
  install(Vue) {
    Vue.mixin({
      beforeCreate() {
        // 为自定义的选项 ‘wang’ 注入一个处理器
        const wang = this.$options.wang;
        if (wang) {
          console.log("[mixin]wang-----", wang);
          // Vue._wang = wang;
          this._root = this;
          this._wang = wang;
        } else {
          // 非跟组件则从父组件中获取
          this._root = (this.$parent && this.$parent._root) || this;
        }
      }
    });

    // 设置代理
    Object.defineProperty(Vue.prototype, "$wang", {
      get() {
        return this._root._wang;
      }
    });
  }
};
