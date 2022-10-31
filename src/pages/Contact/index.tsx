import { useState } from 'react';

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import * as S from './styles'
import { X } from "phosphor-react";
import { api } from '../../lib/axios';


interface IFormPostProps  {
  name: string;
  email: string;
  yourMessage: string;
}

export function Contact(){

  const [submitedPost, setSubmitedPost] = useState<any>(false);

  const newPostFormSchema = zod.object({
    name: zod.string().min(1, 'Informe um título válido.').max(100, 'O título deve ser inferior a 100 caracteres.'),
    email: zod.string().min(1, 'Informe um parágrafo válido.').max(500, 'O parágrafo deve ser inferior a 500 caracteres.'),
    yourMessage: zod.string().min(1, 'Informe um parágrafo válido.').max(500, 'O título deve ser inferior a 500 caracteres.'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(newPostFormSchema)
  })

  function handleCreateNewPost(data: IFormPostProps | any) {

    const title = data.title
    const firstParagraph = data.firstParagraph
    const secondParagraph = data.secondParagraph
    const thirdParagraph = data.thirdParagraph
    const impactPhrase = data.impactPhrase
    const authorLink = data.authorLink
    const authorSocialMedia = data.authorSocialMedia

    const result = api.post('post', {
      title,
      firstParagraph,
      secondParagraph,
      thirdParagraph,
      impactPhrase,
      authorLink,
      authorSocialMedia,
    })

    setSubmitedPost(true)

  }



  return(
    <S.ContainerAbout>

        <S.Title>Entre em contato com a gente!</S.Title>

          <form onSubmit={handleSubmit(handleCreateNewPost)} action="">
        <S.ContainerForm>
            <h3>Nome</h3>
            <S.TextInputContainer>
              <input 
                placeholder="Digite o seu nome."
                {...register('name')}
              />
            </S.TextInputContainer>
            <S.ErrorMessage >
              <>
                {errors.title?.message}
              </>
            </S.ErrorMessage>

            <h3>Email</h3>
            <S.TextInputContainer>
              <input 
                placeholder="Digite o seu e-mail."
                {...register('email')}
              />
            </S.TextInputContainer>
            <S.ErrorMessage>
              <>
                {errors.title?.message}
              </>
            </S.ErrorMessage>

            <h3>Mensagem</h3>
            <textarea 
              placeholder="Digite sua mensagem."
              {...register('yourMessage')}
            />
            <S.ErrorMessage>
              <>
                {errors.firstParagraph?.message}
              </>
            </S.ErrorMessage>

            <button type="submit">Enviar mensagem</button>
        </S.ContainerForm>
          </form>
        <S.PopUpSuccess color={submitedPost}>
          <p>Mensagem enviada com sucesso</p>
          <X size={18} onClick={() => setSubmitedPost(false)}/>
        </S.PopUpSuccess>
    </S.ContainerAbout>
  )
}