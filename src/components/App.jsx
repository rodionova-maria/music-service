import { AppRoutes } from '../routes'
import '../assets/css/style.scss'
import s from './App.module.scss'
import { ThemeContext, themes } from '../contexts/theme'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  const dispatch = useDispatch()
  const tokenAuthorize = useSelector(selectTokenRefresh)
  const [tokenRefresh] = useTokenRefreshMutation()

  const changeToken = async () => {
    if (tokenAuthorize) {
      tokenRefresh({ refresh: tokenAuthorize })
        .unwrap()
        .then((data) => {
          dispatch(setAccessToken(data))
        })
    }
  }

  useEffect(() => {
    const t = setTimeout(() => {
      changeToken()
    }, 3000)
    return () => {
      clearTimeout(t)
    }
  }, [])

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
          <AppRoutes />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
