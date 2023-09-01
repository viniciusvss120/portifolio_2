
import HomeDascktop from "./HomeDescktop"

import HomeMobile from "./home_mobile/HomeMobile"
import { useCallback, useEffect, useState } from "react"

interface dimensaoProp {
  height?: number
  width: number
}

export default function Home() {
  const[dimensao, setDimensao] = useState<dimensaoProp>({
    width: 781
  })
  const [mobile, setMobile] = useState<boolean>(false)

  function widthTela(){
    if(typeof window !== undefined){
      setDimensao({
          // height: window.innerHeight,
          width: screen.width
        })
    }
    
  }
  useEffect(() => {

    if(dimensao.width <= 780){
      setMobile(true)
    }else{
      setMobile(false)
    }
    addEventListener('resize', widthTela)

  }, [dimensao.width])
      
  return (
    <div>
      {mobile ? <HomeMobile /> : <HomeDascktop />}
     
      {/* <HomeMobile /> */}
    </div>
  )
}