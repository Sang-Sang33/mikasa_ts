<template>
  <div class="userCenter">
    <header>
      <el-avatar :size="100" shape="square" :src="userInfo.avator"> </el-avatar>

      <icon-title 
        v-for="(item,index) in iconTitleList" 
        :class="item.titleClass" 
        :key="item.titleClass+index"
        :itemData="item.icon"
      >
      </icon-title>

    </header>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { UserInfo, Icon, IconTitle } from "@/utils/interfaceData";
import { State } from "vuex-class";
import iconTitle from "./title/iconTitle.vue";

@Component({
  name:"userCenter",
  components: {iconTitle}
})
export default class UserCenterPage extends Vue {
  @State("userInfo") userInfo!: UserInfo;
  @State("iconData") iconData!: Array<IconTitle>;
  created() {
    console.log(this.userInfo);
    console.log( this.iconTitleList );
  }
  get iconTitleList(): Array<IconTitle> {
    this.iconData.forEach((item,index)=>{
      item.icon.forEach((itemView,i)=>{
        if(itemView.iconMsg.indexOf("头条") !== -1){
          itemView.iconMsg += this.userInfo.tt_count
        }
        else if( itemView.iconMsg.indexOf("文章") !== -1){
          itemView.iconMsg += this.userInfo.article_count
        }
        else if( itemView.iconMsg.indexOf("昵称") !== -1){
          itemView.iconMsg += this.userInfo.nickname
        }
      })
    })
    return this.iconData;
  }
}
</script>

<style lang="less">
header {
  display: flex;
  padding: 20px;
  font-size: 18px;
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
</style>