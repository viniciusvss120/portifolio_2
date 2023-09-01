import style from './Js.module.css'

export default function MySQL(){
  return (
    <div className={`${style.container}`}>
      <h2>MySQL</h2>
      <div className={style.habilidadesItem}>
        <ul>
          <li>Criação de database</li>
          <li>Criação de tabelas</li>
          <li>Consultas simples</li>
          <li>Inserir dados</li>
          <li>update de dados</li>
        </ul>
      </div>
    </div>
  )
}