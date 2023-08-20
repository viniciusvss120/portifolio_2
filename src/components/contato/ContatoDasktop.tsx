import Image from 'next/image'
import style from './Contato.module.css'
import {useState} from 'react'
import linkedin from './img/linkedin.png'
import whatsapp from './img/whatsapp.png'
import github from './img/github.png'

interface EmailProp{
  nome: string
  email: string,
  mensagem: string
}

export default function ContatoDasktop(){
  const [form, setForm] = useState<EmailProp>()


  async function enviarEmail(event: any){
    event.preventDefault()
    try{
      const msg:EmailProp = {
        nome: "Vinicius Silva",
        email: "vinicius100@live.com",
        mensagem: "Boa tarde! estamos aqui para te contratar."
      }
      
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(msg)
    }
    const res = await fetch('http://localhost:3003/contato', options)
     
    console.log("Deu certo", res)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <section className={style.container}>
      <h1>Contato</h1>
      <div className={style.contato}>
        <p>Pode entrar em contato enviando um e-mail, através 
          desse formulário ou pelas minhas redes socias logo abaixo.
        </p>
        <form onSubmit={enviarEmail} className={style.formulario}>
          <input type="text" placeholder='Digite seu nome'/>
          <input type="email" placeholder='Digite seu e-mail' />
          <textarea name="mensagem" placeholder='Menssagem' cols={127} rows={6}></textarea>
          <button>Enviar</button>
        </form>
        <div className={style.divisa}>
          <span></span>
          <p>ou</p>
          <span></span>
        </div>
        <div className={style.icons}>
          <a href="https://www.linkedin.com/in/vinicius-silva-souza-08422b1a2/"><Image src={linkedin} alt='linkedin'/></a>
          <a href="#"><Image src={whatsapp} alt='whatsapp'/></a>
          <a href="https://github.com/viniciusvss120"><Image src={github} alt='github'/></a>
        </div>
      </div>
    </section>
  )
}