<script setup lang="ts">
import { computed } from 'vue'
import { icons } from '@utils'
import { SvgIconProps } from './types'

const props = defineProps<SvgIconProps>()

const icon = computed(() => icons[props.name])
</script>

<template>
  <div v-html="icon" :style="{ color: props.fill }" />
</template>
