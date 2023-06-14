import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo-black.png'
import s from './login.module.scss'
import { useGetTokenMutation, useLoginMutation, useTokenRefreshMutation } from '../../services/user'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setAccess, setLogin, setLogout, setRefresh } from '../../store/slices/user'
import { useEffect } from 'react'
import { useState } from 'react'

function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [login, { isLoading: isLoadingLogin }] = useLoginMutation()
  const [getToken, { isError: isErrorGetToken }] = useGetTokenMutation()
  const [tokenRefresh] = useTokenRefreshMutation()
  const [authError, setAuthError] = useState('')

  const getAccessToken = (string) => {
    tokenRefresh({ refresh: string })
      .unwrap()
      .then((data) => {
        dispatch(setLogin({ id: localStorage.getItem('userID') }))
        dispatch(setRefresh({ refresh: string }))
        dispatch(setAccess({ access: data.access }))
        navigate('/')
      })
      .catch((e) => {
        setLogout()
        localStorage.clear()
        console.error(e.data.detail)
      })
  }

  //   const getAccessToken = async (string) => {
  //     try {
  //       const result = await tokenRefresh({ refresh: string }).unwrap()
  //       dispatch(
  //         setLogin({
  //           id: localStorage.getItem('userID'),
  //           token: {
  //             access: result.access,
  //             refresh: string,
  //           },
  //         })
  //       )
  //       navigate('/')
  //     } catch (e) {
  //       console.error(e.data.detail)
  //       console.log(errorTokenRefresh)
  //       setLogout()
  //       localStorage.clear()
  //     }
  //   }

  useEffect(() => {
    const storageRefresh = localStorage.getItem('refresh')
    if (!storageRefresh) return
    getAccessToken(storageRefresh)
  }, [])

  const onFormSubmit = async (fields) => {
    setAuthError('')
    try {
      const responseLogin = await login({ ...fields }).unwrap()
      dispatch(setLogin({ id: responseLogin.id }))
      localStorage.setItem('userID', responseLogin.id)

      try {
        const responseToken = await getToken({ ...fields })
        const tokenData = responseToken.data
        // console.log('tokenData', tokenData)
        dispatch(setRefresh({ refresh: tokenData.refresh }))
        dispatch(setAccess({ access: tokenData.access }))
        localStorage.setItem('refresh', tokenData.refresh)
        navigate('/')
      } catch (e) {
        console.error(e.data.detail)
      }
    } catch (e) {
      setAuthError(e.data.detail)
    }
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
            <div>{authError}</div>
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
