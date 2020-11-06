function getMax(line) {
  let str = line.split(",").join("");
  let arr = str.split("1");

  arr = arr.filter(item => item !== "");
  console.log(arr);

  if (arr.length === 1) {
    console.log(0);
  } else {
    let maxStr = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (maxStr.length < arr[i].length) {
        maxStr = arr[i];
      }
    }

    console.log(Math.ceil(maxStr.length / 2));
  }
}

// getMax("1,0,0,0,0,0,1,0,0,1,0,1");
getMax("1,0");
