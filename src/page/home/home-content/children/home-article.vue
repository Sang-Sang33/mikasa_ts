<template>
  <div class="article">
    <div style="position: relative">
      <div class="refresh"><i class="el-icon-refresh-right"></i></div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="first">
          <span slot="label" class="tab" >
            <i class="el-icon-s-comment"></i>
            发头条
          </span>
          <div class="publishTT flexColumn">
            <el-input
              size="medium"
              type="textarea"
              placeholder="有什么新鲜事想告诉大家"
              v-model="ttContent"
              :maxlength="1000"
              show-word-limit
            >
            </el-input>
            <div class="btnBox">
              <el-button type="primary" size="medium" round>
                <i class="el-icon-upload el-icon--right"></i>
                图片
              </el-button>
              <el-button type="primary" size="medium" round>
                发布
                <i class="el-icon-coordinate"></i>
              </el-button>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane name="second">
          <span slot="label" class="tab">
            <i class="el-icon-document"></i>
            写文章
          </span>
          <div class="publishArticle flexColumn">
            <el-input v-model="richContent.title" placeholder="请输入标题"></el-input>
            <vue-editor v-model="richContent.content"></vue-editor>
            <div class="btnBox">
              <span style="width: 100px;"></span>
              <el-button type="primary" size="medium" round>
                发布
                <i class="el-icon-coordinate"></i>
              </el-button>
            </div>
          </div>
        </el-tab-pane>

      </el-tabs>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { VueEditor } from "vue2-editor";
import { RichContent } from "@/type"
import { VueConstructor } from 'vue';
@Component({
  components:{VueEditor},
})
export default class HomeArticle extends Vue {
  public activeName: string = 'first';
  public ttContent: string = "";
  public richContent: RichContent = {
    content: "",
    title: ""
  };

  handleClick(tab: VueConstructor, event: MouseEventInit) {
    console.log(tab, event);
  }
}
</script>

<style lang="less">
  @import "@/style/minxin.less";
  .el-input--medium {
    margin-top: 5px;
    .el-textarea__inner {
      min-height: 200px!important;
      border: 2px solid #666;
      padding: 10px 15px;
      text-indent: 2em;
      color: #000;
    }
  }
  .btnBox {
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
    .el-button--medium {
      width: 100px;
      i {
        margin: 0 2px;
      }
    }
  }
  .publishArticle {
    .el-input {
      margin-bottom: 20px;
      .el-input__inner {
        border: 2px solid #666;
      }
    }
    .ql-toolbar.ql-snow,
    .ql-container.ql-snow {
      border: 2px solid #666;
    }
  }
  .refresh {
    position: absolute;
    top: 7px;
    right: 0;
    z-index: 100;
    font-size: 24px;
    cursor: pointer;
    &>i {
      font-weight: 700;
      &:hover {
        color: #409EFF;
      }
    }
  }

</style>
