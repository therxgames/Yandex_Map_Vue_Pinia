<script setup lang="ts">
import { useMapStore } from '@stores'

const store = useMapStore()

const checkboxHandler = (id: number, event: Event): void => {
  const checkbox = event.target as HTMLInputElement
  const checked = checkbox.checked

  if (!checked) {
    store.hiddenMarkerIds.push(id)
  } else {
    store.hiddenMarkerIds = store.hiddenMarkerIds.filter((item) => item !== id)
  }
}
</script>

<template>
  <div
    v-for="marker in store.filteredMarkers"
    :key="marker.id"
    class="object-item"
    :class="{ active: store.isActiveMarker(marker.id) }"
    @click="store.selectMarker(marker.id)"
  >
    <p>{{ marker.name }}</p>

    <input
      class="checkbox"
      type="checkbox"
      :checked="true"
      @click.stop
      @change="checkboxHandler(marker.id, $event)"
    />
  </div>
</template>

<style scoped>
.object-item {
  padding: 5px 10px;
  border: 1px solid rgb(192, 186, 186);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.object-item:hover,
.active {
  cursor: pointer;
  background-color: bisque;
}

.checkbox {
  width: 15px;
  height: 15px;
}
</style>
