<script setup lang="ts">
import { useModalStore } from '@/app/storages/useModalStorage/useModalStorage'

const modalStore = useModalStore()

function closeOnBackground(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    modalStore.close()
  }
}
</script>

<template>
  <div
    v-if="modalStore.modalObj !== null"
    @click="closeOnBackground"
    class="fixed inset-0 z-999 flex items-center justify-center bg-black/60 p-4"
  >
    <div
      class="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
    >
      <!-- Header -->
      <div class="bg-accent border-b border-gray-300 p-4 sm:p-6">
        <h1 class="font-serif text-2xl leading-tight font-bold text-gray-900 sm:text-3xl">
          {{ modalStore.modalObj?.title }}
        </h1>
      </div>

      <!-- Content -->
      <div class="flex min-h-0 flex-col gap-6 overflow-y-auto p-4 sm:p-6">
        <div class="mb-4 flex flex-col gap-3">
          <p
            class="my-4 rounded-2xl bg-gray-100 p-2 font-mono text-sm leading-relaxed whitespace-pre-line text-gray-700 shadow-lg inset-shadow-sm shadow-gray-500/50 transition hover:bg-gray-200 sm:my-7 sm:text-base"
          >
            {{ modalStore.modalObj?.globalDescription }}
          </p>

          <a
            v-if="modalStore.modalObj?.link"
            :href="modalStore.modalObj.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:bg-gray-100"
          >
            <div>
              <p class="text-xs text-gray-500 uppercase">Project Website</p>
              <p class="font-medium text-gray-900">
                {{ modalStore.modalObj.link }}
              </p>
            </div>

            <span class="text-2xl">↗</span>
          </a>
        </div>

        <!-- Images -->
        <div v-if="modalStore.modalObj?.photos?.length" class="grid grid-cols-1 gap-6">
          <img
            v-for="img in modalStore.modalObj.photos"
            :key="img"
            :src="img"
            alt="project image"
            class="w-full rounded-xl object-contain shadow-md inset-shadow-sm shadow-gray-500/50"
          />
        </div>
      </div>

      <!-- Footer -->
      <div class="border-t border-gray-300 p-4 text-right">
        <button
          @click="modalStore.close()"
          class="bg-accent cursor-pointer rounded-lg px-5 py-2 font-serif text-black transition hover:bg-yellow-500"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
