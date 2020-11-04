<template>
  <div class="userSetting">
    <header>
      <el-page-header @back="goBack" content="设置您的个人信息">
      </el-page-header>
    </header>
    <content>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="first">
          <span slot="label" class="tab"
            ><i class="el-icon-postcard"></i>账号信息</span
          >
          <account-info :updateUrl="updateUrl" @on-updateUrl="modifyImg">
          </account-info>
        </el-tab-pane>
        <el-tab-pane name="second">
          <span slot="label" class="tab"
            ><i class="el-icon-key"></i>密码管理</span
          >
        </el-tab-pane>
      </el-tabs>
    </content>
  </div>
</template>

<script lang="ts">
import accountInfo from "./children/accountInfo.vue";
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";
import { UserInfo, UpdateUrl } from "@/utils/interfaceData";
import { modifyImg } from "@/http/api";
@Component({
  name: "userSetting",
  components: { accountInfo }
})
export default class UserSettingPage extends Vue {
  @State("userInfo") userInfo!: UserInfo;
  public activeName: string = "first";
  public updateUrl: UpdateUrl = {
    nickname: "",
    avator: ""
  };
  goBack() {
    this.$router.push({ path: "/userCenter", name: "userCenter" });
  }
  handleClick(tab: any, event: any) {
    console.log(tab, event);
  }
  created() {
    this.updateUrl.avator = this.userInfo.avator;
  }
  modifyImg(ev: any) {
    const params: FormData = new FormData();
    const fl = ev.target.files[0];
    params.append("file", fl);
    modifyImg(params).then(res => {
      if (res.data.msg == "上传成功") {
        this.updateUrl.avator = res.data.url;
      }
    });
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
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.updateUserInfo {
  position: relative;
  display: flex;
  align-items: flex-end;
  &-fileInput {
    position: absolute;
    left: 120px;
    bottom: 0;
    height: 30px;
    width: 75px;
    cursor: pointer;
    opacity: 0;
  }
  &-fileBtn {
    margin-left: 20px;
  }
}
</style>
