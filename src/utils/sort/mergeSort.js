console.log("归并排序");

/**
 * 1. O(nlogn)
 */

// 合并left、right
function merge(left, right) {
  let result = [];
  let il = 0;
  let ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  while (il < left.length) {
    result.push(left[il++]);
  }

  while (ir < right.length) {
    result.push(right[ir++]);
  }

  return result;
}

// 拆分left、right
function mergeSort(arr) {
  const length = arr.length;

  if (length === 1) {
    return arr;
  }

  let mid = Math.floor(length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, length);

  return merge(mergeSort(left), mergeSort(right));
}

let list = [9, 6, 3, 2];
console.log(mergeSort(list)); // [2, 3, 6, 9]

let list1 = [3, 5, 3, 2];
list1.sort((x, y) => {
  return x - y;
});
console.log(list1);

let friends = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 }
];

function comparePerson(a, b) {
  return a.age - b.age;
  // if (a.age < b.age) {
  //   return -1;
  // }

  // if (a.age > b.age) {
  //   return 1;
  // }
  // return 0;
}

console.log(friends.sort(comparePerson));
