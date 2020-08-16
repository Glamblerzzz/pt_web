<template>
  <div class="web-header">
    <img :src="img" alt="">
  </div>
</template>

<script lang="ts">
// import Logo from '../assets/icon/PTer.Club_Logo.png';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WebHeader extends Vue {
  @Prop() private msg!: string;
  private img = require('../assets/icon/PTer.Club_Logo.png');
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.web-header{
  width: 100%;
  display: flex;
  height: 120px;
}
</style>
