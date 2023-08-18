import Image from "next/image";
import Menu from "../Menu";
import style from './HomeMobile.module.css'
import perfil from '../../../../public/perfil.png'
import Cards from "../Cards";
import CardsMobile from "./CardsMobile";

export default function HomeMobile(){
  return(
    <div>
      <Menu />
      <div className={style.container}>
      <div className={style.home}>
        <div className={style.img}>
          <Image src={perfil} alt="perfil"/>
          <span>Vinicius Silva Souza</span>
        </div>

          <p className={style.descricao}>
            <span>Web developer</span><br />
            Javascript | Node.js | Vue.js| React.js
          </p>

        <div className={style.cards}>
          <CardsMobile />
        </div>
      </div>
      </div>
    </div>
  )
}