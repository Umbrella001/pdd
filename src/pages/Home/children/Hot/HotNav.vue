<template>
  <div class="hot-nav">
    <div class="hot-nav-content">
      <!-- 滚动区域 -->
      <div class="nav-content-inner">
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
      </div>
      <!-- 自定义滚动条 -->
      <div class="hot-nav-bottom">
        <div class="bottom-inner" :style="getInnerWidth"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "HotNav",
      data(){
        return{
          // 1.获取屏幕的宽度（自动识别多分辨率下的宽度）并且兼容处理
          screenWidth:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          // 2.获取滚动内容的总长度
          scrollContentWidth:720,
          // 3.获取静态滚动条长度
          scrollWidth:100,
          // 4.获取动态滚动条长度
          scrollInnerWidth:0,
          // 1.触摸的起点X
          startX:0,
          // 2.记录触摸的终点X
          endX:0,
          // 3.触摸移动的距离X
          touchMoveX:0,
          // 4.相对的移动距离X(动态滚动条)
          scrollMoveX:0
        }
      },
      // 页面实例挂载完毕后激活这些函数
      mounted() {
        // 获取动态滚动条的长度
        this.bottomInnerWidth();
        // 移动端事件监听
        this.bindEvent();
      },
      methods:{
        // 分析: 动态滚动条滚动的长度/固定好的静态长度 == 手机屏幕中该页面显示的宽/滚动内容的总宽
        bottomInnerWidth(){
          const {scrollContentWidth,scrollWidth,screenWidth} = this;
          this.scrollInnerWidth = scrollWidth * (screenWidth / scrollContentWidth)
        },
        // 在实例挂载之后，元素可以用 vm.$el 访问内部的函数（此处为监听函数addEventListener）,注意第一个参数type分别是移动端三个事件touchstart,touchmove,touchend，不能乱写否则报错(不是单纯的字符串)
        bindEvent(){
          this.$el.addEventListener('touchstart',this.handleTouchStart,false);
          this.$el.addEventListener('touchmove',this.handleTouchMove,false);
          this.$el.addEventListener('touchend',this.handleTouchEnd,false);

        },
        // 开始触摸
        handleTouchStart(event){
          // console.log(event.touches);
          this.startX = event.touches[0].pageX;
          // console.log(this.startX);
        },
        // 触摸移动
        handleTouchMove(event){
          // console.log('触摸移动')
          this.touchMoveX = event.touches[0].pageX - this.startX;
          // console.log(this.touchMoveX);
          this.scrollMoveX = -((this.touchMoveX / this.scrollContentWidth) * this.scrollWidth - this.endX);
          // 触摸移动时添加边界距离限制处理
          if(this.scrollMoveX <= 0){
            this.scrollMoveX = 0;
          }else if(this.scrollMoveX >= this.scrollWidth - this.scrollInnerWidth){
            this.scrollMoveX = this.scrollWidth - this.scrollInnerWidth;
          }
        },
        // 结束触摸 记录最终点
        handleTouchEnd(){
          // console.log('结束触摸')
          this.endX = this.scrollMoveX;
        }
      },
      computed:{
        // 动态的计算宽度使用computed函数，在页面中可知：style接受的是一个键值对（如style='width:50px,height:50px'）
        getInnerWidth(){
          // 所以返回的值是一个键值对对象
          return{
            width: `${this.scrollInnerWidth}px`,
            left: `${this.scrollMoveX}px`
          }
        }
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.hot-nav
  position relative
  width: 100%
  height: 180px
  background-color #fff
  padding-bottom 10px
  .hot-nav-content
    width 100%
    overflow-x scroll
    .nav-content-inner
      display flex
      flex-wrap wrap // 一行显示不下时是否换行显示 wrap => 是
      width 720px
      height 180px
      .inner-item
        display flex
        width 90px
        height 90px
        flex-direction column
        justify-content center
        align-items center
        font-size 14px
        color #666
        img
          width 44%
          margin-bottom 5px
          /* 隐藏默认滚动条 &::-webkit-scrollbar */
    &::-webkit-scrollbar
      display none
    .hot-nav-bottom
      width 100px
      height 2px
      background-color #ccc
      position absolute
      left 50%
      margin-left -50px
      bottom 8px
      .bottom-inner
        position absolute
        left 0
        height 100%
        background-color orangered
        width 0
</style>
