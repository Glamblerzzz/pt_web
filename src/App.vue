<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@imageBack: "./assets/icon";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("@{imageBack}/bg.gif")repeat left top;
}
</style>
