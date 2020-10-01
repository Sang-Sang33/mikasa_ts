<template>
    <div class="login">
        <login :sureAction="sureLogin" >
            <h3 slot='title'>账号登录</h3>
            <a href="#" slot='link'>注册用户</a>
        </login>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Login from '@/components/loginOrRegister/Login.vue'

interface UserID {
    account: string;
    passWord: string;
}
@Component({
    name: 'loginPage',
    components: { Login }
})
export default class LoginPage extends Vue {
    public sureLogin({account,passWord}:UserID): void {
        console.log(account,passWord);
    }
}

</script>

<style lang="less">

</style>