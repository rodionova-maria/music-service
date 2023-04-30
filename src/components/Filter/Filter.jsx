import { useState } from 'react'
import FilterButton from '../FilterButton/FilterButton'
import FilterPopup from '../FilterPopup/FilterPopup'
import s from './Filter.module.scss'

const FILTER_LIST = [
  { type: 'author', text: 'исполнителю' },
  { type: 'year', text: 'году выпуска' },
  { type: 'genre', text: 'жанру' },
]

function Filter() {
  const [filterBy, setFilterBy] = useState()

  const handleFilterClick = (type) => {
    if (filterBy === type) {
      setFilterBy()
    } else {
      setFilterBy(type)
    }
  }

  const checkIsActive = (type) => {
    return filterBy === type
  }

  const filterButtons = FILTER_LIST.map(({ type, text }) => (
    <div className={s['filter__button-wrapper']} key={type}>
      <FilterButton
        type={type}
        text={text}
        isActive={checkIsActive(type)}
        onClick={() => {
          handleFilterClick(type)
        }}
      />
      {checkIsActive(type) && <FilterPopup type={type} />}
    </div>
  ))

  return (
    <div className={`${s.centerblock__filter} filter`}>
      <div className={s.filter__title}>Искать по:</div>
      {filterButtons}
    </div>
  )
}

export default Filter
