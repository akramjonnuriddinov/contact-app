<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <AppContainer
    class="flex relative h-full items-center justify-center flex-col flex-grow"
  >
    <img
      class="mb-5"
      src="@/assets/images/empty-box.svg"
      width="105"
      height="100"
      alt="empty box"
    />
    <span class="opacity-40 w-full text-center font-medium text-black"
      >You have no contacts
    </span>
    <router-link
      to="/add"
      class="bg-blue-400 absolute bottom-7 right-10 w-16 h-16 flex items-center justify-center rounded-full text-white"
    >
      <PlusIcon class="w-6" />
    </router-link>
  </AppContainer>
</template>
