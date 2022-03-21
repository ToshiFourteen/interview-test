import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/news/list'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    name: 'news',
    path: '/news/list',
    component: () => import('../views/news/list.vue'),
    meta: {
      title: '新闻'
    }
  },
  {
    name: 'detail',
    path: '/news/detail',
    component: () => import('../views/news/detail.vue'),
    meta: {
      title: '详情'
    }
  }
]

export default new VueRouter({
  routes
})
