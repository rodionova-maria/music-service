import { useDispatch } from 'react-redux'
import logo from '../../assets/images/logo-black.png'
import s from './registration.module.scss'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { setUser } from '../../slices/user'
import { useSignupMutation } from '../../services/user'

function RegistrationPage() {
  const { register, handleSubmit } = useForm()
  const [signup] = useSignupMutation()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  //   const handleRegistrationButtonClick = (event) => {
  //     event.preventDefault()
  //     navigate('/login', { replace: true })
  //   }

  const onFormSubmit = async (data) => {
    console.log(data)
    try {
      signup(data).then((res) => {
        console.log(res)
        dispatch(
          setUser({
            username: res.username,
          })
        )
      })
      navigate('/login')
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  return (
    <div className={s.popup}>
      <div className={s.popup__wrapper}>
        <img src={logo} className={s.popup__logo} alt="logo" />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={s.popup__fields}>
            <input placeholder="Логин" type="text" required className={s.popup__input} {...register('username')} />
            <input placeholder="Пароль" type="password" required className={s.popup__input} {...register('pwd')} />
            <input placeholder="Повторите пароль" type="password" required className={s.popup__input} {...register('repeat_pwd')} />
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
