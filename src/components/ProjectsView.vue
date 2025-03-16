<template>
  <div  class="box2">
    <!-- Layout Mobile: renderiza cada projeto sequencialmente -->
    <div v-if="isMobile" class="projects-mobile">
      <div v-for="(project, index) in projects" :key="index" class="project-item-mobile">
        <div class="project-image-mobile">
          <img :src="project.image" :alt="project.title" />
        </div>
        <div class="project-details-mobile">
          <h3>{{ project.title }}</h3>
          <p style="text-align: start; margin-bottom: 20px;">{{ project.description }}</p>

          <!-- Seção de functions -->
          <div class="functions">
            <div class="function-item" v-for="(fn, idx) in project.functions" :key="idx">
              <span class="function-icon">-</span>
              <span class="function-text">{{ fn }}</span>
            </div>
          </div>

          <hr class="linha" />
          <div class="row align-items-center">
            <div class="tech-icons col-auto">
              <img
                v-for="(tech, idx) in project.techs"
                :key="idx"
                :src="tech.src"
                :alt="tech.alt"
                class="tech-icon"
              />
            </div>
            <div data-clickable class="links col-auto">
              <a v-for="(link, idx) in project.links" :key="idx" :href="link.url" target="_blank">
                {{ link.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Layout Desktop -->
    <div v-else>
      <div class="projects-container">
        <!-- Coluna da esquerda: imagens empilhadas verticalmente -->
        <div class="left-column">
          <div
            class="project-image"
            v-for="(project, index) in projects"
            :key="index"
            ref="projectRefs"
            :class="{ visible: index === 0 }"
          >
            <img :src="project.image" :alt="project.title" />
          </div>
        </div>
        <!-- Coluna da direita: fixa (sticky) com os detalhes do projeto atual -->
        <div v-animate-on-scroll class="right-column">
          <div style="padding-right: 30px;" class="indicator-column">
            <div
              v-for="(project, index) in projects"
              :key="index"
              :class="['indicator-dot', { active: currentProjectIndex === index }]"
            ></div>
          </div>
          <transition name="fade" mode="out-in" appear>
            <div class="sticky-info" v-if="currentProject" :key="currentProject.title">
              <h3>{{ currentProject.title }}</h3>
              <p style="text-align: start;">{{ currentProject.description }}</p>

              <!-- Seção de functions -->
              <div class="functions">
                <div class="function-item" v-for="(fn, idx) in currentProject.functions" :key="idx">
                  <span class="function-text">{{ fn }}</span>
                </div>
              </div>

              <hr class="linha" style="width: 70%;" />
              <div class="row align-items-center">
                <div class="tech-icons col-auto">
                  <img
                    v-for="(tech, idx) in currentProject.techs"
                    :key="idx"
                    :src="tech.src"
                    :alt="tech.alt"
                    class="tech-icon"
                  />
                </div>
                <div data-clickable class="links col-auto">
                  <a v-for="(link, idx) in currentProject.links" :key="idx" :href="link.url" target="_blank">
                    {{ link.text }}
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProjectsComponent",
  data() {
    return {
      isMobile: false,
      projects: [
        {
          title: "Escuta",
          image: require("@/assets/escuta/1.png"),
          description: this.$t("escutaDescription"),
          functions: [
            this.$t("escutaFunction3"),
            this.$t("escutaFunction"),
            this.$t("escutaFunction2"),
            this.$t("escutaFunction4"),
            this.$t("escutaFunction5"),
          ],
          links: [
            {
              text: this.$t("seeOnGithub"),
              url: "https://github.com/diluan135/escuta_public",
            },
          ],
          techs: [
            { src: require("@/assets/laravel.png"), alt: "Laravel" },
            { src: require("@/assets/vuejs.png"), alt: "VueJs" },
            { src: require("@/assets/mysql.png"), alt: "MySql" },
            { src: require("@/assets/bootstrap.png"), alt: "Bootstrap" },
            { src: require("@/assets/pusher.png"), alt: "Pusher" },
          ],
        },
        {
          title: "Escuta Admin",
          image: require("@/assets/escuta_admin/1.png"),
          description: this.$t("escutaAdminDescription"),
          functions: [
            this.$t("escutaAdminFunction"),
            this.$t("escutaAdminFunction3"),
            this.$t("escutaAdminFunction4"),
            this.$t("escutaAdminFunction2"),
          ],
          links: [
            {
              text: this.$t("seeOnGithub"),
              url: "https://github.com/diluan135/escuta_admin_public",
            },
          ],
          techs: [
            { src: require("@/assets/laravel.png"), alt: "Laravel" },
            { src: require("@/assets/vuejs.png"), alt: "VueJs" },
            { src: require("@/assets/mysql.png"), alt: "MySql" },
            { src: require("@/assets/bootstrap.png"), alt: "Bootstrap" },
            { src: require("@/assets/pusher.png"), alt: "Pusher" },
          ],
        },
        {
          title: "ConectaBus",
          image: require("@/assets/conectaBus/1.png"),
          description: this.$t("conectaBusDescription"),
          functions: [
            this.$t("conectaBusFunction2"),
            this.$t("conectaBusFunction3"),
            this.$t("conectaBusFunction4"),
            this.$t("conectaBusFunction"),
          ],
          links: [
            {
              text: this.$t("seeOnGithub"),
              url: "https://github.com/diluan135/conecta_bus",
            },
            {
              text: this.$t("seeOnGooglePlay"),
              url: "https://play.google.com/store/apps/details?id=amttdetra.horarios_transporte&hl=pt_BR",
            },
          ],
          techs: [
            { src: require("@/assets/flutter.png"), alt: "Flutter" },
            { src: require("@/assets/dart.png"), alt: "Dart" },
            { src: require("@/assets/mysql.png"), alt: "MySql" },
            { src: require("@/assets/laravel.png"), alt: "Laravel" },
          ],
        },
        {
          title: "Usos Diários",
          image: require("@/assets/usos/1.png"),
          description: this.$t("usosDescription"),
          functions: [
            this.$t("usosFunction"),
            this.$t("usosFunction2"),
            this.$t("usosFunction3"),
          ],
          links: [
            {
              text: this.$t("seeOnGithub"),
              url: "https://github.com/diluan135/usos",
            },
          ],
          techs: [
            { src: require("@/assets/vuejs.png"), alt: "VueJs" },
            { src: require("@/assets/bootstrap.png"), alt: "Bootstrap" },
            { src: require("@/assets/mysql.png"), alt: "MySql" },
            { src: require("@/assets/laravel.png"), alt: "Laravel" },
          ],
        },
      ],
      currentProject: null,
      observer: null,
    };
  },
  computed: {
    currentProjectIndex() {
      return this.projects.indexOf(this.currentProject);
    },
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
    if (!this.isMobile) {
      this.currentProject = this.projects[0];
      const options = { threshold: 0.7 };
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const index = this.$refs.projectRefs.indexOf(entry.target);
            if (index !== -1) {
              this.currentProject = this.projects[index];
            }
          } else {
            entry.target.classList.remove("visible");
          }
        });
      };
      this.observer = new IntersectionObserver(callback, options);
      this.$nextTick(() => {
        this.$refs.projectRefs.forEach((el) => {
          this.observer.observe(el);
        });
      });
    }
    // Define o projeto atual inicialmente como o primeiro
    this.currentProject = this.projects[0];

    // Define o IntersectionObserver com root sendo o body (ou o container principal)
    const options = { threshold: 0.7 };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          const index = this.$refs.projectRefs.indexOf(entry.target);
          if (index !== -1) {
            this.currentProject = this.projects[index];
          }
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };
    this.observer = new IntersectionObserver(callback, options);
    this.$nextTick(() => {
      this.$refs.projectRefs.forEach((el) => {
        this.observer.observe(el);
      });
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },
  },
};
</script>
<style scoped>
/* Layout Desktop */
.projects-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.left-column {
  width: 50%;
}

