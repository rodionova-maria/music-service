// import { useEffect } from 'react'
import FilterListItem from '../FilterListItem/FilterListItem'
import s from './FilterPopup.module.scss'

function FilterPopup({ data, type, storeFilter }) {
  return (
    <div className={s.dropdown__menu}>
      {data.map((elem) => (
        <FilterListItem key={elem} text={elem} type={type} storeFilter={storeFilter} />
      ))}
    </div>
  )
}

export default FilterPopup
