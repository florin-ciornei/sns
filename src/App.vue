<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
export default Vue.extend({
  components: { Header }
});
</script>

<style lang="scss">
</style>
