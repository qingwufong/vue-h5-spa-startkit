/**
 * 按需引入mint-ui组件
 */
import {
  Toast,
  Indicator,
  MessageBox,
  InfiniteScroll,
  Lazyload,
  Header,
  Tabbar,
  TabItem,
  Navbar,
  Button,
  Spinner,
  Cell,
  TabContainer,
  TabContainerItem,
  Field,
  Picker
} from 'mint-ui'

const components = [
  Header,
  Tabbar,
  TabItem,
  Navbar,
  Button,
  Spinner,
  Cell,
  MessageBox,
  TabContainer,
  TabContainerItem,
  Field,
  Picker
]

export default {
  install(Vue, options) {
    components.forEach(component => {
      Vue.component(component.name, component);
    })
    Vue.use(InfiniteScroll);
    Vue.use(Lazyload);
    Vue.$toast = Vue.prototype.$toast = Toast;
    Vue.$indicator = Vue.prototype.$indicator = Indicator;
  }
}
