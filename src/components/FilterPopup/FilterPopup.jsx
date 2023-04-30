import s from './FilterPopup.module.scss'

const authors = ['Michael Jackson', 'Frank Sinatra', 'Arctic Monkeys', 'Calvin Harris', 'Zhu']
const genres = ['Джаз', 'Блюз', 'Классика', 'Электронная', 'Рок']
const years = ['2022', '2021', '2020', '2019', '2018']

function FilterPopup({ type }) {
  let list = ''

  switch (type) {
    case 'author':
      list = authors.map((author) => (
        <div className={s.dropdown__item} key={author}>
          {author}
        </div>
      ))
      break
    case 'year':
      list = years.map((year) => (
        <div className={s.dropdown__item} key={year}>
          {year}
        </div>
      ))
      break
    case 'genre':
      list = genres.map((genre) => (
        <div className={s.dropdown__item} key={genre}>
          {genre}
        </div>
      ))
      break
    default:
      break
  }

  return <div className={s.dropdown__menu}>{list}</div>
}

export default FilterPopup
