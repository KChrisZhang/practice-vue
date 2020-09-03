/**
 * 关于this的2个误解
 * 1. this指向自身
 * 2. this指向函数作用域
 */

/**
 * this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用
 */

function foo(num) {
  console.log('foo: ' + num)

  // 记录foo被调用的次数
  this.count++
}

foo.count = 0
var i

for (i = 0; i < 10; i++) {
  if (i > 5) {
    // call: 指定函数foo内，this的指向对象
    foo.call(foo, i)
  }
}

console.log(foo.count, 'foo.count')
