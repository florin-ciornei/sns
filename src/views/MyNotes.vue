<template>
  <div class="page-content">
    <note-section :title="'Anonymous'" :notes="testNotes"></note-section>
    <note-section :title="'Author 1'" :notes="testNotes"></note-section>
    <note-section :title="'Local'" :notes="testNotes"></note-section>
    <note-editor onlyAsModal="true" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as Constants from "../logic/Constants";
import * as TestData from "../logic/TestData";
import NotesSection from "@/components/NotesSection.vue";
import { Note } from "@/logic/Note";
import NoteEditor from "@/components/NoteEditor.vue";

@Component({
  components: { "note-section": NotesSection, "note-editor": NoteEditor }
})
export default class MyNotes extends Vue {
  colorNameList = Object.keys(Constants.colors);
  colors = Constants.colors;
  testNotes: Note[] = [];

  created() {
    this.testNotes = TestData.generateNotes(12);
  }
}
</script>

<style scoped lang="scss">
</style>
