import style from './Cadis.module.css'

interface CardProp{
  titulo: string
  descricao: string
}

export default function Cards(props: CardProp){
  return(
    <div>
      <div className={style.card}>
        <h3 className={style.titulo}>{props.titulo}</h3>
        <p className={style.descricao}>{props.descricao}</p>
      </div>
    </div>
  )
}