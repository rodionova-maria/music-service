import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import FormInput from '../../components/FormInput/FormInput'
import logo from '../../assets/images/logo-black.png'
import s from './registration.module.scss'
import { useNavigate } from 'react-router-dom'

function RegistrationPage() {
  const navigate = useNavigate()

  const handleRegistrationButtonClick = (event) => {
    event.preventDefault()
    navigate('/login', { replace: true })
  }

  return (
    <div className={s.popup}>
      <div className={s.popup__wrapper}>
        <img src={logo} className={s.popup__logo} alt="logo" />
        <form>
          <div className={s.popup__fields}>
            <FormInput type="text" placeholder="Логин" />
            <FormInput type="password" placeholder="Пароль" />
            <FormInput type="password" placeholder="Повторите пароль" />
          </div>
          <div className={s.popup__buttons}>
            <ButtonPrimary value="Зарегистрироваться" onClick={handleRegistrationButtonClick} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationPage
