import style from './Js.module.css'
import {useState, useEffect} from 'react'
import style2 from '@/pages/habilidades/style.module.css'

interface urlProps{
  url: (url:string) => void
}

export default function JavaScript(props: urlProps){
  const [page, setPage] = useState<string>()

  useEffect(() =>{
    let link = window.location.origin + window.location.pathname
    props.url(link)
    setPage(link)
  },[props])

  if(page === 'http://localhost:3000/hooks/habilidades'){
    const main = document.getElementById('container')
    console.log(main)
  }
  return (
    <div className={`${style.container} container2`} id='container'>
      <h2>JavaScript</h2>
      <div className={style.habilidadesItem}>
        <ul>
          <li>Funções</li>
          <li>Promisses</li>
          <li>Arrays</li>
          <li>Fatch</li>
          <li>Objetos</li>
          <li>POO</li>
        </ul>
      </div>
    </div>
  )
}