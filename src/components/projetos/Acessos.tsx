import style from './Projetos.module.css'
import Image from 'next/image'
import acessos from './img/acessos.png'
import js from './img/js.png'
import node from './img/node.png'
import sql from './img/mysql.png'
import git from './img/git.png'
import github from './img/github.png'
export default function Acessos(){
  return (
    <div className={style.projetoItem}>
    <h2>API de controle de acessos</h2>
    <Image src={acessos} alt='acessos'/>
    <p>Projeto para controlar o acesso dos usuário, o mesmo pode ser usado em vários tipos de sistemas onde tem mais usuários e hierarquias diferentes.</p>
    <div className={style.tecnologias}>
      <span>Tecnologias utilizadas: </span>
      <ul>
        <li><Image className={style.icon} src={js} alt='js'/></li>
        <li><Image className={style.icon} src={node} alt='node'/></li>
        <li><Image className={style.icon} src={sql} alt='sql'/></li>
        <li><Image className={style.icon} src={git} alt='git'/></li>
        <li><Image className={style.icon} src={github} alt='github'/></li>
      </ul>
    </div>
  </div>
  )
}