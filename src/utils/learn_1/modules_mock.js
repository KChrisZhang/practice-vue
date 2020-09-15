/**
 * 闭包
 * 1 将内部函数传递到词法作用域之外
 * 2 都会持有原始定义作用域的引用
 */
const MY_MODULES = (function Manager() {
  let modules = {}

  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl.apply(impl, deps)
  }

  function get(name) {
    return modules[name]
  }

  return {
    define,
    get,
  }
})()

MY_MODULES.define('bar', [], function() {
  function hello(who) {
    return 'Let me introduce: ' + who
  }
  return { hello }
})

MY_MODULES.define('foo', ['bar'], function(bar) {
  var hungry = 'hippo'

  function awesome() {
    console.log(bar.hello(hungry).toUpperCase())
  }
  return { awesome }
})

const bar = MY_MODULES.get('bar')
const foo = MY_MODULES.get('foo')

console.log(bar.hello('hippo'))
foo.awesome()

export default MY_MODULES
