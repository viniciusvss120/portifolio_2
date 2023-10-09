import Image from "next/image";
import style from "@/pages/hooks/style.module.css"
// import {useEffect, useState} from 'react'
import Javascript from '@/components/habilidades2/Javascript'
import Node from '@/components/habilidades2/Node'
import Vue from '@/components/habilidades2/Vue'
import ReactComponente from '@/components/habilidades2/React'
import seta from '@/pages/hooks/img/seta.png'
import Link from "next/link";
import Git_GitHub from '@/components/habilidades2/Git-GitHub';
import MySQL from "../habilidades2/MySQL";

export default function habilidades2(){
  // const [page, setPage] = useState<string>()

  // useEffect(() => {
  //   let url = window.location.origin + window.location.pathname.toString()
  //   console.log(page)
  // }, [page])

  // function capturarUrl(url: string){
  //   setPage(url)
  // }
  return(
    <div className={style.container}>
      <header>
        <nav className={style.navegacao}>
          <Link href="/">
            <Image src={seta} alt='retornar' />
          </Link>
        </nav>
      </header>
      <section className={style.habilidades}>
        <Javascript />
        <Node />
        <Vue />
        <ReactComponente />
        <Git_GitHub />
        <MySQL />
      </section>
    </div>
  )
}