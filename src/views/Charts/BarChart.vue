<template>
  <div class="bar-chart" id="barChart" style="width:600px; height: 400px;"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'BarChart',
  mounted() {
    console.log('[BarChart] mounted')
    this.init()
  },
  methods: {
    init() {
      const myChart = echarts.init(document.getElementById('barChart'))
      const option = {
        title: {
          text: 'Echarts 入门示例',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      }

      myChart.setOption(option)
    },
  },
}
</script>

<style lang="scss" scoped>
.bar-chart {
  background-color: #fff;
  margin: auto;
}
</style>
