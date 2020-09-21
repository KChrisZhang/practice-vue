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

// console.log('\n', '---------[demo2]')
// console.log('\n', '---------[demo3]')
// console.log('\n', '---------[demo4]')
// console.log('\n', '---------[demo5]')
// console.log('\n', '---------[demo6]')
// console.log('\n', '---------[demo7]')
// console.log('\n', '---------[demo8]')
// console.log('\n', '---------[demo9]')
// console.log('\n', '---------[demo10]')
