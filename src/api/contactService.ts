import axiosInstance from './axios'
import { Contact, AddContactPayload } from '../types/contacts'

export const getContacts = async (): Promise<Contact[]> => {
  const response = await axiosInstance.get<Contact[]>('/contacts')
  return response.data
}

export const addContact = async (
  contact: AddContactPayload
): Promise<Contact> => {
  const response = await axiosInstance.post<Contact>('/contacts', contact)
  return response.data
}
