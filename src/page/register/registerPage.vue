<template>
    <div class="register">
        <register :sureAction="sureRegister">
            <h3 slot='title'>账号注册</h3>
            <a href="#" slot='link'>登录</a>
        </register>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Register from '@/components/loginOrRegister/Login.vue'

interface UserID {
    account: string;
    passWord: string;
}

@Component({
    name:'registerPage',
    components: { Register }
})
export default class RegisterPage extends Vue {
    public sureRegister({account,passWord}:UserID): void {
        console.log(account,passWord);
    }
}

</script>

<style lang="less">

</style>