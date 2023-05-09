import Bar from '../../components/Bar/Bar'
import Nav from '../../components/Nav/Nav'
import Centerblock from '../../components/Centerblock/Centerblock'
import Sidebar from '../../components/Sidebar/Sidebar'
import s from './main.module.scss'

function MainPage() {
  return (
    <>
      <div className={s.main}>
        <Nav />
        <Centerblock isMain={true} />
        <Sidebar isMain={true} />
      </div>
      <Bar />
      <footer className="footer"></footer>
    </>
  )
}

export default MainPage
