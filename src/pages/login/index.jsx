import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo-black.png'
import s from './login.module.scss'
import { useGetTokenMutation, useLoginMutation, useTokenRefreshMutation } from '../../services/user'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../store/slices/user'
import { useEffect } from 'react'

function LoginPage() {
  // function LoginPage({ user, setUser }) {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [login] = useLoginMutation()
  const [getToken] = useGetTokenMutation()
  const [tokenRefresh] = useTokenRefreshMutation()
  const dispatch = useDispatch()

  // const [login, setLogin] = useState('')
  // const [password, setPassword] = useState('')

  useEffect(() => {
    const refresh = localStorage.getItem('refresh')
    if (!refresh) return

    const changeToken = async () => {
      try {
        const responseRefresh = await tokenRefresh(refresh)
        console.log(responseRefresh)
        dispatch(changeToken({ ...responseRefresh.data }))
        navigate('/')
      } catch (error) {
        // console.log(error?.detail)
        localStorage.clear()
      }
    }

    changeToken()
    // navigate('/')
  }, [])

  // event.preventDefault()
  // setUser('login', login, {
  //   path: '/',
  // })
  // navigate('/', { replace: true })
  const onFormSubmit = async (fields) => {
    // console.log(data)
    try {
      const responseLogin = await login({ ...fields })
      const loginData = responseLogin.data
      const responseToken = await getToken({ ...fields })
      const tokenData = responseToken.data
      dispatch(setLogin({ ...loginData, token: tokenData }))
      localStorage.setItem('refresh', tokenData.refresh)
    } catch (error) {
      alert(error)
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
            <input placeholder="Логин" type="text" required className={s.popup__input} {...register('email')} />
            <input placeholder="Пароль" type="password" required className={s.popup__input} {...register('password')} />
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
