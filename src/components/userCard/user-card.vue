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
      <el-avatar 
        :size="80" 
        :src="userInfo.avator"
        @click.native="handleAvator"
      >
      </el-avatar>
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
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
@Component
export default class UserCard extends Vue {
  @Prop(Function) toLogout!: any;
  @Prop(Object) userInfo!: UserInfo;
  @Emit("on-avator")
  public handleAvator(){
    return this.name;
  }
  public name: string = "userCenter";
}
</script>

<style lang="less">
@import "./userCard.less";
</style>