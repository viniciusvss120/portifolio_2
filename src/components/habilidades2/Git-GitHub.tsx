import style from './Js.module.css'

export default function Git_GitHub(){
  return (
    <div className={`${style.container}`}>
      <h2>Git e Github</h2>
      <div className={style.habilidadesItem}>
        <ul>
          <li>Controle de versão</li>
          <li>clonar projetos</li>
          <li>subir projetos</li>
        </ul>
      </div>
    </div>
  )
}