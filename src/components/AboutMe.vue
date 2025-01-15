<template>
    <div>
      <transition name="fade" mode="out-in">
        <h1 :key="$i18n.locale">{{ $t('welcome') }}</h1>
      </transition>
      <transition name="fade" mode="out-in">
        <p :key="$i18n.locale">{{ $t('about') }}</p>
      </transition>
    </div>
</template>