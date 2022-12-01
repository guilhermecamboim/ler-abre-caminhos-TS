import styled from 'styled-components'

interface IProps {
  hasBorder?: boolean
}

export const ImageAvatar = styled.img<IProps>`

  width: ${({hasBorder}) => hasBorder ? 'calc(3rem + 12px)' : '3rem'};
  height: ${({hasBorder}) => hasBorder ? 'calc(3rem + 12px)' : '3rem'};
  border-radius: ${({hasBorder}) => hasBorder ? '8px' : 'none'};
  border: ${({hasBorder}) => hasBorder ? '4px solid var(--gray-800)' : 'none'};
  outline: ${({hasBorder}) => hasBorder ? '2px solid var(--violet-500)' : 'none'};
`