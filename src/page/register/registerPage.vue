<template>
    <div class="register">
        <register>
            <h3 slot='title'>账号注册</h3>
            <a href="#" slot='link'>登录</a>
        </register>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Register from '@/components/loginOrRegister/Login.vue'

@Component({
    name:'registerPage',
    components: { Register }
})
export default class RegisterPage extends Vue {

}

</script>

<style lang="less">

</style>