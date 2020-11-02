<template>
  <div class="userCenter">
    <header>
      <el-avatar :size="100" shape="square" :src="userInfo.avator"> </el-avatar>
      <icon-title
        v-for="(item, index) in iconTitleList"
        :class="item.titleClass"
        :key="item.titleClass + index"
        :itemData="item.icon"
      >
      </icon-title>
    </header>
    <article>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="first">
          <span slot="label" class="tab"><i class="el-icon-s-comment"></i> 微头条</span>
        </el-tab-pane>
        <el-tab-pane name="second">
          <span slot="label" class="tab"><i class="el-icon-document"></i>文章</span>
        </el-tab-pane>
      </el-tabs>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { UserInfo, Icon, IconTitle } from "@/utils/interfaceData";
import { State } from "vuex-class";
import iconTitle from "./title/iconTitle.vue";

@Component({
  name: "userCenter",
  components: { iconTitle }
})
export default class UserCenterPage extends Vue {
  @State("userInfo") userInfo!: UserInfo;
  @State("iconData") iconData!: Array<IconTitle>;
  public activeName: string = "first";
  created() {
    console.log(this.userInfo);
    console.log(this.iconTitleList);
  }
  get iconTitleList(): Array<IconTitle> {
    this.iconData.forEach((item, index) => {
      item.icon.forEach((itemView, i) => {
        if (itemView.iconMsg.indexOf("头条") !== -1) {
          itemView.value = this.userInfo.tt_count;
        } else if (itemView.iconMsg.indexOf("文章") !== -1) {
          itemView.value = this.userInfo.article_count;
        } else if (itemView.iconMsg.indexOf("昵称") !== -1) {
          itemView.value = this.userInfo.nickname;
        } else if ( itemView.iconMsg == '设置') {
          itemView.btnEvent = this.handleSetting;
        } else if ( itemView.iconMsg == '返回首页' ) {
          itemView.btnEvent = this.backHome;
        }
      });
    });
    return this.iconData;
  }

  handleClick(tab: any, event: any) {
    console.log(tab, event);
  }
  handleSetting(){
    this.$router.push({ path: "/userSetting", name: "userSetting" });
  }
  backHome(){
    this.$router.push({ path: "/", name: "home" });
  }
}
</script>

<style lang="less">
.userCenter {
  font-size: 16px;
  padding: 20px;
  header {
    display: flex;
    .userMsg,
    .setting,
    .article {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 40px;
    }
    .setting {
      span {
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
    }
    i {
      margin-right: 5px;
    }
  }
  article {
    margin-top: 20px;
    .tab {
      font-size: 18px;
    }
  }
}
</style>