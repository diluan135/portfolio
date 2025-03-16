<template>
  <div :class="{ 'dark-mode': isDarkMode }" class="background">

    <AppHeader @toggle-dark-mode="isDarkMode = $event" :isDarkMode="isDarkMode" :currentSection="currentSection"
      @scroll-to-section="scrollToSection" />

    <section id="about-me">
      <AboutMe :isDarkMode="isDarkMode" style="padding: 10vh 5vw 5vh 5vw;" />
    </section>

    <section id="projects">
      <ProjectsView :isDarkMode="isDarkMode" style="padding: 10vh 5vw 5vh 5vw;" />
    </section>

    <section id="services">
      <ServicesView :isDarkMode="isDarkMode" style="padding: 10vh 5vw 5vh 5vw" />
    </section>

    <section id="hire-me">
      <ContactForm :isDarkMode="isDarkMode" style="padding: 5vh 5vw 5vh 5vw; " />
    </section>
    <FooterView :isDarkMode="isDarkMode" />

    <FloatingContacts :isDarkMode="isDarkMode" />
    <canvas id="dark-mode-canvas"></canvas>
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
import ContactForm from "./components/ContactForm.vue";
import FooterView from "./components/FooterView.vue";

export default {
  components: {
    AppHeader,
    AboutMe,
    FloatingContacts,
    ProjectsView,
    ServicesView,
    ContactForm,
    FooterView
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
        case "HireMe":
          return ContactForm;
        default:
          return ProjectsView;
      }
    },
  },
  data() {
    return {
      isDarkMode: false,
      currentSection: "about-me",
    };
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkCurrentSection);
  },

  mounted() {
    this.initDarkModeAnimation();
    window.addEventListener("scroll", this.checkCurrentSection);
  },
  watch: {
    isDarkMode(newVal) {
      if (newVal) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      this.initDarkModeAnimation(); // Atualiza fundo ao trocar tema
    }
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
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  },
  methods: {
    ...mapMutations(["setCurrentView"]),
    initDarkModeAnimation() {
      const canvas = document.getElementById("dark-mode-canvas"); // Corrigir ID
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      let particles = [];
      const numParticles = 80;
      const maxRadius = 3;
      const mouse = { x: null, y: null };

      // Salva o valor de isDarkMode corretamente
      const isDark = this.isDarkMode;

      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        updateBackground();
      }

      function updateBackground() {
        ctx.fillStyle = isDark ? "#222" : "#f6f6f6"; // Agora usa a variável correta
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      function createParticles() {
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * maxRadius,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
          });
        }
      }

      function drawParticles() {
        updateBackground();
        ctx.fillStyle = isDark ? "#2fcbd5" : "#2275ff";

        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      function updateParticles() {
        particles.forEach((p) => {
          p.x += p.dx;
          p.y += p.dy;

          if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

          let dx = p.x - mouse.x;
          let dy = p.y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            p.x += dx * 0.02;
            p.y += dy * 0.02;
          }
        });
      }

      function animate() {
        drawParticles();
        updateParticles();
        requestAnimationFrame(animate);
      }

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      window.addEventListener("resize", resizeCanvas);

      resizeCanvas();
      createParticles();
      animate();
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const top = section.getBoundingClientRect().top + window.pageYOffset - 80; // ajuste se necessário
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    },
    checkCurrentSection() {
  const sections = ["about-me", "projects", "services", "hire-me"];
  let current = this.currentSection;

  // Itera de baixo para cima
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const rect = section.getBoundingClientRect();
      // Verifica se pelo menos uma parte da seção está visível na viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        current = sections[i];
        break; // Interrompe ao encontrar a primeira (ou seja, a mais abaixo) visível
      }
    }
  }

  this.currentSection = current;
}
,

  },

};
</script>
