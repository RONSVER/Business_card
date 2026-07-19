<script setup lang="ts">
import { ref, reactive } from 'vue'
import { MotionBlock } from '@/shared/ui/MotionBlock'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import YellowBg from '@/pages/HomePage/assets/yellow-bg.svg'

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const ACCESS_KEY = '52f7e48b-113f-4d74-9e25-7b6fec521442'

function validate() {
  errors.name = name.value.trim() ? '' : 'Name is required'
  errors.email = /^\S+@\S+\.\S+$/.test(email.value) ? '' : 'Valid email is required'
  errors.message = message.value.trim() ? '' : 'Message is required'
  return !errors.name && !errors.email && !errors.message
}

async function handleSubmit() {
  successMessage.value = ''
  errorMessage.value = ''

  if (!validate()) return

  loading.value = true

  const formData = {
    access_key: ACCESS_KEY,
    name: name.value,
    email: email.value,
    message: message.value,
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const result = await res.json()

    if (result.success) {
      successMessage.value = 'Сообщение успешно отправлено!'
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      errorMessage.value = result.message || 'Ошибка при отправке формы'
    }
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Ошибка сети. Попробуйте ещё раз.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="relative my-10 flex flex-col items-center px-4 sm:my-14">
    <MotionBlock
      :src="YellowBg"
      alt="Photo"
      class="pointer-events-none absolute -top-60 -right-16 -z-10 w-[420px] sm:-top-40 sm:-right-24 sm:w-[560px] md:-top-60 md:-right-36 md:w-[820px]"
    />
    <SectionTitle title="Your Project" class-name="mb-6" />

    <form
      @submit.prevent="handleSubmit"
      class="my-6 w-full max-w-lg space-y-6 rounded-xl bg-[#f7f8fc] p-4 shadow-md sm:my-10 sm:p-6"
    >
      <!-- Success & Error Messages -->
      <div v-if="successMessage" class="rounded-md bg-green-100 px-4 py-2 text-green-800">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="rounded-md bg-red-100 px-4 py-2 text-red-800">
        {{ errorMessage }}
      </div>

      <!-- Name -->
      <div>
        <label class="mb-1 block text-gray-700">Name</label>
        <input
          v-model="name"
          type="text"
          :class="[
            'w-full rounded-md border px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-400',
            errors.name ? 'border-red-500' : 'border-gray-300',
          ]"
        />
        <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
      </div>

      <!-- Email -->
      <div>
        <label class="mb-1 block text-gray-700">Email</label>
        <input
          v-model="email"
          type="email"
          :class="[
            'w-full rounded-md border px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-400',
            errors.email ? 'border-red-500' : 'border-gray-300',
          ]"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
      </div>

      <!-- Message -->
      <div>
        <label class="mb-1 block text-gray-700">Message</label>
        <textarea
          v-model="message"
          rows="5"
          :class="[
            'w-full resize-none rounded-md border px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-400',
            errors.message ? 'border-red-500' : 'border-gray-300',
          ]"
        ></textarea>
        <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="loading"
          class="relative rounded-md bg-yellow-400 px-6 py-2 font-medium text-black transition hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span v-if="!loading">Send</span>
          <span v-else class="flex items-center space-x-2">
            <svg
              class="h-5 w-5 animate-spin text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <span>Sending...</span>
          </span>
        </button>
      </div>
    </form>
  </section>
</template>
