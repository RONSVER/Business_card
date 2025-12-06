<script setup lang="ts">
import { IntroSection } from '@/shared/ui/IntroSection'
import { ref, onMounted, onUnmounted } from 'vue'

const rotation = ref(0)
let targetRotation = 0
let rafId: number

// Анимация плавного движения
const animate = () => {
  rotation.value += (targetRotation - rotation.value) * 0.06
  rafId = requestAnimationFrame(animate)
}

// Обработчик мыши
const handleMouseMove = (e: MouseEvent) => {
  const { innerWidth, innerHeight } = window
  const x = (e.clientX / innerWidth - 0.5) * 2 // от -1 до 1
  const y = (e.clientY / innerHeight - 0.5) * 2

  // Вычисляем угол
  targetRotation = x * 10 + y * 10 // можно регулировать интенсивность
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
  <section>
    <div>
      <IntroSection
        class="ml-10"
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
    </div>
  </section>
</template>
