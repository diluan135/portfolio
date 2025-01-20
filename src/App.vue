<template>
  <div :class="{ 'dark-mode': isDarkMode }" class="background">
    <AppHeader @toggle-dark-mode="isDarkMode = $event" :isDarkMode="isDarkMode" />
    <transition name="fade" mode="out-in">
      <component :is="currentViewComponent" :isDarkMode="isDarkMode" style="padding: 10vh 5vw 5vh 5vw" />
    </transition>

    <FloatingContacts :isDarkMode="isDarkMode" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AppHeader from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import ProjectsView from "./components/ProjectsView.vue";
import ServicesView from "./components/ServicesView.vue";
import CertificatesView from "./components/CertificatesView.vue";
import FloatingContacts from "./components/FloatingContacts.vue";

export default {
  components: {
    AppHeader,
    FloatingContacts
  },
  computed: {
    ...mapState(["currentView"]),
    currentViewComponent() {
      switch (this.currentView) {
        case "AboutMe":
          return AboutMe;
        case "Projects":
          return ProjectsView;
        case "Services":
          return ServicesView;
        case "Certificates":
          return CertificatesView;
        default:
          return ProjectsView;
      }
    },
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  created() {
    // Detectar preferências do usuário para o modo escuro
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      // Se houver uma preferência salva, usar essa
      this.isDarkMode = savedTheme === "dark";
    } else {
      // Caso contrário, verificar a preferência do dispositivo
      this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    // Adicionar listener para mudanças no modo de cor preferido (navegador ou dispositivo)
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!savedTheme) {
          // Se não houver preferência salva, atualizar com base no dispositivo
          this.isDarkMode = e.matches;
        }
      });
  },
  methods: {
    ...mapMutations(["setCurrentView"]),
  },
};
</script>
