<template>
  <div class="color-circle-container">
    <div
      v-for="colorName in colorNameList"
      :key="colorName"
      :style="{ 'background-color': colors[colorName] }"
      :class="{ selected: selectedColorNames.includes(colorName) }"
      @click="onColorCircleClick(colorName)"
      class="color-circle"
    >
      <div>
        <!--this div becomes a white circle when the color is selected!-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as Constants from "../logic/Constants";
import * as _ from "lodash";

@Component
export default class ColorPicker extends Vue {
  @Prop()
  onColorSelected!: (name: string[]) => unknown;
  @Prop()
  canSelectMultipleColors!: boolean;
  colorNameList = Object.keys(Constants.colors);
  colors = Constants.colors;
  selectedColorNames: string[] = [];

  onColorCircleClick(color: string) {
    if (this.canSelectMultipleColors) {
      //if multiple colors can be selected, add or remove that value from the array
      if (this.selectedColorNames.includes(color)) {
        this.selectedColorNames = this.selectedColorNames.filter(
          e => e != color
        );
      } else {
        this.selectedColorNames.push(color);
      }
    } else {
      //if only a single color can be selected, the colors array will contain only that color name
      if (_.isEqual(this.selectedColorNames, [color])) {
        //deselect color
        this.selectedColorNames = [];
      } else {
        //select color
        this.selectedColorNames = [color];
      }
    }

    this.onColorSelected(this.selectedColorNames);
  }
}
</script>

<style scoped lang="scss">
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
</style>
