<template>
  <div>
    <h1>Home</h1>

    <!-- <div class="selector">
      <country-select
        v-model="country"
        :country="country"
        :className="'country'"
        :placeholder="'请选择国籍'"
        :whiteList="whiteListCode"
      />
    </div>-->

    <Picker
      :title="'标题'"
      show-toolbar
      :columns="columns"
      @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange"
    />

    <!-- <div class="selector">
      <region-select v-model="region" :country="country" :region="region" />
    </div>-->

    <!-- <hello-world /> -->
  </div>
</template>

<script>
import './confirm';
import countries from '../../lang/zh-HK';
import { Toast, Picker } from 'vant';

export default {
  name: 'Home',
  components: { Picker },
  data() {
    return {
      countries,
      country: '',
      region: '',
      whiteListCode: ['US', 'CA', 'MX'],
      result: null
      // columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    };
  },
  methods: {
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast('取消');
    }
  },
  computed: {
    whiteList() {
      const arr = this.whiteListCode.map(item => this.$t(item));
      console.log(arr);
      return arr;
    },
    columns() {
      return Object.keys(this.countries).map(key => this.countries[key]);
    }
    // countryName: {
    //   get() {
    //     return this.$t(this.country)
    //   },
    //   set(val) {
    //     console.log(val, 'set')
    //     this.country = val
    //   },
    // },
  }
  // watch: {
  //   country(val) {
  //     console.log(val, 'watch')
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.selector {
  margin: 30px 0;

  .country {
    height: 40px;
    width: 120px;
    line-height: 40px;
  }
}
</style>
