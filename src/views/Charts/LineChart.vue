<template>
  <div class="line-chart">
    <div id="lineChart"></div>
  </div>
</template>

<script>
import api from '@/api'
import echarts from 'echarts'

export default {
  name: 'LineChart',
  data() {
    return {
      chart: null,
      timer: false,
      options: {
        title: { text: '折线图' },
        tooltip: { trigger: 'axis' },
        legend: {
          data: ['销量', '产量'],
          // selectedMode: 'multiple',
        },
        yAxis: {},
        xAxis: { data: [] },
        series: [],
      },
    }
  },
  mounted() {
    console.log('[LineChart] mounted')
    this.initChart()
  },
  methods: {
    async initChart() {
      if (!this.chart) {
        this.chart = echarts.init(document.getElementById('lineChart'))
      }

      const self = this
      this.chart.clear()
      this.chart.showLoading()
      this.chart.setOption(this.options)

      this.chart.on('legendselectchanged', function({ name, selected }) {
        const result = Object.keys(selected).find(item => selected[item])

        if (typeof result === 'undefined') {
          self.chart.dispatchAction({ type: 'legendSelect', name })
          return
        }
      })

      const data1 = await api.getLineChartData()
      const data2 = await api.getLineChartData()
      console.log(data1, 'data1')
      console.log(data2, 'data2')

      const options = {
        xAxis: {
          data: data1.categories,
        },
        series: [
          {
            type: 'line',
            name: '销量',
            data: data1.data,
          },
          {
            type: 'line',
            name: '产量',
            data: data2.data,
          },
        ],
      }

      this.chart.setOption(options)
      this.chart.hideLoading()
    },
  },
}
</script>

<style lang="scss" scoped>
.line-chart {
  background-color: #fff;

  #lineChart {
    width: 600px;
    height: 400px;
    margin: auto;
  }
}
</style>
