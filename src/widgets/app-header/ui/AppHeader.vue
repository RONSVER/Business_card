<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { eventBus } from '@/shared/lib/eventBus/eventBus'
import { AppButton } from '@/shared/ui/btn'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', action: () => eventBus.emit('scrollTo', 'projects') },
  { label: 'Contacts', action: () => eventBus.emit('scrollTo', 'contacts') },
]

// Hide nav items that don't make sense on the current route
const filteredNavItems = computed(() => {
  return navItems.filter((item) => {
    if (route.name === 'home' && item.label === 'Home') return false
    if (route.name === 'your-project' && item.label === 'Projects') return false
    return true
  })
})

function handleNavClick(item: (typeof navItems)[number]) {
  item.action?.()
  isMenuOpen.value = false
}
</script>

<template>
  <header class="relative top-0 z-50 flex items-center justify-between bg-transparent py-4">
    <h1 class="text-xl font-medium sm:text-2xl">Ibrahim Chekmazov</h1>

    <!-- Desktop navigation -->
    <nav class="hidden md:mr-6 md:flex md:gap-8 lg:mr-12 lg:gap-10">
      <AppButton
        v-for="item in filteredNavItems"
        :key="item.label"
        @click="handleNavClick(item)"
        :to="item.to"
      >
        {{ item.label }}
      </AppButton>
    </nav>

    <!-- Mobile menu toggle -->
    <button
      type="button"
      class="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
      :aria-expanded="isMenuOpen"
      aria-label="Toggle navigation menu"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span
        class="h-0.5 w-6 bg-black transition-transform duration-200"
        :class="isMenuOpen ? 'translate-y-2 rotate-45' : ''"
      ></span>
      <span
        class="h-0.5 w-6 bg-black transition-opacity duration-200"
        :class="isMenuOpen ? 'opacity-0' : ''"
      ></span>
      <span
        class="h-0.5 w-6 bg-black transition-transform duration-200"
        :class="isMenuOpen ? '-translate-y-2 -rotate-45' : ''"
      ></span>
    </button>

    <!-- Mobile navigation -->
    <nav
      v-if="isMenuOpen"
      class="absolute top-full right-0 left-0 flex flex-col items-center gap-4 bg-white p-6 shadow-md md:hidden"
    >
      <AppButton
        v-for="item in filteredNavItems"
        :key="item.label"
        @click="handleNavClick(item)"
        :to="item.to"
      >
        {{ item.label }}
      </AppButton>
    </nav>
  </header>
</template>
