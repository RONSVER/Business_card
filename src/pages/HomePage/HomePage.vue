<script setup lang="ts">
import { IntroSection } from '@/shared/ui/IntroSection'
import { ProjectsBox } from '@/widgets/projects-box'
import { MotionBlock } from '@/shared/ui/MotionBlock'
import { AppModal } from '@/shared/ui/modal'
import { useScrollToSection } from '@/shared/lib/useScrollToSection/useScrollToSection'
import { useModalStore } from '@/app/storages/useModalStorage/useModalStorage'

import YellowBg from '@/pages/HomePage/assets/yellow-bg.svg'

import { projectItems } from '@/widgets/projects-box/model/projectItems'
import { aboutMe } from '@/shared/ui/IntroSection/model/aboutMe'

const modalStore = useModalStore()

const { elementRef: projectsRef } = useScrollToSection('projects')
</script>

<template>
  <div class="overflow-x-hidden">
    <span
      class="text-accent ml-4 inline-block pt-6 pb-4 font-sans text-xl leading-tight font-bold [-webkit-text-stroke:1px_white] sm:ml-6 sm:pt-8 sm:pb-5 sm:text-2xl md:ml-11"
      >FULLSTACK DEVELOPER</span
    >

    <IntroSection
      class="ml-4 max-w-xl sm:ml-6 md:ml-11"
      headline="Hello, my name is Ibrahim Chekmazov"
      :description="aboutMe"
      :buttons="[
        {
          label: 'Your project',
          to: '/your-project',
          class:
            'cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md px-4 py-2',
        },
        {
          label: 'GitHub',
          link: 'https://github.com/RONSVER',
          class:
            'border border-gray-400 text-gray-700 hover:bg-gray-50 font-medium rounded-md px-4 py-2',
        },
      ]"
    />

    <MotionBlock
      :src="YellowBg"
      alt="Photo"
      class="pointer-events-none absolute -top-24 -right-16 -z-10 w-[420px] sm:-top-32 sm:-right-20 sm:w-[560px] md:-top-40 md:w-[820px]"
    />

    <div ref="projectsRef">
      <ProjectsBox :project-items="projectItems" class="my-16 sm:my-24 md:my-32" />
    </div>

    <AppModal v-if="modalStore.modalObj !== null" />
  </div>
</template>
