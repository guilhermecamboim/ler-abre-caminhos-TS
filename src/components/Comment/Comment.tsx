import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './styles.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1
    }) 
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/105326604?v=4" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Camboim</strong>
              <time title="11 de Maio de 2022 às 11:00" dateTime="2022-06-21 11:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}