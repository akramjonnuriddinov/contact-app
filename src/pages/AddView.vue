<script setup lang="ts">
import { useContactStore } from '../stores/contactStore'

const contactStore = useContactStore()
</script>

<template>
  <AppContainer>
    <form @submit.prevent="contactStore.submitContactForm" class="py-8">
      <label class="flex flex-col mb-5">
        <span class="mb-1">Name</span>
        <input
          v-model="contactStore.contact.name"
          class="bg-[#FAFAFA] border border-[#D9D9D9] w-full py-4 px-2 rounded"
          type="text"
          placeholder="Enter name"
        />
      </label>
      <label class="flex flex-col mb-5">
        <span class="mb-1">Email</span>
        <input
          v-model="contactStore.contact.email"
          class="bg-[#FAFAFA] border border-[#D9D9D9] w-full py-4 px-2 rounded"
          type="text"
          placeholder="Enter email"
        />
      </label>
      <label class="flex flex-col">
        <span class="mb-1">Phone number</span>
        <input
          v-model="contactStore.contact.phone"
          class="bg-[#FAFAFA] border border-[#D9D9D9] w-full py-4 px-2 rounded"
          type="text"
          placeholder="+998  _ _   _ _ _   _ _   _ _"
        />
      </label>
      <button
        class="mt-5 bg-blue-400 w-full text-center p-2 rounded text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  </AppContainer>
</template>
