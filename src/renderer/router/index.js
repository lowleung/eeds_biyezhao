import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/Index').default
    },
    {
      path: '/list',
      name: 'list',
      component: require('@/components/List').default
    },
    {
      path: '/search',
      name: 'search',
      component: require('@/components/Search').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
