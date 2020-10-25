<template>
    <div>
        <span v-for="(itemICon,i) in itemData" :key="itemICon.iconClass+i">
          <i :class="itemICon.iconClass"></i>{{itemICon.iconMsg}}
        </span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import { Icon } from "@/utils/interfaceData"

@Component 
export default class IconTitle extends Vue {
    @Prop(Array) itemData!: Icon;
}

</script>

<style lang="less">

</style>