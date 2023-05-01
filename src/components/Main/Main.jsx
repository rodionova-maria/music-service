import Nav from '../Nav/Nav'
import Centerblock from '../Centerblock/Centerblock'
import Sidebar from '../Sidebar/Sidebar'
import s from './Main.module.scss'

function Main() {
  return (
    <main className={s.main}>
      <Nav />
      <Centerblock />
      <Sidebar />
    </main>
  )
}

export default Main
