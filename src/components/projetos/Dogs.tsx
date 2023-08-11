import style from './Projetos.module.css'
import Image from 'next/image'
import dogs from './img/dogs.png'
import js from './img/js.png'
import react from './img/react.png'
import node from './img/node.png'
import mongodb from './img/mongodb.png'
import git from './img/git.png'
import github from './img/github.png'
export default function Dogs(){
  return (
    <div className={style.projetoItem}>
    <h2>Dogs</h2>
    <Image src={dogs} alt='dogs'/>
    <p>Rede social de pets, esse projeto serve como modelo para redes sociais ou sites afins.</p>
    <div className={style.tecnologias}>
      <span>Tecnologias utilizadas: </span>
      <ul>
        <li><Image className={style.icon} src={js} alt='js'/></li>
        <li><Image className={style.icon} src={react} alt='react'/></li>
        <li><Image className={style.icon} src={node} alt='node'/></li>
        <li><Image className={style.icon} src={mongodb} alt='mongo'/></li>
        <li><Image className={style.icon} src={git} alt='git'/></li>
        <li><Image className={style.icon} src={github} alt='github'/></li>
      </ul>
    </div>
  </div>
  )
}