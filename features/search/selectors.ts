import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

export const selectSearch = (state: RootState) => state.search

export const searchSelector = createSelector(selectSearch, state => state)
