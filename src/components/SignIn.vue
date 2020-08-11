<template>
  <div class="signIn">
    <div class="sign-in-head"></div>
    <div class="sign-in-usernm">
      <a-input ref="userNameInput" v-model="userName" placeholder="请输入用户名">
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.45)" />
        <a-tooltip slot="suffix" title="必输项">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-input>
    </div>
    <div class="sign-in-pwd">
      <a-input ref="passWordInput" type="password" v-model="passWord" placeholder="请输入密码">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.45)" />
        <a-tooltip slot="suffix" title="必输项">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-input>
    </div>
    <div class="sign-in-second">
      <a-input ref="secondInput" v-model="second" placeholder="请输入二次验证">
        <a-icon slot="prefix" type="google" style="color: rgba(0,0,0,.45)" />
        <a-tooltip slot="suffix" title="未配置可不输入">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-input>
    </div>
    <div class="sign-in-check">
      <a-button type="primary" block @click="signIn">登录</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import router from '@/router'

@Component
export default class SignIn extends Vue {
  constructor() {
    super();
  }
  @Prop() private msg!: string;
  private userName = "";
  private passWord = "";
  private second = "";
  private signIn() {
    if (!this.userName) this.$message.error("请输入用户名", 2);
    if (!this.passWord) this.$message.error("请输入密码", 2);
    if(this.userName&&this.passWord){
      console.log(121212);
      
      router.push({name:'Home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sign-in-head {
  margin: 20px;
  font-size: 20px;
}
.sign-in-usernm {
  width: 60%;
  margin: 80px 20% 0 20%;
}
.sign-in-pwd {
  width: 60%;
  margin: 20px 20% 0 20%;
}
.sign-in-second {
  width: 60%;
  margin: 20px 20% 0 20%;
}
.sign-in-check {
  width: 60%;
  margin: 20px 20% 0 20%;
}
</style>
