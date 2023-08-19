
import HomeDascktop from "./HomeDescktop"

import HomeMobile from "./home_mobile/HomeMobile"
import { useEffect, useState } from "react"

interface dimensaoProp {
  height?: number
  width: number
}

export default function Home() {
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
  
  console.log(dimensao)

  return (
    <div>
      {mobile ?   <HomeMobile />:<HomeDascktop />}
     
      {/* <HomeMobile /> */}
    </div>
  )
}