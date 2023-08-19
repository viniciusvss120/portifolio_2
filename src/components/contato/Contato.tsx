import ContatoMobile from './ContatoMobile'
import ContatoDask from './ContatoDasktop'
import {useEffect, useState} from 'react'
interface dimensaoProp {
  height?: number
  width: number
}
export default function Contato(){
  const[dimensao, setDimensao] = useState<dimensaoProp>({
    width: 0
  })
  const [mobile, setMobile] = useState<boolean>(false)
  useEffect(() => {
    function widthTela(){
      setDimensao({
          // height: window.innerHeight,
          width: window.screen.width
        })
    }
    if(dimensao.width < 780){
      setMobile(true)
    }else{
      setMobile(false)
    }

    addEventListener('resize', widthTela)
  },[dimensao.width])
  return (
    <section>
      {mobile ? <ContatoMobile /> : <ContatoDask />}
    </section>
  )
}