import Image from 'next/image'
import style from './ContatoMobile.module.css'
import linkedin from './img/linkedin.png'
import whatsapp from './img/whatsapp.png'
import github from './img/github.png'

interface EmailProp{
  nome: string
  email: string,
  mensagem: string
}

export default function ContatoMobile(){

  async function enviarEmail(event: any){
    event.preventDefault()
    try{
      const msg:EmailProp = {
        nome: "Vinicius Silva",
        email: "vinicius100@live.com",
        mensagem: "Bom dia Mobile"
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

    alert("Mensagem enviada.")
    }catch(error){
      console.log(error)
    }
  }
  return(
    <section className={style.container}>
      <h1>Contato</h1>
      <p>
        Pode entrar em contato enviando um e-mail, através desse formulário ou pelas minhas redes socias logo abaixo.
      </p>
      <form onSubmit={enviarEmail} className={style.form}>
        <input type="text" placeholder='Digite seu nome'/>
        <input type="email" placeholder='Digite seu e-mail'/>
        <textarea name="mensagem" placeholder='Mensagem...' id="" cols={30} rows={10}></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className={style.divisa}>
        <span></span>
        <p>ou</p>
        <span></span>
      </div>
      <div className={style.icons}>
        <Image src={linkedin} alt='linkedin'/>
        <Image src={whatsapp} alt='whatsapp'/>
        <Image src={github} alt='github'/>
      </div>
    </section>
  )
}