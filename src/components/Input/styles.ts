import styled from 'styled-components'

interface IPropsInput {
  widthInput: string | number;
}

export const ContainerInput = styled.div<IPropsInput>`
  background: var(--gray-800);
  padding: 12px 16px;
  border-radius: 8px;
  box-sizing: border-box;
  
  width: ${({widthInput}) => widthInput !== '' ? `${widthInput}rem` : '25rem'};
  border: 2px solid var(--violet-900);
  display: flex;
  align-items: baseline;

  &:has(input:focus) {
  border-color: var(--violet-400)
  }

`

export const Input = styled.input`
  font-size: 1rem;
  color: var(--white);
  background: transparent;
  border: none;
  width: 100%;

  &:focus{
    border-color: var(--violet-400);
    outline: none;
    box-shadow: none;
  }

  &:disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
  color: var(--gray-400);

}
`

export const ErrorMessage = styled.p`
  color: var(--red-500);
`
