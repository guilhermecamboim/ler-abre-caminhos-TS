import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import * as S from './styles'

export function Sidebar() {
  return (
    <S.ContainerSidebar>
      <S.CoverImage 
        src="https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=70" 
        alt=""
      />

      <S.ProfileContainer>
      <Avatar src="https://avatars.githubusercontent.com/u/105326604?v=4" />
        <strong>Guilherme Camboim</strong>
        <span>Admin</span>
      </S.ProfileContainer>

      <footer>
        <a href="a">
          < PencilLine 
            size={20}
          />
          Editar seu perfil
        </a>
      </footer>
      
    </S.ContainerSidebar>
  );
}