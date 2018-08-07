
import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入路由组件
import Heroes from '../views/heroes/List.vue';
import Equips from '../views/equips/List.vue';
import Weapons from '../views/weapons/List.vue';

// 注册VueRouter插件
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({
    // 路由规则
    routes: [
        {path: '/', redirect: '/heroes'},
        {name: 'heroes', path: '/heroes', component: Heroes},
        {name: 'equips', path: '/equips', component: Equips},
        {name: 'weapons', path: '/weapons', component: Weapons}
    ],
    linkExactActiveClass: 'active'
});

// 导出路由对象

export default router;