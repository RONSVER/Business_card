<script setup lang="ts">
import { AppButton } from '@/shared/ui/btn'

interface NavItem {
  label: string
  to?: string
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contacts', to: '/contacts' },
]
</script>

<template>
  <header class="top-0 z-50 flex items-center justify-between bg-transparent p-4">
    <h1 class="text-2xl font-medium">Ibrahim Chekmazov</h1>

    <nav class="mr-12 flex gap-10">
      <AppButton v-for="item in navItems" :key="item.label" :to="item.to">
        {{ item.label }}
      </AppButton>
    </nav>
  </header>
</template>
