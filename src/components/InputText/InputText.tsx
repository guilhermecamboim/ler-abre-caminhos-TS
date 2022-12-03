import { InputHTMLAttributes } from 'react';
import * as S from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>  {
  prefix?: string;
}

export function InputText({ prefix, ...props }: TextInputProps) { 
  return (
    <S.TextInputContainer>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <input {...props}/>
    </S.TextInputContainer>
  )
}