import { GetterTree } from 'vuex' 

const getters: GetterTree<any, any> = {
    isLogin(state: any): boolean { 
        return (state.userInfo.avator && state.userInfo.nickname) ? true : false;
    }
}
export default getters