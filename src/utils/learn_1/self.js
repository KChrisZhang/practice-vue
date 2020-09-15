/* eslint-disable no-debugger */

/**
 * 关于 this 的2个误解
 * 1. this 指向自身
 * 2. this 指向函数作用域
 */

/**
 * ---------------------------------------- this第一个例子 start ----------------------------------------
 * this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用（调用位置）
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
    // call：参数列表，无固定个数，第一个参数指定this指向
    // apply；两个参数，第一个参数指定this指向，第二个参数位类数组
    // bind：一个参数值，指定this指向
    foo.call(foo, i)
    // foo.bind(foo)(i)
    // foo.apply(foo, [i])
  }
}
console.log(foo.count, '------------------- foo.count')

/**
 * ---------------------------------------- this第一个例子 end ----------------------------------------
 */

/**
 * ---------------------------------------- 调用栈模拟 start ----------------------------------------
 */

// 调用位置： bar
function fooo() {
  console.log('fooo')
}

// 调用位置： baz
function bar() {
  console.log('bar')

  fooo()
}

// 调用位置： 全局
function baz() {
  console.log('baz')

  bar()
}

baz()
// 调用栈调用顺序
console.log('', '------------- [baz -> bar -> fooo]')

/**
 * ---------------------------------------- 调用栈模拟 end ----------------------------------------
 */

/**
 * ---------------------------------------- this绑定规则1 start ----------------------------------------
 */

function foo1() {
  console.log(this.a, 'foo1')
  // undefined "foo1"
  // 此处 this打印为window对象
}

// function foo2() {
//   'use strict'
//   console.log(this.a, 'foo2')
//   // TypeError: Cannot read property 'a' of undefined
// }

var a = 1
// window.a = 1
console.log(a, 'a [global]')

foo1()

/**
 * ---------------------------------------- this绑定规则1 end ----------------------------------------
 * var a = 1 时，没有绑定到全局对象window的同名属性，即 window.a 为undefined（但是，理论上是会绑定的）
 * 所以，foo1调用时，this.a 打印为 undefined，this 打印为 window对象
 * 同时，严格模式下，this 不会默认绑定全局对象
 * 另外，如果是直接赋值 window.a = 1，foo1调用时，this.a 打印为 1, this 打印为 window对象
 */

/**
 * ---------------------------------------- this绑定规则2: 隐式绑定 start ----------------------------------------
 * 回调函数内部this
 */
function foo3() {
  console.log(this.a3, 'foo3')
}

var bar3 = {
  a3: 2,
  foo3: foo3,
}

function doFoo(fn) {
  console.log(fn)
  fn()
}

var a3 = 'oops, global'

doFoo(bar3.foo3)
bar3.foo3()
console.log(a3, 'a3')

/**
 * ---------------------------------------- this绑定规则2: 隐式绑定 end ----------------------------------------
 * 回调函数内部的this指向问题
 */

/**
 * ---------------------------------------- this绑定规则3: 显式绑定 start ----------------------------------------
 */

/**
 * string 是基本类型，它不应该有方法，使得它能够调用方法，实现的机制如下:
 * 1) 创建String类型的一个实例
 * 2）在实例上调用指定的方法
 * 3）销毁这个实例
 */
var s1 = 'abc'
var s2 = s1.indexOf('a')
console.log(s2) // 0

/**
 * ---------------------------------------- this绑定规则3: 显式绑定 end ----------------------------------------
 * call, apply, bind
 */

/**
 * ---------------------------------------- this绑定规则4: new start ----------------------------------------
 */

function foo4(a) {
  this.a = a
}

var bar4 = new foo4(3)
console.log(bar4.a, 'bar4') // 3

/**
 * ---------------------------------------- this绑定规则4: new end  ----------------------------------------
 */
