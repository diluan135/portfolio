<template>
  <div>
    <!-- Header Section -->
    <h1 :key="$i18n.locale">{{ $t('welcome') }}</h1>
    <p :key="$i18n.locale">{{ $t('description') }}</p>

    <!-- Skills Section -->
    <div class="row justify-content-center align-items-center text-center">

      <div class="box col-6">
        <h3>{{ $t('skills') }}</h3>
        <div class="skills-chart d-flex justify-content-center">
          <!-- Usando v-if para destruir e recriar o gráfico sempre que isDarkMode mudar -->
          <BarChart v-if="teste == 0" :data="chartData" :options="chartOptions" />
        </div>
      </div>
      <!-- Soft Skills Section -->
      <div style="margin-left: 20px;" class="col">
        <h2 style="padding-top: 10px;">Principais Softskills</h2>
        <div class="row" style="margin-top:20px;">
          <div style="height: 20vh" class="box col-6">
            <li><i class="icon-emotional-intelligence"></i> Inteligência Emocional</li>
          </div>
          <div style="margin-left: 20px; height: 20vh" class="box col">
            <li><i class="icon-communication"></i> Comunicação</li>
          </div>
        </div>
        <div style="margin-top:20px;" class="row">
          <div style="height: 20vh" class="box col-6">
            <li><i class="icon-teamwork"></i> Trabalho em Equipe</li>
          </div>
          <div style="margin-left: 20px; height: 20vh" class="box col align-self-end">
            <li><i class="icon-pressure"></i> Capacidade de Trabalhar Sob Pressão</li>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div style="margin-top:30px;" class="row">
      <div class="box col">
        <h3 :key="$i18n.locale">{{ $t('about') }}</h3>
        <p :key="$i18n.locale">{{ $t('actually') }}</p>
        <p :key="$i18n.locale">{{ $t('aboutMe') }}</p>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="contacts">
      <a href="https://linkedin.com/in/yourprofile" target="_blank">
        <i class="icon-linkedin">LinkedIn</i>
      </a>
      <a href="mailto:your.email@example.com">
        <i class="icon-email">Email</i>
      </a>
      <a href="https://wa.me/yourwhatsappnumber" target="_blank">
        <i class="icon-whatsapp">WhatsApp</i>
      </a>
      <a href="https://github.com/yourgithub" target="_blank">
        <i class="icon-github">GitHub</i>
      </a>
      <a href="https://instagram.com/yourinstagram" target="_blank">
        <i class="icon-instagram">Instagram</i>
      </a>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the necessary chart components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChartComponent',
  props: {
    isDarkMode: Boolean
  },
  components: {
    BarChart: Bar
  },
  data() {
    return {
      rosa: 'rgb(255, 34, 218)',
      rosaEscuro: 'rgb(255, 34, 218, 0.5)',
      azul: 'rgba(47, 203, 205, 0.6)',
      azulEscuro: 'rgb(47, 203, 205, 0.3)',
      teste: 0,
      skills: [
        { name: 'VueJs', level: 8 },
        { name: 'Laravel', level: 7 },
        { name: 'PHP', level: 5 },
        { name: 'CSS', level: 8 },
        { name: 'HTML', level: 7 },
        { name: 'Bootstrap', level: 7 },
        { name: 'Python', level: 6 },
        { name: 'English', level: 8 },
        { name: 'Photoshop', level: 9 },
        { name: 'Illustrator', level: 6 },
        { name: 'Git', level: 6 },
        { name: 'MySql', level: 5 }
      ],
      chartData: {
        labels: [], // Nomes das habilidades
        datasets: [
          {
            label: 'Skill level',
            data: [], // Níveis de habilidade
            backgroundColor: this.isDarkMode ? this.azulEscuro : this.azul, // Cor das barras baseada no modo
            borderColor: this.isDarkMode ? this.azul : this.azul,
            borderWidth: 1,
            barThickness: 38, // Aumenta a espessura das barras
            categoryPercentage: 1, // Aumenta o espaçamento entre as barras
            barPercentage: 1
          }
        ]
      },
      chartOptions: {
        elements: {
          bar: {
            // Aumentar a largura das barras
            borderWidth: 20,
          }
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 10 // Nível máximo de habilidade
          }
        }
      }
    };
  },
  watch: {
    isDarkMode(newVal) {
      this.updateChartColors(newVal);
      this.teste = 1;
      setTimeout(() => {
        this.teste = 0;
      }, 10); // 3000 milissegundos = 3 segundos
    }
  },
  methods: {
    updateChartColors(isDarkMode) {
      // Atualiza as cores das barras dinamicamente
      this.chartData.datasets[0].backgroundColor = isDarkMode ? this.azulEscuro : this.azul;
      this.chartData.datasets[0].borderColor = isDarkMode ? this.azul : this.azul;
      this.chartData.datasets[0].borderWidth = 2;
    }
  },
  mounted() {
    // Agora que o componente foi montado, podemos definir os dados do gráfico
    this.chartData = {
      labels: this.skills.map(skill => skill.name), // Habilidades
      datasets: [
        {
          label: 'Skill level',
          backgroundColor: this.isDarkMode ? this.azulEscuro : this.azul, // Cor das barras baseada no modo
          borderColor: this.isDarkMode ? this.azul : this.azul,
          data: this.skills.map(skill => skill.level) // Níveis de habilidade
        }
      ]
    };
  }
};
</script>

<style scoped>
.skills-chart {
  /* width: 100vw; */
  height: 300px;
}

.contacts {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 20px;
}

.contacts a {
  text-decoration: none;
  font-size: 18px;
}

.contacts i {
  margin-right: 5px;
}
</style>
