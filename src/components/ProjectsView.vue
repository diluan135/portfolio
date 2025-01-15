<template>
    <div class="main-content">
        <transition name="fade" mode="out-in">
            <p :key="$i18n.locale">{{ $t('projects') }}</p>
        </transition>
    </div>
</template>