import style from './Projetos.module.css'
import Image from 'next/image'
import imobiliario from './img/imobiliario.png'
import js from './img/js.png'
import vue from './img/vue.png'
import node from './img/node.png'
import sql from './img/mysql.png'
import git from './img/git.png'
import github from './img/github.png'
export default function SiteImobiliario(){
  return (
    <div className={style.projetoItem}>
    <h2>Site Imobiliário</h2>
    <Image src={imobiliario} alt='imobiliario'/>
    <p>Projeto desenvolvido para empresas do ramo imobiliário.</p>
    <div className={style.tecnologias}>
      <span>Tecnologias utilizadas: </span>
      <ul>
        <li><Image className={style.icon} src={js} alt='js'/></li>
        <li><Image className={style.icon} src={vue} alt='js'/></li>
        <li><Image className={style.icon} src={node} alt='js'/></li>
        <li><Image className={style.icon} src={sql} alt='js'/></li>
        <li><Image className={style.icon} src={git} alt='js'/></li>
        <li><Image className={style.icon} src={github} alt='js'/></li>
      </ul>
    </div>
  </div>
  )
}