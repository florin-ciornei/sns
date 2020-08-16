<style scoped lang="scss">
.container {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
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
</style>

<template>
  <div class="container">
    <div style="font-weight: 700;color:var(--grey-600);display:flex;align-items: center;">
      <i class="material-icons" style="margin-right: 2px;margin-bottom: -2px;">link</i>
      securenote.com/n/2184cn912m
      <div style="flex: 1;text-align: right;">
        <i class="material-icons">open_in_full</i>
        <i class="material-icons">open_in_new</i>
        <i class="material-icons">more_vert</i>
      </div>
    </div>
    <input type="text" placeholder="Title" />
    <textarea rows="15" placeholder="Start typing here to create a note"></textarea>
    <input type="password" placeholder="Password" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NoteEditor extends Vue {}
</script>

