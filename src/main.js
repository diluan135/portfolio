import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/main.css';
import '@fortawesome/fontawesome-free/css/all.css';



// Importa os arquivos de idioma
import en from './locales/en.json';
import pt from './locales/pt.json';

// Define as mensagens de tradução
const messages = {
  en,
  pt,
};

// Configuração do i18n
const i18n = createI18n({
  locale: 'en', // Idioma padrão
  fallbackLocale: 'pt', // Idioma de fallback
  messages, // Passa as mensagens aqui!
});

const app = createApp(App);
app.use(i18n);
app.use(store);
app.mount('#app');
