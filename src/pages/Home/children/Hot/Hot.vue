<template>
    <div class="hot">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../imgs/rowing/s1.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s2.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s3.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s4.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s5.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s6.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s7.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s8.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s9.png" alt=""></div>
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
    export default {
      name: "Hot",
      components:{
        HotNav,
        HotShopList
      },
      mounted(){
        new Swiper ('.swiper-container', {
          autoplay:true,//自动轮播
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
      })
    }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.hot >>>  .swiper-pagination-bullet-active
  background : #e9232c
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
