import s from './Search.module.scss'
import icons from '../../assets/icons/sprite.svg'

function Search() {
  return (
    <div className={`${s.centerblock__search} search`}>
      <svg className={s.search__svg}>
        <use xlinkHref={`${icons}#icon-search`} />
      </svg>
      <input className={s.search__text} type="search" placeholder="Поиск" name="search" />
    </div>
  )
}

export default Search
