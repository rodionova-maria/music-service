import { useThemeContext } from '../../contexts/theme'
import icons from '../../assets/icons/sprite.svg'
import s from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = () => {
  const { currentTheme, toggleTheme } = useThemeContext()

  return (
    <svg className={`${s['theme-switcher-svg']}`} onClick={toggleTheme} data-testid="theme-switcher-button">
      <use xlinkHref={`${icons}#theme-${currentTheme}`} />
    </svg>
  )
}
