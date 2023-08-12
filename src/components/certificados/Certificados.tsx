import style from './Certificados.module.css'
import Javascript from './Javascript'
import Vue from './Vue'
import ReactCertificado from './React'
import HTML_CSS from './Html_Css'
import Node from './Node'

export default function Certificados(){
  return(
    <div className={style.container}>
      <h1>Certificados</h1>
      <div className={style.certificados}>
        <Javascript />
        <Vue />
        <ReactCertificado />
        <HTML_CSS />
        <Node />
        <button className='botao'><a href="#">Veja mais</a></button>
      </div>
    </div>
  )
}