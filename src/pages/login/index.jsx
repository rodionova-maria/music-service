import { useNavigate } from 'react-router-dom'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import ButtonTransparent from '../../components/ButtonTransparent/ButtonTransparent'
import FormInput from '../../components/FormInput/FormInput'
import logo from '../../assets/images/logo-black.png'
import s from './login.module.scss'
import { useEffect, useState } from 'react'

function LoginPage({ user, setUser }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (user.login) {
      console.log(user, password)
      navigate('/')
      return
    }
  }, [])

  const handleLoginChange = (event) => {
    setLogin(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // console.log(login, password)
    setUser('login', login, {
      path: '/',
    })
    navigate('/', { replace: true })
  }

  const handleRegistrationButtonClick = (event) => {
    event.preventDefault()
    navigate('/registration', { replace: true })
  }

  return (
    <div className={s.popup}>
      <div className={s.popup__wrapper}>
        <img src={logo} className={s.popup__logo} alt="logo" />
        <form onSubmit={handleFormSubmit}>
          <div className={s.popup__fields}>
            <FormInput type="text" placeholder="Логин" onChange={handleLoginChange} name="login" />
            <FormInput type="password" placeholder="Пароль" onChange={handlePasswordChange} name="password" />
          </div>
          <div className={s.popup__buttons}>
            <ButtonPrimary value="Войти" />
            <ButtonTransparent value="Зарегистрироваться" onClick={handleRegistrationButtonClick} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
