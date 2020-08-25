<template>
  <div
    id="dataset"
    style="width: 50%; height: 400px;"
  ></div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'Dataset',
  data() {
    return {
      chart: null,
      timer: false
    };
  },
  mounted() {
    console.log('[Dataset] mounted');

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
    init() {
      console.log('[init] ');

      const chart = echarts.init(document.getElementById('dataset'));
      const options = {
        legend: {}, // 上方图例,控制显示隐藏
        tooltip: {}, // hover提示
        dataset: {
          source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
          ]
        },
        xAxis: [
          { type: 'category', gridIndex: 0 },
          { type: 'category', gridIndex: 1 }
        ],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
        grid: [{ bottom: '55%' }, { top: '55%' }],
        series: [
          // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' },
          // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
        ],
        dataZoom: [
          {
            // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10, // 左边在 10% 的位置。
            end: 60 // 右边在 60% 的位置。
          }
        ]
      };
      chart.setOption(options);
      this.chart = chart;
    }
  }
};
</script>

<style>
#dataset {
  margin: auto;
}
</style>
