<script setup lang="ts">
import { useMapStore } from '@stores'

const store = useMapStore()

const handleInput = (event: Event) => {
  const input = event.currentTarget as HTMLInputElement

  store.setSearchQuery(input.value)
}
</script>

<template>
  <input type="text" @input="handleInput($event)" class="search" placeholder="Поиск" />
</template>

<style scoped>
input {
  outline: none;
  padding: 5px;
}
</style>
