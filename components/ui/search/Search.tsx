import { Input } from '@nextui-org/react'
import { useSearch } from '../../../hooks/useSearch'

export const Search = () => {
  const { onHandleSearch, onHandleSubmit, searchedTerm } = useSearch()

  return (
    <form onSubmit={onHandleSubmit}>
      <Input
        type="search"
        bordered
        animated
        placeholder="Search Business"
        color="secondary"
        aria-labelledby="search"
        onChange={onHandleSearch}
        value={searchedTerm}
      />
    </form>
  )
}
