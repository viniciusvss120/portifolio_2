import style from './Habilidades.module.css'
import JavaScript from './JavaScript'
import Node from './Node'
import Vue from './Vue'
import ReactComponente from './React'

export default function Habilidades(){
  return (
    <div className={style.container}>
      <h1>Habilidades</h1>
      <div className={style.habilidades}>
        <JavaScript />
        <Node />
        <Vue />
        <ReactComponente />
      <button className='botao'><a href="#">Veja mais</a></button>
      </div>
    </div>
  )
}