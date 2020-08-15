<template>
  <div>
    <button type="button" @click="textEncrypt()">Test encrypt</button>
    {{encryptResult}}
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as Encryption from "./../logic/Encryption";

@Component
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
