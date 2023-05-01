import s from './FilterButton.module.scss'

function FilterButton({ type, text, isActive, onClick }) {
  return (
    <div className={`${s.filter__button} button-${type} _btn-text ${isActive ? '_btn-text_active' : ''}`} onClick={onClick}>
      {text}
    </div>
  )
}

export default FilterButton
