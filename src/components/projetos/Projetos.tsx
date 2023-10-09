import Link from 'next/link'
import Acessos from './Acessos'
import Dogs from './Dogs'
import McDonald from './McDonald'
import style from './Projetos.module.css'
import SiteImobiliario from './SiteImobiliario'

export default function Projetos(){
  return(
    <div className= {style.container}>
      <h1>Projetos</h1>
      <div className={style.projeto}>
        <a href="#"><SiteImobiliario /></a> 
       <a href="#"><Dogs /></a>
       <a href="https://github.com/viniciusvss120/projeto-McDonald-s"  target='_blank'><McDonald /></a> 
       <a href="https://github.com/viniciusvss120/controle_acessos" target='_blank'><Acessos /></a> 
      </div>
      <button className='botao'><Link href="/hooks/projetos">Veja mais</Link></button>
    </div>
  )
}