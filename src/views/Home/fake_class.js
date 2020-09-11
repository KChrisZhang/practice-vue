class Vehicle {
  constructor() {
    this.engines = 1
  }

  ignition() {
    console.log('Turning on my engine.')
  }

  drive() {
    this.ignition()
    console.log('Steering and moving forward.')
  }
}

class Car extends Vehicle {
  constructor() {
    this.wheels = 4
  }

  drive() {
    // inherited:drive()
    console.log('Rolling on all ' + this.wheels + ' wheels.')
  }
}

class SpeedBoat extends Vehicle {
  constructor() {
    this.engines = 2
  }

  ignition() {
    console.log('Turning on my ' + this.engines + ' engines.')
  }

  pilot() {
    // inherited:drive()
    console.log('Speeding through the water with ease!')
  }
}

/**
 * javascript 关于类的实现：显式混入
 */
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    // 只会在不存在的情况下复制
    if (!key in targetObj) {
      targetObj[key] = sourceObj[key]
    }
  }
  return targetObj
}

var Vehicle = {
  engines: 1,
  ignition: function() {
    console.log('Turning on my engine.')
  },
  drive: function() {
    this.ignition()
    console.log('Steering and moving forward!')
  },
}

var Car = mixin(Vehicle, {
  wheels: 4,
  drive: function() {
    Vehicle.drive.call(this)
    console.log('Rolling on all ' + this.wheels + ' wheels!')
  },
})

/**
 * 现在 Car 中就有了一份Vehical属性和函数的副本了。
 * 从技术角度说，函数实际上没有被复制，复制的是函数的引用
 */

/**
 * 原型链
 * 属性访问的查找规则
 * 普通对象的prototype最终都会指向 内置的Object.prototype
 */
var anotherObject = { a: 2 }
var myObject2 = Object.create(anotherObject)

console.log(anotherObject.a) // 2
console.log(myObject2.a) // 2
console.log(anotherObject.hasOwnProperty('a')) // true
console.log(myObject2.hasOwnProperty('a')) // false

myObject2++
console.log(anotherObject.a) // 2
console.log(myObject2.a) // 3
console.log(myObject2.hasOwnProperty('a')) // true

// 如果要让 anotherObject.a 的值增加，唯一的办法是 anotherObject.a++

/**
 * Javascript中一直有一种奇怪的行为，那就是模仿类。
 * “类似类” 的行为利用了函数的一种特殊特性：
 * 所有的函数都会拥有一个名为 prototype 的公有并且不可枚举的属性，它会指向另一个对象。
 */
function Foo() {}
Foo.prototype
// 这个对象通常被称作Foo的原型

var a = new Foo()
Object.getPrototypeOf(a) === Foo.prototype // true
