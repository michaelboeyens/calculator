<template>
  <main class="calc">
    <CalcScreen class="calc__screen" />
    <CalcKeyBoard class="calc__keyboard" />
    <CustomAside class="calc__history" />
  </main>
</template>

<script setup lang="ts">
import CalcScreen from "@/components/CalcScreen.vue";
import CustomAside from "@/components/CustomAside.vue";
import CalcKeyBoard from "@/components/CalcKeyBoard.vue";
</script>

<style lang="scss" scoped>
.calc {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-rows: 4fr 10fr;
  &__screen {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  &__keyboard {
    grid-row: 2/3;
    grid-column: 1/2;
    background-color: lightgray;
    width: 100%;
  }
  &__history {
    grid-row: 1/3;
    grid-column: 2/3;
  }
}
</style>
