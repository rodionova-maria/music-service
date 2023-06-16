import { useState } from 'react'
import { ThemeContext, themes } from './contexts/theme'
import { render } from '@testing-library/react'

const AllProviders = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }

  return <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options })
