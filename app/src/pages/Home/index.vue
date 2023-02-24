<template>
<div>
    <!-- 三级联动组件以全局注册，不需要引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
    <!-- <button @click="add">点击我加1</button>
    <span>仓库中的数据{{ count }}</span>
    <button>点击我减1</button> -->
</div>
</template>

<script>
//引入其余组件
import ListContainer from '@/pages/Home/ListContainer'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

// import { mapState } from 'vuex';
//注册
export default{
    components:{
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    }
    // computed:{
    //     ...mapState(['count'])
    // },
    // methods:{
    //     add(){
    //         //派发action
    //         this.$store.dispatch('add');
    //     }
    // }
}
</script>


<style>

</style>