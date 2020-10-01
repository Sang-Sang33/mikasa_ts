<template>
    <div class='loginPage'>
        <slot name='title'></slot>
        <input 
            name="id" id="id" type="text" 
            v-model="userInfo.username" 
            placeholder="账号" 
        />
        <input 
            type="password" name="psd" id="psd" 
            v-model="userInfo.password" 
            placeholder="密码" 
        />
        <!-- <input type="button" value="确定" @click="sureAction(userInfo)" /> -->
        <el-button type="primary" :loading="isLoading" @click="sureAction(userInfo)">确定</el-button>
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import { UserID, SureAction }  from '@/utils/interfaceData'


@Component
export default class LoginOrRegister extends Vue {
    @Prop(Function) sureAction!: SureAction;
    @Prop(Boolean) isLoading!: boolean;
    public userInfo: UserID = { username:'', password: '' };
    // public isLoading = false;
}

</script>

<style lang="less">
    @import './login.less';
</style>