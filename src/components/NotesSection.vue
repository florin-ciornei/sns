<!-- A section with notes displayed in the "My Notes" page !-->
<template>
  <div class="section">
    <div class="section-header">
      <div class="region-title">{{ title }}</div>
      <div>
        <div class="label">{{ $t("Color filter") }}</div>
        <div class="color-circle-container">
          <div
            v-for="colorName in colorNameList"
            :key="colorName"
            :style="{ 'background-color': colors[colorName] }"
            :class="{ selected: colorFilter.includes(colorName) }"
            @click="onColorCircleClick(colorName)"
            class="color-circle"
          >
            <div>
              <!--this div becomes a white circle when the color is selected!-->
            </div>
          </div>
        </div>
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

@Component({
  components: { "note-preview": NotePreview }
})
export default class NotesSection extends Vue {
  @Prop()
  notes!: Note[];
  @Prop() title: string | undefined;

  colorFilter: string[] = [];
  tagFilter: string[] = [];
  tags: Set<string> = new Set<string>();
  colorNameList = Object.keys(Constants.colors);
  colors = Constants.colors;

  created() {
    this.notes.forEach(n => n.metadata.tags.forEach(t => this.tags.add(t)));
  }

  onColorCircleClick(color: string) {
    if (this.colorFilter.includes(color))
      this.colorFilter = this.colorFilter.filter(e => e != color);
    else this.colorFilter.push(color);
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

.color-circle-container {
  display: flex;

  $circle-size: 1rem;
  .color-circle {
    width: $circle-size;
    height: $circle-size;
    border-radius: 50%;
    position: relative;
    margin-right: 0.25rem;
    cursor: pointer;

    &:hover {
      opacity: 0.85;
    }

    &.selected div {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 50%;
      width: #{$circle-size * 0.5};
      height: #{$circle-size * 0.5};
      background-color: white;
    }
  }
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