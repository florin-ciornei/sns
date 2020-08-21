<style scoped lang="scss">
#navbar {
  padding: 16px 60px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid $grey-400;
  z-index: 1;
}

.logo-container {
  flex: 1;
}

.searchbar-container {
  position: relative;
  height: 32px;
  i {
    position: absolute;
    height: 24px;
    margin: auto;
    color: $grey-600;
    top: 0;
    bottom: 0;
    left: 4px;
  }
  input {
    border: 1px solid $grey-400;
    border-radius: $border-radius;
    padding: 4px;
    padding-left: 30px;
  }
}

.links {
  flex: 1;
  text-align: right;
  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.2em;
    color: $grey-700;
    text-transform: uppercase;
    margin-left: 32px;
  }
}
</style>

<template>
  <div id="navbar">
    <div class="logo-container">
      <router-link to="/">Homepage</router-link>
    </div>
    <div class="searchbar-container">
      <i class="material-icons">search</i>
      <input placeholder="Author, title or #tag" type="text" />
    </div>
    <div class="links">
      <router-link to="/my-notes">My notes</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
