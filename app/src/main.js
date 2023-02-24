import Vue from 'vue'
import App from './App.vue'

//三级联动组件---全局组件
import TypeNav from '@/pages/Home/TypeNav';
//第一个参数：全局组件的名字 第二个参数：那一个组件
Vue.component(TypeNav.name,TypeNav);
//测试接口
import { reqCategoryList } from './api';
reqCategoryList();

//引入仓库
import store from './store';

//引入路由
import router from '@/router/index';
new Vue({
  render: h => h(App),
  //注册路由:底下的写法KV一致省略V【rounter小写】
  router,
  //注册仓库，组件身上会多出一个$store的属性
  store
}).$mount('#app')
