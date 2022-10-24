import { InputText } from "../../components/InputText/InputText";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from './styles.module.css';

export function Publish() {

  function handleSubmit(event: any) {
      event?.preventDefault()
      console.log(event)
  }

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.containerForm}>
        <h1>Cadastrar novo Post</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.containerForm}>
            <h3>Titulo do Post</h3>
            <InputText type="text" name="titulo" placeholder="Digite o título do post."/>

            <h3>Primeiro parágrafo</h3>
            <textarea name="paragraphOne" placeholder="Digite o primeiro parágrafo."/>

            <h3>Segundo parágrafo</h3>
            <textarea name="paragraphTwo" placeholder="Digite o segundo parágrafo."/>

            <h3>Terceiro parágrafo</h3>
            <textarea name="paragraphThree" placeholder="Digite o terceiro parágrafo."/>

            <h3>Frase de impacto</h3>
            <InputText type="text" name="italic" placeholder="Digite a frase de impacto"/>

            <h3>Créditos ao autor</h3>
            <InputText type="text" name="link" placeholder="Digite o link da página do autor"/>

            <button type="submit">Publicar</button>
          </div>
        </form>

      </div>
    </div>
  )
}