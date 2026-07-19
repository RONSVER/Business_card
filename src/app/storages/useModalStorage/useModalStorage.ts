import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ModalData } from '@/entities/Modal'

export const useModalStore = defineStore('modal', () => {
  const modalObj = ref<ModalData | null>(null)

  function open(data: ModalData) {
    modalObj.value = data
  }

  function close() {
    modalObj.value = null
  }

  return {
    modalObj,
    open,
    close,
  }
})
