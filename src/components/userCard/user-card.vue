<template>
  <el-card class="user-card" shadow="always">
    <div slot="header" class="clearfix">
      <span>欢迎您,{{ userInfo.nickname }}!</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        @click="toLogout"
      >
        退出登录
      </el-button>
    </div>
    <div class="avatar">
      <el-avatar :size="80" :src="userInfo.avator"></el-avatar>
    </div>
    <div class="totalMsg">
      <el-badge :value="userInfo.tt_count">
        <el-tag effect="plain">头条数</el-tag>
      </el-badge>
      <el-badge :value="userInfo.article_count">
        <el-tag effect="plain">文章数</el-tag>
      </el-badge>
    </div>
  </el-card>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { UserInfo } from "@/utils/interfaceData";
import { Vue, Component, Prop } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
@Component
export default class UserCard extends Vue {
  @State("userInfo") userInfo!: UserInfo;
  @Mutation("setUserInfo") setUserInfo: any;
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
}
</script>

<style lang="less">
@import "./userCard.less";
</style>