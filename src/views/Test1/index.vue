<template>
  <div class="test">
    <Box :value="boxValue" />
  </div>
</template>

<script>
import Box from './components/Box';

export default {
  name: 'Test',
  components: {
    Box
  },
  data() {
    return {
      boxValue: '124'
    };
  }
};
</script>

<style lang="scss">
.test {
  background-color: #fff;
}
</style>
