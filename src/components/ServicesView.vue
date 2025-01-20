<template>
    <div class="container text-center">
      <h1 class="mb-3">{{ $t('offerServices') }}</h1>
  
      <!-- Primeira Linha -->
      <div class="row justify-content-center mb-4">
        <!-- <div class="box col-12 col-md-10 col-lg-7 mb-4"> -->
        <div class="box col-12 col-md-10 col-lg-4 mb-4">
          <div class="">
            <img
              :src="isDarkMode ? require('@/assets/DevelopmentBlack.png') : require('@/assets/Development.png')"
              alt="Development"
              class="servicesIcon img-fluid"
            />
            <h4 class="mt-3" @click="Development = !Development">
              {{ $t('Development') }}
            </h4>
            <hr />
            <p>{{ $t('DevelopmentDescription') }}</p>
          </div>
        </div>
        <div class="box col-12 col-md-10 col-lg-4 mb-4">
          <div class="">
            <img
              :src="isDarkMode ? require('@/assets/mobileAppBlack.png') : require('@/assets/mobileApp.png')"
              alt="Mobile App"
              class="servicesIcon img-fluid"
            />
            <h4 class="mt-3" @click="DevelopmentApps = !DevelopmentApps">
              {{ $t('DevelopmentApps') }}
            </h4>
            <hr />
            <p>{{ $t('DevelopmentAppsDescription') }}</p>
          </div>
        </div>
      </div>
  
      <!-- Segunda Linha -->
      <div class="row justify-content-center">
        <div class="box col-12 col-md-10 col-lg-4 mb-4">
          <div class="">
            <img
              :src="isDarkMode ? require('@/assets/ApiBlack.png') : require('@/assets/Api.png')"
              alt="API"
              class="servicesIcon img-fluid"
            />
            <h4 class="mt-3" @click="Consultancy = !Consultancy">
              {{ $t('Consultancy') }}
            </h4>
            <hr />
            <p>{{ $t('ConsultancyDescription') }}</p>
          </div>
        </div>
        <div class="box col-12 col-md-10 col-lg-4 mb-4">
          <div class="">
            <img
              :src="isDarkMode ? require('@/assets/uxBlack.png') : require('@/assets/ux.png')"
              alt="UX"
              class="servicesIcon img-fluid"
            />
            <h4 class="mt-3" @click="InterfaceDesign = !InterfaceDesign">
              {{ $t('InterfaceDesign') }}
            </h4>
            <hr />
            <p>{{ $t('InterfaceDesignDescription') }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>


<!-- <template>
    <div class="row align-items-center text-center justify-content-center">
        <h1 style="margin-bottom: 10px">{{ $t('offerServices') }}</h1>
        <div class="row align-items-center text-center justify-content-center">
            <div class="d-flex col-7">
                <div class="box col-6" style="margin-right: 10px;">
                    <img :src="isDarkMode ? require('@/assets/DevelopmentBlack.png') : require('@/assets/Development.png')"
                        alt="Development" class="servicesIcon" />
                    <h4 style="padding-top: 10px;" @click="Development = !Development">{{
                        $t('Development') }}
                    </h4>
                    <hr>
                    <p>{{ $t('DevelopmentDescription') }}</p>
                </div>
                <div class="box col-6" style="margin-right: 10px;">
                    <img :src="isDarkMode ? require('@/assets/mobileAppBlack.png') : require('@/assets/mobileApp.png')"
                        alt="mobileApp" class="servicesIcon" />
                    <h4 style="padding-top: 10px;" @click="DevelopmentApps = !DevelopmentApps">{{
                        $t('DevelopmentApps') }}
                    </h4>
                    <hr>
                    <p>{{ $t('DevelopmentAppsDescription') }}</p>
                </div>
            </div>
        </div>
        <div class="row align-items-center text-center justify-content-center" style="margin-top:20px">
            <div class="d-flex col-7">
                <div class="box col-6" style="margin-right: 10px;">
                    <img :src="isDarkMode ? require('@/assets/ApiBlack.png') : require('@/assets/Api.png')" alt="Api"
                        class="servicesIcon" />
                    <h4 style="padding-top: 10px;" @click="Consultancy = !Consultancy">{{
                        $t('Consultancy') }}
                    </h4>
                    <hr>
                    <p>{{ $t('ConsultancyDescription') }}</p>
                </div>
                <div class="box col-6" style="margin-right: 10px;">
                    <img :src="isDarkMode ? require('@/assets/uxBlack.png') : require('@/assets/ux.png')" alt="ux"
                        class="servicesIcon" />
                    <h4 style="padding-top: 10px;" @click="InterfaceDesign = !InterfaceDesign">{{
                        $t('InterfaceDesign') }}
                    </h4>
                    <hr>
                    <p>{{ $t('InterfaceDesignDescription') }}</p>
                </div>
            </div>
        </div>
    </div>
</template> -->

<script>
export default {
    props: {
        isDarkMode: Boolean
    },
    data() {
        return {
            Development: false,
            DevelopmentApps: false,
            Consultancy: false,
            InterfaceDesign: false,
        }
    }
}
</script>