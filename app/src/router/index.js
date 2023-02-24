//配置路由的地方
import Vue from "vue";
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//先把VueRouter原型对象的push,先保存一份
let originpush = VueRouter.prototype.push;
let originreplace=VueRouter.prototype.replace;

//重写push|replace
//第一个参数：告诉原来push方法，你往哪里跳转（传递那些参数）
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve && reject){
        //call||apply区别
        //相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        //不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行传递参数
        originpush.call(this,location,resolve,reject);
    }else{
        originpush.call(this,location,()=>{},()=>{});
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve &&reject){
        originreplace.call(this,location,resolve,reject);
    }else{
        originreplace.call(this,location,()=>{},()=>{});
    }
}

//配置路由
export default new VueRouter({
    routes:[
        {
            path: '/home',
            component: Home,
            meta:{show:true}
        },
        {
            path: '/search/:keyword',
            // path: '/search',
            name:'search',
            component: Search,
            meta:{show:true}
        },
        {
            path: '/login',
            component: Login,
            meta:{show:false}
        },
        {
            path: '/register',
            component: Register,
            meta:{show:false}
        },
        //重定向，在项目跑起来的时候，访问/，让它立马到首页
        {
            path:'*',
            redirect:"/home"
        }
    ]
}
)


