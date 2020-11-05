<template>
  <div class="account-info">
    <div class="form">
      <span>昵称：</span>
      <el-input v-model="updateUrl.nickname" placeholder="请输入内容">
      </el-input>
    </div>
    <div class="form">
      <span>头像：</span>
      <div class="updateUserInfo">
        <el-avatar :size="100" shape="square" :src="updateUrl.avator">
        </el-avatar>
        <input
          type="file"
          @change="uploadAvator"
          class="updateUserInfo-fileInput"
        />
        <el-button class="updateUserInfo-fileBtn" type="primary" size="mini">
          上传
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </div>
    </div>
    <div class="form">
      <span></span>
      <el-button
        type="primary"
        size="medium"
        @click="handleAvator"
        :loading="isUpdatedAvator"
      >
        更新资料
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { UpdateUrl, UserInfo } from "@/type";
import { uploadAvator } from "@/http/api";
import { State } from "vuex-class";
@Component
export default class AccountInfo extends Vue {
  @Prop(Function) modifyAvator!: (updateUrl: UpdateUrl) => void;
  @Prop(Boolean) isUpdatedAvator!: boolean;
  @State("userInfo") userInfo!: UserInfo;
  public updateUrl: UpdateUrl = {
    nickname: "",
    avator: ""
  };
  created() {
    this.updateUrl.avator = this.userInfo.avator;
  }
  handleAvator() {
    this.modifyAvator(this.updateUrl);
  }
  uploadAvator(ev: any) {
    const params: FormData = new FormData();
    const fl = ev.target.files[0];
    params.append("file", fl);
    uploadAvator(params).then(res => {
      if (res.data.msg == "上传成功") {
        this.updateUrl.avator = res.data.url;
      }
    });
  }
}
</script>

<style lang="less"></style>
