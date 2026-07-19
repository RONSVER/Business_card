<script setup lang="ts">
import { useMouseRotation } from '@/shared/lib/useMouseRotation'

const { alt, src, className } = defineProps<{
  src: string
  alt?: string
  className?: string
}>()

const { rotation } = useMouseRotation()
</script>

<template>
  <img :src="src" :alt="alt" :class="className" :style="{ transform: `rotate(${rotation}deg)` }" />
</template>
