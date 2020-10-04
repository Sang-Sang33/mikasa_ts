<template>
    <div class="content">
        <home-sidebar></home-sidebar>
        <home-article></home-article>
        <home-login></home-login>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import homeArticle from "./children/home-article.vue";
import homeLogin from "./children/home-login.vue";
import homeSidebar from "./children/home-sidebar.vue";

@Component({
    name:"home-content",
    components:{ homeArticle, homeLogin, homeSidebar }
})
export default class HomeContent extends Vue {

}

</script>

<style lang="less">

</style>