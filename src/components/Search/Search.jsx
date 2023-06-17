import s from './Search.module.scss'
import icons from '../../assets/icons/sprite.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setSearch } from '../../store/slices/filter'

function Search() {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')

  const handleChange = (event) => {
    setSearchText(event.target.value.trim())
  }

  useEffect(() => {
    dispatch(setSearch(searchText))
  }, [searchText])

  return (
    <div className={`${s.centerblock__search} search`}>
      <svg className={s.search__svg}>
        <use xlinkHref={`${icons}#icon-search`} />
      </svg>
      <input className={s.search__text} type="search" placeholder="Поиск" name="search" onChange={handleChange} />
    </div>
  )
}

export default Search
