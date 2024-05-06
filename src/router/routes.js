import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import SegundaPagina from '../views/SegundaPagina.vue';
import Register from '../views/RegisterView.vue';
import Login from '../views/LoginView.vue';
import store from '../store/store.js';
import UserProfile from '../components/UserProfile.vue';

const routes = [
  { path: '/',  component: Inicio },
  { path: '/segunda-pagina', component: SegundaPagina, meta: { requiresAuth: true } },
  { path: '/sign-up', component: Register },
  { path: '/login', component: Login },
  { path: '/profile', component: UserProfile, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Comprueba si el usuario está autenticado
    if (!store.state.isAuthenticated) { // Utiliza el estado de Vuex en lugar de comprobar la cookie
      next({ path: '/login', query: { from: to.path} });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;