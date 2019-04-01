<template>
  <div class="recommend-container" v-if="recommendshoplist.length > 0">
    <ul class="recommend-list">
      <shop-list
        tag="li"
        v-for="(item,index) in recommendshoplist"
        :key="index"
        :item="item"
      ></shop-list>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { Indicator } from 'mint-ui';
  import ShopList from '@/components/ShopList/ShopList'
  import {
    mapState
  } from 'vuex'
    export default {
      name: "Recommend",
      data(){
        return{
          page: 1,
          count: 20
        }
      },
      components:{
        ShopList
      },
      computed:{
        ...mapState(['recommendshoplist'])
      },
      mounted() {
        Indicator.open('正在加载图片...');
        // 1.发送请求
        this.$store.dispatch('reqRecommendShopList',{page:this.page,count:this.count,callback:()=>{
            Indicator.close();
          }
        });
      },
      watch:{
        recommendshoplist(){
          this.$nextTick(() =>{
            // 1.加载完后注入滚动机制
            this._initBScroll();
            // 2.当DOM更新时执行加载数据
            this.page += 1;
          })
        }
      },
      methods:{
        _initBScroll(){
          // 1.1初始化滚动激活
          this.recommendScroll = new BScroll('.recommend-container',{
            scrollY: true,
            probeType: 3
          });
          // 1.2监听列表的触摸结束
          this.recommendScroll.on('touchEnd',(pos)=>{
            // 1.2.1监听下拉刷新
            if(pos.y >= 50){
              console.log('刷新');
            }
            // 1.2.2监听上拉
            if(this.recommendScroll.maxScrollY > pos.y + 20){
              Indicator.open('正在加载图片...');
              this.$store.dispatch('reqRecommendShopList',{page:this.page,count:this.count,callback:()=>{
                  Indicator.close();
                }});
            }
          });
          // 2.1列表滚动结束重新刷新页面
          this.recommendScroll.on('scrollEnd',()=>{
            this.recommendScroll.refresh();
          });
        },
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.recommend-container
  width: 100%
  height: 100%
  overflow hidden
  background-color: #f5f5f5
  .recommend-list
    display flex
    flex-direction row
    flex-wrap wrap
    padding-bottom 40px
</style>
