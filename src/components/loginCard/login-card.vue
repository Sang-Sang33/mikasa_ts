<template>
  <el-card class="login-card" shadow="always">
    <div class="loginWindow">
      <span>{{ msg }}</span>
      <el-button type="primary" round @click="toLogin">
        登录
      </el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from "vue-property-decorator";

@Component
export default class LoginCard extends Vue {
  @Prop(Function) toLogin!: () => void;
  @Inject() msg!: string;
  mounted() {
    // console.log( this.msg,'--------------------' );
  }
}
</script>

<style lang="less">
@import "./loginCard.less";
</style>
