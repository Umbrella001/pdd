<template>
  <div class="hot">
    <!-- 轮播图 -->
    <div class="swiper-container" v-if="homecasual.length > 0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(casual, index) in homecasual" :key="index">
          <img :src="casual.imgurl" alt=""></div>
      </div>
      <!-- 轮播图分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- Icon图标 -->
    <hot-nav></hot-nav>
    <!-- 广告位 -->
    <div class="hot-ad">
      <img src="./../../imgs/hot_ad/home_ad.gif" alt="">
    </div>
    <!-- 商品列表区 -->
    <hot-shop-list></hot-shop-list>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HotNav from './HotNav'
  import HotShopList from './HotShopList'

  import {
    mapState
  } from 'vuex'

  export default {
    name: "Hot",
    components: {
      HotNav,
      HotShopList
    },
    computed: {
      // 2.通过延展操作符...mapState将state中的数据渲染都界面上 [ES6新语法]
      ...mapState(['homecasual'])
    },
    mounted() {
      // 1.1 请求轮播图数据接通到vuex中的actions >>> dispatch() 这是异步方法
      this.$store.dispatch('reqHomeCasual');
      // 1.2 请求首页Icon导航
      this.$store.dispatch('reqHomeNav');
      // 1.3 请求首页商品列表
      this.$store.dispatch('reqHomeShopList');
    },
    watch: {
      homecasual() {
        this.$nextTick(() => {
            // 3.深度监视watch监视homecasual是否完全加载，是的话在创建swiper实例
          new Swiper('.swiper-container', {
            autoplay: true,//自动轮播
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        });
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot >>> .swiper-pagination-bullet-active
    background: #e9232c

  .hot
    width 100%
    height 100%
    background-color #f5f5f5
    padding-top 48px

    img
      width 100%

    .hot-ad
      background-color #fff
      margin 6px 0
      padding 4px
</style>
