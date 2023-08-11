import style from './Sobre.module.css'
import Image from "next/image"
import perfil from '../../../public/perfil.png'
export default function Sobre() {
   return (
    <div className={style.container}>
      {/* <Image src={perfil} alt='background' className={style.img}/> */}
      <div className={style.sobre}>
        <h2>Vinicius Silva Souza</h2>
        <div className={style.desc}>
          <p>Meu nome é Vinicius Silva Souza, sou desenvolvedor web, trabalhei por 1 ano no departamento de T.I de uma rede de supermercados.</p>
          <p>Meu cargo era de auxiliar de T.I, mas trabalhei prestando suporte aos usuários do sistema interno da empresa. Tive uma breve experiência com desenvolvimento web, utilizando JavaScript, Node.js, Vue.js e MySQL, além de trabalhar com SQL Serve.
          </p>
          <p>Gosto de trabalhar em equipe e busco sempre me atualizar e melhorar minhas habilidades e práticas, comecei a atuar na área de T.I no inicio de 2021 e passei gostar ainda mais dessa área, estou sempre em busca de oportunidades e desafios, para agregar ainda mais meu currículo e contribuir com quem contar com meus serviços .</p>
        </div>
      </div>
    </div>
   )
}