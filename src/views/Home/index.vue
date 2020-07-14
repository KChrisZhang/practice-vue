<template>
  <div>
    <h1>Home</h1>

    <!-- <div class="selector">
      <country-select
        v-model="country"
        topCountry="US"
        :country="country"
        :className="'country'"
        :whiteList="whiteList"
        :shortCodeDropdown="true"
      />
    </div> -->

    <!-- <div class="selector">
      <region-select v-model="region" :country="country" :region="region" />
    </div> -->

    <!-- <hello-world /> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      country: '',
      region: '',
      whiteList: ['US', 'CA', 'MX'],
      result: null,
    }
  },
}
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
