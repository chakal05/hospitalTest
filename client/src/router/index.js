import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import admin from '@/components/Admin'
import notFound from '@/components/notFound'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: 'dashboard',
      name: 'admin',
      component: admin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      name:'404', 
      component: notFound
  }
  ]
})

// ? If token doest exist, redirect to homepage
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem("jwt")) {
      next({
        name: 'Home',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router