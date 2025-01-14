import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

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
app.mount('#app');
