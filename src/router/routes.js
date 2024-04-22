import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import SegundaPagina from '../views/SegundaPagina.vue';
import Register from '../views/RegisterView.vue';
import Login from '../views/LoginView.vue';

const routes = [
  { path: '/',  component: Inicio },
  { path: '/segunda-pagina', component: SegundaPagina },
  { path: '/sign-up', component: Register },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
