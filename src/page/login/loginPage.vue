<template>
  <div class="login">
    <login :sureAction="sureLogin" :isLoading="isLoading">
      <h3 slot="title">账号登录</h3>
      <a href="#" slot="link" @click.prevent="toRegisterPage">注册用户</a>
    </login>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Login from "@/components/loginOrRegister/Login.vue";
import { UserID, UserInfo } from "@/utils/interfaceData";
import { loginCheck } from "@/http/api";
import { State, Mutation } from "vuex-class";
@Component({
  name: "loginPage",
  components: { Login }
})
export default class LoginPage extends Vue {
  @State("userInfo") userInfo!: UserInfo;
  @Mutation("setUserInfo") setUserInfo: any;
  public isLoading = false;
  public sureLogin({ username, password }: UserID): void {
    this.isLoading = !this.isLoading;
    loginCheck({ username, password })
      .then(res => {
        this.isLoading = false;
        if (res.data.status === 0 && res.data.wdata) {
          this.setData(res);
        }
      })
      .catch((err: Error) => {
        this.isLoading = false;
      });
  }
  public setData(res: any): void {
    const userInfo: UserInfo = Object.assign({}, res.data.wdata) || {};
    const oauthToken: string = res.data.wdata.oauth_token || "";
    this.$cookies.set("oauth_token", oauthToken, "2d");
    delete userInfo.oauth_token;
    this.setUserInfo(userInfo);
    this.toHome();
  }
  public toRegisterPage() {
    this.$router.push({ path: "/register", name: "register" });
  }
  //登录成功后直接前往首页
  public toHome() {
    this.$router.push({ path: "/", name: "home" });
  }
  created() {
    console.log(this.userInfo);
  }
}
</script>

<style lang="less"></style>
