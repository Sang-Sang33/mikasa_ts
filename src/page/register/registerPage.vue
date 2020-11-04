<template>
  <div class="register">
    <register :sureAction="sureRegister" :isLoading="isLoading">
      <h3 slot="title">账号注册</h3>
      <a href="#" slot="link" @click.prevent="toLoginPage">登录</a>
    </register>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Register from "@/components/loginOrRegister/Login.vue";
import { UserID } from "@/utils/interfaceData";
import { createUser } from "@/http/api";

@Component({
  name: "registerPage",
  components: { Register }
})
export default class RegisterPage extends Vue {
  public isLoading = false;
  public sureRegister({ username, password }: UserID): void {
    this.isLoading = !this.isLoading;
    createUser({ username, password })
      .then(res => {
        this.isLoading = false;
        if (res.data.status === 0) {
          this.toLoginPage();
        }
      })
      .catch((err: Error) => {
        console.log(err);
        this.isLoading = false;
      });
  }
  public toLoginPage() {
    this.$router.push({ path: "/login", name: "login" });
  }
}
</script>

<style lang="less"></style>
