import { useEffect, useState } from 'react'
import Skeleton from './Skeleton'

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
    <div className="sidebar__item">
      {isLoading ? (
        <Skeleton style={{ width: '250', height: '150' }} />
      ) : (
        <a className="sidebar__link" href={props.link}>
          <img className="sidebar__img" src={props.imgSrc} alt={props.imgAlt} />
        </a>
      )}
    </div>
  )
}

export default SidebarItem
