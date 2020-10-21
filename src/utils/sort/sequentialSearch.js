console.log("顺序搜索");

/**
 * 1. 遍历数组中的全部元素
 * 2. 将数组元素和搜索值进行比较
 * 3. 返回搜索值或者-1
 */

let arr = [5, 4, 3, 2, 1];

function sequentialSearch(num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return num;
    }
  }
  return -1;
}

console.log(sequentialSearch(2)); // 2
console.log(sequentialSearch(1)); // 1
console.log(sequentialSearch(4)); // 4
console.log(sequentialSearch(9)); // -1
