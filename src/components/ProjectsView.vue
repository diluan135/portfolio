<template>
    <div>
        <h1 class="mb-3">{{ $t('projects') }}</h1>
        <div class="row justify-content-center align-items-center text-center">

            <div class="box col-12 col-md-10 col-lg-7 mb-4">
                <div class="row justify-content-center align-items-center text-center">
                    <h3>{{ $t('Escuta') }}</h3>
                    <p class="project">{{ $t('escutaLittleDescription') }}</p>
                    <div id="carouselAdmin" class="col-12 col-md-6 carousel slide mb-3" data-bs-ride="carousel">
                        <div class="mb-2">
                            <h4 class="mb-1">{{ $t('administratorVersion') }}</h4>
                            <a class="small text-break" :href="escutaAdminLink" target="_blank">{{ $t('seeOnGithub')
                                }}</a>
                        </div>
                        <div class="carousel-inner-wrapper">
                            <div class="carousel-inner">
                                <div class="carousel-item" v-for="(image, index) in escutaAdmin" :key="index"
                                    :class="{ active: index === 0 }">
                                    <img :src="image.src" class="d-block w-100" :alt="'Image ' + (index + 1)" />
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselAdmin"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselAdmin"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div id="carouselEscuta" class="col-12 col-md-6 carousel slide mb-3" data-bs-ride="carousel">
                        <div class="mb-2">
                            <h4 class="mb-1">{{ $t('userVersion') }}</h4>
                            <a class="small text-break" :href="escutaLink" target="_blank">{{ $t('seeOnGithub') }}</a>
                        </div>
                        <div class="carousel-inner-wrapper">
                            <div class="carousel-inner">
                                <div class="carousel-item" v-for="(image, index) in escuta" :key="index"
                                    :class="{ active: index === 0 }">
                                    <img :src="image.src" class="d-block w-100" :alt="'Image ' + (index + 1)" />
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselEscuta"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselEscuta"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div class="row justify-content-center align-items-center text-center my-4">
                    <hr>
                    <div class="col">
                        <div class="row justify-content-center align-items-center text-center">
                            <img class="madeWithIcon mx-2" title="Laravel" src="@/assets/laravel.png" alt="laravel">
                            <img class="madeWithIcon mx-2" title="VueJs" src="@/assets/vuejs.png" alt="vueJs">
                            <img class="madeWithIcon mx-2" title="MySql" src="@/assets/mysql.png" alt="mySql">
                            <img class="madeWithIcon mx-2" title="Bootstrap" src="@/assets/bootstrap.png"
                                alt="Bootstrap">
                            <img class="madeWithIcon mx-2" title="Pusher" src="@/assets/pusher.png" alt="pusher">
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12">
                        <h3 class="cursor-pointer" @click="escutaDescription = !escutaDescription">
                            {{ $t('Description') }}
                            <i :class="escutaDescription ? 'fa fa-chevron-up' : 'fa fa-chevron-down'" class="ms-2"></i>
                        </h3>
                        <transition name="fade-slide">
                            <p v-if="escutaDescription" class="text-center">{{ $t('escutaDescription') }}</p>
                        </transition>
                    </div>
                </div>
            </div>

            <div style="margin-top: 30px;" class="box col-12 col-md-7">
                <div class="row justify-content-center align-items-center text-center">
                    <div class="col-12">
                        <div id="carouselMobile" class="col-12 carousel slide" data-bs-ride="carousel">
                            <h3>ConectaBus</h3>
                            <p class="project">{{ $t('conectaBusLittleDescription') }}</p>
                            <div style="margin-bottom: 10px;">
                                <a style="font-size: 12px; margin-right: 5px;" :href="ConectaBusLink" target="_blank">
                                    {{ $t('seeOnGithub') }}
                                </a>
                                <a style="font-size: 12px;" :href="ConectaBusGooglePlay" target="_blank">
                                    {{ $t('seeOnGooglePlay') }}
                                </a>
                            </div>
                            <div class="carousel-inner-wrapper">
                                <div class="carousel-inner">
                                    <div class="carousel-item" v-for="(image, index) in escutaMobile" :key="index"
                                        :class="{ active: index === 0 }">
                                        <img :src="image.src" class="d-block w-100" :alt="'Image ' + (index + 1)" />
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselMobile"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselMobile"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center text-center" style="margin: 30px 0;">
                    <hr>
                    <div class="col">
                        <div class="row justify-content-center align-items-center text-center">
                            <img class="madeWithIcon" title="Flutter" src="@/assets/flutter.png" alt="Flutter">
                            <img class="madeWithIcon" title="Dart" src="@/assets/dart.png" alt="Dart">
                            <img class="madeWithIcon" title="MySql" src="@/assets/mysql.png" alt="MySql">
                            <img class="madeWithIcon" title="Laravel" src="@/assets/laravel.png" alt="Laravel">
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12">
                        <h3 style="cursor: pointer;" @click="conectaBusDescription = !conectaBusDescription">
                            {{ $t('Description') }}
                            <i :class="conectaBusDescription ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
                                style="margin-left: 8px;"></i>
                        </h3>
                        <transition name="fade-slide">
                            <p v-if="conectaBusDescription" style="text-align: center;">
                                {{ $t('conectaBusDescription') }}
                            </p>
                        </transition>
                    </div>
                </div>
            </div>

            <!-- --------------------------------  Usos ---------------------------------- -->
            <div style="margin-top: 30px;" class="box col-12 col-md-7">
                <div class="row justify-content-center align-items-center text-center">
                    <div class="col-12">
                        <div id="carouselUsos" class="col-12 carousel slide" data-bs-ride="carousel">
                            <h3>Usos Diários</h3>
                            <p class="project">{{ $t('usosLittleDescription') }}</p>
                            <div style="margin-bottom: 10px;">
                                <a style="font-size: 12px;" :href="UsosLink" target="_blank">{{ $t('seeOnGithub') }}</a>
                            </div>
                            <div class="carousel-inner-wrapper">
                                <div class="carousel-inner">
                                    <div class="carousel-item" v-for="(image, index) in usos" :key="index"
                                        :class="{ active: index === 0 }">
                                        <img :src="image.src" class="d-block w-100" :alt="'Image ' + (index + 1)" />
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselUsos"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselUsos"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center text-center" style="margin: 30px 0;">
                    <hr>
                    <div class="col">
                        <div class="row justify-content-center align-items-center text-center">
                            <img class="madeWithIcon" title="VueJs" src="@/assets/vuejs.png" alt="VueJs">
                            <img class="madeWithIcon" title="Bootstrap" src="@/assets/bootstrap.png" alt="Bootstrap">
                            <img class="madeWithIcon" title="MySql" src="@/assets/mysql.png" alt="MySql">
                            <img class="madeWithIcon" title="Laravel" src="@/assets/laravel.png" alt="Laravel">
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12">
                        <h3 style="cursor: pointer;" @click="usosDescription = !usosDescription">
                            {{ $t('Description') }}
                            <i :class="usosDescription ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
                                style="margin-left: 8px;"></i>
                        </h3>
                        <transition name="fade-slide">
                            <p v-if="usosDescription" style="text-align: center;">
                                {{ $t('usosDescription') }}
                            </p>
                        </transition>
                    </div>
                </div>
            </div>
            <a class="mt-3" href="https://github.com/diluan135/portfolio/" target="_blank">{{ $t('seeThisOnGithub') }}</a>
        </div>
    </div>
