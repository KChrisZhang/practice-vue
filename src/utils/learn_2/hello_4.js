console.log('hello_4')
console.log('\n', '---------对象解构 [demo1]')

function getData() {
  return {
    a: 42,
    b: 'foo',
  }
}

var { a, b } = getData()
console.log('解构赋值')
console.log(a, b) // 42, 'foo'

function foo({ a, b, c }) {
  console.log(a, b, c)
}

console.log('参数解构')
foo({ c: [1, 2, 3], a: 42, b: 'foo' }) // 42 'foo' [1, 2, 3]

console.log('\n', '---------TDZ [demo2]')

var b2 = 3

/**
 * b2 = a2 + b2 + 5 在参数 b2（= 右边的参数b2，而不是函数外的那个）的TDZ中访问b2，所以会出错。
 */
function foo2(a2 = 42, b2 = a2 + b2 + 5) {
  console.log('foo2')
}
// foo2() // ReferenceError: b2 is not defined

function bar2(a = 42, b = a + 1) {
  console.log(a, b)
}

/**
 * 在 ES6 中，如果参数 被省略 或者 值为 undefined，则 取该参数的默认值
 * 表达式 a + 1 中，null 被强制类型转换为 0
 */
bar2() // 42, 43
bar2(undefined) // 42, 43
bar2(5) // 5, 6
bar2(void 0, 7) // 42, 7
bar2(null) // null, 1

/**
 * ES6 中，参数默认值会导致 arguments 数组和对应的命名参数之间出现偏差
 * 向函数传递参数时，arguments 数组中的对应单元 会和 命名参数之间 建立关联，以得到相同的值
 * 相反，不传递参数 就不会 建立关联
 * 但是，在严格模式中，并没有 建立关联 这一说，因此，在开发中不要依赖这种关联机制。
 */

console.log('\n', '---------[demo3]')

/**
 * try{...}catch(e){...}
 * try{...}finally{...}
 * finally 中的代码可以看作是一个回调函数，即，无论出现什么情况 最后 一定会被调用。
 * 如果 finally 中抛出错误（无论是有意或者无意），函数就会在此处终止。
 * 如果此前 try 中已经有 return 设置了返回值，则该值会被抛弃。对
 */

function foo3() {
  try {
    return 42
  } finally {
    console.log('hello, foo3!')
  }

  console.log('never runs')
}

/**
 * return 42 先执行，并将 foo() 函数的返回值设置为42
 * 然后 try 执行完毕，接着执行finally。
 * 最后 foo() 函数执行完毕，console.log(...) 显示返回值。
 */
console.log(foo3())
// hello, foo3!
// 42

function bar3() {
  try {
    throw 42
  } finally {
    console.log('hello, bar3!')
  }
  console.log('never runs')
}

// console.log(bar3())
// hello, bar3!
// Uncaught Exception: 42

function baz3() {
  for (var i = 0; i < 10; i++) {
    try {
      continue
    } finally {
      console.log(i)
    }
  }
}

/**
 * continue 在每次循环之后，会在 i++ 执行之前 执行 console.log(i)
 * 所以结果是 0...9，而非 1...10
 */
baz3() // 0, 1, 2, ..., 9

console.log('\n', '---------[demo4]')

/**
 * finally 中的 return 会覆盖 try 和 catch 中 return 的返回值
 * 通常来说，在函数中 省略return的结果 和 return; 及 return undefined; 是一样的；
 * 但是在 finally 中，省略return则会 返回前面的return设定的 返回值
 */

function foo4() {
  try {
    return 42
  } finally {
    // 没有返回语句，所以没有覆盖
    // console.log('foo4')
  }
}

function bar4() {
  try {
    return 42
  } finally {
    // 覆盖前面的 return 42
    return
  }
}

function baz4() {
  try {
    return 42
  } finally {
    // 覆盖前面的 return 42
    return 'hello'
  }
}

console.log(foo4()) // 42
console.log(bar4()) // undefined
console.log(baz4()) // hello

console.log('\n', '---------[demo5]')

/**
 * switch 可以看作 if...else if...else 的简易版本
 * case 将表达式的结果和true进行比较
 * 如果 case表达式的结果为真值，但不是严格意义上的 true，则条件不成立
 * 和 case表达式的匹配算法 与 === 相同（严格相等）
 */

var a5 = 'hello world'
var b5 = 10

switch (true) {
  case a || b == 10:
    // 永远执行不到这里
    break
  default:
    console.log('Oops')
}
// Oops

/**
 * break 相关规则对 default 仍然适用
 * 首先，遍历并找到所有 匹配的case，如果没有匹配则执行 default中的代码
 * 因为，default中没有break，所以继续执行已经遍历过的 case 3 代码块，直到break为止
 */

var c5 = 10
switch (c5) {
  case 1:
  case 2:
  // 永远执行不到这里
  default:
    console.log('default')
  case 3:
    console.log('3')
    break
  case 4:
    console.log('4')
}
// default
// 3

console.log('\n', '---------[demo6]')

function addAll() {
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(addAll(2, 4, 6)) // 12

// “RangeError: Maximum call stack size exceeded”。

// var nums = []
// for (var i = 1; i < 100000; i++) {
//   nums.push(i)
// }

// console.log(addAll.call(null, nums))

console.log('\n', '---------[demo7]')

/**
 * 完整运行
 * 由于 JavaScript的单线程特性，
 * 一旦 foo() 开始运行，它的所有代码都会在 bar() 中的任意代码运行之前完成。
 * 这称为 完整运行 特性
 */

var a7 = 1
var b7 = 2

function foo7() {
  console.log('foo7')

  a7++ // 2
  b7 = b7 * a7 // 4
  a7 = b7 + 3 // 7
}
function bar7() {
  console.log('bar7')

  b7-- // 3
  a7 = 8 + b7 // 11
  b7 = a7 * 2 // 22
}

foo7()
bar7()

console.log(a7, b7) // 11, 22

// console.log('\n', '---------[demo8]')
// console.log('\n', '---------[demo9]')
// console.log('\n', '---------[demo10]')
