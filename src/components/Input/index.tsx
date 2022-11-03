import { InputHTMLAttributes } from "react";
import * as S from './styles'

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement>{
  asChild?: boolean;
  label?: string;
  errorMessage?: string;
  widthInput: string | number;

}

export function Input({label, asChild, placeholder, errorMessage, widthInput }: IPropsInput) {

  return (
    <>
    {/* <h3>{label}</h3> */}
      <S.ContainerInput widthInput={widthInput}>
        <S.Input
          placeholder={placeholder}
        />
      </S.ContainerInput>
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </>
  )
}