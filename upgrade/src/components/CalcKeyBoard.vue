<template>
  <div class="keyboard">
    <div
      v-for="(item, index) in buttonGrid"
      :key="'gridrow ' + (index + 1)"
      class="keyboard__row"
    >
      <CustomButton v-for="subitem in item" :key="subitem">
        {{ subitem }}
      </CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from "./CustomButton.vue";

const buttonGrid = [
  ["%", "CE", "C", "DEL"],
  ["1/x", "x²", "√", "÷"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["±", "0", ",", "="],
];
</script>

<style lang="scss" scoped>
.keyboard {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  gap: 3px;
  width: 100%;
  &__row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 3px;
    width: 100%;
  }
}
</style>
