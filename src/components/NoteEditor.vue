<style scoped lang="scss">
.container {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: $shadow;
  overflow: hidden;
  background-color: white;

  textarea,
  input[type="password"],
  input[type="text"],
  & > div {
    border: 0;
    border-bottom: 1px solid $grey-400;
    padding: 4px;
  }
}

.full-screen-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div
    v-if="!onlyAsModal || (onlyAsModal && isFullScreen)"
    v-bind:class="{ 'full-screen-container': isFullScreen }"
  >
    <div class="container">
      <div
        style="font-weight: 700;color:var(--grey-600);display:flex;align-items: center;"
      >
        <i class="material-icons" style="margin-right: 2px;margin-bottom: -2px;"
          >link</i
        >
        securenote.com/n/2184cn912m
        <div style="flex: 1;text-align: right;">
          <button
            type="button"
            class="icon-button"
            @click="isFullScreen = !isFullScreen"
          >
            <i v-if="onlyAsModal" class="material-icons">close</i>
            <i v-if="!onlyAsModal" class="material-icons">{{
              isFullScreen ? "close_fullscreen" : "open_in_full"
            }}</i>
          </button>
          <!-- <i class="material-icons">open_in_new</i>
          <i class="material-icons">more_vert</i>-->
        </div>
      </div>
      <input type="text" placeholder="Title" />
      <textarea
        v-model="note.contents.text"
        @keyup="onAnyChange"
        rows="15"
        placeholder="Start typing here to create a note"
      ></textarea>
      <!-- TAGS !-->
      <div>
        <div class="label">
          {{ $t("Tags") }}
        </div>
        <div>
          <input v-for="(tag, index) in tags" :key="index" v-model="tag.text" />
          <button type="button" @click="addTag()" class="text-button">
            {{ $t("add") }}
          </button>
        </div>
      </div>
      <!-- COLORS !-->
      <div>
        <div class="label">
          {{ $t("Color") }}
        </div>
        <div>
          <color-picker
            :onColorSelected="onColorSelect"
            :canSelectMultipleColors="false"
          ></color-picker>
        </div>
      </div>
      <input type="password" placeholder="Password" />
      <div>{{ $t("hello") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ColorPicker from "./ColorPicker.vue";
import { EventBus } from "../logic/EventBus";
import { Note } from "@/logic/Model/Note";

@Component({ components: { "color-picker": ColorPicker } })
export default class NoteEditor extends Vue {
  /** If true, the editor is not displayed, and will appear as a modal only when emitting the "edit-note" event. */
  @Prop({ default: false }) readonly onlyAsModal!: boolean;

  note: Note = Note.CreateEmptyNote();

  isFullScreen = false;
  //vue doesn't support iteration and model for a string array, that's why the tag value is encapsulated in an object
  tags: { text: string }[] = [];
  color = "";
  saveTimer: any;

  created() {
    EventBus.$on("edit-note", this.editNote);
  }

  beforeDestroy() {
    EventBus.$off("edit-note", this.editNote);
  }

  //the "edit-note" event triggers this method
  editNote(note: Note) {
    this.note = note;
    this.isFullScreen = true;
  }

  addTag() {
    this.tags.push({ text: "" });
  }

  /**
   * @param color contains a single color, or is empty if the color is deselected
   */
  onColorSelect(color: string[]) {
    if (color.length == 0) {
      this.color = "";
    } else {
      this.color = color[0];
    }
    this.onAnyChange();
  }

  /**
   * When any input changes in the editor, a timer is started that will save the note after some time.
   */
  onAnyChange() {
    if (this.saveTimer != undefined) clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(this.save, 3000);
  }

  save() {
    console.log("save the note");
  }
}
</script>
