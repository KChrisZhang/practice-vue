console.log('hello_2')

console.log('\n')
console.log('----------------------[demo1]')

var foo = function(x) {
  x = x + 1
  console.log(x, 'x') // 3
}

var a1 = 2
var b1 = new Number(a1)

/**
 * 虽然传递的是 指向数字对象的引用副本，但我们并不能通过它来更改其中的基本类型值
 * 原因是 标量基本类型的值 是 不可更改的（字符串和布尔值也是如此）
 */
foo(b1)
console.log(b1, 'b')

/**
 * 第三章 原生函数
 */

console.log('\n')
console.log('----------------------[demo2]')

var a2 = new Array(3)
console.log(a2.length) // 2
console.log(a2, 'a2') // [ <3 empty items> ]

console.log('\n')
console.log('----------------------[demo3]')

var a3 = new Array(3)
var b3 = [undefined, undefined, undefined]
var c3 = []
c3.length = 3

console.log(a3, 'a3')
console.log(b3, 'b3')
console.log(c3, 'c3')

console.log('\n')
console.log('----------------------[demo4]')

function fakeJoin(arr, connector) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) {
      str += connector
    }
    if (arr[i] !== undefined) {
      str += arr[i]
    }
  }
  return str
}
var a4 = new Array(3)
var b4 = fakeJoin(a4, '-') // --
console.log(b4)

console.log('\n')
console.log('----------------------[demo5]')

/**
 * 获取当前时间戳的两种方式
 * 1 ES5 之前，getTime()
 * 2 ES5 开始，Date.now()
 */
console.log(new Date()) // 不传递参数时，返回当前的日期和时间
console.log(new Date().getTime())
console.log(Date.now())

console.log('\n')
console.log('----------------------[demo6]')

/**
 * 符号并非对象，而是一种简单标量基本类型
 * 可以使用 Symbol(...) 原生构造函数来定义符号，不能带 new 关键词，否则会出错
 */
var mysym = Symbol('my own symbol')
var a6 = {}
a6[mysym] = 'foobar'

console.log(mysym) // Symbol(my own symbol)
console.log(mysym.toString()) // 'Symbol(my own symbol)'
console.log(typeof mysym) // 'symbol'
console.log(Object.getOwnPropertySymbols(a6)) // [ Symbol(my own symbol) ]
