import axiosInstance from "./axios";
import { Contact } from "../types/contacts";

export const getContacts = async (): Promise<Contact[]> => {
  const response = await axiosInstance.get<Contact[]>('/contacts')
  return response.data
}