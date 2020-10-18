function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

Array.prototype.bubble = function bubble() {
  let flag = false;
  const _this = this;

  for (let i = 0; i < _this.length - 1; i++) {
    for (let j = 0; j < _this.length - 1; j++) {
      if (_this[j] > _this[j + 1]) {
        swap(_this, j, j + 1);
        flag = true;
      }
    }

    if (!flag) break;
    flag = false;
  }
  // 一定要return
  return _this;
};

const any = [12, 8, 24, 16, 1];
// const any = [1, 2, 3, 4, 5]; // 只需要进行一轮
const result = any.bubble();
console.log("result", result); // [ 1, 8, 12, 16, 24 ]

function swap1(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

Array.prototype.bubble1 = function bubble() {
  const _this = this;
  const length = _this.length;
  let flag = false;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (_this[j] > _this[j + 1]) {
        swap1(_this, j, j + 1);
        flag = true;
      }
    }

    if (!flag) break;
    flag = false;
  }

  return _this;
};

const any1 = [12, 4, 12, 4, 3];
const result1 = any1.bubble1();
console.log("result1", result1); // [ 3, 4, 4, 12, 12 ]

function swap2(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

Array.prototype.bubble2 = function bubble2() {
  const _this = this;
  const length = _this.length;
  let flag = false;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (_this[j] > _this[j + 1]) {
        swap2(_this, j, j + 1);
        flag = true;
      }
    }

    if (!flag) break;
    flag = false;
  }

  return _this;
};

const any2 = [34, 45, 12, 3, 57];
const result2 = any2.bubble2();
console.log("result2", result2); // [ 3, 12, 34, 45, 57 ]
