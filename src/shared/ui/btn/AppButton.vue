<script setup lang="ts">
import { cn } from '@/shared/lib/cn'
import type { HTMLAttributes } from 'vue'
import { RouterLink } from 'vue-router'

const {
  class: className,
  to,
  href,
} = defineProps<{
  class?: HTMLAttributes['class']
  to?: string
  href?: string
}>()

const isExternal = href && !to
</script>

<template>
  <component
    :is="to ? RouterLink : isExternal ? 'a' : 'button'"
    :href="href"
    :to="to"
    :class="cn(className, 'cursor-pointer') ?? ''"
    :target="isExternal ? '_blank' : null"
    :rel="isExternal ? 'noopener noreferrer' : null"
  >
    <slot />
  </component>
</template>
