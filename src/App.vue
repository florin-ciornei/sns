<template>
  <div id="app">
    <div>
      Last notes
      <div style="display:flex;">
        <NotePreview />
        <NotePreview />
        <NotePreview />
        <NotePreview />
      </div>
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import NotePreview from "./components/NotePreview.vue";

@Component({
  components: {
    HelloWorld,
    NotePreview
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
