import { InputText } from "../../components/InputText/InputText";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from './styles.module.css';

export function Publish() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.containerForm}>
        <h1>Cadastrar novo Post</h1>
        <InputText />
        <InputText />
        <InputText />
        <InputText />

      </div>
    </div>
  )
}