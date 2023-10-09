import Image from 'next/image'
import style from './projeto.module.css'
import acessos from '../projetos/img/acessos.png'
import js from '../projetos/img/js.png'
import vue from '../projetos/img/vue.png'
import node from '../projetos/img/node.png'
import sql from '../projetos/img/mysql.png'
import git from '../projetos/img/git.png'
import github from '../projetos/img/github.png'

export default function SiteImobiliario(){
  return (
    <div className={style.container}>
      <Image src={acessos} alt='acessos'/>
      <div className={style.descricao}>
        <h3>Controle de acessos</h3>
        <p>
          API de controle de acessos, essa api pode ser usada em diversos tipos de sistemas.
        </p>
        <div className={style.tecnologias}>
          <span>Tecnologias usadas:</span>
          <ul>
            <li><Image className={style.icon} src={js} alt='js'/></li>
            <li><Image className={style.icon} src={vue} alt='vue'/></li>
            <li><Image className={style.icon} src={node} alt='node'/></li>
            <li><Image className={style.icon} src={sql} alt='sql'/></li>
            <li><Image className={style.icon} src={git} alt='git'/></li>
            <li><Image className={style.icon} src={github} alt='github'/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}