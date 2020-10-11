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

      <el-card 
				v-if="isLogin" 
				class="user-card" 
				shadow="always"
			>
        <div slot="header" class="clearfix">
          <span>欢迎您,{{ userInfo.nickname }}!</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >退出登录</el-button
          >
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

      <el-card v-else 
				class="login-card" 
				shadow="always"
			>
        <div class="loginWindow">
          <span
            >登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</span
          >
          <el-button type="primary" round @click="toLogin">
            登录
          </el-button>
        </div>
      </el-card>

    </div>
  </div>
</template>

<script lang="ts">
import { UserInfo } from "@/utils/interfaceData";
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class HomeLogin extends Vue {
  @Prop(Boolean) isLogin!: boolean;
  @State("userInfo") userInfo!: UserInfo;
  public toLogin() {
    this.$router.push({ path: "/login", name: "login" });
  }
  public mounted() {
    console.log(this.userInfo);
  }
}
</script>

<style lang="less">
.card-box {
  margin-top: 50px;
  .loginWindow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > span {
      color: #333;
      font-size: 14px;
      text-indent: 2em;
      line-height: 30px;
      margin: 40px 0;
    }
    .el-button {
      width: 150px;
      margin-bottom: 20px;
    }
  }
  .avatar {
    margin-top: 20px;
    text-align: center;
  }
  .totalMsg {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
}
</style>