<script setup lang="ts">
import { ProjectCard } from '@/shared/ui/ProjectCard'
import { SectionTitle } from '@/shared/ui/SectionTitle'

interface ProjectItem {
  title: string
  description: string
  globalDescription: string
  image: string
  photos: string[]
}

const props = defineProps<{ projectItems: ProjectItem[] }>()
</script>

<template>
  <section class="flex flex-col items-center lg:px-0">
    <SectionTitle title="Projects" />

    <div class="flex max-w-4xl flex-col items-center gap-10">
      <ProjectCard
        v-for="(p, i) in projectItems"
        :key="i"
        :card-id="i"
        :title="p.title"
        :description="p.description"
        :global-description="p.globalDescription"
        :image="p.image"
        :photos="p.photos"
        :reverse="i % 2 !== 0"
      />
    </div>
  </section>
</template>
