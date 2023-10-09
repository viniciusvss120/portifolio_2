import style from './Habilidades.module.css'
import {useState, useEffect} from 'react'
import JavaScript from './JavaScript'
import Node from './Node'
import Vue from './Vue'
import ReactComponente from './React'
import Link from 'next/link'

export default function Habilidades(){
  const [page, setPage] = useState<unknown>()
  
  function capturarUrl(url: string){
    setPage(url)
  }
  // console.log(window.location.origin)

  return (
    <div className={style.container}>
      <h1>Habilidades</h1>
      <div className={style.habilidades}>
        <JavaScript 
          url={capturarUrl}
        />
        <Node />
        <Vue />
        <ReactComponente />
      <button className='botao'><Link href="/hooks/habilidades">Veja mais</Link></button>
      </div>
    </div>
  )
}