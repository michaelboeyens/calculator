<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.button {
  font-size: 1.5em;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkgray;
    color: white;
  }
}
</style>
