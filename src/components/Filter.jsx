import { useState } from 'react'
import FilterPopup from './FilterPopup'

const FILTER_LIST = [
  { id: 1, type: 'author', text: 'исполнителю' },
  { id: 2, type: 'year', text: 'году выпуска' },
  { id: 3, type: 'genre', text: 'жанру' },
]

function Filter() {
  const [isPopupVisible, setPopupVisible] = useState(false)
  const [filterBy, setFilterBy] = useState()
  const [popupCoords, setPopupCoords] = useState({ top: 0, left: 0 })

  const getFilterType = (target) => {
    if (target.classList.contains('button-author')) {
      return 'author'
    }
    if (target.classList.contains('button-year')) {
      return 'year'
    }
    if (target.classList.contains('button-genre')) {
      return 'genre'
    }
    return undefined
  }

  const getPopupCoords = (element) => {
    const left = element.offsetLeft
    const bottom = element.offsetTop + element.offsetHeight

    const popupTop = `${bottom}px`
    const popupLeft = `${left}px`
    return { top: popupTop, left: popupLeft }
  }

  const handleFilterClick = (event) => {
    const { target } = event
    if (!target.classList.contains('filter__button')) return
    setPopupCoords(getPopupCoords(target))
    const filterType = getFilterType(target)
    setFilterBy(filterType)
    setPopupVisible((prevState) => filterType !== filterBy || !prevState)
  }

  const setActive = (filterType) =>
    isPopupVisible && filterBy === filterType ? ' _btn-text_active' : ''

  const filterButtons = FILTER_LIST.map(({ id, type, text }) => (
    <div className={`filter__button button-${type} _btn-text ${setActive(type)}`} key={id}>
      {text}
    </div>
  ))

  return (
    <>
      <div className="centerblock__filter filter" onClick={handleFilterClick}>
        <div className="filter__title">Искать по:</div>
        {filterButtons}
      </div>
      <FilterPopup isPopupVisible={isPopupVisible} filterBy={filterBy} coords={popupCoords} />
    </>
  )
}

export default Filter
