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
  const [form, setForm] = useState<EmailProp>({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleChenge = (event: any) => {
    const {id, value} = event.target
    setForm({ ...form, [id]: value })
  }

  async function enviarEmail(event: any){
    event.preventDefault()
    try{
      const msg:EmailProp = {
        nome: form.nome,
        email: form.email,
        mensagem: form.mensagem
      }
      
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(msg)
    }
    const res = await fetch('http://localhost:3003/contato', options)
     alert("Mensagem enviada.")
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
          <input type="text" value={form?.nome} onChange={handleChenge} id='nome' placeholder='Digite seu nome'/>
          <input type="email" value={form?.email} onChange={handleChenge} id='email' placeholder='Digite seu e-mail' />
          <textarea name="mensagem" value={form?.mensagem} onChange={handleChenge} id='mensagem' placeholder='Menssagem' cols={127} rows={6}></textarea>
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