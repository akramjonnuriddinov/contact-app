<script setup lang="ts">
import AppContainer from './AppContainer.vue'
import {
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
} from '@heroicons/vue/24/outline'
</script>

<template>
  <header class="py-[18px] shadow-custom-shadow">
    <AppContainer>
      <div class="flex items-center">
        <span class="font-medium text-xl">Contacts</span>
        <button class="ml-auto mr-4">
          <MagnifyingGlassIcon class="w-6" />
        </button>
        <button>
          <EllipsisVerticalIcon class="w-6" />
        </button>
      </div>
    </AppContainer>
  </header>
</template>
