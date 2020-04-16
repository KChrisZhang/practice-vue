<template>
  <transition name="keyBroad-transform" mode="out-in">
    <ul v-if="visible" class="numKeyBroad">
      <li @click="ceshicb('1')">1</li>
      <li @click="ceshicb('2')">2</li>
      <li @click="ceshicb('3')">3</li>
      <li @click="ceshicb('4')">4</li>
      <li @click="ceshicb('5')">5</li>
      <li @click="ceshicb('6')">6</li>
      <li @click="ceshicb('7')">7</li>
      <li @click="ceshicb('8')">8</li>
      <li @click="ceshicb('9')">9</li>
      <li class="dot" @click="ceshicb('.')">.</li>
      <li @click="ceshicb('0')">0</li>
      <li class="delText" @click="delText">删除</li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: 'NumberKeyboard',
  props: {
    show: Boolean,
  },
  data() {
    return {
      val: '',
    }
  },
  computed: {
    visible: {
      get() {
        return this.show
      },
      set() {
        this.$emit('update:show')
      },
    },
  },
  methods: {
    ceshicb(val) {
      this.val += val
      this.$emit('onInput', this.val)
    },
    delText() {
      this.val = this.val.slice(0, -1)
      this.$emit('onDelete', this.val)
    },
  },
}
</script>

<style lang="scss" scoped>
.keyBroad-transform-leave-active,
.keyBroad-transform-enter-active {
  transition: all 0.3s;
}
.keyBroad-transform-enter {
  opacity: 0;
  transform: translateY(30px);
}
.keyBroad-transform-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.numKeyBroad {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    width: 32%;
    height: 54px;
    font-size: 24px;
    font-style: normal;
    line-height: 54px;
    text-align: center;
    vertical-align: middle;
    border: 0 solid #f7f7f7;
    border-width: 1px 1px 0 0;
    background-color: #fff;
    flex: 1 0 auto;
  }
  li:active {
    background-color: #f2f3f5;
  }
  .delText {
    background-color: #ebedf0;
    font-size: 16px;
  }
  .dot {
    background-color: #ebedf0;
  }
}
</style>
