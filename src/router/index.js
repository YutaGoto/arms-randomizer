import Vue from 'vue'
import Router from 'vue-router'
import Arms from '@/components/Arms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Arms',
      component: Arms
    }
  ]
})
