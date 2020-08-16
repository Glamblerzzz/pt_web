<template>
  <div class="nav-bar">
    <div class="content">
      <div class="content-item" v-for="(item,index) in navList[langTp]" :key="index">
        <div class="item-one" v-if="typeof(item)==='string'">{{item}}</div>
        <!-- <div v-else class="item item-list">
          <div class="item-list-default">{{item['1']}}</div>
          <div class="item-list-all">
            <div v-for="(val,index_v) in item" :key="index_v">{{val}}</div>
          </div>
        </div> -->
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
    CN: [
      "首页",
      "论坛",
      "种子",
      "MV",
      "游戏",
      "官方",
      "求种保种",
      "候选",
      "发布",
      "娱乐",
      "控制面板",
      "排行榜",
      "Wiki",
    ],
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
@imageBack: "../assets/icon";
.nav-bar {
  width: 100%;
  height: 100%;
}
.content {
  width: 910px;
  height: 30px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  margin-left: -455px;
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  .content-item{
    flex: auto;
  }
  .item-one {
    line-height: 30px;
    margin: 0 1px;
    position: relative;
    background: url("@{imageBack}/shade.gif") white repeat-x left top;
  }
  .item-list {
    position: relative;
    display: inline-block;
    width: 100%;
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
