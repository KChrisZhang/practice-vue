console.log("promise_1");

function getY(x) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(3 * x - 1);
    }, 100);
  });
}
function foo(bar, baz) {
  var x = bar * baz; // 10 * 20 = 200

  return getY(x).then(function(y) {
    // 200 * 3 - 1 = 599
    return [x, y];
  });
}

foo(10, 20).then(msgs => {
  let x = msgs[0];
  let y = msgs[1];
  console.log(x, y); // 200, 599
});
