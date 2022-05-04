import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

export const selectBusiness = (state: RootState) => state.business

export const businessSelector = createSelector(selectBusiness, state => state)
