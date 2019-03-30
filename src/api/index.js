import ajax from './ajax'

// 1.基础路径
const BASE_URL = 'http://127.0.0.1:3000';

// 2.请求ajax请求方法

// 2.1请求热门板块轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual');

// 2.2请求热门板块Icon图标区导航
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav');

// 2.3请求热门板块商品列表区
export const getHomeShopList = () => ajax(BASE_URL + '/api/homeshoplist');

// 2.4请求推荐板块商品列表区
export const getRecommendShopList = () => ajax(BASE_URL + '/api/recommendshoplist');
