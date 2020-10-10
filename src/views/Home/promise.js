/**
 * 通过回调 实现 将来时间点的某个事件：x+y
 */
console.log("===================[demo1]");

function add(getX, getY, cb) {
  var x, y;
  getX(function(xVal) {
    x = xVal;
    // 两个都准备好了
    if (y !== undefined) {
      cb(x + y); // 发送和
    }
  });
  getY(function(yVal) {
    y = yVal;
    // 两个都准备好了
    if (x !== undefined) {
      cb(x + y); // 发送和
    }
  });
}

// fetchX() 或 fetchY() 是同步或者异步函数
function fetchX(cb) {
  console.log("fetchX");
  if (cb && typeof cb === "function") {
    cb(3);
  }
}
function fetchY(cb) {
  console.log("fetchY");
  if (cb && typeof cb === "function") {
    cb(4);
  }
}

add(fetchX, fetchY, function(sum) {
  console.log("[add1]Sum:", sum);
});
// fetchX
// fetchY
// [add1]Sum: 7

/**
 * 通过Promise 实现 将来时间点的某个事件：x+y
 */
console.log("===================[demo2]");

function add2(xPromise, yPromise) {
  // Promise.all[...] 接受一个promise数组并返回一个新的promise
  // 这个新的promise等待数组中的所有promise完成
  return (
    Promise.all([xPromise, yPromise])
      //这个promise决议之后，我们取得收到的x和y值并加在一起
      .then(function(values) {
        console.log("values", values);
        // values 来自于之前决议的promises的消息数组
        return values[0] + values[1];
      })
  );
}

// fetchX2, fetchY2 返回相应值的 promise，可能已经就绪，也可能以后就绪
const fetchX2 = Promise.resolve(1);
const fetchY2 = Promise.resolve(3);

add2(fetchX2, fetchY2)
  // 我们得到一个这两个数组的的和的promise
  // 现在链式调用then(...)来等待返回promise的决议
  .then(function(sum) {
    console.log("[add2]Sum:", sum);
  });

// values [1, 3]
// [add2]Sum: 4

function foo(a) {
  // 可能是一些很耗时的工作
  // 构造并返回一个promise
  return new Promise(function(resolve, reject) {
    // 最终调用resolve或者reject
    // 这是promise的决议回调
    if (a > 0) {
      resolve(a);
    } else {
      reject(a);
    }
  });
}

foo(2).then(value => console.log(value, "foo[resolve]"));
foo(-3).catch(error => console.log(error, "foo[reject]"));
