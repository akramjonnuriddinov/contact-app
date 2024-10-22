<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import { UserIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted } from 'vue'
import { Contact } from '../types/contacts'
import { getContacts } from '../api/contactService'

const contacts = ref<Contact[]>([])
const loading = ref(true)
const error = ref<string | null>(null)
const len = ref(0)

const fetchContacts = async () => {
  try {
    contacts.value = await getContacts()
  } catch (err) {
    error.value = 'Failed to load contacts'
    len.value = 0
    console.error(err)
  } finally {
    loading.value = false
    len.value = contacts.value?.length || 0
  }
}

onMounted(fetchContacts)
</script>

<template>
  <AppContainer
    v-if="len == 0"
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
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>{{ contacts }}</div>
    </div>
    <router-link
      to="/add"
      class="bg-blue-400 absolute bottom-7 right-10 w-16 h-16 flex items-center justify-center rounded-full text-white"
    >
      <PlusIcon class="w-6" />
    </router-link>
  </AppContainer>
  <AppContainer v-else class="relative">
    <ul class="py-10 flex flex-col">
      <li v-for="contact in contacts" :key="contact.id" class="p-1 mb-2">
        <RouterLink
          :to="{
            name: 'edit',
            params: {
              id: contact.id,
            },
          }"
          class="flex items-center"
        >
          <div
            class="w-[42px] h-[42px] mr-3 bg-[#7B7B7B] text-white rounded-full flex items-center justify-center"
          >
            <UserIcon class="w-7" />
          </div>
          <div class="flex flex-col">
            <span
              class="mb-1 font-medium whitespace-nowrap text-ellipsis overflow-hidden w-[165px]"
              >{{ contact.name }} | {{ contact.email }}</span
            >
            <span class="text-[#8B8B8B] text-[14px]">{{ contact.phone }}</span>
          </div>
          <PhoneIcon class="w-5 text-[#08AE2D] ml-auto" />
        </RouterLink>
      </li>
    </ul>
    <router-link
      to="/add"
      class="bg-blue-400 fixed bottom-7 right-10 w-16 h-16 flex items-center justify-center rounded-full text-white"
    >
      <PlusIcon class="w-6" />
    </router-link>
  </AppContainer>
</template>
