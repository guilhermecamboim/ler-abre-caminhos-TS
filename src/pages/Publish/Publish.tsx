import { useRef, useState } from "react";
import { InputText } from "../../components/InputText/InputText";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { api } from "../../lib/axios";
import styles from './styles.module.css';

export function Publish() {

  const [ title, setTitle ] = useState<string>('')
  const [ firstParagraph, setFirstParagraph ] = useState<string>('')
  const [ secondParagraph, setSecondParagraph ] = useState<string>('')
  const [ thirdParagraph, setThirdParagraph ] = useState<string>('')
  const [ italic, setItalic ] = useState<string>('')
  const [ link, setLink ] = useState<string>('')
  const [files, setFiles] = useState<any>(null);
  const [nameFile, setNameFile] = useState('');

  function handleSetTitle(event: any) {
    setTitle(event.target.value)
  }

  function handleSetFirstParagraph(event: any) {
    setFirstParagraph(event.target.value)
  }

  function handleSetSecondParagraph(event: any) {
    setSecondParagraph(event.target.value)
  }

  function handleSetThirdParagraph(event: any) {
    setThirdParagraph(event.target.value)
  }

  function handleSetImpactFrase(event: any) {
    setItalic(event.target.value)
  }

  function handleSetCreditsAuthor(event: any) {
    setLink(event.target.value)
  }

  function handleSubmit() {

    const postPayload = {
      title,
      firstParagraph,
      secondParagraph,
      thirdParagraph,
      italic,
      link
    }

    const result = api.post('cadastrar', postPayload)
  }

  const fileRef = useRef<HTMLInputElement>(null);
  
  const handleClickInput = (event: any) => {
    event.preventDefault();
    fileRef.current?.click()
  };

  const onChangeInputFile = (event: any) => {
    event.preventDefault();
    console.log(event.target.files)
    setFiles(event.target.files)
    setNameFile(event.target.files[0].name)
  };


  console.log(files)

  



  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.containerForm}>
        <h1>Cadastrar novo Post</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.containerForm}>
            <h3>Titulo do Post</h3>
            <InputText 
              onChange={handleSetTitle}
              value={title} 
              type="text" 
              name="titulo" 
              placeholder="Digite o título do post."
              maxLength={50}
            />

            <h3>Primeiro parágrafo</h3>
            <textarea 
              onChange={handleSetFirstParagraph}
              value={firstParagraph}
              name="firstParagraph" 
              placeholder="Digite o primeiro parágrafo."
              maxLength={500}
            />

            <h3>Segundo parágrafo</h3>
            <textarea 
              onChange={handleSetSecondParagraph}
              value={secondParagraph}
              name="secondParagraph" 
              placeholder="Digite o segundo parágrafo."
              maxLength={500}
            />

            <h3>Terceiro parágrafo</h3>
            <textarea 
              onChange={handleSetThirdParagraph} 
              value={thirdParagraph}
              name="thirdParagraph" 
              placeholder="Digite o terceiro parágrafo."
              maxLength={500}
            />

            <h3>Frase de impacto</h3>
            <InputText 
              onChange={handleSetImpactFrase} 
              value={italic}
              type="text" 
              name="italic" 
              placeholder="Digite a frase de impacto"
              maxLength={100}
            />

            <h3>Créditos ao autor</h3>
            <InputText 
              onChange={handleSetCreditsAuthor}
              value={link} 
              type="text" 
              name="link" 
              placeholder="Digite o link da página do autor"
              maxLength={100}
            />

            <div className={styles.containerUploadButton}>
              <button
                onClick={handleClickInput}
              >
                Enviar imagens 📷
              </button>
              <input
                type="file"
                name="files"
                multiple
                ref={fileRef}
                onChange={onChangeInputFile}
                accept="image/*"
                hidden  
              />
            </div>
              {files !== null && Array.from(files).map(function(item: any, index: number) {
                return (
                    <div className={styles.containerPreviewUpload}>
                      <p className={styles.previewParagraph}>{item.name} ✅</p>
                      <img src={URL.createObjectURL(files[index])} alt="" className={styles.previewImage}/>
                    </div>
                  )
                })
              }
            <input type="submit" />
          </div>
        </form>

      </div>
    </div>
  )
}