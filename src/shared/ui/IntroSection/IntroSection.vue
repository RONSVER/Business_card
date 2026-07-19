<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AppButton } from '@/shared/ui/btn'
import { TypedText } from '@/shared/ui/TypedText'

const { headline, description, buttons } = defineProps<{
  headline: string
  description: string
  buttons?: {
    label: string
    link?: string
    class?: HTMLAttributes['class']
    onClick?: () => void
    to?: string
  }[]
}>()
</script>

<template>
  <section class="max-w-2xl">
    <h1 class="font-serif text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl">
      {{ headline }}
    </h1>

    <TypedText
      :text="description"
      :speed="50"
      cursor
      class-name="mt-4 font-mono text-base leading-relaxed text-gray-500 sm:text-lg"
    />

    <div class="mt-6 flex flex-wrap items-center gap-4">
      <AppButton
        v-for="(btn, id) in buttons"
        :key="id"
        :class="btn.class ?? ''"
        :href="btn.link"
        @click="btn.onClick?.()"
        :to="btn.to"
      >
        {{ btn.label }}
      </AppButton>
    </div>
  </section>
</template>