</template>


<style scoped>
.projects-container {
    padding: 20px;
}

.projects-title {
    text-align: center;
    margin-bottom: 20px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
}

.project-box {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.project-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
}

.carousel-container {
    display: grid;
    gap: 10px;
}

.carousel-wrapper {
    margin-bottom: 20px;
}

.tech-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
}

.tech-icon {
    width: 40px;
    height: 40px;
}

.description-container {
    text-align: center;
}

.description-title {
    cursor: pointer;
}

@media (max-width: 768px) {
    .project-box {
        padding: 15px;
    }

    .tech-icons {
        flex-wrap: wrap;
    }
}
</style>


<script>
export default {
    data() {
        return {
            UsosLink: 'https://github.com/diluan135/usos',
            usosDescription: false,
            ConectaBusGooglePlay: 'https://play.google.com/store/apps/details?id=amttdetra.horarios_transporte&hl=pt_BR',
            ConectaBusLink: 'https://github.com/diluan135/conecta_bus',
            conectaBusDescription: false,
            escutaLink: 'https://github.com/diluan135/escuta_public',
            escutaAdminLink: 'https://github.com/diluan135/escuta_admin_public',
            escutaDescription: false,
            escuta: [
                { src: require('@/assets/escuta/1.png') },
                { src: require('@/assets/escuta/2.png') },
                { src: require('@/assets/escuta/3.png') },
                { src: require('@/assets/escuta/4.png') },
                { src: require('@/assets/escuta/5.png') },
                { src: require('@/assets/escuta/6.png') },
                { src: require('@/assets/escuta/7.png') },
            ],
            escutaAdmin: [
                { src: require('@/assets/escuta_admin/1.png') },
                { src: require('@/assets/escuta_admin/2.png') },
                { src: require('@/assets/escuta_admin/3.png') },
                { src: require('@/assets/escuta_admin/4.png') },
            ],
            escutaMobile: [
                { src: require('@/assets/escuta_mobile/8.jpeg') },
                { src: require('@/assets/escuta_mobile/9.jpeg') },
                { src: require('@/assets/escuta_mobile/1.png') },
                { src: require('@/assets/escuta_mobile/2.png') },
                { src: require('@/assets/escuta_mobile/3.png') },
                { src: require('@/assets/escuta_mobile/4.png') },
                { src: require('@/assets/escuta_mobile/5.png') },
                { src: require('@/assets/escuta_mobile/6.png') },
                { src: require('@/assets/escuta_mobile/7.png') },
            ],
            usos: [
                { src: require('@/assets/usos/1.png') },
                { src: require('@/assets/usos/2.png') },
                { src: require('@/assets/usos/3.png') },
                { src: require('@/assets/usos/4.png') },
                { src: require('@/assets/usos/5.png') },
            ],
        };
    },
};
</script>
