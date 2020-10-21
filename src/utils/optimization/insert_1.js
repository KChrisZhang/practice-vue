/**
 * 插入排序：数组插入
 * 时间复杂度：O（n^2)
 * 1. 先抽出一张牌
 * 2. 每一次抽到一张牌都和手里的牌比较：（个人喜欢倒着比较）
 *  如果新抽出来的牌
 *    1）比 当前这张大，就把它放到后面
 *    2）比 当前这张小，继续向前比，直到遇到比当前这张大的，在后面插入；
 *    如果比较到头，都没发现新抽出来的牌比当前这张大的，则放到最开始的位置即可
 */

console.log("插入排序", "insert_1");

Array.prototype.insert = function insert() {
  // 先取出一张牌放到手里
  const _this = this;
  const handle = [];
  handle.push(_this[0]);

  // 开始抓牌
  for (let i = 1; i < _this.length; i++) {
    // A每次新抓的牌
    let A = _this[i];

    // 和手里的牌进行比较（倒着比较）
    for (let j = handle.length - 1; j >= 0; j--) {
      //  要比较的手里这张牌
      let B = handle[j];
      // 新抓的牌A比B大，则放在B后面
      if (A > B) {
        handle.splice(j + 1, 0, A);
        break; // 没必要和手里的牌继续比较了
      }

      // 都比到最开始，A都没有比任何的牌大，则A是最小的，插入到最开始
      if (j === 0) {
        handle.unshift(A);
      }
    }
  }

  return handle;
};

let arr = [12, 8, 24, 16, 1];
arr = arr.insert();
console.log(arr); // [ 1, 8, 12, 16, 24 ]
