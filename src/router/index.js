import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Pantheon of Olympus',
      },
    }
  ]
})

router.afterEach(to => {
  document.title = to.meta.title;
});


export default router
