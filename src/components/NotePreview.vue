<style scoped lang="scss">
$note-size: 150px;
.preview {
  box-shadow: $shadow;
  border-radius: $border-radius;
  width: $note-size;
  height: $note-size;
  position: relative;
  margin: 8px;
  background-color: white;

  .content {
    position: absolute;
    top: 12px;
    bottom: 12px;
    left: 12px;
    right: 12px;
    overflow: hidden;
  }
}

.color-circle {
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
    <div
      class="content"
      :style="{ filter: note.metadata.isEncrypted() ? 'blur(5px)' : '' }"
    >
      {{ note.contents.text }}
    </div>
    <div
      v-if="note.metadata.color != ''"
      class="color-circle"
      :style="{ 'background-color': colors[note.metadata.color] }"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Note } from "@/logic/Note";
import { colors } from "@/logic/Constants";

@Component
export default class NotePreview extends Vue {
  @Prop() note: Note | undefined;
  colors = colors;
}
</script>
