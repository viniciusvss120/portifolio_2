import Image from 'next/image'
import style from './Js.module.css'
import origamid from './img/origamid.png'

export default function React(){
  return(
    <div className={style.container}>
      <Image src={origamid} alt='origamid'/>
      <div className={style.descricao}>
        <h4>React.js Completo</h4>
        <span>Origamid</span>
        <a href="https://www.origamid.com/certificate/f9563dea" target='_blank'>Acessar certificado</a>
      </div>
    </div>
  )
}