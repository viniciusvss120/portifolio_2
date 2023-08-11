import style from './Projetos.module.css'
import Image from 'next/image'
import mcdonald from './img/mcdonald.png'
import js from './img/js.png'
import vue from './img/vue.png'
import git from './img/git.png'
import github from './img/github.png'

export default function McDonald(){
  return (
    <div className={style.projetoItem}>
    <h2>McDonald</h2>
    <Image src={mcdonald} alt='mcdonald'/>
    <p>Site modelo para lanchonetes e restaurantes.</p>
    <div className={style.tecnologias}>
      <span>Tecnologias utilizadas: </span>
      <ul>
        <li><Image className={style.icon} src={js} alt='js'/></li>
        <li><Image className={style.icon} src={vue} alt='react'/></li>
        <li><Image className={style.icon} src={git} alt='git'/></li>
        <li><Image className={style.icon} src={github} alt='github'/></li>
      </ul>
    </div>
  </div>
  )
}