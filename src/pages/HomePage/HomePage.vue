<script setup lang="ts">
import { IntroSection } from '@/shared/ui/IntroSection'
</script>

<template>
  <div>
    <IntroSection
      headline="Hello,  my name is Ibrahim Chekmazov"
      description="Short text with details about you, what you do or your professional career. You can add more information on the about page."
      :buttons="[
        {
          label: 'Projects',
          onClick: () => {},
          class:
            'cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md px-4 py-2',
        },

        {
          label: 'GitHub',
          link: 'https://github.com/RONSVER',
          class:
            'border border-gray-400 text-gray-700 hover:bg-gray-50 font-medium rounded-md px-4 py-2',
        },
      ]"
    />

    <img src="" alt="Photo" />
  </div>
</template>
