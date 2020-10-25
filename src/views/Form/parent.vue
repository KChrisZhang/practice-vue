<template>
  <div>
    <h3>父组件</h3>
    <children
      :name="name"
      :age="age"
      :sex="sex"
      :info="info"
    ></children>
  </div>
</template>

<script>
import children from './children';

export default {
  name: 'parent',
  components: {
    children
  },
  provide: {
    vertical: 'bus'
  },
  data() {
    return {
      name: 'xiaoming',
      sex: 'male',
      age: 18,
      info: {
        name: 'Hong',
        sex: 'female',
        age: 21
      },
      arr: [1, 2, 3, 4]
    };
  },
  computed: {
    newInfo() {
      return JSON.parse(JSON.stringify(this.info));
    },
    newArr() {
      return this.arr.toString();
    }
  },
  watch: {
    newInfo: {
      deep: true,
      handler: function(newVal, oldVal) {
        console.log(JSON.stringify(newVal), 'newVal');
        console.log(JSON.stringify(oldVal), 'oldVal');
      }
    },
    newArr: {
      deep: true,
      handler: function(newVal, oldVal) {
        console.log(newVal, 'newVal');
        console.log(oldVal, 'oldVal');
      }
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('123');
      // this.info['age'] = 6; // 如果 deep=true，watch监测到的 newVal 和 oldVal 是一样的
      // this.arr[1] = 8; // 无法触发watch，不管 deep 是否为 true

      // this.arr.splice(0, 1, 8);

      // watch 可以监听到对象的属性或者下标值发生变化，但是 newVal 和 oldVal 一样
      this.$set(this.arr, 0, 8);
      this.$set(this.info, 'age', 6);
    }, 1000);
  }
};
</script>
