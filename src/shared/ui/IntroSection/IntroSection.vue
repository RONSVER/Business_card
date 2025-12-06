<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AppButton } from '../btn'
import { TypedText } from '../TypedText'

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
    <h1 class="font-serif text-5xl leading-tight font-semibold">
      {{ headline }}
    </h1>

    <TypedText
      :text="description"
      :speed="50"
      cursor
      class-name="mt-4 font-mono text-lg leading-relaxed text-gray-500"
    />

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
