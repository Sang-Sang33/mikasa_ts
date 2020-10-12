<template>
  <div class="content">
    <home-sidebar :isSidebarTop="isSidebarTop"></home-sidebar>
    <home-article></home-article>
    <home-login></home-login>
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
  public isSidebarTop = false;
  // public isLogin = false;
  public scrollTop = 0;
  public mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // this.loginOrNot();
  }
  public handleScroll() {
    this.scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (this.scrollTop >= 30) {
      this.isSidebarTop = true;
    } else {
      this.isSidebarTop = false;
    }
  }
  // public loginOrNot() {
  //   this.$cookies.get("oauth_token")
  //     ? (this.isLogin = true)
  //     : (this.isLogin = false);
  // }
}
</script>

<style lang="less">
@import "./home-content.less";
</style>