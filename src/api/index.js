import Mock from 'mockjs'

export default {
  async getLineChartData() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve(
          Mock.mock({
            categories: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
            'data|6': [
              {
                'value|100-900': 600,
              },
            ],
          })
        )
      }, 1000)
    })
  },

  getBarChartData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          Mock.mock({
            categories: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
            'data|6': [
              {
                'value|100-900': 600,
              },
            ],
          })
        )
      }, 1000)
    })
  },
}
