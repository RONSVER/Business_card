<script setup lang="ts">
import { cn } from '@/shared/lib/cn'
import type { HTMLAttributes } from 'vue'
import { RouterLink } from 'vue-router'

const { class: className, to } = defineProps<{
  class?: HTMLAttributes['class']
  to?: string
}>()
</script>

<template>
  <component :is="to ? RouterLink : 'button'" :to="to" :class="cn(className)">
    <slot />
  </component>
</template>
