import styles from './styles.module.css';
import logoImg from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';

export function Header(){
  return (
    <header className={styles.header}>
      <NavLink to="/" title="Home">
        <img src={logoImg} alt="Logotipo do Ler Abre Caminhos"/>
      </NavLink>
        <h1>@LerAbreCaminhos</h1>
      <div className="containerSelection">
        <a href="/sobre">Sobre</a>
        <a href="/estou-lendo">Estou lendo</a>
        <a href="/contato">Contato</a>
      </div>
    </header>
  )
}