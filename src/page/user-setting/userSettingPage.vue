<template>
  <div class="userSetting">
    <header>
      <el-page-header @back="goBack" content="设置您的个人信息">
      </el-page-header>
    </header>
    <content>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="first">
          <span slot="label" class="tab"><i class="el-icon-postcard"></i>账号信息</span>
        </el-tab-pane>
        <el-tab-pane name="second">
          <span slot="label" class="tab"><i class="el-icon-key"></i>密码管理</span>
        </el-tab-pane>
      </el-tabs>
    </content>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class UserSettingPage extends Vue {
    public activeName: string = "first";
    goBack() {
        this.$router.push( { path: "/userCenter", name: "userCenter" } );
    }
    handleClick(tab: any, event: any) {
        console.log(tab, event);
    }
}
</script>

<style lang="less">
.userSetting {
  padding: 20px;
  header {
    margin-bottom: 20px;
  }
  content {
    .tab {
        font-size: 18px;
    }
  }
}
</style>