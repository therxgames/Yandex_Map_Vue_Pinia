<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import {
  YandexMap,
  YandexMapClusterer,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapMarker,
} from 'vue-yandex-maps'
import type { LngLat, YMap } from '@yandex/ymaps3-types'
import { YMapClusterer } from '@yandex/ymaps3-types/packages/clusterer'
import { useMapStore } from '@stores'
import { SvgIcon } from '@ui'

const map = shallowRef<null | YMap>(null)
const clusterer = shallowRef<YMapClusterer | null>(null)

const store = useMapStore()

const DEFAULT_ZOOM = 4 // Зум по умолчанию
const SELECTED_MARKER_ZOOM = 10 // Зум при выборе маркера

const getMapLocation = computed<LngLat>(() => [
  store.selectedMarker?.latitude || 1,
  store.selectedMarker?.longitude || 1,
])

const getMapZoom = computed(() => (store.selectedMarker ? SELECTED_MARKER_ZOOM : DEFAULT_ZOOM))

const visibleMarkers = computed(() => {
  return store.markers.filter((marker) => !store.hiddenMarkerIds.includes(marker.id))
})
</script>

<template>
  <yandex-map
    v-model="map"
    real-settings-location
    :settings="{
      location: {
        center: getMapLocation,
        zoom: getMapZoom,
        duration: 1000,
      },
    }"
    width="100%"
    height="100vh"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <yandex-map-clusterer v-model="clusterer" :grid-size="4" zoom-on-cluster-click>
      <yandex-map-marker
        v-for="marker in visibleMarkers"
        :key="marker.id"
        :settings="{
          coordinates: [marker.latitude, marker.longitude],
        }"
      >
        <SvgIcon
          class="marker"
          name="marker"
          :fill="store.isActiveMarker(marker.id) ? 'green' : 'red'"
        />
      </yandex-map-marker>
    </yandex-map-clusterer>
  </yandex-map>
</template>

<style scoped>
.marker {
  position: relative;
  width: 42px;
  height: 42px;
  transform: translate(-50%, -100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
