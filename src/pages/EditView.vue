<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getContactById } from '../api/contactService'
import { Contact } from '../types/contacts'
import { useRoute } from 'vue-router'
import { useContactStore } from '../stores/contactStore'

const contactStore = useContactStore()
const route = useRoute()
const contact = ref<Contact>({
  id: '',
  name: '',
  email: '',
  phone: '',
})

onMounted(async () => {
  await getContactById(route.params.id as string)
  // contact.value = { ...res }
  console.log(contact.value, 'edit')
  console.log(route.params.id)
})
</script>

<template>
  <AppContainer>
    <form
      @submit.prevent="
        contactStore.updateContactForm(route.params.id as string)
      "
      class="py-8"
    >
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
