<script setup lang="ts">
import { IntroSection } from '@/shared/ui/IntroSection'
import { ref, onMounted, onUnmounted } from 'vue'
import { ProjectsBox } from '@/widgets/projects-box'
import Cigar from '@/pages/HomePage/assets/cigar.png'
import Diploma from '@/pages/HomePage/assets/diploma.png'
import Practice from '@/pages/HomePage/assets/practice.png'

const rotation = ref(0)
let targetRotation = 0
let rafId: number

const animate = () => {
  rotation.value += (targetRotation - rotation.value) * 0.06
  rafId = requestAnimationFrame(animate)
}

const handleMouseMove = (e: MouseEvent) => {
  const { innerWidth, innerHeight } = window
  const x = (e.clientX / innerWidth - 0.5) * 2
  const y = (e.clientY / innerHeight - 0.5) * 2

  targetRotation = x * 10 + y * 10
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(rafId)
})

const projectItems = [
  {
    title: 'Cigar club',
    description:
      'At Trood, I worked as a Fullstack Developer on the Cigar Club app. I built the Frontend and also developed Backend triggers and internal architecture, using Firebase as the database. The project used Vue 3, TypeScript, Tailwind, Node.js, Express.js, and aimed to simplify the search and purchase of premium cigars. My involvement is confirmed by recommendation letters from Trood’s management.',
    image: Cigar,
  },
  {
    title: 'Experience in many Fullstack projects',
    description:
      'At Trood, I contributed to multiple applications, including an AI-powered dating app integrated with a Telegram bot for automated match notifications. I worked on Frontend and internal logic, gaining strong Frontend practice. I also received recommendation letter for project.',
    image: Practice,
  },
  {
    title: 'Diplomas projects',
    description:
      'I completed a two-year web development program at Tel-Ran School, where I built and defended two diploma projects. One Frontend and one Backend. Both projects are available on my GitHub and reflect the skills and knowledge gained during the course.',
    image: Diploma,
  },
]
</script>

<template>
  <div>
    <span
      class="text-accent ml-11 inline-block pt-8 pb-5 font-sans text-2xl leading-tight font-semibold"
      >FULLSTACK DEVELOPER</span
    >
    <IntroSection
      class="ml-11 max-w-xl"
      headline="Hello,  my name is Ibrahim Chekmazov"
      description="Short text with details about you, what you do or your professional career. You can add more information on the about page."
      :buttons="[
        {
          label: 'Projects',
          onClick: () => {},
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

    <img
      class="pointer-events-none absolute -top-40 -right-20 -z-10 w-[820px]"
      src="./assets/yellow-bg.svg"
      alt="Photo"
      :style="{ transform: `rotate(${rotation}deg)` }"
    />

    <ProjectsBox :project-items="projectItems" class="my-32" />
  </div>
</template>
