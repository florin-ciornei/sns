<template>
  <div>
    <button type="button" @click="textEncrypt()">Test encrypt</button>
    {{encryptResult}}
    <br />
    <NoteEditor />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as Encryption from "./../logic/Encryption";
import NoteEditor from "./NoteEditor.vue";

@Component({
  components: {
    NoteEditor
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  encryptResult = "nothing";

  textEncrypt() {
    this.encryptResult = Encryption.testMethod();
  }
}
</script>

<style scoped lang="scss">
</style>
