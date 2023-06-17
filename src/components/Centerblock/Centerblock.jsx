// import { useState } from 'react'
import Search from '../Search/Search'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import Playlist from '../Playlist/Playlist'
import s from './Centerblock.module.scss'

function Centerblock({ data, error }) {
  return (
    <div className={`${s.main__centerblock} centerblock`}>
      <Search />
      <h2 className={s.centerblock__h2}>Треки</h2>
      <div className={s.centerblock__content}>
        <PlaylistTitle />
        <Playlist data={data} error={error} />
      </div>
    </div>
  )
}

export default Centerblock
