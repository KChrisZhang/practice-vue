<template>
  <div>
    <h4>孙子组件</h4>
    <div>{{$attrs}}</div>
    <p>{{way}}</p>
  </div>
</template>

<script>
export default {
  name: 'grandchild',
  inject: ['vertical'],
  data() {
    return {
      way: this.vertical
    };
  }
};
</script>
