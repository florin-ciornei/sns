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
  <div class="page-content">
    <div style="display:flex;">
      <div style="flex:1;">
        <div style="font-size: 2.5em;font-weight: 800;">
          <!-- Safe storage for your notes -->
          Safe notes for you
        </div>
        <br />
        <div>
          <div style="color: var(--blue-a700);font-weight: 700;font-size: 1.5rem;">Security</div>asdasd asf asd fs g sfg s fgasf
        </div>
        <br />
        <div>
          <div style="color: #36bd3b;font-weight: 700;font-size: 1.5rem;">Privacy</div>asdasd asf asd fs g sfg s fgasf
        </div>
        <br />
        <div>
          <div style="color: var(--red);font-weight: 700;font-size: 1.5rem;">Anonymity</div>asdasd asf asd fs g sfg s fgasf
        </div>
        <br />
      </div>
      <div style="flex:1;">
        <NoteEditor />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import NoteEditor from "@/components/NoteEditor.vue";

@Component({
  components: { NoteEditor }
})
export default class Main extends Vue {}
</script>
