import styles from './styles.module.css';
import logoImg from '../../../assets/logo.png';

export function Header(){
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logotipo do Ler Abre Caminhos"/>
    </header>
  )
}