<template>
  <div class="closet">closet</div>
</template>

<script>
import myModule from './modules_mock';
console.log(myModule);

export default {
  name: 'ClosetIndex',
  methods: {
    /**
     * 词法作用域：执行完成for循环，此时 i=5
     * 函数作用域：定时器执行函数，保留对全局i的引用
     * 5 打印5次
     */
    timer() {
      for (var i = 0; i < 5; i++) {
        setTimeout(function() {
          console.log('timer', i);
        }, 1000);
      }
    },
    /**
     * 闭包
     * 将内部函数传递到所在词法作用域之外
     * 都会持有原始定义作用域的引用
     */
    timer1() {
      for (var i = 0; i < 5; i++) {
        (function(i) {
          setTimeout(function() {
            console.log('timer1', i);
          }, 1000);
        })(i);
      }
    },
    /**
     * 块作用域：let
     * 1 变量在循环过程中不止被声明一次，每次迭代都会声明
     * 2 随后的每次迭代都会使用上一次迭代结束时的值来初始化这个变量
     */
    timer2() {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          console.log('timer2', i);
        }, 1000);
      }
    },

    applyPush() {
      const arr = ['a', 'b'];
      const add = ['1', '2', '3'];
      arr.push.apply(arr, add);
      console.log('applyPush', arr);
    },
    applyFunc() {
      const apple = {
        color: 'red',
        say(name = 'Apple') {
          console.log(`${name}'s color is ${this.color}.`);
        }
      };

      const banana = { color: 'yellow' };
      const orange = { color: 'orange' };

      apple.say();
      apple.say.apply(banana, ['Banana']); // 类数组参数
      apple.say.call(orange, 'Orange'); // 参数列表,按顺寻排列
    },

    // timer 函数保有wait(...)作用域的闭包
    wait(message) {
      setTimeout(function timer() {
        console.log(message);
      }, 1000);
    }
  },
  mounted() {
    // this.timer();
    // this.timer1();
    // this.timer2();

    // this.applyPush();
    // this.applyFunc();

    this.wait('Hello, closure');
  }
};
</script>

<style lang="scss" scoped>
.closet {
  background-color: #fff;
}
</style>
