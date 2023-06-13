import s from './FilterListItem.module.scss'

function FilterListItem({ text, isSelected, onClick }) {
  return (
    <a className={`${s.dropdown__item} ${isSelected ? s.dropdown__item_selected : ''}`} onClick={onClick}>
      {text}
    </a>
  )
}

export default FilterListItem
