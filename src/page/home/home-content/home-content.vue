<template>
  <div class="content">
    <home-sidebar :isSidebarTop="isSidebarTop"></home-sidebar>
    <div class="article">article</div>
    <div class="login-window">loginWindow</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import homeArticle from "./children/home-article.vue";
import homeLogin from "./children/home-login.vue";
import homeSidebar from "./children/home-sidebar.vue";

@Component({
  name: "home-content",
  components: { homeArticle, homeLogin, homeSidebar }
})
export default class HomeContent extends Vue {
  public isSidebarTop: boolean = false;
  public scrollTop: number = 0;
  public mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
  public handleScroll() {
    this.scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    console.log(this.scrollTop);
    if(this.scrollTop >= 30){
      this.isSidebarTop = true;
    }
    else {
      this.isSidebarTop = false;
    }
  }
}
</script>

<style lang="less">
@import "./home-content.less";
</style>