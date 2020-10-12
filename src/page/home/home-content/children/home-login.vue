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
      <user-card v-if="userInfo.nickname"></user-card>
      <login-card v-else></login-card>
    </div>
  </div>
</template>

<script lang="ts">
import userCard from "@/components/userCard/user-card.vue";
import loginCard from "@/components/loginCard/login-card.vue";
import { UserInfo } from "@/utils/interfaceData";
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({
  name: "home-login",
  components: { userCard, loginCard }
})
export default class HomeLogin extends Vue {
  // @Prop(Boolean) isLogin!: boolean;
  @State("userInfo") userInfo!: UserInfo;

  public mounted() {
    console.log(this.userInfo);
  }
}
</script>

<style lang="less">
.card-box {
  margin-top: 50px;
}
</style>