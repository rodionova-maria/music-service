import s from './Logo.module.scss'
import logo from '../../assets/images/logo.png'

function Logo() {
  return (
    <div className={`${s.nav__logo} logo`}>
      <img className={s.logo__image} src={logo} alt="logo" />
    </div>
  )
}

export default Logo
