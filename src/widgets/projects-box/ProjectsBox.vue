<script setup lang="ts">
import { ProjectCard } from '@/shared/ui/ProjectCard'
import { Divider } from '@/shared/ui/Divider'

interface ProjectItem {
  title: string
  description: string
  image: string
}

const props = defineProps<{ projectItems: ProjectItem[] }>()
</script>

<template>
  <section class="flex flex-col items-center lg:px-0">
    <div class="mb-24 flex flex-col items-center gap-5">
      <h2 class="font-serif text-5xl leading-tight font-semibold">Projects</h2>
      <Divider />
    </div>

    <div class="flex max-w-4xl flex-col items-center gap-10">
      <ProjectCard
        v-for="(p, i) in projectItems"
        :key="i"
        :title="p.title"
        :description="p.description"
        :image="p.image"
        :reverse="i % 2 !== 0"
      />
    </div>
  </section>
</template>
