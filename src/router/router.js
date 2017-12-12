import Vue from 'vue';
import Router from 'vue-router';
import home from './../components/home/home.vue';
import category from './../components/category/category.vue';
import car from './../components/car/car.vue';
import pri from './../components/private/private.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'fff',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/pri',
      name: 'pri',
      component: pri
    }
  ]
})
