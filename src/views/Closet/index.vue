<template>
  <div class="closet">closet</div>
</template>

<script>
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
    }
  },
  mounted() {
    this.timer();
    this.timer1();
    this.timer2();
  }
};
</script>

<style lang="scss" scoped>
.closet {
  background-color: #fff;
}
</style>
