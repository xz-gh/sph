<template>
<div>
  <Hader></Hader>
  <!-- 路由组件出口的地方 -->
  <router-view></router-view>
  <Footer v-show="$route.meta.show"></Footer>
</div>
</template>

<script>
import Hader from './components/Hader'
import Footer from './components/Footer'
//注册
export default{
  name:'',
  components:{
    Hader,
    Footer,
    
}
}
</script>

<style>

</style>
