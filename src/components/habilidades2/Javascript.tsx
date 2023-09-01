import style from './Js.module.css'

export default function JavaScript(){

  return (
    <div className={`${style.container} container2`} id='container'>
      <h2>JavaScript</h2>
      <div className={style.habilidadesItem}>
        <ul>
          <li>Funções</li>
          <li>Promisses</li>
          <li>Arrays</li>
          <li>Fatch</li>
          <li>Objetos</li>
          <li>POO</li>
        </ul>
      </div>
    </div>
  )
}