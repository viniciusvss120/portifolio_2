import Image from 'next/image'
import style from './Js.module.css'
import origamid from './img/origamid.png'

export default function HTML_CSS(){
  return(
    <div className={style.container}>
      <Image src={origamid} alt='origamid'/>
      <div className={style.descricao}>
        <h4>HTML 5 e CSS 3</h4>
        <span>Origamid</span>
        <a href="https://www.origamid.com/certificate/cd8110fa/" target='_blank'>Acessar certificado</a>
      </div>
    </div>
  )
}