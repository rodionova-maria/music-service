import s from './ButtonTransparent.module.scss'

function ButtonTransparent({ value, onClick }) {
  return (
    <button className={s['button-transparent']} onClick={onClick}>
      {value}
    </button>
  )
}

export default ButtonTransparent
