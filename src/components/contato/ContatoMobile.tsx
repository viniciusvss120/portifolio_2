import Image from 'next/image'
import style from './ContatoMobile.module.css'
import {useState} from 'react'
import linkedin from './img/linkedin.png'
import whatsapp from './img/whatsapp.png'
import github from './img/github.png'

interface EmailProp{
  nome: string
  email: string,
  mensagem: string
}

export default function ContatoMobile(){
  const [form, setForm] = useState<EmailProp>({
    nome: '',
    email: '',
    mensagem: ''
  })
  const [msg, setMsg] = useState<boolean>(false)

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

    if(res){
      setMsg(true)
    }
    }catch(error){
      console.log(error)
    }finally{
      setForm({
        nome: '',
        email: '',
        mensagem: ''
      })
    }
  }
  return(
    <section className={style.container}>
      <h1>Contato</h1>
      <p>
        Pode entrar em contato enviando um e-mail, através desse formulário ou pelas minhas redes socias logo abaixo.
      </p>
      {msg ? <p>Mensagem enviada</p>: 'Error'}
      <form onSubmit={enviarEmail} className={style.form}>
        <input type="text" value={form?.nome} onChange={handleChenge} id='nome' placeholder='Digite seu nome'/>
        <input type="email" value={form?.email} onChange={handleChenge} id='email' placeholder='Digite seu e-mail'/>
        <textarea name="mensagem" value={form?.mensagem} onChange={handleChenge} id='mensagem' placeholder='Mensagem...' cols={30} rows={10}></textarea>
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