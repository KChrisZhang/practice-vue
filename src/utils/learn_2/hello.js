console.log('Hello world!')

console.log('-------------第一章 类型-------------')

// 只有typeof null 返回的类型值不正确，这是JavaScript由来已久的bug
console.log(typeof undefined === 'undefined', 'undefined') // true
console.log(typeof 42 === 'number', 'number') // true
console.log(typeof '42' === 'string', 'string') // true
console.log(typeof true === 'boolean', 'boolean') // true
console.log(typeof { a: 1 } === 'object', 'object') // true
console.log(typeof null === 'object', 'null') // true

// 使用复合条件判断null
var a = null
console.log(!a && typeof a === 'object', 'null') // true

/**
 * 函数是对象的子类型
 * 函数的长度：参数个数
 */
var b = function(x, y) {}
console.log(typeof b, 'function') // object
console.log(b.length, 'function.length') // 2

/**
 * 数组是对象的子类型
 */
var c = []
console.log(typeof c, 'array')

/**
 * 变量：没有声明为 undeclared
 * 变量：声明了没有赋值为 undefined
 */
var d
console.log(d, 'd') // undefined
// console.log(f) // ReferenceError: f is not defined.

console.log('-------------第二章 值-------------')

// 类数组转换为数组
function foo() {
  var arr = Array.from(arguments)
  arr.push('bam')
  console.log(arr, 'foo')
}
foo('bar', 'baz')

// 数字
var bigNumber1 = 5e10
console.log(bigNumber1, 'bigNumber1') // 50000000000

// 用指数格式表示
console.log(bigNumber1.toExponential(), 'bigNumber1') // 5e+10

var bigNumber2 = bigNumber1 * bigNumber1
console.log(bigNumber2, 'bigNumber2') // 2.5e+21

var bigNumber3 = 1 / bigNumber1
console.log(bigNumber3, 'bigNumber3') // 2e-11

/**
 * 二进制浮点数的精确问题
 * 二进制浮点数中的 0.1 和 0.2 并不是十分精确，它们相加的结果并非刚好等于 0.3
 * 而是一个接近 0.30000000000000004 的数字，所以条件判断结果为 flase
 */
var number1 = 0.1 + 0.2
var number2 = 0.3
console.log(number1 === number2, '0.1 + 0.2 === 0.3') // false
console.log(number1, '0.1 + 0.2') // 0.30000000000000004

// 可以使用 Number. 来比较两个数字是否相等(在指定误差范围内)
function numbersCloseEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON
}
console.log(numbersCloseEnoughToEqual(number1, number2), 'numbersCloseEnoughToEqual')
console.log(Number.MAX_VALUE, 'MAX_VALUE')

/**
 * 简单值,总是通过 值复制 的方式来赋值/传递
 * 包括 null, undefined, string, number, boolean, symbol
 */
var aValue = 2
var bValue = aValue // bValue 是 aValue 的值的 一个副本
bValue++
console.log(aValue, 'aValue') // 2
console.log(bValue, 'bValue') // 3

/**
 * 复合值,总是通过 引用复制 的方式来赋值/传递
 * 包括 对象和函数
 * aArr 和 bArr 分别是指向 同一个复合值[1, 2, 3] 的两个不同引用
 */
var aArr = [1, 2, 3]
var bArr = aArr // bArr 是 [1, 2, 3] 的一个引用
bArr.push(4)
console.log(aArr, 'aArr') // [1, 2, 3, 4]
console.log(bArr, 'bArr') // [1, 2, 3, 4]

// 由于引用指向的是 值本身,而不是 变量, 所以一个引用无法更改另一个引用的指向
// 一个引用不能更改另一个引用的指向, 只能更改共同指向的值
var cArr = [1, 2, 3]
var dArr = cArr
console.log(cArr, 'cArr')
console.log(dArr, 'dArr')

dArr = [4, 5, 6]
console.log(cArr, 'cArr')
console.log(dArr, 'dArr')

/**
 * 向函数传递参数 cArr 时, 实际上是将 cArr 的一个副本赋值给 x
 * cArr 仍然指向 [1, 2, 3]
 * 在函数中, 通过引用 x 来更改数组的值, 变为 [1, 2, 3, 4]
 * 但是 x = [4, 5, 6] 并不影响 cArr 的指向
 * 所以 cArr 仍然指向 [1, 2, 3, 4]
 * 我们不能通过引用 x 来更改引用 cArr 的指向, 只能更改 cArr 和 x 共同指向的值
 */
function foo2(x) {
  x.push(4)
  console.log(x, 'x1') // [1, 2, 3, 4]

  x = [4, 5, 6]
  x.push(7)
  console.log(x, 'x2') // [4, 5, 6, 7]
}

foo2(cArr)
console.log(cArr, 'foo2') // [1, 2, 3, 4]
