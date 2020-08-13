function doSomething(a) {
  b = a + doSomethingElse(a * 2)
  console.log(b * 3)
}

function doSomethingElse(a) {
  return a - 1
}

var b
doSomething(2) // 15

// 此时 doSomethindElse 和 b 都可以被外部访问
// 应该位于 doSomething 内部，限制外部对 b 和 doSomethingElse 的访问
// 讲具体内容私有化，隐藏作用域
