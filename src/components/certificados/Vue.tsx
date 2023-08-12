import Image from 'next/image'
import style from './Js.module.css'
import origamid from './img/origamid.png'

export default function Vue(){
  return(
    <div className={style.container}>
      <Image src={origamid} alt='origamid'/>
      <div className={style.descricao}>
        <h4>Vue.js Completo</h4>
        <span>Origamid</span>
        <a href="https://www.origamid.com/certificate/864c5ae3" target='_blank'>Acessar certificado</a>
      </div>
    </div>
  )
}