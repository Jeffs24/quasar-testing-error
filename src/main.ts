import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import { Quasar } from 'quasar';

const app = createApp(App);

app.use(router);

app.use(Quasar, { plugins: {} });

app.mount('#app');
