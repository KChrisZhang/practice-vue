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
