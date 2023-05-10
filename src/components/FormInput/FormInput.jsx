import s from './FormInput.module.scss'

function FormInput({ type, placeholder, onChange, name }) {
  return <input type={type} placeholder={placeholder} className={s.input} onChange={onChange} autoComplete="false" name={name} />
}

export default FormInput
