import { gql } from '@apollo/client'

export const SEARCH_BUSINESS = gql`
  query SearchBusiness($term: String) {
    search(location: "New York City", limit: 10, term: $term) {
      total
      business {
        display_phone
        id
        location {
          address1
        }
        name
        photos
        rating
        review_count
      }
    }
  }
`

export const BUSINESS = gql`
  query Business($id: String) {
    business(id: $id) {
      name
      photos
      id
      location {
        address1
      }
      review_count
      rating
      display_phone
      price
      hours {
        hours_type
        is_open_now
        open {
          is_overnight
          end
          start
          day
        }
      }
      is_closed
      reviews {
        text
      }
    }
  }
`
