/**
 * 快速排序：二分法思想
 * 1. 取出数组的中间项
 * 2. 拿每一项和中间项比较
 *  1）比中间项小的放左边
 *  2）比中间项大的放右边
 * 3. 再依次拿左边和右边的数组同样的方式处理
 *  直到某一边的数组是一项或者没有，则不再拆分
 * 4. 最后的结果，每一次都是：左边+中间+右边
 */

console.log("快速排序", "fast_1");

Array.prototype.quick = function quick() {
  const _this = this;

  if (_this.length <= 1) return _this;

  // 获取中间项，并把中间项在数组中删除
  let middleIndex = Math.floor(_this.length / 2);
  let middleValue = _this.splice(middleIndex, 1)[0];

  let arrLeft = [],
    arrRight = [];
  for (let i = 0; i < _this.length - 1; i++) {
    let item = _this[i];
    item < middleValue ? arrLeft.push(item) : arrRight.push(item);
  }

  return quick.call(arrLeft).concat(middleValue, quick.call(arrRight));
};

let arr = [12, 8, 24, 16, 1];
arr = arr.quick();
console.log(arr);
