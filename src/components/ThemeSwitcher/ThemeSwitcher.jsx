import { themes, useThemeContext } from '../../contexts/theme'
import icons from '../../assets/icons/sprite.svg'
import s from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = () => {
  const { currentTheme, toggleTheme } = useThemeContext()

  return (
    <svg className={`${s['theme-switcher-svg']}`} onClick={toggleTheme} data-testid="theme-switcher-svg">
      <use xlinkHref={`${icons}#theme-${currentTheme === themes.dark ? 'light' : 'dark'}`} data-testid="theme-switcher-use" />
    </svg>
  )
}
