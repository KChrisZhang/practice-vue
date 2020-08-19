<template>
  <div class="charts">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ChartsIndex',
  mounted() {
    console.log('[ChartsIndex] mounted')
  },
}
</script>

<style lang="scss" scoped>
.charts {
  background-color: #fff;
  padding-top: 100px;
}
</style>
