<template>
  <div class="userSetting">
    <header>
      <el-page-header @back="goBack" content="设置您的个人信息">
      </el-page-header>
    </header>
    <content>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="first">
          <span slot="label" class="tab">
            <i class="el-icon-postcard"></i>
            账号信息
          </span>
          <account-info
            :modifyAvator="modifyAvator"
            :isUpdatedAvator="isUpdatedAvator"
          >
          </account-info>
        </el-tab-pane>
        <el-tab-pane name="second">
          <span slot="label" class="tab">
            <i class="el-icon-key"></i>
            密码管理
          </span>
          <password-info :modifyPwd="modifyPwd" :isUpdarePwd="isUpdarePwd">
          </password-info>
        </el-tab-pane>
      </el-tabs>
    </content>
  </div>
</template>

<script lang="ts">
import accountInfo from "./children/accountInfo.vue";
import passwordInfo from "./children/passwordInfo.vue";
import { Vue, Component } from "vue-property-decorator";
import { Mutation } from "vuex-class";
import { UpdateUrl, UpdatePwd } from "@/type";
import { updatePwd, updateUserInfo } from "@/http/api";
@Component({
  name: "userSetting",
  components: { accountInfo, passwordInfo }
})
export default class UserSettingPage extends Vue {
  @Mutation("modifyUserInfo") modifyUserInfo!: ({
    nickname,
    avator
  }: UpdateUrl) => void;
  public activeName: string = "first";
  public isUpdatedAvator: boolean = false;
  public isUpdarePwd: boolean = false;
  created() {
    console.log(document.cookie.split("="));
  }
  goBack() {
    this.$router.push({ path: "/userCenter", name: "userCenter" });
  }
  handleClick(tab: any, event: any) {
    console.log(tab, event);
  }
  //修改头像与昵称
  modifyAvator(updateUrl: UpdateUrl) {
    this.isUpdatedAvator = true;
    updateUserInfo(updateUrl)
      .then(res => {
        if (res.data.msg === "修改成功") {
          this.isUpdatedAvator = false;
          this.modifyUserInfo(updateUrl);
        }
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }
  //修改密码
  modifyPwd(pwd: UpdatePwd) {
    this.isUpdarePwd = true;
    updatePwd(pwd)
      .then(res => {
        console.log(res)
        this.isUpdarePwd = false;
      })
      .catch((err: Error) => {
        console.log(err)
        this.isUpdarePwd = false;
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

.form {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  .el-input {
    width: 40%;
  }
  & > span {
    display: block;
    width: 10%;
    margin-right: 50px;
    text-align: right;
  }
  &:first-child {
    margin-top: 10px;
  }
}
</style>
