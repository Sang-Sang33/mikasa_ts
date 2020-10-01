import { RouteConfig } from "vue-router";
import Home from "@/page/home/homePage.vue";
const Login = () => import("@/page/login/loginPage.vue");
const Register = () => import("@/page/register/registerPage.vue");

const routes: Array<RouteConfig> = [
    { component: Home, path: "/", name: "home" },
    { component: Login, path: "/login", name: "login" },
    { component: Register, path: "/register", name: "register" },
];

export default routes