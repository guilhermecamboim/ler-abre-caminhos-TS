import styled from 'styled-components'

interface IPopUpProps {
  visible?: boolean;
}

export const PopUpSuccess = styled.div<IPopUpProps>`
  width: 400px;
  height: 150px;
  
  position: fixed;
  top: 50px;
  right: 0;
  
  border-radius: 8px;
  background: var(--green-300);
  color: var(--gray-900);
  display: ${({visible}) => visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;

  svg {
    position: relative;
    top: -40px;
    right: -80px;
    cursor: pointer;
  }

`