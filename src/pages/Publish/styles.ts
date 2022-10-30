import styled from 'styled-components'

export const PopUpSuccess = styled.div`
  width: 400px;
  height: 125px;
  border-radius: 8px;
  position: fixed;
  right: 0;
  top: 0;
  background: var(--green-300);
  color: var(--gray-900);
  display: ${(props) => props.color ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;

  svg {
    position: relative;
    top: -40px;
    right: -80px;
    cursor: pointer;
  }
`