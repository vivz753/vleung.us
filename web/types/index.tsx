export interface Entry {
  title: string
  organization: string
  location: string
  date: string
  description?: string
  link?: string
}

export enum Icon {
  GITHUB,
  MAIL,
  LINKEDIN,
}
