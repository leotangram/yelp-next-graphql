import { createReducer } from '@reduxjs/toolkit'
import { setSearch } from './actions'

type SearchState = {
  searchedTerm: string | string[]
}

const initialState: SearchState = {
  searchedTerm: ''
}

export const searchReducer = createReducer(initialState, builder => {
  builder.addCase(setSearch, (state, action) => {
    state.searchedTerm = action.payload
  })
})
