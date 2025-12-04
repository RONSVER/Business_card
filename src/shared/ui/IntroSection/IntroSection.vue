<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AppButton } from '../btn'

const { headline, description, buttons } = defineProps<{
  headline: string
  description: string
  buttons?: {
    label: string
    link?: string
    class?: HTMLAttributes['class']
    onClick?: () => void
  }[]
}>()
</script>

<template>
  <section class="max-w-2xl">
    <h1 class="font-serif text-5xl font-semibold leading-tight">
      {{ headline }}
    </h1>

    <p class="font-mono mt-4 text-lg text-gray-500 leading-relaxed">
      {{ description }}
    </p>

    <div class="mt-6 flex items-center gap-4">
      <AppButton
        v-for="(btn, id) in buttons"
        :key="id"
        :class="btn.class ?? ''"
        :href="btn.link"
        @click="btn.onClick?.()"
      >
        {{ btn.label }}
      </AppButton>
    </div>
  </section>
</template>
