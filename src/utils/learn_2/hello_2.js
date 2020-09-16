console.log('hello_2')

console.log('-----------demo1-----------')
var foo = function(x) {
  x = x + 1
  console.log(x, 'x') // 3
}

var a = 2
var b = new Number(a)

/**
 * 虽然传递的是 指向数字对象的引用副本，但我们并不能通过它来更改其中的基本类型值
 * 原因是 标量基本类型的值 是 不可更改的（字符串和布尔值也是如此）
 */
foo(b)
console.log(b, 'b')

console.log('第三章 原生函数')
console.log('-----------demo2-----------')
