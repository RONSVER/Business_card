<script setup lang="ts">
import { cn } from '@/shared/lib/cn'
import { AppButton } from '@/shared/ui/btn'

const { buttonLabel, description, image, onClick, reverse, title } = defineProps<{
  title: string
  description: string
  image: string
  buttonLabel?: string
  onClick?: () => void
  reverse?: boolean
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex w-full flex-col gap-6 rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md md:flex-row',
        reverse ? 'md:flex-row-reverse' : '',
      )
    "
  >
    <img
      :src="image"
      alt="projectImage"
      class="h-64 w-full rounded-lg object-cover md:h-72 md:w-1/2"
    />

    <div class="flex flex-col justify-between">
      <div>
        <h3 class="mb-2 text-lg font-semibold">{{ title }}</h3>
        <p class="mb-4 text-gray-600">{{ description }}</p>
      </div>

      <AppButton
        class="self-start rounded-md border border-gray-300 px-4 py-2 text-sm transition hover:bg-gray-50"
        @click="onClick?.()"
      >
        {{ buttonLabel ?? 'View Project' }}
      </AppButton>
    </div>
  </div>
</template>
