import FilterButton from './FilterButton'

function Filter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterButton type="author" text="исполнителю" />
      <FilterButton type="year" text="году выпуска" />
      <FilterButton type="genre" text="жанру" />
    </div>
  )
}

export default Filter
