<template>
  <div class="bar-chart">
    {{ innerWidth }}

    <div id="barChart" :style="{ height: '600px', width: '50%' }"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

/**
 * 按需引入
 * 一个网页可以创建多个echart实例
 * 准备一个DOM节点（作为echart的渲染器），就可以在上面创建一个echart实例
 * 每个echart实例独占一个DOM节点

  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts')

  // 引入柱状图
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')

  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

*/

export default {
  name: 'BarChart',
  data() {
    return {
      chart: null,
      timer: false,
      innerWidth: '',
    }
  },
  mounted() {
    console.log('[BarChart] mounted')

    this.init()
    const self = this

    window.onresize = function() {
      if (self.timer) return
      self.timer = true

      let singleTimer = setTimeout(function() {
        self.chart.resize()
        self.timer = false
        self.innerWidth = window.innerWidth / 2

        clearTimeout(singleTimer)
        singleTimer = null
      }, 200)
    }
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
        // grid: [
        //   { top: 40, bottom: '50%' },
        //   { top: '50%', bottom: 40 },
        // ],
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        // yAxis: [
        //   { type: 'value', axisIndex: 0 },
        //   { type: 'value', axisIndex: 1 },
        // ],
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
            // yAxixIndex: 0,
          },
          {
            name: '销量',
            type: 'line',
            data: [50, 100, 36, 100, 100, 20],
            // yAxixIndex: 1,
          },
        ],
      }

      myChart.setOption(option)
      this.chart = myChart
      console.log(this.chart, 'this.chart')
    },
  },
}
</script>

<style lang="scss" scoped>
.bar-chart {
  min-width: 800px;
  background-color: #fff;

  #barChart {
    margin: auto;
  }
}
</style>
