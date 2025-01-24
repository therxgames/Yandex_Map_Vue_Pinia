import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createYmaps } from 'vue-yandex-maps';
import { getEnvVar } from './utils/getEnvVar';
import App from './App.vue';
import './assets/styles/main.css';
const app = createApp(App);
app.use(createYmaps({
    apikey: getEnvVar('VITE_YANDEX_API_KEY'),
}));
app.use(createPinia());
app.mount('#app');