.right-column {
  width: 50%;
  position: sticky;
  top: 25vh;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.project-image {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.project-image.visible {
  opacity: 1;
}

.project-image img {
  max-width: 90%;
  max-height: 70vh;
  object-fit: cover;
}

.sticky-info {
  text-align: start;
}

.links {
  margin: 10px 0;
}

.links a {
  margin: 0 5px;
  color: #007bff;
}

.tech-icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.tech-icon {
  width: 40px;
  height: 40px;
}

/* Coluna de indicadores */
.indicator-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 0.5em;
}

.indicator-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #2275ff;
  margin: 5px 0;
  transition: transform 0.3s ease, background-color 0.3s ease;
  transform: scale(1);
  filter: blur(1px);
}

.indicator-dot.active {
  transform: scale(5);
  filter: blur(0.5px);
}

.linha {
  border: 1px solid #2275ff;
}

/* Seção de functions */
.functions {
  margin: -10px 0 10px;
}

.function-item {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: rgb(124, 124, 124);
  margin-bottom: 5px;
}

.function-icon {
  color: #2275ff;
  margin-right: 5px;
}

/* Dark mode */
.dark-mode .right-column {
  color: #fff;
}

.dark-mode .indicator-dot {
  background-color: #2fcbd5;
}

.dark-mode .linha {
  border: 1px solid #2fcbd5;
}

.dark-mode .function-icon {
  color: #2fcbd5;
}

/* Layout Mobile */
.projects-mobile {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
}

.project-item-mobile {
  margin-bottom: 30px;
}

.project-image-mobile {
  text-align: center;
}

.project-image-mobile img {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.project-details-mobile {
  padding: 10px;
  text-align: start;
}

.project-details-mobile h3 {
  margin-top: 10px;
  font-size: 1.5rem;
}

.project-details-mobile p {
  margin: 10px 0;
}

/* Ajuste dos indicadores e functions também podem ser aplicados no mobile se necessário */
</style>
