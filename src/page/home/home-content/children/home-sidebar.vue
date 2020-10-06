<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      active-text-color="#ffd04b"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航</span>
        </template>

        <el-menu-item-group
          v-for="(item, index) in subList"
          :key="index"
          :title="item.title"
        >
          <el-menu-item
            v-for="(item, index) in item.list"
            :key="index"
            :index="item.index"
          >
            <i :class="item.icon"></i>
            <span>{{ item.content }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item
        v-for="(item, index) in navList"
        :key="index"
        :index="item.index"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.content }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class HomeSidebar extends Vue {
  @State("navList") navList: any;
	@State("subList") subList: any;
  public handleOpen(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  public handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
</script>

<style lang="less">
</style>