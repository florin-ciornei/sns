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

.explanatory-texts {
  font-size: 1.2em;

  & > div {
    margin-bottom: 24px;
  }

  .title {
    font-weight: 700;
    &.red {
      color: $red;
    }
    &.green {
      color: $green;
    }
    &.blue {
      color: $blue;
    }
  }
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
        <div class="explanatory-texts">
          <div>
            <div class="title blue">Security</div>
            Your note never leaves the browser unencrypted. Only the person who
            knows the password can decrypt, read and edit it.
          </div>
          <div>
            <div class="title green">Privacy</div>
            We store only the encrypted version of your note, so even we cannot
            read it. This also prevents us from selling your data to 3rd
            parties.
          </div>
          <div>
            <div class="title red">Anonymity</div>
            You can create notes without having an account, and your IP and
            location aren't stored.
          </div>
        </div>
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
