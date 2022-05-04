import { ChangeEvent, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FormElement } from '@nextui-org/react'
import { useAppDispatch, useAppSelector } from './reduxHook'
import { setSearch } from '../features/search/actions'
import { selectSearch } from '../features/search'

export const useSearch = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { searchedTerm } = useAppSelector(selectSearch)

  useEffect(() => {
    const localSearchedTerm = localStorage.getItem('searchedTerm')
    if (localSearchedTerm?.length) {
      dispatch(setSearch(localSearchedTerm))
    }
  }, [])

  useEffect(() => {
    if (!searchedTerm) {
      router.push('/')
    } else {
      router.push(`/?searchedTerm=${searchedTerm}`)
    }
  }, [searchedTerm])

  const onHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/?searchedTerm=${searchedTerm}`)
  }

  const onHandleSearch = (event: ChangeEvent<FormElement>) => {
    localStorage.setItem('searchedTerm', event.target.value)
    dispatch(setSearch(event.target.value))
  }

  return {
    onHandleSearch,
    onHandleSubmit,
    searchedTerm
  }
}
