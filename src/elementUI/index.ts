import {
  Select,
  Option,
  OptionGroup,
  Input,
  Tree,
  Row,
  Col,
  Table,
  Message,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Card,
  Avatar,
  Tag,
  Badge,
  TabPane,
  Tabs,
  PageHeader
} from 'element-ui'

const components: any = {
  Select,
  Option,
  OptionGroup,
  Input,
  Tree,
  Row,
  Col,
  Table,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Card,
  Avatar,
  Tag,
  Badge,
  TabPane,
  Tabs,
  PageHeader
}

const element = {
  install: function (Vue: any) {
    Object.keys(components).forEach(key => Vue.use(components[key]));
    Vue.prototype.$message = Message
  }
}

export default element