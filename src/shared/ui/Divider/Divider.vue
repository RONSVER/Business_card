<script setup lang="ts">
import { cn } from '@/shared/lib/cn'
import type { HtmlHTMLAttributes } from 'vue'

const { className } = defineProps<{
  className?: HtmlHTMLAttributes['class']
}>()
</script>
<template>
  <div :class="cn(className ? '' : 'bg-accent h-0.5 w-28')"></div>
</template>
