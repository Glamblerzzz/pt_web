<template>
  <div class="nav-bar">
    <div class="content">
      <div v-for="(item,index) in navList[langTp]" :key="index">
        <div class="item" v-if="typeof(item)==='string'">{{item}}</div>
        <div v-else class="item item-list">
          <div class="item-list-default">{{item['1']}}</div>
          <div class="item-list-all" v-for="(val,index_v) in item" :key="index_v">{{val}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  // eslint-disable-next-line
  private navList = {
    CN: ["aaa", "aaa", "aaa", "aaa", "aaa", "aaa", ["aaa", "bbb"]],
    CNT: ["aaa", "aaa", "aaa", "aaa", "aaa", "aaa", ["aaa", "bbb"]],
    ENG: ["aaa", "aaa", "aaa", "aaa", "aaa", "aaa", ["aaa", "bbb"]],
  };
  private langTp: string;
  constructor() {
    super();
    this.langTp = "CN";
  }
  // private async created() {
  //   this.langTp = "cn";
  // }
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
  display: flex;
  justify-content: space-around;
  .item {
    line-height: 30px;
    flex-shrink: 1;
  }
  .item-list {
    position: relative;
    display: inline-block;
    .item-list-all {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0);
    }
  }
  .item-list:hover .item-list-all {
    display: block;
  }
}
</style>
