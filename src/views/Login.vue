<template>
  <div class="login">
    <div class="login-box">
      <router-view></router-view>
      <div class="login-opt">
        <a-button type="link" size="small" :class="`login-opt-in ${checkstatus?'checked':''}`" @click="goSignIn">登录</a-button>
        <a-button type="link" size="small" :class="`login-opt-in ${checkstatus?'':'checked'}`" @click="goSignUp">注册</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login {
  background-color: #f5f1ea;
  height: 100vh;
  width: 100vw;
  .login-box {
    width: 400px;
    height: 450px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #fff;
    border-radius: 10px;
    margin: -225px 0 0 -200px;
    .login-opt {
      position: absolute;
      right: 10px;
      bottom: 5px;
      display: flex;
      color: #888;
      .checked {
        border-bottom: #1890ff solid 1px;
      }
      .login-opt-in {
        margin: 0 0px;
        border-radius: 0;
      }
      .login-opt-up {
        margin: 0 0px;
        border-radius: 0;
      }
    }
  }
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component
export default class SignIn extends Vue {
  private checkstatus = true;
  private goSignIn() {
    this.checkstatus = true;
    router.push({ name: "SignIn" });
  }
  private goSignUp() {
    this.checkstatus = false;
    router.push({ name: "SignUp" });
  }
}
</script>

