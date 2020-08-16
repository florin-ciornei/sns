<style scoped lang="scss">
.preview {
  box-shadow: $shadow;
  border-radius: $border-radius;
  position: relative;
  margin: 8px;
}

.color-circle {
  background-color: $blue;
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
</style>

<template>
  <div class="preview">
    <img
      src="./../assets/images/NotePreview.png"
      style="width:128px;filter:blur(5px)"
    />
    <div class="color-circle"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default class NotePreview extends Vue {}
</script>
