import { ref, onMounted, onUnmounted } from 'vue'

export function useMouseRotation(sensitivity = 10, easing = 0.06) {
  const rotation = ref(0)
  let targetRotation = 0
  let rafId: number

  const animate = () => {
    rotation.value += (targetRotation - rotation.value) * easing
    rafId = requestAnimationFrame(animate)
  }

  const handleMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 2
    const y = (e.clientY / innerHeight - 0.5) * 2

    targetRotation = x * sensitivity + y * sensitivity
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
    animate()
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    cancelAnimationFrame(rafId)
  })

  return {
    rotation,
  }
}
