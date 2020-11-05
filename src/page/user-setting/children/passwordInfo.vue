<template>
  <div class="passwordInfo">
    <div class="passwordInfo-current form">
      <span>当前密码：</span>
      <el-input
        placeholder="请输入密码"
        v-model="updatePwd.currentPassword"
        show-password
      >
      </el-input>
    </div>
    <div class="passwordInfo-update form">
      <span>新密码：</span>
      <el-input
        placeholder="请输入密码"
        v-model="updatePwd.updatePassword"
        show-password
      >
      </el-input>
    </div>
    <div class="form">
      <span></span>
      <el-button
        type="primary"
        size="medium"
        @click="handleModifyPwd"
        :loading="isUpdarePwd"
      >
        更新资料
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { UpdatePwd } from "@/type";
@Component
export default class PasswordInfo extends Vue {
  @Prop(Function) modifyPwd!: (pwd: UpdatePwd) => void;
  @Prop(Boolean) isUpdarePwd!: boolean;
  public updatePwd: UpdatePwd = {
    currentPassword: "",
    updatePassword: ""
  };
  handleModifyPwd() {
    this.modifyPwd(this.updatePwd);
  }
}
</script>

<style lang="less"></style>
