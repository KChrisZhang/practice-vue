<template>
  <div class="bar-chart">
    <Dataset />
    <CommonBar />
  </div>
</template>

<script>
import Dataset from './components/Dataset'
import CommonBar from './components/CommonBar'

export default {
  name: 'BarChart',
  components: {
    Dataset,
    CommonBar,
  },
  data() {
    return {}
  },
  mounted() {
    console.log('[BarChart] mounted')
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.bar-chart {
  min-width: 800px;
  background-color: #fff;
}
</style>
