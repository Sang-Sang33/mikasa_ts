<template>
  <el-card class="login-card" shadow="always">
    <div class="loginWindow">
      <span>登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</span>
      <el-button type="primary" round @click="toLogin">
        登录
      </el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class LoginCard extends Vue {
    public toLogin() {
        this.$router.push({ path: "/login", name: "login" });
    }
}
</script>

<style lang="less">
    @import "./loginCard.less";
</style>