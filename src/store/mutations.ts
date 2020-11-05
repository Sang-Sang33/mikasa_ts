import { MutationTree } from "vuex";

const mutations: MutationTree<any> = {
  setUserInfo(state, userInfo) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    state.userInfo = userInfo;
  },
  modifyUserInfo(state, { nickname, avator }) {
    state.userInfo.nickname = nickname;
    state.userInfo.avator = avator;
    localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
  }
};

export default mutations;
