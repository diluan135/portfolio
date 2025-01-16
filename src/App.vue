<template>
  <div :class="{ 'dark-mode': isDarkMode }" class="background">
    <AppHeader @toggle-dark-mode="isDarkMode = $event" :isDarkMode="isDarkMode" />
    <transition name="fade" mode="out-in">
      <component :is="currentViewComponent" :isDarkMode="isDarkMode" style="padding: 5vh 5vw 0px 2vw" />
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
          return AboutMe;
      }
    },
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    ...mapMutations(["setCurrentView"]),
  },
};
</script>
