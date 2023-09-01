import style from './Js.module.css'
// import style2 from '@/pages/habilidades/style.module.css'

export default function Node(){
  return (
    <div className={`${style.container}`}>
      <h2>Node.js</h2>
      <div className={style.habilidadesItem}>
        <ul>
          <li>API Rest</li>
          <li>Knex</li>
          <li>Express</li>
          <li>Middleware</li>
          <li>POO</li>
          <li>mysql2</li>
          <li>mongoose</li>
        </ul>
      </div>
    </div>
  )
}