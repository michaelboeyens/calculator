<template>
  <div class="screen">
    <p>{{ store.topDisp }}</p>
    <h1>{{ store.result }}</h1>
  </div>
</template>

<script setup lang="ts">
import { calcStore } from "@/stores/calcStore";

const store = calcStore();
</script>

<style lang="scss" scoped>
.screen {
  background-color: lightgray;
  text-align: right;
  padding: 1em;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
