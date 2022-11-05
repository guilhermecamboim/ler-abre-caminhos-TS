import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './styles.module.css'
import { Carousel } from './components/Carousel'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  id: string | number;	
  authorLink: string,
  authorSocialMedia: string,
  firstParagraph: string,
  impactPhrase: string,
  secondParagraph?: string,
  thirdParagraph?: string,
  title: string
  fileUrl: string;
}

interface PostProps { 
  author?: Author;
  publishedAt?: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments ] = useState(['Post muito bacana, hein?'])
  const [newCommentText, setNewCommentText ] = useState('')

/*   const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const plublishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
 */
  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    console.log(event.target.setCustomValidity('Esse campo é obrigatório!'))
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article
      className={styles.post}
    >
      <header>
        <div className={styles.author}>
{/*           <Avatar src={author.avatarUrl} /> */}
          <div className={styles.authorInfo}>
{/*             <strong>{author.name}</strong>
            <span>{author.role}</span> */}
          </div>
        </div>
{/*         <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{plublishedDateRelativeToNow}</time> */}
      </header>

      <div className={styles.content}>
        <div className={styles.containerSlider}>
          {/* <Carousel fileUrl={content.file?.fileUrl}/> */}
          <img className={styles.imageTest} src={content.file?.fileUrl} />
        </div>
          <p>{content.firstParagraph}</p>
          <p>{content.secondParagraph}</p>
          <p>{content.thirdParagraph}</p>
          <p><em>{content.impactPhrase}</em></p>
          <p>Conheça o autor(a): <a href={`${content.authorLink}`} target="_blank">{content.authorSocialMedia}</a></p>
      </div>

      <form onSubmit ={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment 
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
};
