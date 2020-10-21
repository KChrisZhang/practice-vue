console.log("二分搜索");

/**
 * 1. 排序
 * 2. 设置low 和 high，向下取整，将中间项作为主元
 * 3. 将搜索值和主元比较，
 *  1）如果搜索值>主元，改变low，重新取中间项作为主元；
 *  2）如果搜索值<主元，改变high，重新取中间项作为主元
 * 4. 返回搜索值或者-1
 */

const list = [1, 2, 3, 4, 5, 6];
function quickSort(arr) {
  return arr;
}

function binarySearch(num) {
  const arr = quickSort(list);

  let low = 0,
    high = arr.length - 2;
  let mid, element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = arr[mid];

    if (element < num) {
      low = mid + 1;
    } else if (element > num) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(binarySearch(0)); // -1
console.log(binarySearch(2)); // 2
console.log(binarySearch(4)); // 4
