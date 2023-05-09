import { AppRoutes } from '../routes'
import { useCookies } from 'react-cookie'
import '../assets/css/style.scss'
import s from './App.module.scss'


function App() {
  const [user, setUser, removeCookie] = useCookies(['user'])

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <AppRoutes user={user} setUser={setUser} removeCookie={removeCookie} />
      </div>
    </div>
  )
}

export default App
