export default {
  async getChartData() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({
          categories: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          data: [5, 20, 36, 10, 10, 20],
        })
      }, 1000)
    })
  },
}
