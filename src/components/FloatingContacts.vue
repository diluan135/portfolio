<template>
  <div class="floating-contacts" @click="handleOutsideClick" >
    <!-- Bolinha de contato -->
    <div class="contact-ball" @click.stop="showContacts = !showContacts" v-if="!showContacts">
      <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"
            stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>
    </div>

    <!-- Opções de contato -->
    <div v-if="showContacts" class="contact-options" @mouseleave="startTimeout" @click.stop>
      <a href="https://linkedin.com/in/diluan-matos" target="_blank" class="contact-option"
        @mouseover="showContactImage('linkedin')" @mouseleave="resetContactImage">
        <div v-if="currentContactImage === 'linkedin'" class="contact-name">{{ $t('linkedin') }}</div>
        <img v-if="currentContactImage === 'linkedin'" src="@/assets/linkedin.png" alt="LinkedIn" />
        <img v-else src="@/assets/linkedin.png" alt="LinkedIn" />
      </a>

      <a href="mailto:diluan135@gmail.com" class="contact-option" @mouseover="showContactImage('email')"
        @mouseleave="resetContactImage">
        <div v-if="currentContactImage === 'email'" class="contact-name">{{ $t('email') }}</div>
        <img v-if="currentContactImage === 'email'" src="@/assets/email.png" alt="Email" />
        <img v-else src="@/assets/email.png" alt="Email" />
      </a>

      <a href="https://wa.me/+5542984049847" target="_blank" class="contact-option"
        @mouseover="showContactImage('whatsapp')" @mouseleave="resetContactImage">
        <div v-if="currentContactImage === 'whatsapp'" class="contact-name">{{ $t('whatsapp') }}</div>
        <img v-if="currentContactImage === 'whatsapp'" src="@/assets/whatsapp.png" alt="WhatsApp" />
        <img v-else src="@/assets/whatsapp.png" alt="WhatsApp" />
      </a>

      <a href="https://github.com/diluan135" target="_blank" class="contact-option"
        @mouseover="showContactImage('github')" @mouseleave="resetContactImage">
        <div v-if="currentContactImage === 'github'" class="contact-name">{{ $t('github') }}</div>
        <img v-if="currentContactImage === 'github'" src="@/assets/github.png" alt="GitHub" />
        <img v-else src="@/assets/github.png" alt="GitHub" />
      </a>

      <a href="https://instagram.com/diluanmatos" target="_blank" class="contact-option"
        @mouseover="showContactImage('instagram')" @mouseleave="resetContactImage">
        <div v-if="currentContactImage === 'instagram'" class="contact-name">{{ $t('instagram') }}</div>
        <img v-if="currentContactImage === 'instagram'" src="@/assets/instagram.png" alt="Instagram" />
        <img v-else src="@/assets/instagram.png" alt="Instagram" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContacts: false,
      currentContactImage: null,
      timeoutId: null,
    };
  },
  methods: {
    handleOutsideClick() {
      const contactElement = this.$el; // Referência ao componente raiz
      if (!contactElement.contains(event.target)) {
        this.showContacts = false; // Fecha as opções se clicar fora
      }
    },
    showContactImage(contact) {
      this.currentContactImage = contact;
    },
    resetContactImage() {
      this.currentContactImage = null;
    },
    startTimeout() {
      // Se o mouse sair das opções de contato, inicia o timeout
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.showContacts = false; // Esconde as opções de contato
      }, 500); // 500ms de delay para reiniciar a bolinha de contato
    }
  },
  mounted() {
    // Adiciona o listener global de clique
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeUnmount() {
    // Limpar o timeout se o componente for destruído
    clearTimeout(this.timeoutId);
    document.removeEventListener("click", this.handleOutsideClick);
  }
};
</script>

<style scoped>
.floating-contacts {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.contact-ball {
  width: 60px;
  height: 60px;
  background-color: rgb(34, 133, 255);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  transition: opacity 0.3s;
  position: relative;
}

.contact-text {
  margin: 0;
}

.contact-options {
  position: absolute;
  top: -350px;
  /* Ajuste para as opções ficarem acima da bolinha */
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* Alinha as opções à direita */
}

.contact-option {
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.contact-option:hover {
  background-color: rgb(34, 133, 255)
}

.dark-mode .contact-option,
.dark-mode .contact-ball {
  background-color: rgb(47, 203, 205);
}

.contact-option img {
  width: 40px;
  height: 40px;
  margin-left: 8px;
  /* O ícone aparece à direita do nome */
}

.contact-option i {
  font-size: 1.5em;
  margin-right: 8px;
}

.contact-name {
  margin-right: 8px;
  font-size: 1em;
  color: white;
  display: none;
  /* O nome da rede social começa oculto */
}

.contact-option:hover .contact-name {
  display: inline-block;
  /* O nome aparece ao passar o mouse */
}

.contact-ball:hover {
  background-color: rgb(133, 188, 255)
}

.contact-ball:hover .contact-text {
  background-color: rgb(34, 133, 255)
}
</style>