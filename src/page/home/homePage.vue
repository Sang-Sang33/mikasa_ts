<template>
    <div class="home">
        <home-header></home-header>
        <home-content></home-content>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import homeHeader from "./home-header/home-header.vue";
import homeContent from "./home-content/home-content.vue";

@Component({
    name:"home",
    components:{ homeHeader, homeContent }
})
export default class Home extends Vue {

}

</script>

<style lang="less">

</style>