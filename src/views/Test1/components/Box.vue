<template>
  <div class="box">{{value}}</div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    value: {
      type: [String, Number]
    }
  }
};
</script>

<style lang="scss">
.box {
  width: 100px;
  background-color: gray;
  border: 1px solid #ffffff;

  padding: 10px;
  margin: 30px auto;
  color: #ffffff;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #333;
    background-color: gainsboro;
    border-color: gainsboro;
  }
}
</style>
