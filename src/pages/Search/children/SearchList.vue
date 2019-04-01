<template>
  <div class="shop">
    <!-- 左边列表 -->
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item"
            v-for="(goods,index) in searchgoods"
            :key="index"
            :class="{selected: index === currentIndex}"
            @click="clickLeftItem(index)"
            ref="menuList"
        >
          <span>{{goods.name}}</span>
        </li>
      </ul>
    </div>
    <!-- 右边列表 -->
    <div class="shop-wrapper">
      <ul ref="shopList">
        <li class="shop-list" v-for="(goods,index1) in searchgoods" :key="index1">
          <div class="shop-title">
            <h4>{{goods.name}}</h4>
            <a href="">查看更多<img src="../images/right.png" alt=""></a>
          </div>
          <ul class="phone-type" v-if="goods.tag === 'phone'">
            <li v-for="(phone, index) in goods.category" :key="index">
              <img :src="phone.icon" alt="">
            </li>
          </ul>
          <ul class="shop-items">
            <li v-for="(item,index2) in goods.items" :key="index2">
              <img :src=item.icon alt="">
              <span>{{item.title}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {
    mapState
  } from 'vuex'

  export default {
    name: "SearchList",
    data() {
      return {
        // 右侧列表滑动的Y轴坐标(动态更新)
        scrollY: 0,
        // 所有列表的头部位置
        shopListTops: [],
      }
    },
    computed: {
      ...mapState(['searchgoods']),
      // 1.动态决定左侧菜单哪个选项被选中
      currentIndex() {
        // 1.1 获取数据
        const {scrollY, shopListTops} = this;
        // 1.2 取出左侧菜单栏的索引值（ES6新语法findIndex）
        return shopListTops.findIndex((liTop,index) => {
          // 1.3 调用左侧联动
          this._leftScroll(index);
          // bug:解决数据索引在7以后点击时并不是title在顶部的问题
          return index > 7 ? (scrollY - 60) >= liTop && (scrollY - 60) < shopListTops[index + 1] : scrollY >= liTop && scrollY < shopListTops[index + 1]
        })
      }
    },
    mounted() {
      this.$store.dispatch('reqSearchGoods');
    },
    watch: {
      searchgoods() {
        this.$nextTick(() => {
          // 1.加载完成后初始化值,完成BScroll功能
          this._initScroll();
          // 2.求出右边商品列表title所在的Top值
          this._initRightLiTop();
          // 3.左侧联动
        })
      }
    },
    methods: {
      // 1.初始化滚动值
      _initScroll() {
        // 1.1左边滚动开启
        this.leftScroll = new BScroll('.menu-wrapper', {
          scrollY: true,
          click: true
        });
        // 1.2右边滚动开启
        this.rightScroll = new BScroll('.shop-wrapper', {
          scrollY: true,
          click: true,
          probeType: 3 // 触发滑动事件
        });
        // 1.3监听右边滚动值并获取
        this.rightScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(pos.y);
        });

      },
      // 2.求出右边商品列表title所在的Top值
      _initRightLiTop() {
        // 2.1 定义初始值
        let top = 0;
        const tempArr = [];
        // 2.2 添加第一个数组值
        tempArr.push(top);
        // 2.3 遍历对应的商品列表
        let allLists = this.$refs.shopList.getElementsByClassName('shop-list');
        // 2.4 将伪数组allLists转化为真数组
        Array.prototype.slice.call(allLists).forEach(li => {
          top += li.clientHeight;
          tempArr.push(top);
        });
        // 2.5 更新Data数据
        this.shopListTops = tempArr;
      },
      // 3.实现左侧点击切换效果
      clickLeftItem(index){
        this.scrollY = this.shopListTops[index];
        // bug同上右侧滚动
        let tureScrollY = index > 7 ? ((-this.scrollY) - 70) : -this.scrollY;
        // 右侧(this.rightScroll)滚动使用scrollTo
        this.rightScroll.scrollTo(0,tureScrollY,300);
      },
      // 4.实现右侧滚动时左侧也联动的效果
      _leftScroll(index){
        let menuLists = this.$refs.menuList;
        let el = menuLists[index];
        this.leftScroll.scrollToElement(el,300,0,-100)
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "~@/common/stylus/mixins.styl"
  .shop
    display flex
    position absolute
    overflow hidden
    top 60px
    bottom 50px
    width 100%
    background-color #f5f5f5
    /* 左边菜单栏 */

    .menu-wrapper
      width 80px
      background-color #aaaaaa

      .menu-item
        position relative
        display flex
        justify-content center
        align-items center
        width 100%
        height 50px
        color #666
        background-color #fafafa

      .selected
        color #e02e24

      .selected::before
        position absolute
        left 0
        content ''
        width 4px
        height 28px
        background-color #e9232c

    /* 右边商品栏 */

    .shop-wrapper
      flex 1
      background-color #fff

      .shop-title
        display flex
        justify-content space-between
        align-items center
        width 100%
        height 40px
        color #666

        h4
          margin-left 10px

        a
          display flex
          flex-direction row
          align-items center
          text-decoration none
          color #666
          margin-right 20px
          font-size 14px

      .shop-items
        display: flex
        flex-wrap wrap

        li
          display flex
          flex-direction column
          justify-content center
          align-items center
          width 33.3%
          height 90px
          color #666
          font-size 12px

          img
            width 60%
            height 60%
            margin-bottom 5px

      .phone-type
        display flex
        flex-direction row
        flex-wrap wrap
        width 100%
        border-bottom-1px(#dddddd)

        li
          display flex
          justify-content center
          align-items center
          width 33.3%
          margin 5px 0

          img
            width 70%

</style>
