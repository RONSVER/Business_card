<script setup lang="ts">
import { cn } from '@/shared/lib/cn'
import { AppButton } from '@/shared/ui/btn'
import { useModalStore } from '@/app/storages/useModalStorage/useModalStorage'
import type { ProjectItem } from '@/entities/Project'

const modalStore = useModalStore()

const { buttonLabel, description, globalDescription, image, reverse, title, photos } =
  defineProps<
    ProjectItem & {
      cardId: number
      buttonLabel?: string
      reverse?: boolean
    }
  >()
</script>

<template>
  <div
    :class="
      cn(
        'flex w-full flex-col gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md sm:gap-6 sm:p-6 md:flex-row',
        reverse ? 'md:flex-row-reverse' : '',
      )
    "
  >
    <img
      :src="image"
      alt="projectImage"
      class="h-48 w-full rounded-lg object-cover sm:h-64 md:h-72 md:w-1/2"
    />

    <div class="flex flex-col justify-between">
      <div>
        <h3 class="mb-2 text-lg font-semibold">{{ title }}</h3>
        <p class="mb-4 text-gray-600">{{ description }}</p>
      </div>

      <AppButton
        class="self-start rounded-md border border-gray-300 px-4 py-2 text-sm transition hover:bg-gray-50"
        @click="modalStore.open({ title, globalDescription, photos })"
      >
        {{ buttonLabel ?? 'View Project' }}
      </AppButton>
    </div>
  </div>
</template>
