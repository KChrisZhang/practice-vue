function getLength(line, sum) {
  let arr = line.split(",");
  let len = arr.length;
  let seqLength = 0;
  let seqArr = [];

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // let a = Number(arr[i]);
      // let b = Number(arr[j]);
      // let num = ((a + b) * (j - i + 1)) / 2;
      // console.log(`${a}-${b}`, num);

      let temp = arr.slice(i, j + 1);
      console.log(temp, i);
      let num = 0;
      temp.map(item => {
        num += Number(item);
      });

      if (num === sum) {
        seqLength = j - i + 1;
        seqArr.push(seqLength);
        break;
      }
    }
  }

  if (seqArr.length > 0) {
    let max = seqArr[0];
    seqArr.map(item => {
      if (item > max) {
        max = item;
      }
    });
    console.log(max);
  } else {
    console.log(-1);
  }
}

getLength("10,10,10,1", 21);
