/**
 * 数组有内置的 iterator，因此 for..of 可以直接应用在数组上。
 * 我们使用内置的 iterator 来手动遍历数组
 */
var myArray = [1, 2, 3]
var itArray = myArray[Symbol.iterator]()

it.next() // {value: 1, done: false}
it.next() // {value: 2, done: false}
it.next() // {value: 3, done: false}
it.next() // {done: true}

// iterator 本身不是一个迭代器对象，而是一个返回迭代器对象的函数

/**
 * 和数组不同，普通对象没有内置的 iterator，所以无法自动完成 for..of 遍历
 */
var myObject = {
  a: 2,
  b: 3,
}

Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function() {
    var idx = 0
    var o = this
    var ks = Object.keys(o)
    return {
      next: function() {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length,
        }
      },
    }
  },
})

// 或者，如下定义
var myObject2 = {
  a: 2,
  b: 3,
  [Symbol.iterator]: function() {
    var idx = 0
    var o = this
    var ks = Object.keys(o)

    return {
      next: function() {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length,
        }
      },
    }
  },
}

// 手动遍历
var it = myObject[Symbol.iterator]()
it.next() // {value: 2, done: false}
it.next() // {value: 2, done: false}
it.next() // {value: undefined, done: true}

// 用for..of 遍历myObject
for (var v of myObject) {
  console.log(v)
}
// 2
// 3
