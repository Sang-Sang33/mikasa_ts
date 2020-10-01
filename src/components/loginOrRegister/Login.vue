<template>
    <div class='loginPage'>
        <slot name='title'> </slot>
        <input type="text" name="id" id="id" placeholder="账号"  />
        <input type="password" name="psd" id="psd" placeholder="密码"  />
        <input type="button" value="确定" />

        <div class="loginPage-userAgreement fixed">
            <span>登录和注册表示你同意 </span> 
            <em ><a href="#">用户协议</a></em>和<em><a href="#">隐私条款</a></em>
            <em class="loginPage-registerLink fRight">
                <slot name='link' > </slot>
            </em>
        </div>

    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component 
export default class Tem extends Vue {

}

</script>

<style lang="less">
    @import './login.less';
</style>