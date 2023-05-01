import s from './Burger.module.scss'

function Burger({ onClick }) {
  return (
    <div onClick={onClick} className={`${s.nav__burger} burger`}>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
    </div>
  )
}

export default Burger
