import { AppRoutes } from '../routes'
import '../assets/css/style.scss'
import s from './App.module.scss'
import { ThemeContext, themes } from '../contexts/theme'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuthenticated, selectTokenRefresh, setAccess } from '../store/slices/user'
import { useTokenRefreshMutation } from '../services/user'
import { useNavigate } from 'react-router-dom'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [tokenRefresh] = useTokenRefreshMutation()
  const token = useSelector(selectTokenRefresh)
  const isAuth = useSelector(selectIsAuthenticated)

  const changeToken = () => {
    if (isAuth) {
      tokenRefresh({ refresh: token })
        .unwrap()
        .then((data) => {
          console.log(data)
          dispatch(setAccess({ access: data.access }))
        })
        .catch((e) => {
          console.error(e)
          localStorage.clear()
          navigate('/')
        })
    }
  }

  useEffect(() => {
    setInterval(() => {
      changeToken()
    }, 300000)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const toggleTheme = () => {
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
