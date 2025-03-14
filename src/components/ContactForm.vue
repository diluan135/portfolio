<template>
    <div class="container text-center">
        <div class="row justify-content-center align-items-center text-center">
            <h1 v-animate-on-scroll class="mb-3">{{ $t('hireMeTitle') }}</h1>
            <div class="box col-12 col-md-12 col-lg-7 mb-4">
                <form @submit.prevent="sendEmail" class="contact-form row">
                    <div class="form-group col-8">
                        <input type="email" v-model="email" :placeholder="$t('emailPlaceholder')" required
                            class="form-control" />
                    </div>
                    <div class="form-group col-4">
                        <input type="tel" v-model="phone" :placeholder="$t('phonePlaceholder')" required
                            class="form-control" />
                    </div>
                    <div class="form-group">
                        <textarea v-model="message" :placeholder="$t('messagePlaceholder')" required
                            class="form-control"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" :disabled="isSending">
                        {{ $t('sendButton') }}
                    </button>
                </form>
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
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(this.$t('emailSuccess'));
                    this.email = "";
                    this.phone = "";
                    this.message = "";
                    this.isSending = false;
                })
                .catch((error) => {
                    console.log('FAILED...', error);
                    alert(this.$t('emailError'));
                    this.isSending = false;
                });
        },
    },
};
</script>

<style scoped>
.contact-form {
    max-width: 500px;
    margin: auto;
}

.form-group {
    margin-bottom: 15px;
}

.form-control {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.btn-primary {
    background-color: #2275ff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: none;
}

.btn-primary:hover {
    background-color: #2fcbd5;
}
</style>