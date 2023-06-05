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
  const [login, { isLoading: isLoadingLogin, isError: isErrorLogin }] = useLoginMutation()
  const [getToken, { isError: isErrorGetToken }] = useGetTokenMutation()
  const [tokenRefresh] = useTokenRefreshMutation()
  const dispatch = useDispatch()

  const getAccessToken = (string) => {
    tokenRefresh({ refresh: string })
      .unwrap()
      .then((data) => {
        // console.log(data)
        dispatch(
          setLogin({
            id: localStorage.getItem('userID'),
            token: {
              access: data.access,
              refresh: string,
            },
          })
        )
        navigate('/')
      })
      .catch((error) => {
        console.error(error.data.detail)
        setLogout()
        localStorage.clear()
      })
  }

  useEffect(() => {
    const storageRefresh = localStorage.getItem('refresh')
    if (!storageRefresh) return
    getAccessToken(storageRefresh)
  }, [])

  const onFormSubmit = async (fields) => {
    const responseLogin = await login({ ...fields })

    const loginData = responseLogin.data

    const responseToken = await getToken({ ...fields })
    const tokenData = responseToken.data

    dispatch(setLogin({ ...loginData, token: tokenData }))

    localStorage.setItem('userID', loginData.id)
    localStorage.setItem('refresh', tokenData.refresh)
    navigate('/')
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
            <input placeholder="Логин" type="text" required className={s.popup__input} {...register('email')} autoComplete="off" />
            <input placeholder="Пароль" type="password" required className={s.popup__input} {...register('password')} />
          </div>
          <div className={s.popup__info}>
            {isLoadingLogin && <div>Данные отправлены...</div>}
            {isErrorLogin && <div>Ошибка данных формы.</div>}
            {isErrorGetToken && <div>Ошибка получения токена.</div>}
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
