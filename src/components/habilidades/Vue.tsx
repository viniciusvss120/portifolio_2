import style from './Js.module.css'

export default function Vue(){
  return (
    <div className={style.container}>
      <h2>Vue.js</h2>
      <div className={style.habilidadesItem}>
        <ul>
          <li>Vue Router</li>
          <li>Vuex</li>
          <li>Hooks</li>
          <li>Componentes</li>
        </ul>
      </div>
    </div>
  )
}