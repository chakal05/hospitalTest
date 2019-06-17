<template>
  <div id="app">
    <img src="./assets/logo.jpg" alt="">
    <router-view></router-view>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  text-align: center;
}
img{
  width: 90px;
  height: 90px;
  margin: 15px;
}
</style>