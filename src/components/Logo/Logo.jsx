import s from './Logo.module.scss'
import logo from '../../assets/images/logo.svg'
import { useThemeContext } from '../../contexts/theme'

const Logo = () => {
  const { currentTheme } = useThemeContext()

  return (
    <div className={`${s.nav__logo} logo`}>
      <svg className={s.logo__image}>
        <use xlinkHref={`${logo}#theme-${currentTheme}`} />
      </svg>
    </div>
  )
}

export default Logo
