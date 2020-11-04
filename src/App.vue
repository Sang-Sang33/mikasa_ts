<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

interface UserID {
  account: string;
  passWord: string;
}

@Component
export default class App extends Vue {}
</script>

<style lang="less">
@import "@/style/common.less";
</style>
