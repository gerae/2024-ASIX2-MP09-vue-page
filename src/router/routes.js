import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import SegundaPagina from '../views/SegundaPagina.vue';
import Register from '../views/RegisterView.vue';
import Login from '../views/LoginView.vue';

const routes = [
  { path: '/',  component: Inicio },
  { path: '/segunda-pagina', component: SegundaPagina, meta: { requiresAuth: true } },
  { path: '/sign-up', component: Register },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Agrega este bloque de código
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Comprueba si el usuario está autenticado
    if (!document.cookie.includes('jwt')) {
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
