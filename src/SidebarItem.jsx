function SidebarItem(props) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={props.link}>
        <img className="sidebar__img" src={props.imgSrc} alt={props.imgAlt} />
      </a>
    </div>
  )
}

export default SidebarItem
