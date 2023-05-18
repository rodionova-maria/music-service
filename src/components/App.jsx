import { AppRoutes } from '../routes'
import { useCookies } from 'react-cookie'
import '../assets/css/style.scss'
import s from './App.module.scss'
import { ThemeContext, themes } from '../contexts/theme'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [user, setCookie] = useCookies(['login'])
  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const toggleTheme = () => {
    console.log(currentTheme)
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }
    setCurrentTheme(themes.dark)
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <AppRoutes user={user} setUser={setCookie} />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
