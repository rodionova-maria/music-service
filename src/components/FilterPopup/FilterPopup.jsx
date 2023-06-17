import { useDispatch } from 'react-redux'
import FilterListItem from '../FilterListItem/FilterListItem'
import s from './FilterPopup.module.scss'
import { delAuthor, delGenre, delYear, setAuthor, setGenre, setYear } from '../../store/slices/filter'

function FilterPopup({ data, type, storeFilter }) {
  const dispatch = useDispatch()

  const onClick = (text) => {
    if (storeFilter.includes(text)) {
      switch (type) {
        case 'author':
          dispatch(delAuthor(text))
          break
        case 'genre':
          dispatch(delGenre(text))
          break
        default:
          dispatch(delYear(text))
          break
      }
    } else {
      switch (type) {
        case 'author':
          dispatch(setAuthor(text))
          break
        case 'genre':
          dispatch(setGenre(text))
          break
        default:
          dispatch(setYear(text))
          break
      }
    }
  }

  return (
    <div className={s.dropdown__menu}>
      <div className={s.dropdown__wrapper}>
        {data.map((elem) => (
          <FilterListItem
            key={elem}
            text={elem}
            isSelected={storeFilter.includes(elem)}
            onClick={() => {
              onClick(elem)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default FilterPopup
