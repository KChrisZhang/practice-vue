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
    console.log("reset");
    flag = false;
  }
  // 一定要return
  return _this;
};

const any = [12, 8, 24, 16, 1];
// const any = [1, 2, 3, 4, 5];
const result = any.bubble();
console.log(result);

console.log("================", 123);

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
        swap(_this, j, j + 1);
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
console.log(result1);
