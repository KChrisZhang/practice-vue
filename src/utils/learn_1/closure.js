var name = 'The Window'

/**
 * object.getNameFunc()() 返回为空
 * this指向空对象，没有name属性
 */
var object = {
  name: 'My Object',
  getNameFunc() {
    return function() {
      return this.name
    }
  },
}

/**
 * object.getNameFunc()() 返回“My Object”
 * that.name 中that保留了对原词法作用域的引用，即object
 */
object = {
  name: 'My Object',
  getNameFunc() {
    const that = this
    return function() {
      return that.name
    }
  },
}

console.log(name + '12')
console.log(object.getNameFunc()())
