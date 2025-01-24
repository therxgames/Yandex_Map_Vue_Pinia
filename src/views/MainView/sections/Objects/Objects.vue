<script setup lang="ts">
import { ObjectItem } from './ObjectItem'
import { Search } from './Search'
</script>

<template>
  <div class="objects">
    <h1>Объекты</h1>

    <Search />
    <ObjectItem />
  </div>
</template>

<style scoped>
.objects {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 10px;
  width: 300px;
  position: absolute;
  top: 50px;
  right: 50px;
  height: calc(100% - 100px);
  padding: 20px 15px;
  background: #fff;
  border-radius: 10px;
  box-shadow:
    0 20px 25px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.1);
}
</style>
