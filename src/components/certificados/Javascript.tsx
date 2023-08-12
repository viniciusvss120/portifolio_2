import Image from 'next/image'
import style from './Js.module.css'
import origamid from './img/origamid.png'

export default function Javascript(){
  return(
    <div className={style.container}>
      <Image src={origamid} alt='origamid'/>
      <div className={style.descricao}>
        <h4>Javascript Completo ES6+</h4>
        <span>Origamid</span>
        <a href="https://www.origamid.com/certificate/55a1b68b/" target='_blank'>Acessar certificado</a>
      </div>
    </div>
  )
}