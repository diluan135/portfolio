<template>
    <div>
        <h1 style="margin-bottom: 10px">{{ $t('projects') }}</h1>
        <div class="row justify-content-center align-items-center text-center">


            <div class="box col-7">
                <div class="row justify-content-center align-items-center text-center">
                    <h3>{{ $t('Escuta') }}</h3>
                    <p class="project">{{ $t('escutaLittleDescription') }}</p>
                    <div id="carouselAdmin" class="col-6 carousel slide" data-bs-ride="carousel">
                        <div style="margin-bottom: 10px;">
                            <h4 style="margin-bottom: -5px; color: rgb(82, 82, 82)">{{ $t('administratorVersion') }}</h4>
                            <a style="font-size: 12px;" :href="escutaAdminLink" target="_blank">{{ $t('seeOnGithub')
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
                    <div id="carouselEscuta" class="col-6 carousel slide" data-bs-ride="carousel">
                        <div style="margin-bottom: 10px;">
                            <h4 style="margin-bottom: -5px; color: rgb(82, 82, 82)">{{ $t('userVersion') }}</h4>
                            <a style="font-size: 12px;" :href="escutaLink" target="_blank">{{ $t('seeOnGithub') }}</a>
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

                <div style="margin:30px 0px 30px 0px;"
                    class="row justify-content-center align-items-center text-center">
                    <hr>
                    <div class="col">
                        <div class="row justify-content-center align-items-center text-center">
                            <img class="madeWithIcon" title="Laravel" src="@/assets/laravel.png" alt="laravel">
                            <img class="madeWithIcon" title="VueJs" src="@/assets/vuejs.png" alt="vueJs">
                            <img class="madeWithIcon" title="MySql" src="@/assets/mysql.png" alt="mySql">
                            <img class="madeWithIcon" title="Bootstrap" src="@/assets/bootstrap.png" alt="Bootstrap">
                            <img class="madeWithIcon" title="Pusher" src="@/assets/pusher.png" alt="pusher">
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12">
                        <h3 style="cursor: pointer;" @click="escutaDescription = !escutaDescription">{{
                            $t('Description') }}
                            <i :class="escutaDescription ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
                                style="margin-left: 8px;"></i>
                        </h3>
                        <transition name="fade-slide">
                            <p v-if="escutaDescription" style="text-align: center;">{{ $t('escutaDescription') }}</p>
                        </transition>
                    </div>
                </div>
            </div>




            <!-- --------------------------------  CONECTA BUS ---------------------------------- -->
            <div style="margin-top: 30px;" class="box col-7">
                <div class="row justify-content-center align-items-center text-center">
                    <div class="col-12">
                        <div id="carouselMobile" class="col-12 carousel slide" data-bs-ride="carousel">
                            <h3>ConectaBus</h3>
                            <p class="project">{{ $t('conectaBusLittleDescription') }}</p>
                            <div style="margin-bottom: 10px;">
                                <a style="font-size: 12px; margin-right: 5px;" :href="ConectaBusLink" target="_blank">{{
                                    $t('seeOnGithub') }}</a>
                                <a style="font-size: 12px;" :href="ConectaBusGooglePlay" target="_blank">{{
                                    $t('seeOnGooglePlay') }}</a>
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
                <div style="margin:30px 0px 30px 0px;"
                    class="row justify-content-center align-items-center text-center">
                    <hr>
                    <div class="col">
                        <div class="row justify-content-center align-items-center text-center">
                            <img class="madeWithIcon" title="Flutter" src="@/assets/flutter.png" alt="Flutter">
                            <img class="madeWithIcon" title="Dart" src="@/assets/dart.png" alt="Dart">
                            <img class="madeWithIcon" title="MySql" src="@/assets/mysql.png" alt="NySql">
                            <img class="madeWithIcon" title="Laravel" src="@/assets/laravel.png" alt="Laravel">
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12">
                        <h3 style="cursor: pointer;" @click="conectaBusDescription = !conectaBusDescription">{{
                            $t('Description') }}
                            <i :class="conectaBusDescription ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
                                style="margin-left: 8px;"></i>
                        </h3>
                        <transition name="fade-slide">
                            <p v-if="conectaBusDescription" style="text-align: center;">{{ $t('conectaBusDescription')
                                }}</p>
                        </transition>
                    </div>
                </div>
            </div>


            <!-- --------------------------------  Usos ---------------------------------- -->
            <div style="margin-top: 30px;" class="box col-7">
                <div class="row justify-content-center align-items-center text-center">
                    <div class="col-12">
                        <div id="carouselUsos" class="col-12 carousel slide" data-bs-ride="carousel">
                            <h3>Usos Diários</h3>
                            <p class="project">{{ $t('usosLittleDescription') }}</p>
                            <div style="margin-bottom: 10px;">
                                <a style="font-size: 12px;" :href="UsosLink" target="_blank">{{
                                    $t('seeOnGithub') }}</a>
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
                <div style="margin:30px 0px 30px 0px;"
                    class="row justify-content-center align-items-center text-center">
                    <hr>
                    <div class="col">
                        <div class="row justify-content-center align-items-center text-center">
                            <img class="madeWithIcon" title="VueJs" src="@/assets/vuejs.png" alt="VueJs">
                            <img class="madeWithIcon" title="Bootstrap" src="@/assets/bootstrap.png" alt="Bootstrap">
                            <img class="madeWithIcon" title="MySql" src="@/assets/mysql.png" alt="NySql">
                            <img class="madeWithIcon" title="Laravel" src="@/assets/laravel.png" alt="Laravel">
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12">
                        <h3 style="cursor: pointer;" @click="usosDescription = !usosDescription">{{
                            $t('Description') }}
                            <i :class="usosDescription ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
                                style="margin-left: 8px;"></i>
                        </h3>
                        <transition name="fade-slide">
                            <p v-if="usosDescription" style="text-align: center;">{{ $t('usosDescription')
                                }}</p>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


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
