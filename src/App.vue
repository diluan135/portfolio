<template>
  <div>
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  </div>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <p>{{ $t('about') }}</p>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
