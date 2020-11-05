<template>
  <div class="login-window">
    <div class="serach-input">
      <el-input placeholder="搜索站内资料">
        <template slot="append">
          <el-button type="primary">搜索</el-button>
        </template>
      </el-input>
    </div>
    <div class="card-box">
      <user-card
        v-if="isLogin"
        :toLogout="toLogout"
        :userInfo="userInfo"
        @on-avator="handleAvator"
      >
      </user-card>
      <login-card v-else :toLogin="toLogin"> </login-card>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import userCard from "@/components/userCard/user-card.vue";
import loginCard from "@/components/loginCard/login-card.vue";
import { UserInfo } from "@/type";
import { Vue, Component } from "vue-property-decorator";
import { Getter, Mutation, State } from "vuex-class";

@Component({
  name: "home-login",
  components: { userCard, loginCard }
})
export default class HomeLogin extends Vue {
  @State("userInfo") userInfo!: UserInfo;
  @Mutation("setUserInfo") setUserInfo: any;
  @Getter("isLogin") isLogin!: boolean;
  public mounted() {
    // console.log(this.userInfo);
    // console.log(this.isLogin,'------------isLogin---------------');
  }
  public toLogout() {
    localStorage.removeItem("userInfo");
    this.$cookies.remove("oauth_token");
    this.setUserInfo({
      avator: "",
      nickname: "",
      tt_count: 0,
      article_count: 0,
      user_id: "",
      oauth_expire_time: "",
      oauth_token: ""
    });
  }
  public toLogin() {
    this.$router.push({ path: "/login", name: "login" });
  }
  public handleAvator(name: string) {
    console.log(name);
    this.$router.push({ path: `/${name}`, name });
  }
}
</script>

<style lang="less">
.card-box {
  margin-top: 50px;
}
</style>
