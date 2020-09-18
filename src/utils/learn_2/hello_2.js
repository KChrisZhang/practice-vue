console.log('hello_2')

console.log('\n', '----------------------[demo1]')

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

console.log('\n', '----------------------[demo2]')

var a2 = new Array(3)
console.log(a2.length) // 2
console.log(a2, 'a2') // [ <3 empty items> ]

console.log('\n', '----------------------[demo3]')

var a3 = new Array(3)
var b3 = [undefined, undefined, undefined]
var c3 = []
c3.length = 3

console.log(a3, 'a3')
console.log(b3, 'b3')
console.log(c3, 'c3')

console.log('\n', '----------------------[demo4]')

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

console.log('\n', '----------------------[demo5]')

/**
 * 获取当前时间戳的两种方式
 * 1 ES5 之前，getTime()
 * 2 ES5 开始，Date.now()
 */
console.log(new Date()) // 不传递参数时，返回当前的日期和时间
console.log(new Date().getTime())
console.log(Date.now())

console.log('\n', '----------------------[demo6]')

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

console.log('\n', '----------------------[demo7]')

function isThisCool(vals, fn, rx) {
  vals = vals || Array.prototype
  fn = fn || Function.prototype
  rx = rx || RegExp.prototype

  console.log(vals, 'vals') // []
  console.log(fn, 'fn') // [Function]
  console.log(rx, 'rx') // RegExp {}

  // return rx.test(vals.map(fn).join(''))
}

isThisCool()

var a7 = {
  val: [1, 2, 3],
  toJSON: function() {
    return this.val.slice(1)
  },
}

var b7 = {
  val: [1, 2, 3],
  toJSON: function() {
    return '[' + this.val.slice(1).join() + ']'
  },
}

console.log(JSON.stringify(a7)) // [2,3]
console.log(JSON.stringify(b7)) // "[2,3]"

console.log('\n', '----------------------[demo8]')

/**
 * 可选参数 replacer，可以是数组或者函数
 * 用来指定 对象序列化过程中 哪些属性应该被处理，哪些应该被排除，和 toJSON() 很像
 */
var a8 = {
  b: 42,
  c: '42',
  d: [1, 2, 3],
}

/**
 * 如果 replacer 是一个数组，那么它必须是一个 字符串数字
 * 其中包含序列化要处理的对象的属性名称，除此之外其他的属性名称则被忽略
 */
console.log(JSON.stringify(a8, ['b', 'c'])) // {"b":42,"c":"42"}

/**
 * 如果 replacer 是一个函数，它会对对象本身调用一次
 * 然后对对象中的每个属性各调用一次，每次传递两个参数，键和值。
 */
console.log(
  JSON.stringify(a8, function(k, v) {
    if (k !== 'c') return v
  })
)
// {"b":42,"d":[1,2,3]}

// JSON.stingify(...) 第三个可选参数，用来指定输出的缩进格式。
console.log(JSON.stringify(a8, ['b', 'c'], '--'))
// {
//   --"b": 42,
//   --"c": "42"
//   }

var date = new Date()
console.log(date, 'date')
console.log(+date, 'ts')

console.log('\n', '----------------------[demo9]')

/**
 * 为啥打印18？
 * 第一个错误：向 parseInt(...) 传递非字符串，此时JavaScript会将参数 强制类型转换为 它能够处理的字符串
 * 第二个错误：基数19，在实际的JavaScript代码中不会用到基数19，它的有效数字字符范围是 0-9 和 a-i（区分大小写）
 * parseInt(1/0, 19) 实际上是 parseInt('Infinity', 19)
 * 第一个字符是 ‘I’，以19为基数时，数值为18；
 * 第二个字符‘n’，不是一个有效的数字字符，解析到此位置，和‘42px’中的‘p’一样。
 */

// 0 1 2 3 4 5 6 7 8 9
// a b c d e f g h i
console.log(parseInt(1 / 0, 19)) // 18

var a9 = {
  num: 21,
  toString: function() {
    return String(this.num * 2)
  },
}
console.log(parseInt(a9))

console.log('\n', '----------------------[demo10]')

/**
 * 显式强制类型转换为布尔值最常用的方法是 !!
 * 因为第二个 ! 会将结果反转回原值
 */
var a10 = '0'
var b10 = []
var c10 = {}

var d10 = ''
var e10 = 0
var f10 = null
var g10

console.log(!!a10, 'a10') // true
console.log(!!b10, 'b10') // true
console.log(!!c10, 'c10') // true

console.log(!!d10, 'd10') // false
console.log(!!e10, 'e10') // false
console.log(!!f10, 'f10') // false
console.log(!!g10, 'g10') // false

console.log('\n', '----------------------[demo11]')

var a11 = [1, function() {}, 2, function() {}]
console.log(JSON.stringify(a11), 'a11') // [1,null,2,null]

var result = JSON.stringify(a11, function(k, v) {
  if (typeof v == 'function') {
    return !!v
  } else {
    return v
  }
})
console.log(result, 'result') // [1,true,2,true]
