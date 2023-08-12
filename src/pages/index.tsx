import Certificados from "@/components/certificados/Certificados"
import Contato from "@/components/contato/Contato"
import Habilidades from "@/components/habilidades/Habilidades"
import Home from "@/components/home/Home"
import Projetos from "@/components/projetos/Projetos"
import Sobre from "@/components/sobre/Sobre"

export default function PaginaHome() {
  return (
    <div>
      <Home />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Certificados />
      <Contato />
    </div>
  )
}
