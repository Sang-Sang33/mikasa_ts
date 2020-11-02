<template>
    <div>
        <template v-for="(itemICon,i) in itemData">
            <span 
                :key="itemICon.iconClass+i" 
                @click="itemICon.btnEvent"
            >
                <i :class="itemICon.iconClass"></i>{{itemICon.iconMsg}}{{itemICon.value}}
            </span>
        </template>
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