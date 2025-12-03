<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header'
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <div class="wrapper">
      <nav>
        <AppHeader />
      </nav>
    </div>
  </main>

  <RouterView />
</template>
