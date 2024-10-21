<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import { CheckIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header class="py-[18px] shadow-custom-shadow">
    <AppContainer>
      <div class="flex items-center">
        <router-link to="/" class="mr-8">
          <ArrowLeftIcon class="w-6" />
        </router-link>
        <span class="font-medium text-xl">Add</span>
        <button class="ml-auto">
          <CheckIcon class="w-6" />
        </button>
      </div>
    </AppContainer>
  </header>
</template>
