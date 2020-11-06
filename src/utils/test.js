setTimeout(() => {
  console.log(1);
});

new Promise(resolve => {
  console.log(2);
  resolve(3);
}).then(val => {
  console.log(val);
});

// 2
// 3
// 1

const one = {
  name: "xiaoming"
};
const a = Object.create(one);
console.log(a, a.name);

/**
 * for...of(..) 数组遍历，遍历value值
 */
const arr1 = ["xxx", "seee", "tttt", "yyyy"];
for (let item of arr1) {
  console.log(item);
}
// xxx
// seee
// tttt
// yyyy

/**
 * for...in(...) 对象遍历，遍历key值
 */
var obj1 = {
  name: "sss",
  age: "12",
  sex: "female"
};
for (let i in obj1) {
  console.log(i);
}
// name
// age
// sex

/**
 * 对象遍历结合使用 Object.keys(...) 和 for...of(...)
 */
for (let i of Object.keys(obj1)) {
  console.log(obj1[i]);
}
// sss
// 12
// female

function analyseNumber(str) {
  let data = Number(str);
  let arr = [];

  for (let i = 2; i <= data; i++) {
    while (data % i === 0) {
      arr.push(i);
      data = data / i;
    }
    console.log(i, "------" + data);
  }

  console.log("结果是", arr.join(" ") + " ");
}

analyseNumber(180);

let b = "123";
console.log(typeof +b === "number", "=======");

function computedPos(str) {
  let arr = str.split(";");
  let x = 0;
  let y = 0;

  for (let item of arr) {
    if (item && item.length > 1) {
      let temp = item.split("");
      let direction = temp.splice(0, 1)[0];
      item = temp.join("");
      let num = Number(item);

      if (num == item) {
        console.log("direction", direction);
        switch (direction) {
          case "A": // left
            x -= num;
            break;
          case "S": // bottom
            y -= num;
            break;
          case "W": // top
            y += num;
            break;
          case "D": // right
            x += num;
            break;
        }
      }
    }
  }

  console.log(`${x},${y}`);
}
computedPos("A10;S20;W10;D30;X;A1A;B10A11;;A10;");

console.log("-----------", "demo1");
var a6 = 10,
  b6 = 20,
  c6 = 30;
console.log(++a6, a6); // 11, 11
console.log(a6++, a6); // 11, 12
let e6 = ++a6 + ++b6 + c6++; // 13 + 21 + 30 = 64
console.log("结果是", e6++, e6);

console.log("-----------", "demo1");
console.log("5" + 3); // 8
console.log("5" - 3); // 2
