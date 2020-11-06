import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import i18n from "./lang";

import imgLazy from "./directive/imgLazy";
Vue.directive("imgLazy", imgLazy);

import "vant/lib/index.css";
import { Locale } from "vant";
import zhHK from "vant/lib/locale/lang/zh-HK";
Locale.use("zh-HK", zhHK);

import vueCountryRegionSelect from "vue-country-region-select";
Vue.use(vueCountryRegionSelect);

import myPlugin from "./plugins";
Vue.use(myPlugin);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: h => h(App),
  wang: 3
}).$mount("#app");
