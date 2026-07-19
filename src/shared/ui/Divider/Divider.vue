<script setup lang="ts">
import type { HtmlHTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/cn'

const { className } = defineProps<{
  className?: HtmlHTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn(className || 'bg-accent h-0.5 w-28')"></div>
</template>
