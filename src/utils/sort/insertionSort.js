console.log("插入排序");

/**
 * 1. 从第一个开始，依次为【待插入值】
 * 2. 向前和每个元素比较，如果元素比【待插入值】大，则往前移动，直到遇到比【待插入值】小的元素，停止移动
 * 3. O(n^2)
 */

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   return arr;
// }

function insertion(arr) {
  let temp, j;

  for (let i = 1; i < arr.length; i++) {
    j = i;
    temp = arr[i];

    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = temp;
  }

  return arr;
}

function insertionSort(arr) {
  let j, temp;

  for (let i = 1; i < arr.length; i++) {
    j = i;
    temp = arr[i];

    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = temp;
  }

  return arr;
}

let list = [6, 5, 4, 3, 2, 1];
console.log(insertionSort(list)); // [ 1, 2, 3, 4, 5, 6 ]

let list1 = [7, 4, 2, 1];
console.log(insertionSort(list1)); // [ 1, 2, 4, 7 ]

let list2 = [5, 3, 2, 2];
console.log(insertion(list2)); // [ 2, 2, 3, 5 ]

let list3 = [8, 6, 4, 9];
console.log(insertion(list3)); // [ 4, 6, 8, 9 ]
