import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

// Importa os arquivos de idioma
import messages from './locales';

// Configuração do i18n
const i18n = createI18n({
  locale: 'en', // Idioma padrão
  fallbackLocale: 'pt', // Caso o idioma não esteja disponível
  messages,
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
