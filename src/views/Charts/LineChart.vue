<template>
  <div class="line-chart">
    <div id="lineChart"></div>
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'LineChart',
  data() {
    return {
      chart: null,
      timer: false
    };
  },
  mounted() {
    console.log('[LineChart] mounted');
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('lineChart'));
      const options = {
        title: {
          text: '折线图'
        },
        legend: {
          selectedMode: 'multiple',
          data: ['销量', '产量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            name: '销量',
            data: [50, 100, 36, 100, 100, 20]
          },
          {
            type: 'line',
            name: '产量',
            data: [60, 130, 136, 200, 120, 80]
          }
        ]
      };

      this.chart.clear();
      this.chart.setOption(options);
      const mychart = this.chart;

      this.chart.on('legendselectchanged', function({ name, selected }) {
        const result = Object.keys(selected).find(item => selected[item]);
        console.log(result);

        if (typeof result === 'undefined') {
          mychart.dispatchAction({ type: 'legendSelect', name });
          return;
        }
      });
    }
  }
};
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
