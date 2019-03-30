<template>
  <div class="recommend-container" v-if="recommendshoplist.length > 0">
    <ul class="recommend-list">
      <shop-list
        tag="li"
        v-for="item in recommendshoplist"
        :key="item.goods_id"
        :item="item"
      ></shop-list>
      <p class="noContent">-------- 我也是有底线的 --------</p>
    </ul>

  </div>
</template>

<script>
  import ShopList from '@/components/ShopList/ShopList'
  import {
    mapState
  } from 'vuex'
    export default {
      name: "Recommend",
      components:{
        ShopList
      },
      computed:{
        ...mapState(['recommendshoplist'])
      },
      mounted() {
        // 1.发送请求
        this.$store.dispatch('reqRecommendShopList');
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.recommend-container
  width: 100%
  height: 100%
  background-color: #f5f5f5
  .recommend-list
    display flex
    flex-direction row
    flex-wrap wrap
    margin-bottom 60px
    .recommend-list-item
      width 49.5%
      padding-bottom 14px
      background-color #fff
    .recommend-list-item:nth-child(2n-1)
      margin-right 1%
    .item-title
      font-size 13px
      height 20px
      line-height 20px
      overflow hidden
      margin  2px 8px
    .item-info
      display flex
      flex-direction row
      align-items center
      padding 0 6px
      .item-price
        flex 2
        font-size 12px
        font-weight bolder
        color #e9232c
      .item-sales
        flex 4
        font-size 10px
        color #666
      .item-btn
        flex 2
        height 26px
        border 1px solid orangered
        border-radius 4px
        background-color transparent
        font-size 12px
        color #e9232c
        margin-right 2px
   .noContent
      margin-left 50%
      transform translate(-50%)
      font-size 14px
      line-height 2px
      text-align center
      color #cdcdcd
</style>
