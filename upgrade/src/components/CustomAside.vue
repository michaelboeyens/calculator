<template>
  <aside v-if="store.historyLength > 0" class="aside">
    <div
      v-for="calc in store.history"
      class="aside__element"
      :key="calc.equation + calc.result"
    >
      <p class="aside__equation">{{ calc.equation }}</p>
      <h2 class="aside__result">{{ calc.result }}</h2>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { calcStore } from "@/stores/calcStore";

const store = calcStore();
</script>

<style lang="scss" scoped>
.aside {
  background-color: rgb(233, 233, 233);
  padding: 1em;
  text-align: right;
  border: 3px solid lightgray;
  border-left: none;
  overflow-y: auto;
  &__element {
    margin-bottom: 3em;
  }
  &__equation {
    margin-bottom: 0.5em;
  }
  &__result {
    margin-top: 0.25em;
  }
}
</style>
