import Menu from "./Menu"
import style from './Home.module.css'
import Image from "next/image"
import perfil from '../../../public/perfil.png'
import Cards from "./Cards"

export default function Home() {
  return (
    <div className={style.container}>
      <Menu />
      <div className={style.main}>
        <p className={style.descricao}>
          Bem vindos! <br />
          Meu nome é Vinicius Silva Souza sou <span>Desenvolvedor Fullstack</span>.
        </p>
        <div className={style.img_container}>
          <Image src={perfil} alt="perfil" width={300} height={350}/>
        </div> 
      </div>
      <div className={style.card_container}>

        <Cards 
          titulo="Back-end"
          descricao="Criação de API  utilizando
          Node.js e seus framework,
          MySQL e MongoDB."
        />
        <Cards 
          titulo="Front-end"
          descricao="Desenvolvimento de web sites, sistemas de gestão e dashboard."
        />
        <Cards 
          titulo="UI & UX"
          descricao="Criação de API  utilizando
          Node.js e seus framework,
          MySQL e MongoDB."
        />
      </div>
      {/* <p className={style.stak}>
        Web developer <br />
        JavaScript | Node.js | Vue.js | React.js
      </p> */}
    </div>
  )
}