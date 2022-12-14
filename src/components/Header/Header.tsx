import styles from './styles.module.css';
import logoImg from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';

export function Header(){
  return (
    <header className={styles.header}>
      <NavLink to="/" title="Home" className="containerImg">
        <img src={logoImg} alt="Logotipo do Ler Abre Caminhos"/>
      </NavLink>
      <NavLink to="/" title="Home" className="containerTitle">
        <h1>Ler Abre Caminhos</h1>
      </NavLink>
      <div className="containerSelection">
        <a href="/cadastrar">Cadastrar</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </div>
    </header>
  )
}