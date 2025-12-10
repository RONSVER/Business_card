<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header'
import { AppFooter } from '@/widgets/app-footer'
import { RouterView } from 'vue-router'
</script>

<template>
  <section class="absolute size-full overflow-x-hidden">
    <AppHeader class="px-11" />
    <RouterView />
    <AppFooter />
  </section>
</template>
