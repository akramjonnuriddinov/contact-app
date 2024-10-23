import { defineStore } from 'pinia'
import { ref } from 'vue'
import { AddContactPayload } from '../types/contacts'
import { addContact, updateContact } from '../api/contactService'

export const useContactStore = defineStore('contactStore', () => {
  const contact = ref<AddContactPayload>({
    name: '',
    email: '',
    phone: '',
  })
  const loading = ref(false)

  const submitContactForm = async () => {
    try {
      loading.value = true
      await addContact(contact.value)
      contact.value = {
        name: '',
        email: '',
        phone: '',
      }
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const updateContactForm = async (id: string) => {
    try {
      loading.value = true
      await updateContact(id, contact.value)
      contact.value = {
        name: '',
        email: '',
        phone: '',
      }
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    contact,
    loading,
    submitContactForm,
    updateContactForm,
  }
})
