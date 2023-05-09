import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../Skeleton/Skeleton'
import s from './SidebarItem.module.scss'

function SidebarItem(props) {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => {
      clearTimeout(t)
    }
  }, [])

  return (
    <div className={s.sidebar__item}>
      {isLoading ? (
        <Skeleton style={{ width: '250px', height: '150px' }} />
      ) : (
        <Link className={s.sidebar__link} to={props.link}>
          <img className={s.sidebar__img} src={props.imgSrc} alt={props.imgAlt} />
        </Link>
      )}
    </div>
  )
}

export default SidebarItem
