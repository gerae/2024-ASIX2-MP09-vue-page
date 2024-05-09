import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css';
import router from './router/routes';
import store from './store/store';

const app = createApp(App);
const session = localStorage.getItem('localjwt')

if (session) {
    store.commit('setAuthentication', true);
}

app.use(PrimeVue, { ripple: true }, { inputStyle: "filled" });
app.use(router);
app.use(store);
app.mount('#app');  


