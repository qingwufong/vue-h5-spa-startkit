import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 路由配置
const Routers = [
  {
    path: '/demo/index',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['../views/index.vue'], resolve)
  },
  {
    path: '/demo/about',
    meta: {
      title: '关于'
    },
    component: (resolve) => require(['../views/about.vue'], resolve)
  },
  {
    path: '/demo/user/:id',
    meta: {
      title: '个人主页'
    },
    component: (resolve) => require(['../views/user.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/demo/index'
  }
];

const RouterConfig = {
  // 使用HTML5的History路由模式
  mode: 'history',
  routes: Routers
}

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
  // if(window.localStorage.getItem('unifiedToken')) {
  //   next();
  // } else {
  //   next('/demo/login');
  // }
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;