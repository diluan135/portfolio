<template>
    <canvas ref="canvas" class="snowfall-canvas"></canvas>
  </template>
  
  <script>
  export default {
    name: 'SnowfallView',
    data() {
      return {
        canvas: null,
        ctx: null,
        particles: [],
        particleCount: 100, // Número de partículas (ajuste conforme necessário)
        mouse: { x: null, y: null }
      }
    },
    mounted() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext('2d');
      this.resizeCanvas();
      window.addEventListener('resize', this.resizeCanvas);
      window.addEventListener('mousemove', this.handleMouseMove);
      this.initParticles();
      this.animate();
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.resizeCanvas);
      window.removeEventListener('mousemove', this.handleMouseMove);
    },
    methods: {
      resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      },
      initParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
          this.particles.push(this.createParticle());
        }
      },
      createParticle() {
        return {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 2 + 1, // raio entre 1 e 3
          speed: Math.random() * 1 + 0.5,  // velocidade
          drift: Math.random() * 0.5 - 0.25  // deriva horizontal
        };
      },
      animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let particle of this.particles) {
          // Atualiza posição
          particle.y += particle.speed;
          particle.x += particle.drift;
          // Se sair da tela, reposiciona no topo
          if (particle.y > this.canvas.height) {
            particle.y = -particle.radius;
            particle.x = Math.random() * this.canvas.width;
          }
          if (particle.x > this.canvas.width || particle.x < 0) {
            particle.x = Math.random() * this.canvas.width;
          }
          // Interação: se o mouse estiver próximo, empurra a partícula
          if (this.mouse.x && this.mouse.y) {
            const dx = particle.x - this.mouse.x;
            const dy = particle.y - this.mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 50) {
              const angle = Math.atan2(dy, dx);
              const force = (50 - distance) / 50;
              particle.x += Math.cos(angle) * force * 2;
              particle.y += Math.sin(angle) * force * 2;
            }
          }
          // Desenha a partícula
          this.ctx.beginPath();
          this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          this.ctx.fillStyle = "#2fcbd5";
          this.ctx.fill();
        }
        requestAnimationFrame(this.animate);
      },
      handleMouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      }
    }
  }
  </script>
  
  <style scoped>
  .snowfall-canvas {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: -2; /* Abaixo do conteúdo e do fundo */
  }
  </style>
  