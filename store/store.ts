import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { searchReducer } from '../features/search'
import { businessReducer } from '../features/business'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    business: businessReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
