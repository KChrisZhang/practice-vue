function NothingSpecial() {
  console.log("Don't mind me!")
}

const a = new NothingSpecial()
console.log(a)

const anotherObject = { a: 2 }
const myObject = Object.create(anotherObject)

console.log(anotherObject.a, 'anotherObject1')
console.log(myObject.a, 'myObject1')

console.log('myObject', myObject)
console.log('anotherObject', anotherObject)

// console.log(anotherObject.hasOwnProperty('a')) // true
// console.log(myObject.hasOwnProperty('a')) // false

myObject.a++
console.log(myObject.a, 'myObject2')
console.log(anotherObject.a, 'anotherObject2')
// console.log(myObject.hasOwnProperty('a')) // true

/**
 * Object.create(...) 可以完美地创建我们想要的关联关系
 * Object.create(...) 会创建一个新对象（bar）并把它关联到我们指定的对象（foo）
 * Object.create(null) 会创建一个拥有空[[prototype]]链接的对象，这个对象无法进行委托，这个对象么有原型链
 * 原型链
 */

var foo = {
  something() {
    console.log('Tell me something good...')
  },
}

var bar = Object.create(foo)
bar.something() // Tell me something good...

/**
 * ES5 之前，使用一段简单的 polyfill 代码
 */
if (!Object.create) {
  Object.create = function(o) {
    function F() {}
    F.prototype = o
    return new F()
  }
}

/**
 * Object.create(...) 的第二个参数指定了需要添加到新对象中的属性名及这些属性的属性描述符
 */
var anotherObject3 = { a: 2 }
var myObject3 = Object.create(anotherObject3, {
  b: {
    enumerable: false,
    writable: true,
    configurable: false,
    value: 3,
  },
  c: {
    enumerable: true,
    writable: false,
    configurable: false,
    value: 4,
  },
})

// myObject3.hasOwnProperty('a') // false
// myObject3.hasOwnProperty('b') // true
// myObject3.hasOwnProperty('c') // true

myObject3.a // 2
myObject3.b // 3
myObject3.c // 4

/**
 * JavaScript 原型链委托机制
 */
var Task = {
  setID(ID) {
    this.id = ID
  },
  outPutID() {
    console.log(this.id)
  },
}

// 让 XYZ 委托 Task
var XYZ = Object.create(Task)
XYZ.prepareTask = function(ID, Label) {
  this.setID(ID)
  this.label = Label
}

XYZ.outputTaskDetails = function() {
  this.outPutID()
  console.log(this.label)
}

// 让 ABC 委托 Task
// var ABC = Object.create(Task)
/// ABC... = ...
