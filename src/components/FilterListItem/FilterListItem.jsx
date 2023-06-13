import { useState } from 'react'
import s from './FilterListItem.module.scss'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { delAuthor, delGenre, delYear, setAuthor, setGenre, setYear } from '../../store/slices/filter'

function FilterListItem({ text, type, storeFilter }) {
  const dispatch = useDispatch()

  const [isSelected, setSelected] = useState(storeFilter.includes(text))

  const handleClick = () => {
    setSelected(!isSelected)
  }

  useEffect(() => {
    if (isSelected) {
      if (!storeFilter.includes(text)) {
        switch (type) {
          case 'author':
            dispatch(setAuthor(text))
            break
          case 'genre':
            dispatch(setGenre(text))
            break
          case 'year':
            dispatch(setYear(text))
            break
          default:
            break
        }
      }
    } else {
      if (storeFilter.includes(text)) {
        switch (type) {
          case 'author':
            dispatch(delAuthor(text))
            break
          case 'genre':
            dispatch(delGenre(text))
            break
          case 'year':
            dispatch(delYear)
            break
          default:
            break
        }
      }
    }
  }, [isSelected, text, type])

  return (
    <a className={`${s.dropdown__item} ${isSelected ? s.dropdown__item_selected : ''}`} onClick={handleClick}>
      {text}
    </a>
  )
}

export default FilterListItem
