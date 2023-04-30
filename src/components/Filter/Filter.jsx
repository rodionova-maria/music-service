import { useState } from 'react'
import FilterPopup from '../FilterPopup/FilterPopup'
import s from './Filter.module.scss'

const FILTER_LIST = [
  { type: 'author', text: 'исполнителю' },
  { type: 'year', text: 'году выпуска' },
  { type: 'genre', text: 'жанру' },
]

function Filter() {
  const [isPopupVisible, setPopupVisible] = useState(false)
  const [filterBy, setFilterBy] = useState()
  const [popupCoords, setPopupCoords] = useState({})

  const getPopupCoords = (element) => {
    const left = element.offsetLeft
    const bottom = element.offsetTop + element.offsetHeight + 10

    const popupTop = `${bottom}px`
    const popupLeft = `${left}px`

    return { top: popupTop, left: popupLeft }
  }

  const handleFilterClick = (event) => {
    const { target } = event
    if (!target.classList.contains(`${s.filter__button}`)) return

    setPopupCoords(getPopupCoords(target))

    const selectedType = target.dataset.type

    setFilterBy(selectedType)
    setPopupVisible((prevState) => selectedType !== filterBy || !prevState)
  }

  const setButtonActive = (filterType) => (isPopupVisible && filterBy === filterType ? ' _btn-text_active' : '')

  const filterButtons = FILTER_LIST.map(({ type, text }) => (
    <div className={`${s.filter__button} button-${type} _btn-text ${setButtonActive(type)}`} key={type} data-type={type}>
      {text}
    </div>
  ))

  return (
    <>
      <div className={`${s.centerblock__filter} filter`} onClick={handleFilterClick}>
        <div className={s.filter__title}>Искать по:</div>
        {filterButtons}
      </div>
      <FilterPopup isPopupVisible={isPopupVisible} filterBy={filterBy} coords={popupCoords} />
    </>
  )
}

export default Filter
