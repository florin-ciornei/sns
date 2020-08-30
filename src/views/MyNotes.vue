<template>
  <div class="page-content">
    <!-- <note-section :title="'Anonymous'" :notes="testNotes"></note-section>
    <note-section :title="'Author 1'" :notes="testNotes"></note-section> -->
    <note-section :title="'Local'" :notes="localNotes"></note-section>
    <note-editor onlyAsModal="true" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as Constants from "../logic/Constants";
import * as TestData from "../logic/TestData";
import NotesSection from "@/components/NotesSection.vue";
import { Note } from "@/logic/Model/Note";
import NoteEditor from "@/components/NoteEditor.vue";
import { Backend } from "@/logic/Backend";

@Component({
  components: { "note-section": NotesSection, "note-editor": NoteEditor }
})
export default class MyNotes extends Vue {
  colorNameList = Object.keys(Constants.colors);
  colors = Constants.colors;
  testNotes: Note[] = [];
  localNotes: Note[] = [];
  backend: Backend = new Backend();

  created() {
    this.testNotes = TestData.generateNotes(12);
    this.localNotes = this.backend.getLocalNotes();
    console.log(this.localNotes);
  }
}
</script>

<style scoped lang="scss"></style>
