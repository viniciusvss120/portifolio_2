import style from './Js.module.css'

export default function React(){
  return (
    <div className={`${style.container}`}>
      <h2>React.js</h2>
      <div className={style.habilidadesItem}>
        <ul>
          <li>React Router DOM</li>
          <li>Hooks</li>
          <li>Componentes</li>
        </ul>
      </div>
    </div>
  )
}