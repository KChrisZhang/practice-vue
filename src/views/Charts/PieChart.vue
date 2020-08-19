<template>
  <div class="pie-chart">
    <div id="pieChart" style="width: 50%; height: 400px"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'PieChart',
  data() {
    return {
      chart: null,
      timer: false,
    }
  },
  mounted() {
    console.log('[PieChart] mounted')
    this.init()

    const self = this
    window.onresize = function() {
      if (self.timer) return
      self.timer = true
      let singleTimer = setTimeout(function() {
        self.timer = false
        self.chart.resize()

        clearTimeout(singleTimer)
        singleTimer = null
      }, 200)
    }
  },
  methods: {
    init() {
      const chart = echarts.init(document.getElementById('pieChart'))
      const options = {
        backgroundColor: '#2c343c', // 设置背景颜色
        // textStyle: {
        //   // 设置全局文字颜色
        //   color: 'rgba(255, 255, 255, 0.3)',
        // },
        visualMap: {
          // 不显示 visualMap 组件，只用于明暗度的映射
          show: false,
          // 映射的最小值为 80
          min: 80,
          // 映射的最大值为 600
          max: 600,
          inRange: {
            // 明暗度的范围是 0 到 1
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            type: 'pie',
            roseType: 'angle',
            name: '访问来源',
            radius: '55%',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' },
            ],
            label: {
              // 设置标签文字颜色
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)',
              },
            }, // 设置标签的视觉引导线颜色
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)',
              },
            },
            itemStyle: {
              // 设置扇形的颜色
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        ],
      }
      chart.setOption(options)
      this.chart = chart
    },
  },
}
</script>

<style lang="scss" scoped>
.pie-chart {
  background-color: #fff;

  #pieChart {
    margin: auto;
  }
}
</style>
