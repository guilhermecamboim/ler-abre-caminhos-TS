import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

interface IProps {
  title: string;
  subtitle: string;
  image: string;
  navLink: any;
}

export function Card({title, subtitle, image, navLink}: IProps) {
  return (
    <NavLink className={styles.containerCard} to={`posts/${navLink}`}>
        <img className={styles.imgCard} src={image}/>
        <div className={styles.contentCard}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
    </NavLink>
  )
}