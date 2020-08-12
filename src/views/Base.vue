<template>
  <div class="base">
    <WebHeader :msg="1324324"></WebHeader>
    <NavBar></NavBar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WebHeader from "../components/WebHeader.vue";
import NavBar from "../components/NavBar.vue";
@Component({
  components: {
    WebHeader,
    NavBar
  },
})
export default class Base extends Vue {
  constructor() {
    super();
  }
}
</script>
<style lang="less" scoped>
.base {
  width: 100%;
}
</style>