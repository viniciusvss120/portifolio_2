import style from './Contato.module.css'

export default function Contato(){
  return (
    <section className={style.container}>
      <h1>Contato</h1>
      <div className={style.contato}>
        <p>Pode entrar em contato enviando um e-mail, através 
          desse formulário ou pelas minhas redes socias logo abaixo.
        </p>
        <form className={style.formulario}>
          <input type="text" placeholder='Digite seu nome'/>
          <input type="email" placeholder='Digite seu e-mail' />
          <textarea name="mensagem" placeholder='Menssagem' cols={117} rows={10}></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div className={style.divisa}>
          <span></span>
          <p>ou</p>
          <span></span>
        </div>
        <div className={style.icons}></div>
      </div>
    </section>
  )
}