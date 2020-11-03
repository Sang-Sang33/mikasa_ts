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
          <el-row :gutter="10" type="flex" align="middle">
            <el-col :span="2" :offset="1"><div>昵称：</div></el-col>
            <el-col :span="10"><el-input v-model="UpdateUserInfo.nickname" placeholder="请输入内容"></el-input></el-col>
          </el-row>
          <el-row :gutter="10" type="flex" align="middle">
            <el-col :span="2" :offset="1"><div>头像：</div></el-col>
            <el-col :span="10">
              <el-avatar :size="100" shape="square" :src="UpdateUserInfo.avator"> </el-avatar>
              <input type="file" @change="modifyImg" />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane name="second">
          <span slot="label" class="tab"><i class="el-icon-key"></i>密码管理</span>
        </el-tab-pane>
      </el-tabs>
    </content>
  </div>
</template>

<script lang="ts">
interface FileList {
  name: string;
  url: string;
}
import { Vue, Component } from "vue-property-decorator";
import { State } from 'vuex-class';
import { UserInfo, UpdateUrl} from "@/utils/interfaceData";
import { modifyImg, updateUserInfo } from "@/http/api"
@Component
export default class UserSettingPage extends Vue {
  @State("userInfo") userInfo!: UserInfo;
    public activeName: string = "first";
    public UpdateUserInfo: UpdateUrl = {
      nickname: '',
      avator: '',
    }

    goBack() {
      this.$router.push( { path: "/userCenter", name: "userCenter" } );
    }
    handleClick(tab: any, event: any) {
      console.log(tab, event);
    }
    created(){
      this.UpdateUserInfo.avator = this.userInfo.avator;
    }
    modifyImg(ev: any){
      const params = new FormData();
      const fl = ev.target.files[0];
      params.append('file',fl);
      console.log(params);
      modifyImg(params).then((res)=>{
        if(res.data.msg=="上传成功"){
          this.UpdateUserInfo.avator = res.data.url;
        }
      })
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
</style>