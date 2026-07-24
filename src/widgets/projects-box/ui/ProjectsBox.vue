<script setup lang="ts">
import { ProjectCard } from '@/shared/ui/ProjectCard'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import type { ProjectItem } from '@/entities/Project'

const { projectItems } = defineProps<{ projectItems: ProjectItem[] }>()
</script>

<template>
  <section class="flex w-full flex-col items-center px-4 sm:px-6 lg:px-0">
    <SectionTitle title="Projects" />

    <div class="flex w-full max-w-4xl flex-col items-center gap-6 sm:gap-10">
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
        :link="p.link"
      />
    </div>
  </section>
</template>
