let a = "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]";
let b = JSON.parse(a);
let c = b[0];

console.log(a);
console.log(b);
console.log(c, Array.isArray(c));

function validName(name) {
  // 1. 一旦新建promise，就会立即执行，无法中途取消
  // 2. 处于pending状态时，无法知道当前进展到哪一个阶段（刚开始，即将完成）
  return new Promise((resolve, reject) => {
    if (name.length > 10) {
      // 3. 若无指定回调，promise内部抛出的错误，无法反应到外部
      // reject("error");
    } else {
      resolve("success");
    }
  });
}

validName("kchris").then(res => {
  console.log(res); // success
});

validName("wawawwwwwwwwwwwwwww").then(res => {
  console.log(res);
});
