console.log("背包问题");

function baggage(weights, values, W) {
  var n = weights.length;
  let f = new Array(n);
  let k = -1;
  f[k] = new Array(W + 1).fill(0);
  // console.log(f);
  let selected = [];

  for (let i = 0; i < n; i++) {
    f[i] = [];

    for (let j = 0; j <= W; j++) {
      if (j < weights[i]) {
        f[i][j] = f[i - 1][j];
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i]);
      }
    }
  }
  console.log(f);

  let j = W;
  let w = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (f[i][j] > f[i - 1][j]) {
      selected.push(i);
      console.log("物品", i, "重量为", weights[i], "价格为", values[i]);
      j = j - weights[i];
      w += weights[i];
    }
  }
  console.log("背包最大重量为", W, "现在重量为", w, "其价格为", f[n - 1][W]);

  return [f[n - 1][W], selected.reverse()];
}

let a = baggage([2, 3, 4, 1], [2, 5, 3, 2], 5);
console.log(a);
// 物品 1 重量为 3 价格为 5
// 物品 0 重量为 2 价格为 2
// 背包最大重量为 5 现在重量为 5 其价格为 7
// [ 7, [ 0, 1 ] ]

let b = baggage([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10);
console.log(b);
// 物品 4 重量为 4 价格为 6
// 物品 1 重量为 2 价格为 3
// 物品 0 重量为 2 价格为 6
// 背包最大重量为 10 现在重量为 8 其价格为 15
// [ 15, [ 0, 1, 4 ] ]
