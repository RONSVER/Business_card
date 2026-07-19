<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Divider } from '@/shared/ui/Divider'
import { cn } from '@/shared/lib/cn'

const { title, className } = defineProps<{
  title: string
  className?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('mb-12 flex flex-col items-center gap-5 px-4 text-center sm:mb-16 md:mb-24', className)">
    <h2 class="font-serif text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl">{{ title }}</h2>
    <Divider />
  </div>
</template>
