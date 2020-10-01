<template>
    <div class='loginPage'>
        <slot name='title'></slot>
        <input 
            name="id" id="id" type="text" 
            v-model="userInfo.account" 
            placeholder="账号" 
        />
        <input 
            type="password" name="psd" id="psd" 
            v-model="userInfo.passWord" 
            placeholder="密码" 
        />
        <input type="button" value="确定" @click="sureAction(userInfo)" />
        <div class="loginPage-userAgreement fixed">
            <span>登录和注册表示你同意 </span> 
            <em><a href="#">用户协议</a></em>和<em><a href="#">隐私条款</a></em>
            <em class="loginPage-registerLink fRight">
                <slot name='link'></slot>
            </em>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
interface UserID {
    account: string;
    passWord: string;
}
interface SureAction {
    (userId:UserID):void;
}

@Component
export default class LoginOrRegister extends Vue {
    @Prop(Function) sureAction!: SureAction;
    public userInfo: UserID = { account:'', passWord: '' };
}

</script>

<style lang="less">
    @import './login.less';
</style>