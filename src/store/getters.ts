import { GetterTree } from "vuex";
import { Icon, IconTitle } from "@/utils/interfaceData";

const getters: GetterTree<any, any> = {
  isLogin(state: any): boolean {
    return state.userInfo.avator && state.userInfo.nickname ? true : false;
  },
  iconDataList(state: any): Array<IconTitle> {
    const data = state.iconData;
    data.forEach((item: IconTitle, index: number) => {
      item.icon.forEach((itemView: Icon, i: number) => {
        if (itemView.iconMsg == "昵称：") {
          itemView.value = state.userInfo.nickname;
        } else if (itemView.iconMsg == "文章数：") {
          itemView.value = state.userInfo.article_count;
        } else if (itemView.iconMsg == "头条数：") {
          itemView.value = state.userInfo.tt_count;
        }
      });
    });
    return data;
  }
};
export default getters;
