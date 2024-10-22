export interface Contact {
  id: string
  name: string
  email: string
  phone: string
}

export interface AddContactPayload {
  name: string
  email: string
  phone: string
}
