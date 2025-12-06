<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header'
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <div class="absolute size-full overflow-hidden">
      <nav class="">
        <AppHeader class="px-11" />
      </nav>

      <RouterView />
    </div>
  </main>
</template>
