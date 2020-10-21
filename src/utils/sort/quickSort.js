console.log("快速排序");

/**
 * 1. O(n^2), O(nlogn)
 */

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  let index;

  if (arr.length > 1) {
    index = partition(arr, left, right);

    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    if (index < right) {
      quickSort(arr, index, right);
    }
  }

  return arr;
}

let list = [9, 5, 3, 5, 6];
console.log(quickSort(list)); // [3, 5, 5, 6, 9]
