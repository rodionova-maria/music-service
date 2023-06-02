import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo-black.png'
import s from './login.module.scss'
import { useGetTokenMutation, useLoginMutation, useTokenRefreshMutation } from '../../services/user'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setLogin, setLogout } from '../../store/slices/user'
import { useEffect } from 'react'

function LoginPage() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [login] = useLoginMutation()
  const [getToken] = useGetTokenMutation()
  const [tokenRefresh] = useTokenRefreshMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    const storageRefresh = localStorage.getItem('refresh')
    if (!storageRefresh) return

    const changeToken = async (token) => {
      const responseRefresh = await tokenRefresh({ refresh: token }).unwrap()
      console.log(responseRefresh)
      dispatch(changeToken({ ...responseRefresh.access }))
    }

    changeToken(storageRefresh)
  }, [])

  const onFormSubmit = async (fields) => {
    const responseLogin = await login({ ...fields })

    const loginData = responseLogin.data

    const responseToken = await getToken({ ...fields })
    const tokenData = responseToken.data

    dispatch(setLogin({ ...loginData, token: tokenData }))

    localStorage.setItem('userID', loginData.id)
    localStorage.setItem('refresh', tokenData.refresh)
  }

  if (useTokenRefreshMutation().isSuccess) navigate('/')

  if (useTokenRefreshMutation().isError) {
    setLogout()
    localStorage.clear()
  }

  const handleRegistrationButtonClick = () => {
    navigate('/registration')
  }

  return (
    <div className={s.popup}>
      <div className={s.popup__wrapper}>
        <img src={logo} className={s.popup__logo} alt="logo" />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={s.popup__fields}>
            <input placeholder="Логин" type="text" required className={s.popup__input} {...register('email')} />
            <input placeholder="Пароль" type="password" required className={s.popup__input} {...register('password')} />
          </div>
          <div className={s.popup__info}>
            {useLoginMutation().isError && <div>Ошибка данных формы.</div>}
            {useGetTokenMutation().isError && <div>Ошибка получения токена.</div>}
          </div>
          <div className={s.popup__buttons}>
            <button type="submit" className={s['button-primary']}>
              Войти
            </button>
            <button type="button" onClick={handleRegistrationButtonClick} className={s['button-transparent']}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
