import style from './Menu.module.css'

export default function Menu() {
  return (
    <div className={style.container}>
      <p><a href="#">VSS</a></p>
      <button><a href="https://github.com/viniciusvss120" target='_blank'>Git Hub</a></button>
    </div>
  )
}