function Burger({ onClick }) {
  return (
    <div onClick={onClick} className="nav__burger burger">
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>
  )
}

export default Burger
