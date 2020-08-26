<template>
  <div
    id="barChart"
    style="width: 50%; height: 400px;"
  ></div>
</template>

<script>
import api from '@/api';
import echarts from 'echarts';

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
  name: 'CommonBar',
  data() {
    return {
      chart: null,
      timer: false,
      options: {
        title: {
          text: 'Echarts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量'],
          selectedMode: 'single'
        },
        yAxis: {},
        xAxis: {
          data: [] // 异步加载数据
          // data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        series: [
          {
            name: '销量',
            type: 'bar'
            // data: [5, 20, 36, 10, 10, 20],
            // yAxixIndex: 0,
          },
          {
            name: '产量',
            type: 'line',
            data: [50, 100, 36, 100, 100, 20]
            // yAxixIndex: 1,
          }
        ]
      }
    };
  },
  mounted() {
    console.log('[CommonBar] mounted');

    this.init();
    const self = this;

    window.onresize = function() {
      if (self.timer) return;
      self.timer = true;

      let singleTimer = setTimeout(function() {
        self.chart.resize();
        self.timer = false;

        clearTimeout(singleTimer);
        singleTimer = null;
      }, 200);
    };
  },
  methods: {
    async init() {
      const myChart = echarts.init(document.getElementById('barChart'));

      myChart.showLoading();
      myChart.setOption(this.options);
      const data = await api.getChartData();

      myChart.setOption({
        xAxis: {
          data: data.categories
        },
        series: [
          {
            // 根据名字对应到相应的系列
            name: '销量',
            data: data.data
          }
        ]
      });

      myChart.hideLoading();
      this.chart = myChart;

      // myChart.on('legendselectchanged', function({ name, selected }) {
      //   console.log(name, selected);

      //   myChart.dispatchAction({ type: 'legendSelect', name });
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
#barChart {
  margin: auto;
}
</style>
