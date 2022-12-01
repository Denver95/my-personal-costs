import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //Пути к 
  {
    path: '/payment',
    name: 'Dashboard',
    component: () => import('../page/Dashboard.page.vue'),
  },
  // {
  //   // Добовалили еще один дашборад
  //   path: '/payment/:page',
  //   name: 'Dashboard',
  //   component: Dashboard,
  // },
  {
    //   * это свойство которое  дает возможность записывать  ссылки /about23423423 
    // path: '/about*',
    path: '/about',
    name: 'About',
    component: () => import('../page/About.page.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../page/cart.page.vue'),
  },
  {
    path: '/error',
    name: 'Error404',
    component: () => import('../page/Error404.page.vue')
  },



  // /about234234 перенаправит нас на страницу error
  {
    path: '*',
    redirect: '/error'
  },

]

const router = new VueRouter({
  mode: 'history',
  routes,
})


// Жизненый хук до загрузки страницы. Запрещаем пользователю гулять по страницам
const user = true

// До загрузки всей страницы будет проверяться проверка
router.beforeEach((to, from, next) => {
  if (to.name !== 'Error404' && !user) {
    next({
      name: 'Error404'
    })
  } else {
    next()
  }
});

// Жизненый хук после использования. Меняем Title после нажатия на кнопки.

const getTitle = routeName => {
  return {
    'Dashboard': 'Payment To go',
    'About': 'Holla About',
    'Cart': 'Cart enable',
    'Error404': 'ERROR NOT BAD'
  }[routeName]
};

router.afterEach((to) => {
  document.title = getTitle(to.name)
})





export default router
