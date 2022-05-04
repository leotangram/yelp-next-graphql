import { createAction } from '@reduxjs/toolkit'

export const setSearch = createAction<string | string[]>('search/setSearch')
