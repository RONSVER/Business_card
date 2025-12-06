<script setup lang="ts">
import { cn } from '@/shared/lib/cn'
import { ref, onMounted, type HTMLAttributes } from 'vue'

const { className, cursor, speed, text } = defineProps<{
  text: string
  speed?: number
  cursor?: boolean
  className?: HTMLAttributes['class']
}>()

const displayed = ref('')
onMounted(() => {
  let index = 0
  const full = text
  const currentSpeed = speed ?? 40

  const interval = setInterval(() => {
    displayed.value += full[index]
    index++

    if (index >= full.length) {
      clearInterval(interval)
    }
  }, currentSpeed)
})
</script>

<template>
  <span :class="cn(className)">
    {{ displayed }}
    <span
      v-if="cursor"
      :class="
        cn(
          'inline-block h-4 w-0.5 bg-current',
          displayed.length === text.length ? 'cursor-blink' : '',
        )
      "
    ></span>
  </span>
</template>

<style>
.cursor-blink {
  animation: blink 0.7s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
