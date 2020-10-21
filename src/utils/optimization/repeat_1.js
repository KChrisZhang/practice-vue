/**
 * 数组去重 的n种方案
 */

/**
 * splice删除
 * 1. 原来数组改变，这样如果i继续++，则会产生数组塌陷
 * 2. 性能不好，当前项一旦删除，后面项索引都要变
 */

let arr = [12, 23, 12, 15, 25, 23, 25, 14, 16];
console.log(arr, 0);

// 1. set
const arr1 = new Set(arr);
const result = Array.from(arr1);
console.log(result, 1);

// 2. 拿出当前项和后面的内容进行比较
for (let i = 0; i < arr.length - 1; i++) {
  let item = arr[i];
  let temp = arr.slice(i + 1);

  if (temp.indexOf(item) > -1) {
    arr[i] = null;
  }
}
arr = arr.filter(item => item !== null);
console.log(arr, 2);

/**
 * 3.对象键值对
 * 拿数组中的每项向新容器中存储，如果已经存储过了，把当前项干掉
 */
let obj = {};

for (let i = 0; i < arr.length - 1; i++) {
  let item = arr[i];

  if (typeof obj[item] !== "undefined") {
    arr[i] = arr[arr.length - 1];
    arr.length--;
    i--;
    continue;
  }
  obj[item] = item;
}
obj = null;
console.log(arr, 3);

/**
 * 数组扁平化
 */
let arr5 = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10
];

// 1. ES6方法直接实现
// console.log(arr5.flat(Infinity));

// 2. 转换为字符串
arr5 = arr5.toString();
console.log(arr5, "1--2");
console.log(arr5.split(",").map(item => parseFloat(item)));

const a = [1, 2, 3, [4, 5]];
console.log([].concat(...a)); // [1, 2, 3, 4, 5]

let b = [1, 2, [3, 4, [5]]];
console.log([].concat(...b)); // [ 1, 2, 3, 4, [ 5 ] ]
console.log(b.some(item => Array.isArray(item)));

// concat实现，循环验证是否为数组
while (b.some(item => Array.isArray(item))) {
  b = [].concat(...b);
  console.log("========");
}

console.log(b, "end"); // [1, 2, 3, 4, 5]

/**
 * 斐波那契数列 fibonacci1
 * 1, 1, 2, 3, 5, 8, 13, 21, ...
 * fibonacci1(0) => 1
 * fibonacci1(4) => 5
 */

function fibonacci1(n) {
  if (n <= 1) return 1;
  let arr = [1, 1];
  // 即将要创建多少个
  let i = n + 1 - 2;
  while (i > 0) {
    let a = arr[arr.length - 2];
    let b = arr[arr.length - 1];
    arr.push(a + b);
    i--;
  }
  return arr[arr.length - 1];
}

console.log(fibonacci1(5)); // 8

/**
 * 递归：斐波那契数列
 */
function fibonacci2(count) {
  function fn(count, curr = 1, next = 1) {
    if (count === 0) {
      return curr;
    } else {
      return fn(count - 1, next, curr + next);
    }
  }

  return fn(count);
}

console.log(fibonacci2(5));

/**
 * 和为n的正数序列
 * 输入一个正数n，输出所有和为n的连续正数序列
 * 例如：输入15
 * 结果：[[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]]
 */
function createArr(n, len) {
  let arr = new Array(len).fill(null);
  let temp = [];
  arr[0] = n;
  arr = arr.map((item, index) => {
    if (item === null) {
      item = temp[index - 1] + 1;
    }
    temp.push(item);
    return item;
  });
  return arr;
}

function fn1(count) {
  let result = [];

  // 求出中间值
  let middle = Math.ceil(count / 2);

  // 从1开始累加
  for (let i = 1; i <= middle; i++) {
    // 控制累加多少次
    for (let j = 2; ; j++) {
      // 求出累加多次的和
      let total = (i + (i + j - 1)) * (j / 2);
      if (total > count) {
        break;
      } else if (total === count) {
        result.push(createArr(i, j));
        break;
      }
    }
  }

  return result;
}

console.log(fn1(4));
console.log(fn1(5));
console.log(fn1(10));
console.log(fn1(15));
