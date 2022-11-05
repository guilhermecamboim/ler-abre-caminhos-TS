import { useRef, useState } from "react";
import { api } from "../../lib/axios";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Sidebar } from "../../components/Sidebar/Sidebar";
import * as S from './styles'
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";
import { PopUp } from "../../components/PopUp";

interface IFormPostProps  {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  impactPhrase: string;
  authorLink: string;
  authorSocialMedia: string;
  FieldValues: any;
}

export function Publish(props: any) {

  const [files, setFiles] = useState<any>(null);
  const [submitedPost, setSubmitedPost] = useState<any>(false);

  const newPostFormSchema = zod.object({
    title: zod.string().min(1, 'Informe um título válido.').max(100, 'O título deve ser inferior a 100 caracteres.'),
    firstParagraph: zod.string().min(1, 'Informe um parágrafo válido.').max(600, 'O parágrafo deve ser inferior a 500 caracteres.'),
    secondParagraph: zod.string().min(1, 'Informe um parágrafo válido.').max(600, 'O título deve ser inferior a 500 caracteres.'),
    thirdParagraph: zod.string().min(1, 'Informe um parágrafo válido.').max(600, 'O título deve ser inferior a 500 caracteres.'),
    impactPhrase: zod.string().min(1, 'Informe uma frase válida.').max(200, 'A frase deve ser inferior a 100 caracteres.'),
    authorLink: zod.string().min(1, 'Informe um link válido.').max(300, 'O link deve ser inferior a 300 caracteres.'),
    authorSocialMedia: zod.string().min(1, 'Informe um @ válido.').max(100, 'O @ deve ser inferior a 100 caracteres.'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(newPostFormSchema)
  })

  const navigate = useNavigate()
  const handleCreateNewPost = async (data: IFormPostProps | any) => {

    let fileId

    if (files) {
      const formData = new FormData();
      formData.append("file", files);
      const resultUpload = await api({
        method: "post",
        url: "file-upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      fileId = resultUpload.data;
    }

    const title = data.title
    const firstParagraph = data.firstParagraph
    const secondParagraph = data.secondParagraph
    const thirdParagraph = data.thirdParagraph
    const impactPhrase = data.impactPhrase
    const authorLink = data.authorLink
    const authorSocialMedia = data.authorSocialMedia
    const file = fileId
    
    await api.post('post', {
      title,
      firstParagraph,
      secondParagraph,
      thirdParagraph,
      impactPhrase,
      authorLink,
      authorSocialMedia,
      file
    })

    setSubmitedPost(true)

    setTimeout(() => {
      setSubmitedPost(false);
      navigate("/")
    }, 2500)

  }
  

  const fileRef = useRef<HTMLInputElement>(null);
  
  const handleClickInput = (event: any) => {
    event.preventDefault();
    fileRef.current?.click()
  };

  const onChangeInputFile = (event: any) => {
    event.preventDefault();
    //setFiles(event.target.files)
    if (event.target.files.length !== 0) { 
      setFiles(event.target.files[0])
    }
  };

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.containerForm}>
        <h1>Cadastrar novo Post</h1>


        <form onSubmit={handleSubmit(handleCreateNewPost)} action="">
          <div className={styles.containerForm}>

            <h3>Titulo do Post</h3>
            <div className={styles.textInputContainer}>
              <input 
                className={styles.input}
                placeholder="Digite o título do post."
                {...register('title')}
              />
            </div>
            <p className={styles.errorMessage} >
              <>
                {errors.title?.message}
              </>
            </p>

            <h3>Primeiro parágrafo</h3>
            <textarea 
              placeholder="Digite o primeiro parágrafo."
              {...register('firstParagraph')}
            />
            <p className={styles.errorMessage} >
              <>
                {errors.firstParagraph?.message}
              </>
            </p>

            <h3>Segundo parágrafo</h3>
            <textarea 
              {...register('secondParagraph')}
              placeholder="Digite o segundo parágrafo."
            />
            <p className={styles.errorMessage} >
              <>
                {errors.secondParagraph?.message}
              </>
            </p>

            <h3>Terceiro parágrafo</h3>
            <textarea 
              {...register('thirdParagraph')}
              placeholder="Digite o terceiro parágrafo."
            />
            <p className={styles.errorMessage} >
              <>
                {errors.thirdParagraph?.message}
              </>
            </p>

            <h3>Frase de impacto</h3>
            <div className={styles.textInputContainer}>
              <input 
                className={styles.input}
                placeholder="Digite a frase de impacto."
                {...register('impactPhrase')}
              />
            </div>
            <p className={styles.errorMessage} >
              <>
                {errors.impactPhrase?.message}
              </>
            </p>

            <h3>Rede social do autor</h3>
            <div className={styles.textInputContainer}>
              <input 
                className={styles.input}
                placeholder="Digite o @ do usuário do autor"
                {...register('authorSocialMedia')}
              />
            </div>
            <p className={styles.errorMessage} >
              <>
                {errors.authorSocialMedia?.message}
              </>
            </p>

            <h3>Créditos ao autor</h3>
            <div className={styles.textInputContainer}>
              <input 
                className={styles.input}
                placeholder="Digite o link da página do autor"
                {...register('authorLink')}
              />
            </div>
            <p className={styles.errorMessage} >
              <>
                {errors.authorLink?.message}
              </>
            </p>

            <div className={styles.containerUploadButton}>
              <button
                onClick={handleClickInput}
              >
                Enviar imagens 📷
              </button>
              <input
                type="file"
                name="files"
                ref={fileRef}
                onChange={onChangeInputFile}
                accept="image/*"
                hidden  
              />
            </div>
{/*               {files !== null && Array.from(files).map(function(item: any, index: number) {
                return (
                    <div className={styles.containerPreviewUpload}>
                      <p className={styles.previewParagraph}>{item.name} ✅</p>
                      <img src={URL.createObjectURL(files[index])} alt="" className={styles.previewImage}/>
                    </div>
                  )
                })
              } */}
              {files !== null && 
                    <div className={styles.containerPreviewUpload}>
                      <p className={styles.previewParagraph}>{files.name} ✅</p>
                      <img src={URL.createObjectURL(files)} alt="" className={styles.previewImage}/>
                    </div>
                  
              }

            <button type="submit">Publicar Post</button>
          </div>
        </form>
        <PopUp 
          message="Artigo incluído com sucesso"
          open={submitedPost}
        />
      </div>
    </div>
  )
}