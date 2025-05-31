export interface Photo {
  id: string
  src: string
  alt: string
  category: string
  width: number
  height: number
}

export interface Category {
  id: string
  name: string
  slug: string
}

export interface BookingData {
  date: string
  time: string
  type: string
  duration: number
  clientName: string
  clientEmail: string
  clientPhone: string
  message?: string
}

export interface TimeSlot {
  date: string
  time: string
  available: boolean
}
