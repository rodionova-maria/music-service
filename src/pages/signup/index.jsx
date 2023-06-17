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
  const [regError, setRegError] = useState('')

  const onFormSubmit = (fields) => {
    setRegError('')
    if (fields.password !== fields.repeatPassword) {
      setRegError('Пароль не совпадает.')
      return
    }
    signup({
      username: fields.username,
      password: fields.password,
      email: fields.username,
    })
      .unwrap()
      .then(() => {
        navigate('/login')
      })
      .catch(({ data }) => {
        let errorText = ''
        console.error(data)
        for (const key in data) {
          errorText += `${key} : ${data[key].join(' ')}\n`
        }
        setRegError(errorText)
      })
  }

  return (
    <div className={s.popup}>
      <div className={s.popup__wrapper}>
        <img src={logo} className={s.popup__logo} alt="logo" />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={s.popup__fields}>
            <input placeholder="Логин (email)" type="email" required className={s.popup__input} {...register('username')} />
            <input placeholder="Пароль" type="password" required className={s.popup__input} {...register('password')} />
            <input placeholder="Повторите пароль" type="password" required className={s.popup__input} {...register('repeatPassword')} />
          </div>
          <div className={s.popup__info}>{regError}</div>
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
