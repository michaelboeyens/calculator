<template>
  <main class="calc">
    <CalcScreen class="calc__screen" />
    <div class="calc__container">
      <div v-for="(item, index) in buttonGrid" :key="'gridrow ' + (index + 1)">
        <CustomButton v-for="subitem in item" :key="subitem">
          {{ subitem }}
        </CustomButton>
      </div>
    </div>
    <CustomAside class="calc__history" />
  </main>
</template>

<script setup lang="ts">
import CalcScreen from "@/components/CalcScreen.vue";
import CustomButton from "@/components/CustomButton.vue";
import CustomAside from "@/components/CustomAside.vue";

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
.calc {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-rows: 4fr 5fr 5fr;

  &__screen {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  &__container {
    grid-row: 2/4;
    grid-column: 1/2;
    background-color: lightgray;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 3px;
    padding: 3px;
  }
  &__history {
    grid-row: 1/4;
    grid-column: 2/3;
  }
}
</style>
