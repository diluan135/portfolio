import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/main.css';
import '@fortawesome/fontawesome-free/css/all.css';

// Criação da diretiva de animação
const app = createApp(App);

app.directive('animate-on-scroll', {
  mounted(el) {
    // Inicialmente, esconda o elemento
    el.classList.add('text-reveal-hidden');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Ativa a animação ao aparecer na tela
          el.classList.remove('text-reveal-hidden');
          el.classList.add('text-reveal');
          observer.unobserve(el); // Desconecta o observador após a animação
        }
      },
      { threshold: 0.5 } // 50% do elemento precisa ser visível para disparar a animação
    );
    observer.observe(el);
  }
});

// Importa os arquivos de idioma
import en from './locales/en.json';
import pt from './locales/pt.json';
const userLanguage = navigator.language.split('-')[0];
// Define as mensagens de tradução
const messages = {
  en,
  pt,
};

// Configuração do i18n
const i18n = createI18n({
  locale: userLanguage, // Idioma padrão
  fallbackLocale: 'pt', // Idioma de fallback
  messages, // Passa as mensagens aqui!
});

app.use(i18n);
app.use(store);
app.mount('#app');
