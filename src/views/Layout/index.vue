<template>
  <div class="main-1">
    <div class="aside"></div>
    <div class="content"></div>
  </div>

  <!-- 圣杯布局 -->
  <!-- <div id="container">
    <div id="center"></div>
    <div id="left"></div>
    <div id="right"></div>
  </div> -->

  <!-- 双飞翼布局 -->
  <!-- <div>
    <div class="main">
      <div class="main-content"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div> -->
</template>

<script>
export default {
  name: 'layout'
};
</script>

<style lang="scss" scoped>
// 圣杯布局
#container {
  padding: 0 200px;
  // width 自适应于 浏览器可视区域
}

#center {
  float: left;
  width: 100%;
  height: 400px;
  background-color: red;
}
#left {
  float: left;
  width: 200px;
  height: 200px;
  background-color: pink;

  margin-left: -100%; // center容器左端
  position: relative;
  left: -200px;
}
#right {
  float: left;
  width: 200px;
  height: 200px;
  background-color: blue;

  margin-left: -200px; // center容器右端
  position: relative;
  left: 200px;
}

// 双飞翼布局
.main {
  float: left;
  width: 100%;
}
.main-content {
  height: 200px;
  margin: 0 200px;
  background-color: pink;
}
.left {
  float: left;
  width: 200px;
  height: 150px;
  background-color: red;
  margin-left: -100%;
}
.right {
  float: left;
  width: 200px;
  height: 150px;
  background-color: blue;
  margin-left: -200px;
}

.main-1 {
  width: 100%;
  background: gray;
  border: 20px solid orange;
  // box-sizing: border-box;
}
.aside {
  float: left;
  width: 200px;
  height: 200px;
  background: blue;
  margin: 30px;
  border: 10px solid blueviolet;
}

.content {
  height: 300px;
  background-color: red;

  overflow: hidden; // 构造BFC，BFC区域不会与 float box 重叠
}
</style>
