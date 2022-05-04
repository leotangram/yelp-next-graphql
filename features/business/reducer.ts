import { createReducer } from '@reduxjs/toolkit'
import { setBusinessListId } from './actions'

type SearchState = {
  businessIds: string[]
}

const initialState: SearchState = {
  businessIds: []
}

export const businessReducer = createReducer(initialState, builder => {
  builder.addCase(setBusinessListId, (state, action) => {
    state.businessIds = [...state.businessIds, action.payload]
  })
})
