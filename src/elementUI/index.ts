import { Select, Option, OptionGroup, Input, Tree, Dialog, Row, Col, Table, Message, Button, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
const element = {
  install: function (Vue:any) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Table)
    Vue.use(Button)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.prototype.$message = Message
  }
}
export default element