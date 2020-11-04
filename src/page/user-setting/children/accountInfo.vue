<template>
  <div class="account-info">
    <el-row :gutter="10" type="flex" align="middle">
      <el-col :span="2" :offset="1"><div>昵称：</div></el-col>
      <el-col :span="10"
        ><el-input
          v-model="updateUrl.nickname"
          placeholder="请输入内容"
        ></el-input
      ></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" align="middle">
      <el-col :span="2" :offset="1"><div>头像：</div></el-col>
      <el-col :span="10">
        <div class="updateUserInfo">
          <el-avatar :size="100" shape="square" :src="updateUrl.avator">
          </el-avatar>
          <input
            type="file"
            @change="modifyImg"
            class="updateUserInfo-fileInput"
          />
          <el-button class="updateUserInfo-fileBtn" type="primary" size="mini">
            上传
            <i class="el-icon-upload el-icon--right"></i>
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" type="flex" align="middle">
      <el-col :span="2" :offset="1"><div></div></el-col>
      <el-col :span="10">
        <el-button
          type="primary"
          size="medium"
          @click="updateUserInfo"
          :loading="isUpdated"
        >
          更新资料
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { UpdateUrl } from "@/utils/interfaceData";
import { updateUserInfo } from "@/http/api";
import { Mutation } from 'vuex-class';
@Component
export default class AccountInfo extends Vue {
  @Prop(Object) updateUrl!: UpdateUrl;
  @Mutation("modifyUserInfo") modifyUserInfo!: ({nickname,avator}: UpdateUrl)=> void;
  @Emit("on-updateUrl")
  modifyImg() {
    return;
  }
  public isUpdated: boolean = false;
  updateUserInfo() {
    this.isUpdated = true;
    updateUserInfo(this.updateUrl)
      .then(res => {
        if (res.data.msg === "修改成功") {
          this.isUpdated = false;
          this.modifyUserInfo(this.updateUrl);
        }
      })
      .catch((err: Error) => {
        console.log(err);
      });;;
  }
}
</script>

<style lang="less"></style>
