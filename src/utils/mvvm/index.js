function Observer(data) {
  this.data = data;
  this.walk(data);
}

const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
  item => {
    Object.defineProperties(arrayMethods, item, {
      value: function mutator() {
        console.log("array被访问");
        let original = arrayProto[item];
        let args = Array.form(arguments);
        original.apply(this, args);
      }
    });
  }
);

function def(obj, key, val) {
  Object.defineProperties(obj, key, {
    value: val,
    enumerable: true,
    writable: true,
    configurable: true
  });
}

function protoAugment(target, src) {
  target.__proto__ = src;
}
function copyAugment(target, src, keys) {
  keys.map(item => {
    def(target, item, src[item]);
  });
}

function observe(value) {
  if (typeof value !== "object") return;
  return new Observer(value);
}

function observeArray(items) {
  items.map(item => {
    observe(item);
  });
}

const p = Observer.prototype;

p.walk = function(obj) {
  let value;
  for (let key in obj) {
    if (obj.hasOwnPorperty(key)) {
      value = obj[key];

      if (typeof value === "object") {
        if (Array.isArray(value)) {
          let augment = value.__proto__ ? protoAugment : copyAugment;
          augment(value, arrayMethods, key);
          observeArray(value);
        }
        new Observer(value);
      }
      this.convet(key, value);
    }
  }
};
p.convet = function(key, value) {
  Object.defineProperties(this.data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      console.log(key + "被访问");
      return value;
    },
    set: function(newVal) {
      console.log(`${key}被修改，新${key}=${newVal}`);
      if (newVal === value) return;
      value = newVal;
    }
  });
};

let data = {
  user: {
    age: function() {
      console.log(1, "user:age");
    }
  },
  arg: [{ a: "b" }, 2, 3]
};

let app = new Observer(data);
app.arg.push(5);
