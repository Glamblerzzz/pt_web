<template>
  <div class="nav-bar">
    <div class="content">
      <!-- <div v-for="navList,index"></div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  // eslint-disable-next-line
  private navList: any;
  private async created() {
    console.log(123213);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav-bar {
  width: 100%;
  display: flex;
}
.content {
  width: 910px;
  height: 30px;
  background-color: #aaa;
  position: absolute;
  left: 50%;
  margin-left: -455px;
}
</style>
