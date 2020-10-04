import { MutationTree } from "vuex"

const mutations: MutationTree<any> = {
    setUserInfo(state, userInfo) { 
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        state.userInfo = userInfo;
    }
}

export default mutations