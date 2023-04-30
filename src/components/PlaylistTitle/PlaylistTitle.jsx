import s from './PlaylistTitle.module.scss'
import icons from '../../assets/icons/sprite.svg'

function PlaylistTitle() {
  return (
    <div className={`${s.content__title} playlist-title`}>
      <div className={`${s['playlist-title__col']} ${s.col01}`}>Трек</div>
      <div className={`${s['playlist-title__col']} ${s.col02}`}>ИСПОЛНИТЕЛЬ</div>
      <div className={`${s['playlist-title__col']} ${s.col03}`}>АЛЬБОМ</div>
      <div className={`${s['playlist-title__col']} ${s.col04}`}>
        <svg className={s['playlist-title__svg']} alt="time">
          <use xlinkHref={`${icons}#icon-watch`} />
        </svg>
      </div>
    </div>
  )
}

export default PlaylistTitle
