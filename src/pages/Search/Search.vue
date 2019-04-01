<template>
  <div class="search">
    <search-panel v-show="isShow" :isShowSearchPanel="isShowSearchPanel"></search-panel>
    <search-nav  :isShowSearchPanel="isShowSearchPanel"></search-nav>
    <search-list></search-list>
  </div>
</template>

<script>
  import SearchNav from './children/SearchNav'
  import SearchList from './children/SearchList'
  import SearchPanel from './children/SearchPanel'
    export default {
      name: "Search",
      data(){
        return{
          isShow: false
        }
      },
      components:{
        SearchNav,
        SearchList,
        SearchPanel
      },
      methods:{
        isShowSearchPanel(flag){
          this.isShow = flag;
        }
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.search
  width: 100%
  height: 100%
  background-color: #f5f5f5
</style>
