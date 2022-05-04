export interface SearchBusinessResult {
  search: Search
}

export interface Search {
  total: number
  business: BusinessShort[]
}

export interface BusinessShort {
  display_phone: string
  id: string
  location: Location
  name: string
  photos: string[]
  rating: number
  review_count: number
}

export interface Location {
  address1: string
}

export interface BusinessResult {
  business: Business
}

export interface Business {
  name: string
  photos: string[]
  id: string
  location: Location
  review_count: number
  rating: number
  display_phone: string
  price: string
  hours: Hour[]
  is_closed: boolean
  reviews: Review[]
}

export interface Hour {
  hours_type: string
  is_open_now: boolean
  open: Open[]
}

export interface Open {
  is_overnight: boolean
  end: string
  start: string
  day: number
}

export interface Review {
  text: string
}
