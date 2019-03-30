<template>
  <div class="shop-container" v-if="homeshoplist.length > 0">
    <ul class="shop-list">
      <li class="shop-list-item" v-for="(shop, index) in homeshoplist" :key="index">
        <img :src="shop.image_url" alt="" width='100%'>
      <h4 class="shop-des">{{shop.goods_name}}</h4>
        <div class="shop-item-bottom">
          <span class="shop-price">￥{{shop.normal_price / 100}}</span>
          <span class="shop-counter">{{shop.sales_tip}}</span>
          <span class="shop-users">
            <img src="./../../imgs/shop_list/user1.jpg" alt="">
            <img src="./../../imgs/shop_list/user2.jpg" alt="">
          </span>
          <span class="shop-btn">
            <button>去拼单 <img src="./../../imgs/shop_list/go1.png" alt=""></button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
    export default {
        name: "HotShopList",
      computed:{
        ...mapState(['homeshoplist'])
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.shop-container
  margin-bottom 20px
  background-color #f5f5f5
  .shop-list
   .shop-list-item
    margin-bottom 10px
    background-color #fff
    display flex
    flex-direction column
    .shop-des
      width: 94%
      height: 44px
      line-height 22px
      margin-left 3%
      overflow hidden
    .shop-item-bottom
      display flex
      flex-direction row
      justify-content space-around  // 两边对齐
      align-items center
      margin 10px 0
      .shop-price
        flex 1
        font-size 18px
        font-weight bolder
        color #e9232c
        text-align center
        margin-left 6px
      .shop-counter
        flex 2
        font-size 12px
        color #ccc
        margin-left 2px
      .shop-users
        display flex
        flex 1
        justify-content center
        align-items center
        img
          width 40%
          border-radius 50%
        img:nth-child(2)
          margin-left -6px
      .shop-btn
        flex 2
        button
          position relative
          width 80%
          height 34px
          font-size 16px
          border none
          color #fff
          margin-left 6px
          background-color orangered
          border-radius 6px
          padding-right 20px
          img
            position absolute
            top 10px
            right 12px
</style>
