import Vue from 'vue';
import VueRouter from 'vue-router';
import UsersList from '../components/usersList/UsersList.vue';
import UserPage from '../components/usersList/UserPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    beforeEnter(to, from, next) {
      if (!to.params.page) {
        next('/1');
      }
    },
  },
  {
    path: '/:page',
    name: 'UsersList',
    component: UsersList,
    props: true,
  },
  {
    path: '/user/:id',
    name: 'UserPage',
    component: UserPage,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
