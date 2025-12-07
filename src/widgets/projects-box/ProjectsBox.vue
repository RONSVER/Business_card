<script setup lang="ts">
import { ProjectCard } from '@/shared/ui/ProjectCard'

interface ProjectItem {
  title: string
  description: string
  image: string
}

const projects: ProjectItem[] = [
  {
    title: 'Project One',
    description: 'I created this project as practice...',
    image: '/images/project-1.jpg',
  },
  {
    title: 'Project Two',
    description: 'Work done, your role, your mindset...',
    image: '/images/project-2.jpg',
  },
  {
    title: 'Project Three',
    description: 'More info about benefits...',
    image: '/images/project-3.jpg',
  },
]
</script>

<template>
  <section class="flex flex-col items-center lg:px-0">
    <div class="mb-24 flex flex-col items-center gap-5">
      <h2 class="font-serif text-5xl leading-tight font-semibold">Projects</h2>
      <div class="bg-accent h-0.5 w-28"></div>
    </div>

    <div class="flex max-w-4xl flex-col items-center gap-10">
      <ProjectCard
        v-for="(p, i) in projects"
        :key="i"
        :title="p.title"
        :description="p.description"
        :image="p.image"
        :reverse="i % 2 !== 0"
      />
    </div>
  </section>
</template>
