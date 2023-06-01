import logo from '../../assets/images/logo-black.png'
import s from './registration.module.scss'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSignupMutation } from '../../services/user'
import { useState } from 'react'

function RegistrationPage() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [signup] = useSignupMutation()
  let [errorText, setErrorText] = useState('')

  const onFormSubmit = async (fields) => {
    if (fields.password !== fields.repeatPassword) {
      errorText = 'Пароли не совпадают'
      setErrorText(errorText)
      return
    }
    // console.log(data)
    try {
      await signup({ ...fields, email: fields.username })
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={s.popup}>
      <div className={s.popup__wrapper}>
        <img src={logo} className={s.popup__logo} alt="logo" />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={s.popup__fields}>
            <input placeholder="Логин" type="text" required className={s.popup__input} {...register('username')} />
            <input placeholder="Пароль" type="password" required className={s.popup__input} {...register('password')} />
            <input placeholder="Повторите пароль" type="password" required className={s.popup__input} {...register('repeatPassword')} />
            {errorText}
          </div>
          <div className={s.popup__buttons}>
            <button type="submit" className={s['button-primary']}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationPage
