import { ref, onMounted, onUnmounted } from 'vue'
import { eventBus } from '@/shared/lib/eventBus/eventBus'

export function useScrollToSection(sectionName: 'projects' | 'contacts') {
  const elementRef = ref<HTMLElement | null>(null)

  function handleScroll(target: 'projects' | 'contacts') {
    if (target === sectionName && elementRef.value) {
      elementRef.value.scrollIntoView({ behavior: 'smooth' })
    }
  }

  onMounted(() => {
    eventBus.on('scrollTo', handleScroll)
  })

  onUnmounted(() => {
    eventBus.off('scrollTo', handleScroll)
  })

  return { elementRef }
}
