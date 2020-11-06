function getCount(line) {
  let arr = line[0].split(" ");
  let n = arr.length;
  let f = new Array(n);
  f[0] = [];

  for (let j = 0; j < n; j++) {
    f[0][j] = Number(arr[j]);
  }

  for (let i = 1; i < n; i++) {
    let lineArr = line[i].split(" ");
    f[i] = [];

    for (let j = 0; j < n; j++) {
      f[i][j] = Number(lineArr[j]);
    }
  }

  console.log(f);

  let count = 0;
  let connectObj = {};
  f.map((iItem, i) => {
    connectObj[i] = [];

    iItem.map((jItem, j) => {
      if (jItem === 1 && i !== j) {
        // eslint-disable-next-line no-prototype-builtins
        if (connectObj.hasOwnProperty(j)) {
          // console.log(connectObj[j][i], i, j, "-----");
          if (connectObj[j][i] === "undefined") {
            connectObj[i].push(j);
            count++;
          }
        } else {
          connectObj[i].push(j);
          count++;
        }
      }
    });
  });

  console.log(connectObj);

  if (count < n) {
    console.log(n - count);
  } else {
    console.log(1);
  }
}

let a = ["0 1 1", "1 0 1", "0 1 1"];

getCount(a);
