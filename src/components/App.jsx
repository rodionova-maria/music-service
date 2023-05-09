import { AppRoutes } from '../routes'
import { useCookies } from 'react-cookie'
import '../assets/css/style.scss'
import s from './App.module.scss'

function App() {
  const [cookie, setCookie] = useCookies(['user'])

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <AppRoutes user={cookie} setUser={setCookie} />
      </div>
    </div>
  )
}

export default App
