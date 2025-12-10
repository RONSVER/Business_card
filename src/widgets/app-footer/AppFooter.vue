<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import { Divider } from '@/shared/ui/Divider'
</script>

<template>
  <section class="absolute flex w-full flex-col items-center overflow-hidden">
    <div class="z-10 flex flex-col items-center justify-center gap-3.5">
      <ul class="flex justify-center gap-5">
        <li>
          <a href="tel:+491791121034">
            <PhoneIcon class="size-11 text-black" />
          </a>
        </li>

        <li>
          <a href="mailto:ibragimchekmazov333@gmail.com">
            <EnvelopeIcon class="size-11 text-black" />
          </a>
        </li>
      </ul>

      <Divider />
    </div>

    <img src="../../shared/assets/Vector.svg" alt="PhotoFooter" class="w-full max-w-[1500px]" />
  </section>
</template>
