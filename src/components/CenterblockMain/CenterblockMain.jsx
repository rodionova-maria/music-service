// import { useState } from 'react'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import Playlist from '../Playlist/Playlist'
import s from './CenterblockMain.module.scss'
import { useSelector } from 'react-redux'
import { selectAuthor, selectGenre, selectYear } from '../../store/slices/filter'

function CenterblockMain({ data, error, isLoading }) {
  const byAuthor = useSelector(selectAuthor)
  const byGenre = useSelector(selectGenre)
  const byYear = useSelector(selectYear)

  let filteredData = [...data]

  if (byAuthor.length > 0) {
    filteredData = filteredData.filter(({ author }) => byAuthor.includes(author))
  }

  if (byGenre.length > 0) {
    filteredData = filteredData.filter(({ genre }) => byGenre.includes(genre))
  }

  switch (byYear[0]) {
    case 'новые':
      filteredData = filteredData.filter((el) => el).sort(({ release_date: adate }, { release_date: bdate }) => new Date(adate).valueOf() - new Date(bdate).valueOf())
      break
    case 'старые':
      filteredData = filteredData.filter((el) => el).sort(({ release_date: adate }, { release_date: bdate }) => new Date(bdate).valueOf() - new Date(adate).valueOf())
      break
    default:
      break
  }

  return (
    <div className={`${s.main__centerblock} centerblock`}>
      <Search />
      <h2 className={s.centerblock__h2}>Все треки</h2>
      <Filter data={data} />
      <div className={s.centerblock__content}>
        <PlaylistTitle />
        <Playlist data={filteredData} error={error} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default CenterblockMain
