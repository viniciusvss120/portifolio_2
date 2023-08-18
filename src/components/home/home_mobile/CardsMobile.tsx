import style from './CardsMobile.module.css'

export default function CardsMobile(){
  return(
    <div className={style.container}>
      <div className={style.card}>
        <h4 className={style.titulo}>Back-end</h4>
        <p className={style.descricao}>
          Criação de API  utilizando
          Node.js e seus framework,
          MySQL e MongoDB.
        </p>
      </div>
      <div className={style.card}>
        <h4 className={style.titulo}>Front-end</h4>
        <p className={style.descricao}>
        Desenvolvimento de web sites, sistemas de gestão e dashboard
        </p>
      </div>
    </div>
  )
}