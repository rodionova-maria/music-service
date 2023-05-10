import { AppRoutes } from '../routes'
import { useCookies } from 'react-cookie'
import '../assets/css/style.scss'
import s from './App.module.scss'

function App() {
  const [user, setCookie] = useCookies(['login'])

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <AppRoutes user={user} setUser={setCookie} />
      </div>
    </div>
  )
}

export default App
