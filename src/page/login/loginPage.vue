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

@Component({
  name: "loginPage",
  components: { Login }
})
export default class LoginPage extends Vue {
  public isLoading = false;
  public userInfo!: UserInfo;
  public sureLogin({ username, password }: UserID): void {
    this.isLoading = !this.isLoading;
    loginCheck({ username, password })
      .then(res => {
        this.isLoading = false;
        if (res.data.status === 0 && res.data.wdata) {
          //   console.log("---------loginCheck----res.data----------------",res.data);
          this.$cookies.set("oauth_token", res.data.wdata.oauth_token, 1);
          this.userInfo = Object.assign({}, res.data.wdata);
          delete this.userInfo.oauth_token;
          //   console.log(this.userInfo,'---------userInfo---------');
        }
      })
      .catch(err => {
        this.isLoading = false;
      });
  }
  public toRegisterPage() {
    this.$router.push({ path: "/register", name: "register" });
  }
}
</script>

<style lang="less">
</style>