import s from './ButtonPrimary.module.scss'

function ButtonPrimary({ value }) {
  return <button className={s['button-primary']}>{value}</button>
}

export default ButtonPrimary
