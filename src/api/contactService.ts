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

export const getContactById = async (id: string): Promise<Contact> => {
  const response = await axiosInstance.get<Contact>(`/contacts/${id}`)
  return response.data
}

export const updateContact = async (id: string, updatedContact: AddContactPayload): Promise<Contact> => {
  const response = await axiosInstance.put<Contact>(`/contacts/${id}`, updatedContact)
  return response.data
}