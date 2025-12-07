<script setup lang="ts">
import { IntroSection } from '@/shared/ui/IntroSection'
import { ref, onMounted, onUnmounted } from 'vue'
import { ProjectsBox } from '@/widgets/projects-box'

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

    <ProjectsBox class="my-32" />
  </div>
</template>
