import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import SegundaPagina from '../views/SegundaPagina.vue';

const routes = [
  { path: '/', component: Inicio },
  { path: '/segunda-pagina', component: SegundaPagina }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
