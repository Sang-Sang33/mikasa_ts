import {
  Select,
  Option,
  OptionGroup,
  Input,
  Tree,
  Dialog,
  Row,
  Col,
  Table,
  Message,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'

const components: any = {
  Select,
  Option,
  OptionGroup,
  Input,
  Tree,
  Dialog,
  Row,
  Col,
  Table,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
}

const element = {
  install: function (Vue: any) {
    Object.keys(components).forEach(key => Vue.use(components[key]));
    Vue.prototype.$message = Message
  }
}

export default element