<template>
  <div class="content">
    <home-sidebar 
      :isSidebarTop="isSidebarTop"
    >
    </home-sidebar>
    <home-article></home-article>
    <home-login></home-login>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import homeArticle from "./children/home-article.vue";
import homeLogin from "./children/home-login.vue";
import homeSidebar from "./children/home-sidebar.vue";

@Component({
  name: "home-content",
  components: { homeArticle, homeLogin, homeSidebar }
})
export default class HomeContent extends Vue {
  @Provide() msg: string = '登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条';
  public isSidebarTop = false;
  public scrollTop = 0;
  public mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
  public handleScroll() {
    this.scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    this.scrollTop >= 30  
      ?this.isSidebarTop = true
      :this.isSidebarTop = false;
  }
}
</script>

<style lang="less">
@import "./home-content.less";
</style>