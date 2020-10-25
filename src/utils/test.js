setTimeout(() => {
  console.log(1);
});

new Promise(resolve => {
  console.log(2);
  resolve(3);
}).then(val => {
  console.log(val);
});

// 2
// 3
// 1

const one = {
  name: "xiaoming"
};
const a = Object.create(one);
console.log(a, a.name);

/**
 * for...of(..) 数组遍历，遍历value值
 */
const arr1 = ["xxx", "seee", "tttt", "yyyy"];
for (let item of arr1) {
  console.log(item);
}
// xxx
// seee
// tttt
// yyyy

/**
 * for...in(...) 对象遍历，遍历key值
 */
var obj1 = {
  name: "sss",
  age: "12",
  sex: "female"
};
for (let i in obj1) {
  console.log(i);
}
// name
// age
// sex

/**
 * 对象遍历结合使用 Object.keys(...) 和 for...of(...)
 */
for (let i of Object.keys(obj1)) {
  console.log(obj1[i]);
}
// sss
// 12
// female
