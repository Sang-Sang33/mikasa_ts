<template functional>
  <div class="header">
    <h2>三笠头条</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class HomeHeader extends Vue {}
</script>

<style lang="less">
.header {
  width: 100%;
  padding: 10px 0;
  background-color: #3d3b4f;
  h2 {
    text-align: center;
    font-weight: normal;
    color: #fff;
  }
}
</style>
