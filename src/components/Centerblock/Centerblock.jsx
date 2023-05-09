// import { useState } from 'react'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import Playlist from '../Playlist/Playlist'
import s from './Centerblock.module.scss'
import { ALL_TRACKS, COLLECTIONS } from '../../constants'

function Centerblock({ playlistId, isMain }) {
  const getPlaylistById = function (id) {
    if (id) {
      const tracksList = COLLECTIONS.find((collection) => collection.id === id)
      return tracksList.items
    }
    return ALL_TRACKS
  }

  return (
    <div className={`${s.main__centerblock} centerblock`}>
      <Search />
      <h2 className={s.centerblock__h2}>Треки</h2>
      {isMain && <Filter />}
      <div className={s.centerblock__content}>
        <PlaylistTitle />
        <Playlist tracks={getPlaylistById(playlistId)} />
      </div>
    </div>
  )
}

export default Centerblock
