<template>
    <div class="home">
        home
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component 
export default class Home extends Vue {
    created(){
        this.$message('这是一条消息提示');
    }
}

</script>

<style lang="less">

</style>