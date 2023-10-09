import style from './Certificados.module.css'
import Javascript from './Javascript'
import Vue from './Vue'
import ReactCertificado from './React'
import HTML_CSS from './Html_Css'
import Node from './Node'
import Link from 'next/link'

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
        <button className='botao'><Link href="#">Veja mais</Link></button>
      </div>
    </div>
  )
}