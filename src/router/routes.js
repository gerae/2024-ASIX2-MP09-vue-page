import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import users_table from '../views/CrudView.vue';
import Register from '../views/RegisterView.vue';
import Login from '../views/LoginView.vue';
import UserProfile from '../components/UserProfile.vue';

const routes = [ //Per a activar pagines nomes tinguin acces despres de haber iniciat sessió "meta: { requiresAuth: true }"
  { path: '/',  component: Home },
  { path: '/users-table', component: users_table},
  { path: '/sign-up', component: Register },
  { path: '/login', component: Login },
  { path: '/profile', component: UserProfile,},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

/* 

Logica que utilitza un store per a nomes permetre acces a aquells usuaris que han iniciat sessió

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Comprueba si el usuario está autenticado
    if (!store.state.isAuthenticated) {
      next({ path: '/login', query: { from: to.path} });
    } else {
      next();
    }
  } else {
    next();
  }
}); 

*/

export default router;