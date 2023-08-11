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
       <SiteImobiliario />
       <Dogs />
       <McDonald />
       <Acessos />
      </div>
      <button className='botao'><a href="#">Veja mais</a></button>
    </div>
  )
}