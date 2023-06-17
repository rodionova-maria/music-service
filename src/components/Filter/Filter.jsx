import { useState } from 'react'
import FilterButton from '../FilterButton/FilterButton'
import FilterPopup from '../FilterPopup/FilterPopup'
import s from './Filter.module.scss'
import { useSelector } from 'react-redux'
import { selectAuthor, selectGenre, selectYear } from '../../store/slices/filter'

function Filter({ data }) {
  const filterList = [
    { type: 'author', text: 'исполнителю', data: [...new Set(data.map((elem) => elem.author))], storeFilter: useSelector(selectAuthor) },
    { type: 'year', text: 'году выпуска', data: ['новые', 'старые'], storeFilter: useSelector(selectYear) },
    { type: 'genre', text: 'жанру', data: [...new Set(data.map((elem) => elem.genre))], storeFilter: useSelector(selectGenre) },
  ]

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

  const filterButtons = filterList.map(({ type, text, data, storeFilter }) => (
    <div className={s['filter__button-wrapper']} key={type}>
      <FilterButton
        type={type}
        text={text}
        isActive={checkIsActive(type)}
        onClick={() => {
          handleFilterClick(type)
        }}
      />
      {storeFilter.length ? <div className={s.filter__num}>{storeFilter.length}</div> : ''}
      {checkIsActive(type) && <FilterPopup type={type} data={data} storeFilter={storeFilter} />}
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
