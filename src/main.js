import Vue from 'vue';
import App from './App.vue';

// 导入路由模块
import router from './routers/router.js';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
