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
  <header class="flex justify-between items-center p-4 sticky top-0 bg-transparent z-50">
    <h1 class="font-bold text-2xl">Ibrahim Chekmazov</h1>

    <nav class="flex gap-10 mr-12">
      <AppButton v-for="item in navItems" :key="item.label" :to="item.to">
        {{ item.label }}
      </AppButton>
    </nav>
  </header>
</template>
