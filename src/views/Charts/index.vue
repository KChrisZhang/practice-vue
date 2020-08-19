<template>
  <div class="charts">
    <BarChart />
  </div>
</template>

<script>
import BarChart from './BarChart'

export default {
  name: 'ChartsIndex',
  components: {
    BarChart,
  },
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
