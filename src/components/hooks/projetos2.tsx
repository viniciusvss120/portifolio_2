import style from '../projetos2/style.module.css'
import Link  from 'next/link';
import Image from 'next/image'
import seta from '@/pages/hooks/img/seta.png'
import SiteImobiliario from '../projetos2/SiteImobiliario';
import Dogs from '../projetos2/Dogs';
import ControleAcessos from '../projetos2/Controle_acessos';
import McDonald from '../projetos2/McDonald';

export default function Projetos2(){
  return (
    <div>
      <div className={style.container}>
      <header>
        <nav className={style.navegacao}>
          <Link href="/">
            <Image src={seta} alt='retornar' />
          </Link>
        </nav>
      </header>
      <section className={style.projetos2}>
        <SiteImobiliario />
        <Dogs />
        <ControleAcessos />
        <McDonald />
      </section>
      </div>
    </div>
  )
}