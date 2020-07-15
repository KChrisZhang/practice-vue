import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enUS from './en-US'
import zhHK from './zh-HK'

Vue.use(VueI18n)

const list = {}
Object.keys(enUS).forEach(key => (list[enUS[key]] = zhHK[key]))

export default new VueI18n({
  locale: 'zh-HK',
  messages: {
    'zh-HK': { ...zhHK, ...list },
    'en-US': { ...enUS },
  },
})
