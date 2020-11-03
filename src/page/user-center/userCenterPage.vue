<template>
  <div class="userCenter">
    <header>
      <el-avatar :size="100" shape="square" :src="userInfo.avator"> </el-avatar>
      <icon-title
        v-for="(item, index) in iconDataList"
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
import { Getter, State } from "vuex-class";
import iconTitle from "./title/iconTitle.vue";

@Component({
  name: "userCenter",
  components: { iconTitle }
})
export default class UserCenterPage extends Vue {
  @State("userInfo") userInfo!: UserInfo;
  @Getter("iconDataList") iconDataList!: Array<IconTitle>;
  public activeName: string = "first";
  created() {
    console.log(this.userInfo);
    console.log(this.iconDataList);
  }

  handleClick(tab: any, event: any) {
    console.log(tab, event);
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