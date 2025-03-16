<template>
    <div style="box-shadow: none" class="contact-box box2">
        <div v-animate-on-scroll class="container text-center">
            <div class="row justify-content-center align-items-center">
                <h1 v-animate-on-scroll>{{ $t('hireMeTitle') }}</h1>
                <div class="form-container box col-lg-7">
                    <form @submit.prevent="sendEmail" class="contact-form">
                        <div class="input-group">
                            <input type="email" v-model="email" :placeholder="$t('emailPlaceholder')" required class="form-control" />
                            <input type="tel" v-model="phone" :placeholder="$t('phonePlaceholder')" required class="form-control" />
                        </div>
                        <textarea v-model="message" :placeholder="$t('messagePlaceholder')" required class="form-control textarea"></textarea>
                        <button data-clickable type="submit" class="botaoDownload" :disabled="isSending">
                            {{ $t('sendButton') }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            email: "",
            phone: "",
            message: "",
            isSending: false,
        };
    },
    methods: {
        sendEmail() {
            this.isSending = true;
            const serviceID = 'service_cc6im5e';
            const templateID = 'template_z4nnm88';
            const userID = 'xO4GwCkObe-2sSmNS';

            const templateParams = {
                from_email: this.email,
                phone: this.phone,
                message: this.message,
                to_email: 'diluan135@gmail.com'
            };

            emailjs.send(serviceID, templateID, templateParams, userID)
                .then(() => {
                    alert(this.$t('emailSuccess'));
                    this.email = "";
                    this.phone = "";
                    this.message = "";
                    this.isSending = false;
                })
                .catch(() => {
                    alert(this.$t('emailError'));
                    this.isSending = false;
                });
        },
    },
};
</script>

<style scoped>
.contact-box {
    padding: 50px 20px;
}

.title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
}

.form-container {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.input-group {
    display: flex;
    gap: 10px;
}

.form-control {
    flex: 1;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
}

.textarea {
    height: 120px;
    resize: none;
}

.btn-primary {
    background: #2275ff;
    border: none;
    padding: 12px;
    border-radius: 6px;
    font-size: 1rem;
    color: #fff;
    transition: background 0.3s ease;
}

.btn-primary:hover {
    background: #2fcbd5;
}

.btn-primary:disabled {
    background: #ccc;
    cursor: not-allowed;
}
</style>