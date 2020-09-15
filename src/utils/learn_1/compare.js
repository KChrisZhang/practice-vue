/**
 * 比较思维模型
 * 类和委托两种设计模式的差别
 */

/**
 * 下面是典型的（“原型”）面向对象风格
 * 子类Bar继承了父类Foo，然后生成了b1和b2两个实例
 * b1 委托了 Bar.prototype，Bar 委托了 Foo.prototype
 */
function Foo(who) {
  this.me = who
}
Foo.prototype.identify = function() {
  return 'I am ' + this.me
}

function Bar(who) {
  Foo.call(this, who)
}
Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.speak = function() {
  console.log('Hello, ' + this.identify() + '.')
}

var b1 = new Bar('b1')
var b2 = new Bar('b2')
b1.speak()
b2.speak()

/**
 * 下面是使用对象关联风格 编写功能完全相同的代码
 * 把 b1Object 委托给 BarObject, 并把 BarObject 委托给 FooObject
 */
var FooObject = {
  init: function(who) {
    this.me = who
  },
  identify: function() {
    return 'I am ' + this.me
  },
}

var BarObject = Object.create(FooObject)
BarObject.speak = function() {
  console.log('Hello, ' + this.identify() + '.')
}

const b1Object = Object.create(BarObject)
b1Object.init('b1Object')
b1Object.speak()

const b2Object = Object.create(BarObject)
b2Object.init('b2Object')
b2Object.speak()
