console.log("冒泡排序");

/**
 * 将数组中较小的元素向上移动，类似气泡冒出表面
 * 1. 进行 n 轮比较
 * 2. 在每一轮中，每一个元素向后 和其他 n-1 个元素比较（相邻元素比较），如果前者大于后者，交换位置
 * 3. 在每一轮进行完成后，都会在末尾产生一个最大的数
 * 4. 事件复杂度：O(n), O(n^2)
 */

const arr = [5, 4, 3, 2, 1];

function swap(i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  return arr;
}

console.log(bubbleSort());
