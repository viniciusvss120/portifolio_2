import Image from 'next/image'
import style from './projeto.module.css'
import dogs from '../projetos/img/dogs.png'
import js from '../projetos/img/js.png'
import react from '../projetos/img/react.png'
import node from '../projetos/img/node.png'
import mongo from '../projetos/img/mongodb.png'
import git from '../projetos/img/git.png'
import github from '../projetos/img/github.png'

export default function Dogs(){
  return (
    <div className={style.container}>
      <Image src={dogs} alt='dogs'/>
      <div className={style.descricao}>
        <h3>Dogs</h3>
        <p>
          Projeto rede social de pets, projeto desenvolvido juntamente com o curso de React da Origamid.
        </p>
        <div className={style.tecnologias}>
          <span>Tecnologias usadas:</span>
          <ul>
            <li><Image className={style.icon} src={js} alt='js'/></li>
            <li><Image className={style.icon} src={react} alt='react'/></li>
            <li><Image className={style.icon} src={node} alt='node'/></li>
            <li><Image className={style.icon} src={mongo} alt='mongo'/></li>
            <li><Image className={style.icon} src={git} alt='git'/></li>
            <li><Image className={style.icon} src={github} alt='github'/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}