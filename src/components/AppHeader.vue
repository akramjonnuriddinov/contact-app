<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import { ref } from 'vue'
import {
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  XMarkIcon,
  ChevronLeftIcon,
} from '@heroicons/vue/24/outline'

const search = ref('')

const clearInput = () => (search.value = '')
</script>

<template>
  <header class="py-[18px] shadow-custom-shadow h-16">
    <AppContainer>
      <div class="flex items-center group">
        <span class="font-medium text-xl group-focus-within:hidden"
          >Contacts</span
        >
        <RouterLink
          to="/"
          class="left-0 hidden opacity-100 group-focus-within:flex"
        >
          <ChevronLeftIcon class="w-6" />
        </RouterLink>
        <div
          class="ml-auto flex-1 mr-4 relative group w-full group-focus-within:mr-2 group-focus-within:ml-4"
        >
          <button
            @click="clearInput"
            class="right-0 absolute invisible opacity-50 transition-opacity duration-300 group-focus-within:visible"
          >
            <XMarkIcon class="w-6" />
          </button>
          <input
            @blur="clearInput"
            v-model="search"
            class="outline-none pr-5 pl-1 placeholder:placeholder-shown:invisible focus:placeholder:visible focus-within:sibling-hidden focus:w-full"
            type="text"
            placeholder="Search..."
          />
          <MagnifyingGlassIcon
            class="w-6 absolute top-0 right-0 opacity-100 transition-opacity duration-300 group-focus-within:opacity-0"
          />
        </div>
        <button>
          <EllipsisVerticalIcon class="w-6" />
        </button>
      </div>
    </AppContainer>
  </header>
</template>
