<!-- A section with notes displayed in the "My Notes" page !-->
<template>
  <div class="section">
    <div class="section-header">
      <div class="region-title">{{ title }}</div>
      <div>
        <div class="label">{{ $t("Color filter") }}</div>
        <color-picker
          :onColorSelected="onColorsSelect"
          :canSelectMultipleColors="true"
        ></color-picker>
      </div>
    </div>
    <div class="container">
      <div class="tag-container">
        <div class="label">{{ $t("Tags") }}</div>
        <div
          class="tag"
          v-for="tag in tags"
          :key="tag"
          @click="onTagClick(tag)"
          :class="{ selected: tagFilter.includes(tag) }"
        >
          {{ tag }}
        </div>
      </div>
      <div class="note-container">
        <note-preview
          v-for="note in getNotes()"
          :key="note.metadata.id"
          :note="note"
        ></note-preview>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Note } from "@/logic/Note";
import * as Constants from "../logic/Constants";
import NotePreview from "./NotePreview.vue";
import * as _ from "lodash";
import ColorPicker from "./ColorPicker.vue";

@Component({
  components: { "note-preview": NotePreview, "color-picker": ColorPicker }
})
export default class NotesSection extends Vue {
  @Prop()
  notes!: Note[];
  @Prop() title: string | undefined;

  colorFilter: string[] = [];
  tagFilter: string[] = [];
  tags: Set<string> = new Set<string>();

  created() {
    this.notes.forEach(n => n.metadata.tags.forEach(t => this.tags.add(t)));
  }

  onColorsSelect(colors: string[]) {
    this.colorFilter = colors;
  }

  onTagClick(tag: string) {
    console.log(1);
    if (this.tagFilter.includes(tag))
      this.tagFilter = this.tagFilter.filter(e => e != tag);
    else this.tagFilter.push(tag);
  }

  getNotes(): Note[] {
    let notes: Note[] = this.notes;
    if (this.colorFilter.length > 0) {
      notes = notes.filter(n => this.colorFilter.includes(n.metadata.color));
    }
    if (this.tagFilter.length > 0) {
      notes = notes.filter(n => {
        return (
          _.intersection(this.tagFilter, Array.from(n.metadata.tags.values()))
            .length > 0
        );
      });
    }
    return notes;
  }
}
</script>

<style scoped lang="scss">
.section {
  margin-top: 50px;
}

.section-header {
  display: flex;
  align-items: flex-end;
}

.region-title {
  font-size: 2rem;
  font-weight: bold;
  margin-right: 2rem;
}

.container {
  display: flex;
  margin-top: 32px;
}

.tag-container {
  display: flex;
  flex-direction: column;
  margin-right: 32px;

  .tag {
    margin-top: 10px;
    padding: 4px 8px;
    min-width: 120px;
    border-radius: $border-radius;
    background-color: white;
    box-shadow: $shadow;
    box-sizing: border-box;

    &.selected {
      border: 2px solid $blue;
    }
  }
}

.note-container {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}
</style>
