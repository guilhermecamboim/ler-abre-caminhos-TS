import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import * as S from "./styles";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  return (
    <S.CommentContainer>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/105326604?v=4"
        alt=""
      />

      <S.CommentBox>
        <S.CommentContent>
          <header>
            <S.AuthorAndTime>
              <strong>Guilherme Camboim</strong>
              <time
                title="11 de Maio de 2022 às 11:00"
                dateTime="2022-06-21 11:00"
              >
                Instantes atrás
              </time>
            </S.AuthorAndTime>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </S.CommentContent>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtir<span>{likeCount}</span>
          </button>
        </footer>
      </S.CommentBox>
    </S.CommentContainer>
  );
}