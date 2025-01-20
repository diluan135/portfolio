<template>
  <div>
    <!-- Header Section -->
    <h1 v-animate-on-scroll :key="$i18n.locale" class="text-center">{{ $t('welcome') }}</h1>
    <p v-animate-on-scroll :key="$i18n.locale" class="text-center">{{ $t('description') }}</p>

    <!-- Skills Section -->
    <div class="row justify-content-center align-items-center text-center">
      <div v-animate-on-scroll class="box col-12 col-md-7">
        <h3>{{ $t('skills') }}</h3>
        <div class="skills-chart d-flex justify-content-center">
          <!-- Usando v-if para destruir e recriar o gráfico sempre que isDarkMode mudar -->
          <BarChart v-if="barra == 0" :data="chartData" :options="chartOptions" />
        </div>
      </div>
    </div>

    <!-- Soft Skills Section -->
    <div class="row justify-content-center align-items-center text-center">
      <div class="boxSkills col-12 col-md-7">
        <div v-animate-on-scroll>
          <h3 :key="$i18n.locale" style="padding-top: 10px; cursor: pointer;" @click="softSkills = !softSkills">
            {{ softSkills ? $t('principal softskills') : $t('see softskills') }}
            <i :class="softSkills ? 'fa fa-chevron-up' : 'fa fa-chevron-down'" style="margin-left: 8px;"></i>
          </h3>
          <transition name="fade-slide">
            <div v-if="softSkills" class="row" style="margin-top:20px;">
              <div class="col-6 col-md-3 text-center tooltip-container"
                :title="$t('emotional inteligence description')">
                <img :src="isDarkMode ? require('@/assets/emotionalBlack.png') : require('@/assets/emotional.png')"
                  alt="Emotional Intelligence" class="softIcon" />
                <p>{{ $t('emocional inteligence') }}</p>
                <div class="tooltip">{{ $t('emotional inteligence description') }}</div>
              </div>

              <div class="col-6 col-md-3 text-center tooltip-container" :title="$t('communication description')">
                <img
                  :src="isDarkMode ? require('@/assets/communicationBlack.png') : require('@/assets/communication.png')"
                  alt="Communication" class="softIcon" />
                <p>{{ $t('communication') }}</p>
                <div class="tooltip">{{ $t('communication description') }}</div>
              </div>

              <div class="col-6 col-md-3 text-center tooltip-container" :title="$t('teamwork description')">
                <img :src="isDarkMode ? require('@/assets/teamworkBlack.png') : require('@/assets/teamwork.png')"
                  alt="Teamwork" class="softIcon" />
                <p>{{ $t('teamwork') }}</p>
                <div class="tooltip">{{ $t('teamwork description') }}</div>
              </div>

              <div class="col-6 col-md-3 text-center tooltip-container" :title="$t('pressure description')">
                <img :src="isDarkMode ? require('@/assets/pressureBlack.png') : require('@/assets/pressure.png')"
                  alt="Pressure" class="softIcon" />
                <p>{{ $t('pressure') }}</p>
                <div class="tooltip">{{ $t('pressure description') }}</div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="row justify-content-center align-items-center text-center">
      <div class="box col-12 col-md-7">
        <h3 v-animate-on-scroll :key="$i18n.locale">{{ $t('about') }}</h3>
        <p v-animate-on-scroll :key="$i18n.locale">{{ $t('actually') }}</p>
        <p v-animate-on-scroll :key="$i18n.locale">{{ $t('aboutMe') }}</p>
      </div>
      <a v-animate-on-scroll class="mt-3" :href="curriculoLink" download>{{ $t('downloadResume') }}</a>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChartComponent',
  computed: {
    // Computa o link para o currículo baseado no idioma atual
    curriculoLink() {
      const idioma = this.$i18n.locale;
      return idioma === 'en' ? '/portfolio/resume-en.pdf' : '/portfolio/curriculo-pt-br.pdf';
    }
  },
  props: {
    isDarkMode: Boolean
  },
  components: {
    BarChart: Bar
  },
  data() {
    return {
      softSkills: false,
      branco: 'rgb(34, 133, 255)',
      brancoEscuro: 'rgba(34, 133, 255, 0.5)',
      azul: 'rgba(47, 203, 205, 0.6)',
      azulEscuro: 'rgb(47, 203, 205, 0.3)',
      barra: 0,
      skills: [
        { name: 'VueJs', level: 8 },
        { name: 'Laravel', level: 7 },
        { name: 'PHP', level: 5 },
        { name: 'CSS', level: 8 },
        { name: 'HTML', level: 7 },
        { name: 'Bootstrap', level: 7 },
        { name: 'Python', level: 6 },
        { name: 'Flutter', level: 5 },
        { name: 'English', level: 8 },
        { name: 'Git', level: 6 },
        { name: 'MySql', level: 5 },
        { name: 'Photoshop', level: 9 },
        { name: 'Illustrator', level: 6 },
      ],
      barThickness: 38, // valor inicial para telas maiores
      chartData: {
        labels: [], 
        datasets: [
          {
            label: 'Skill level',
            data: [], 
            backgroundColor: this.isDarkMode ? this.azulEscuro : this.brancoEscuro,
            borderColor: this.isDarkMode ? this.azul : this.branco,
            borderWidth: 1,
            barThickness: this.barThickness, // utiliza a variável de espessura
            categoryPercentage: 0.85,
            barPercentage: 1
          }
        ]
      },
      chartOptions: {
        elements: {
          bar: {
            borderWidth: 20,
          }
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 10
          }
        }
      }
    };
  },
  watch: {
    isDarkMode(newVal) {
      this.updateChartColors(newVal);
      this.barra = 1;
      setTimeout(() => {
        this.barra = 0;
      }, 10);
    }
  },
  methods: {
    updateChartColors(isDarkMode) {
      this.chartData.datasets[0].backgroundColor = isDarkMode ? this.azulEscuro : this.brancoEscuro;
      this.chartData.datasets[0].borderColor = isDarkMode ? this.azul : this.branco;
      this.chartData.datasets[0].borderWidth = 2;
    },
    adjustBarThickness() {
      if (window.innerWidth <= 768) {
        this.barThickness = 25; // reduz a espessura das barras para telas pequenas
      } else {
        this.barThickness = 38; // valor original para telas maiores
      }
      this.chartData.datasets[0].barThickness = this.barThickness;
    }
  },
  mounted() {
    this.adjustBarThickness(); // Ajusta a espessura das barras na montagem do componente
    window.addEventListener('resize', this.adjustBarThickness); // Ajusta ao redimensionar a tela
    this.chartData = {
      labels: this.skills.map(skill => skill.name),
      datasets: [
        {
          label: 'Skill level',
          backgroundColor: this.isDarkMode ? this.azulEscuro : this.brancoEscuro,
          borderColor: this.isDarkMode ? this.azul : this.branco,
          data: this.skills.map(skill => skill.level)
        }
      ]
    };
  },
  unmounted() {
    window.removeEventListener('resize', this.adjustBarThickness); // Remove o listener quando o componente for destruído
  }
};
</script>

<style scoped>
.skills-chart {
  height: 300px;
}
@media (max-width: 768px) {
  .skills-chart {
    height: 100%;
  }
}
</style>