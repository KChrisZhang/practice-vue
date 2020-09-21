console.log('hello_3')

console.log('\n', '---------[demo1]')
var a1 = [1, 2]
var b1 = [3, 4]
console.log(a1 + b1) // 1, 23, 4

/**
 * || 和 &&
 * 首先会对第一个操作数执行条件判断，如果不是布尔值，就先进行 ToBoolean 强制类型转换，然后再进行条件判断。
 * 返回它们其中一个操作数的值，而非条件判断的结果。
 */

console.log('\n', '---------[demo2]')
var a2 = 42
var b2 = 'abc'
var c2 = null

/**
 * 对于 || 来说
 * 如果条件判断结果为 true，就返回第一个操作数的值
 * 如果为false，就返回第二个操作数的值
 */
console.log(a2 || b2, '||') // 42
console.log(c2 || b2, '||') // abc

/**
 * && 则相反
 * 如果条件判断结果为 true，就返回第二个操作数的值
 * 如果为false，就返回第一个操作数的值
 */
console.log(a2 && b2, '&&') // abc
console.log(c2 && b2, '&&') // null

function foo2(a, b) {
  a = a || 'hello'
  b = b || 'world'
  console.log(a + ' ' + b)
}

foo2() // hello world
foo2('yeah', 'yeah!') // yeah yeah!

console.log('\n', '---------[demo3]')

function foo3() {
  console.log(a3, 'foo3')
}
var a3 = 0
console.log(a3 && foo3()) // 0

var a3 = 42
var b3 = null
var c3 = 'foo'

/**
 * 这里 a3 && (b3 || c3) 的结果实际上是 'foo'
 * 然后再由 if 将 foo 强制类型转换为 布尔值，所以最后结果是 true。
 * 这里发生了隐式强制类型转换
 */
console.log(a3 && (b3 || c3)) // foo

if (a3 && (b3 || c3)) {
  console.log('yep1')
}

/**
 * 如果要避免发生 隐式强制类型转换，使用显式强制类型转换
 */
console.log(!!a3 && (!!b3 || !!c3)) // true

if (!!a3 && (!!b3 || !!c3)) {
  console.log('yep2')
}

console.log('\n', '---------[demo4]')

/**
 * ES6 中引入了符号类型，它的强制类型转换有一个坑
 * ES6 允许从符号到字符串的显式强制类型转换，然而 隐式强制类型转换会产生错误
 */

var a4 = Symbol('cool')
console.log(String(a4)) // Symbol(cool)

// var s4 = Symbol('not cool')
// console.log(s4 + '') // TypeError: Cannot convert a Symbol value to a string

console.log('\n', '---------[demo5]')

/**
 * 1.字符串 和 数字 之间的相等比较: 将字符串转换为数字，然后比较：
 * 1）如果 Type(x) 是数字，Type(y) 是字符串，则返回 x == ToNumber(y) 的结果
 * 2）如果 Type(x) 是字符串，Type(y) 是数字，则返回 ToNumber(x) == y 的结果
 */

var a5 = 42
var b5 = '42'

console.log(a5 == b5) // true
console.log(a5 === b5) // false

console.log('\n', '---------[demo6]')

/**
 * 2.其他类型 和 布尔类型 之间的相等比较: 将布尔值转换为数字，然后比较
 * 1）如果 Type(x) 是布尔类型，则返回 ToNumber(x) == y 的结果
 * 2）如果 Type(y) 是布尔类型，则返回 x == ToNumber(y) 的结果
 * ToNumber(true) = 1
 * ToNumber(false) = 0
 */

var a6 = '42'
var b6 = true
var c6 = false

// toNumber(b6) = 1 => '42' == 1 => 42 == 1
console.log(a6 == b6) // false

// toNumber(c6) = 0 => '42' == 0 => 42 == 0
console.log(a6 == c6) // false

if (a6) {
  console.log('if a6', '这样的显式用法没问题')
}

if (!!a6) {
  console.log('if !!a6', '这样的显式用法更好')
}

if (Boolean(a6)) {
  console.log('if Boolean(a6)', '这样的显式用法也很好')
}

console.log('\n', '---------[demo7]')

/**
 * 3.null 和 undefined 之间的相等比较
 * null 和 undefined 之间的 == 也设计隐式强制类型转换
 * 也就是说，在 == 中，null 和 undefined 是一回事
 */
var a7 = null
var b7

console.log(a7 == b7) // true

console.log(a7 == null) // true
console.log(b7 == null) // true

console.log(a7 == false) // false
console.log(b7 == false) // false

console.log(a7 == '') // false
console.log(b7 == '') // false

console.log(a7 == 0) // false
console.log(b7 == 0) // false

console.log('\n', '---------[demo8]')

/**
 * 4.对象和非对象之间的相等比较: 将对象转换为 ToPromitive(x)，然后比较
 * 1）如果 Type(x) 是字符串或数字，Type(y) 是对象，则返回 x == ToPromitive(y) 的结果
 * 1）如果 Type(x) 是对象，Type(y) 是字符串或数字，则返回 ToPromitive(x) == y 的结果
 */

var a9 = 42
var b9 = [42]

/**
 * [42] 首先调用 ToPromitive 抽象操作，返回'42'；
 * 然后变成 '42' == 42；
 * 然后又变成 42 == 42；
 * 最后二者相等
 */
console.log(a9 == b9) // true

/**
 * 之前介绍过的 ToPromitive 抽象操作的所有特性（如 toString()、valueOf()）在这里都适用
 */

console.log('\n', '---------[demo9]')

// 1.返回其他数字
Number.prototype.valueOf = function() {
  return 3
}

console.log(new Number(2) == 3) // true

var i9 = 2
Number.prototype.valueOf = function() {
  return i9++
}

var a9 = new Number(42)

if (a9 == 2 && a9 == 3) {
  console.log('Yep, this happened.')
}

// 2.假值的相等比较: 24

// 7
console.log(0 == null, 0) // false
console.log(0 == undefined, 0) // false
console.log(0 == NaN, 0) // false
console.log(0 == [], 0) // true
console.log(0 == {}, 0) // false
console.log(0 == false, 0) // true
console.log(0 == '0') // true

// 5
console.log(false == null, 'false') // false
console.log(false == undefined, 'false') // false
console.log(false == NaN, 'false') // false
console.log(false == [], 'false') // true
console.log(false == {}, 'false') // false

// 7
console.log('' == null) // false
console.log('' == undefined) // false
console.log('' == NaN) // false
console.log('' == []) // true
console.log('' == {}) // false
console.log('' == false) // true
console.log('' == 0) // true

// 5
console.log('0' == null, '0') // false
console.log('0' == undefined, '0') // false
console.log('0' == NaN, '0') // false
console.log('0' == false, '0') // true
console.log('0' == '', '0') // false

// 3.极端情况
