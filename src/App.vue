<template>
  <div id="app">
    <!-- <h3>{{ val }}</h3> -->

    <router-view />
    <!-- <NumberKeyboard :show="true" @onInput="onInput" @onDelete="onDelete" /> -->
  </div>
</template>

<script>
// import NumberKeyboard from './components/NumberKeyboard'

export default {
  name: 'App',
  components: {
    // NumberKeyboard,
  },
  data() {
    return {
      val: '',
    }
  },
  methods: {
    onInput(val) {
      this.val = val
    },
    onDelete(val) {
      this.val = val
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
