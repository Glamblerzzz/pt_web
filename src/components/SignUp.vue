<template>
  <div class="signUp">
    <div class="sign-up-head"></div>
    <div class="sign-up-usernm">
      <a-input ref="userNameInput" v-model="userName" placeholder="请输入用户名">
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.45)" />
        <a-tooltip slot="suffix" title="必输项">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-input>
    </div>
    <div class="sign-up-pwd">
      <a-input ref="passWordInput" type="password" v-model="passWord" placeholder="请输入密码">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.45)" />
        <a-tooltip slot="suffix" title="必输项">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-input>
    </div>
    <div class="sign-up-pwd">
      <a-input ref="passWordCheckInput" type="password" v-model="passWordCheck" placeholder="请确认密码">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.45)" />
        <a-tooltip slot="suffix" title="必输项">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-input>
    </div>
    <div class="sign-up-second">
      <a-input ref="eMailInput" v-model="eMail" placeholder="请输入邮箱">
        <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.45)" />
        <a-tooltip slot="suffix" title="必输项">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-input>
    </div>
    <div class="sign-up-check">
      <a-button type="primary" block @click="signUp">注册</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { checkMail } from "../utils/checkOut";

@Component
export default class SignUn extends Vue {
  constructor() {
    super();
  }
  @Prop() private msg!: string;
  private userName = "";
  private passWord = "";
  private eMail = "";
  private passWordCheck = "";
  private signUp() {
    if (!this.userName) this.$message.error("请输入用户名", 2);
    if (!this.passWord) this.$message.error("请输入密码", 2);
    if (!this.passWordCheck) this.$message.error("请确认密码", 2);
    if (!this.eMail) this.$message.error("请输入邮箱", 2);
    if (this.userName && this.passWord && this.passWordCheck && this.eMail) {
      const res = checkMail(this.eMail);
      console.log(res);
      if (!res.res) {
        this.$message.error(res.msg, 2);
        return;
      }
      console.log('userName:'+this.userName);
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sign-up-head {
  margin: 20px;
  font-size: 20px;
}
.sign-up-usernm {
  width: 60%;
  margin: 80px 20% 0 20%;
}
.sign-up-pwd {
  width: 60%;
  margin: 20px 20% 0 20%;
}
.sign-up-second {
  width: 60%;
  margin: 20px 20% 0 20%;
}
.sign-up-check {
  width: 60%;
  margin: 20px 20% 0 20%;
}
</style>
