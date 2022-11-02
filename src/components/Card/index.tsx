import { Trash } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { api } from '../../lib/axios';
import styles from './styles.module.css';

interface IProps {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  navLink: any;
}


export function Card({title, subtitle, image, navLink, date}: IProps) {
  
  function handleDeletePost(){
    api.delete(`post/${navLink}`)

    window.location.reload();
  }

  return (
    <div className={styles.containerCard}>
      <Trash size={24} className={styles.trashButton} onClick={handleDeletePost}/>
      <NavLink className={styles.containerLink} to={`posts/${navLink}`}>
        <img className={styles.imgCard} src={image}/>
        <div className={styles.contentCard}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <p>{date.slice(0, 10)}</p>
        </div>
      </NavLink>
    </div>
  )
}