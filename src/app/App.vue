<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AppHeader } from '@/widgets/app-header'
import { AppFooter } from '@/widgets/app-footer'
import { useScrollToSection } from '@/shared/lib/useScrollToSection/useScrollToSection'

const { elementRef: footerRef } = useScrollToSection('contacts')
</script>

<template>
  <section class="absolute size-full overflow-x-hidden">
    <AppHeader class="px-4 sm:px-6 md:px-11" />

    <RouterView />

    <div ref="footerRef">
      <AppFooter />
    </div>
  </section>
</template>
