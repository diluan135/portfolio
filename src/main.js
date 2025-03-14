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

// Cria o cursor principal
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Atualiza a posição do cursor principal e cria o ghost apenas se não for clicável
window.addEventListener('mousemove', (e) => {
  // Atualiza a posição do cursor principal
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  // Verifica se o cursor NÃO está em estado "clickable"
  if (!cursor.classList.contains('clickable')) {
    // Cria um ghost para o rastro
    const ghost = document.createElement('div');
    ghost.classList.add('cursor-ghost');
    ghost.style.left = e.clientX + 'px';
    ghost.style.top = e.clientY + 'px';
    document.body.appendChild(ghost);

    // Remove o ghost após a animação (1.8s, conforme o tempo definido)
    setTimeout(() => {
      ghost.remove();
    }, 1800);
  }
});

// Adiciona os eventos para elementos clicáveis
document.querySelectorAll('button, a, [data-clickable]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('clickable');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('clickable');
  });
});
