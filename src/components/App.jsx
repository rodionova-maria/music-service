import Main from './Main/Main'
import Bar from './Bar/Bar'
import '../assets/css/style.scss'
import s from './App.module.scss'

function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Main />
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
