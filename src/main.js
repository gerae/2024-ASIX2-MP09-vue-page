import { createApp } from 'vue';
import './style.css';
//import './index.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/mdc-dark-deeppurple/theme.css';
import router from './router/routes';
import store from './store/store';
import "primeicons/primeicons.css";

const app = createApp(App);
const session = localStorage.getItem('localjwt')

if (session) {
    store.commit('setAuthentication', true);
}

app.use(PrimeVue, { inputStyle: "filled" }, { unstyled: false });
app.use(router);
app.use(store);
app.mount('#app');  


