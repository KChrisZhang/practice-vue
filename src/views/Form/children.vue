<template>
  <div>
    <h3>子组件</h3>
    <grandchild v-bind="$attrs"></grandchild>
  </div>
</template>


<script>
import grandchild from './grandchild';

export default {
  name: 'children',
  components: {
    grandchild
  },
  props: {
    // info: Object
  }
};
</script>
