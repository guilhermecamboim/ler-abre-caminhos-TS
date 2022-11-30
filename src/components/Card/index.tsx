import { Trash } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { api } from '../../lib/axios';
import styles from './styles.module.css';
import * as S from './styles'

interface IProps {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  navLink: React.RefAttributes<HTMLAnchorElement>;
}


export function Card({title, subtitle, image, navLink, date}: IProps) {
  
  function handleDeletePost(){
    api.delete(`post/${navLink}`)

    window.location.reload();
  }

  return (
    <S.ContainerCard>
      <Trash size={24} className={styles.trashButton} onClick={handleDeletePost}/>
      <NavLink className={styles.containerLink} to={`posts/${navLink}`}>
        <S.ImageCard src={image}/>
        <S.ContentCard>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <p>{date.slice(0, 10)}</p>
        </S.ContentCard>
      </NavLink>
    </S.ContainerCard>
  )
}