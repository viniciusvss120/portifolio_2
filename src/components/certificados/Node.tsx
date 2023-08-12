import Image from 'next/image'
import style from './Js.module.css'
import udemy from './img/udemy.png'

export default function Node(){
  return(
    <div className={style.container}>
      <Image src={udemy} alt='udemy'/>
      <div className={style.descricao}>
        <h4>Formação Node.js</h4>
        <span>Udemy</span>
        <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-8d1c7637-094c-4dcc-a24d-f39e4ba299cc.pdf" target='_blank'>Acessar certificado</a>
      </div>
    </div>
  )
}