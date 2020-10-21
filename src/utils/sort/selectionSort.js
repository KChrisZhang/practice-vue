console.log("选择排序");

/**
 * 1. 从 index=0 的元素出发，依次选出 n-1 个最小的值
 * 2. 每一个最小的值都要和数组内的全部元素进行比较，如果比当前数小，交换下标值
 * 3. O(n^2)
 */

let list = [6, 5, 4, 3, 2, 1];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selection(arr) {
  let indexMin;

  for (let i = 0; i < arr.length - 1; i++) {
    indexMin = i;

    for (let j = i; j < arr.length; j++) {
      // console.log(i, j);

      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }

    if (i !== indexMin) {
      swap(arr, i, indexMin);
    }
  }

  return arr;
}

console.log(selection(list)); // [ 1, 2, 3, 4, 5, 6 ]

function selectionSort(arr) {
  let indexMin;

  for (let i = 0; i < arr.length - 1; i++) {
    indexMin = i;
    // console.log(i, "selectionSort");

    for (let j = i; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }

    if (indexMin !== i) {
      swap(arr, i, indexMin);
    }
  }

  return arr;
}

let list1 = [7, 5, 4, 3, 2, 1];
console.log(selectionSort(list1)); // [ 1, 2, 3, 4, 5, 7 ]

/**
 * 计算一行字符串中最后一个字符串的长度
 */
function count(value) {
  let sum = 0;
  let arr = value.split(" ");
  let lastItem = arr[arr.length - 1].split("");

  while (lastItem.length > 0) {
    lastItem.splice(0, 1);
    sum++;
  }

  return sum;
}

console.log(count("hello nowcoder")); // 8

// ++i：返回加 1 后的值
let i = 1;
console.log(++i); // 2

// i++：返回原来的值
let j = 1;
console.log(j++); // 1
