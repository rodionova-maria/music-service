import { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'

function SidebarItem(props) {
  const [loading, setLoading] = useState(true)

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
      {loading ? (
        <ContentLoader backgroundColor="#313131" foregroundColor="#333">
          <rect x="0" y="0" width="250" height="150" />
        </ContentLoader>
      ) : (
        <a className="sidebar__link" href={props.link}>
          <img className="sidebar__img" src={props.imgSrc} alt={props.imgAlt} />
        </a>
      )}
    </div>
  )
}

export default SidebarItem
