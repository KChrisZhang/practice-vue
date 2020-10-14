console.time("AAA");

// 数据量增大几倍，耗时增大几倍

// O(n)：一个for循环
for (let i = 0; i < 8; i++) {
  // console.log(i, "i");
}

// O(n^2)：两个for循环
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // console.log(i, j);
  }
}

// O(n^3)：三个for循环
console.timeEnd("AAA");

// 性能相对较好的数组去重和冒泡排序
// 数组去重
// 冒泡排序

// 排序：冒泡、插入、快速、选择
let any = [12, 8, 24, 16, 1];
console.log(any);

function swap(a, b) {
  /*let c = a;
  a = b;
  b = c;*/

  /*[a, b] = [b, a];*/

  a = a + b;
  b = a - b; // 原始a
  a = a - b; // 原始b
}
swap(2, 3);

// 升级：数组中的两项交换
function swap1(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

// 时间复杂度
// N^2/2 去除常量
// N^2(最坏情况)
// N （最好情况）
Array.prototype.bubble = function bubble() {
  // this => any
  let _this = this,
    flag = false;

  // 控制循环多少轮
  for (let i = 0; i < _this.length - 1; i++) {
    // 控制每一轮循环多少次
    for (let j = 0; j < _this.length - 1; j++) {
      // 交换位置
      if (_this[j] > _this[j + 1]) {
        swap1(_this, j, j + 1);
        flag = true;
      }
    }
    if (!flag) break; // 一轮之后没有交换位置，说明已经排序完成了，则中断当前循环
    flag = false;
  }

  return _this;
};

let result = swap1(any, 1, 2);
console.log(result);

let sort = any.bubble();
console.log(sort, "sort");
