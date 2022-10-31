import * as S from './styles'
import libraryArt from "../../../assets/libraryArt.png"


export function About(){
  return(
    <S.ContainerAbout>

      <S.ContentAbout>
        <S.Title>O que é Ler Abre Caminhos?</S.Title>
        <S.ImageLibrary src={libraryArt} alt="A library with candles and old books" />

        <S.AboutParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula enim quam, ut feugiat elit sollicitudin sit amet. Nam non porttitor turpis. Pellentesque cursus feugiat auctor. Aliquam mollis, sapien ut tempor accumsan, nisi massa commodo sapien, quis lobortis turpis eros non ex. Nunc sodales ex massa, at suscipit sem porta a. Integer id cursus nisl. Suspendisse libero magna, rutrum ultricies lorem nec, interdum viverra arcu.
        </S.AboutParagraph>

        <S.AboutParagraph>
        Fusce tincidunt, sem vel lobortis iaculis, risus tortor pharetra felis, vitae consectetur risus quam ac ipsum. Vivamus pulvinar euismod nisi, non bibendum orci tempus vel. Vestibulum nisl velit, condimentum ac porttitor ut, accumsan vel sem. Pellentesque pellentesque est non sagittis hendrerit. Nam vestibulum molestie ante, nec bibendum elit malesuada a. Sed luctus enim sapien, vitae volutpat lacus lacinia a. Nulla ut felis quis diam laoreet vestibulum at vitae orci. Aliquam erat volutpat. In tincidunt vestibulum libero, ut fermentum leo tristique sit amet. Aliquam pharetra tempor lobortis. Nam non tellus eu sem efficitur mollis vel sit amet enim. Suspendisse mollis a leo vitae mattis.
        </S.AboutParagraph>

        <S.AboutParagraph>
        Phasellus purus mi, ornare sit amet tempus a, imperdiet eu arcu. Nullam pharetra turpis lectus, varius finibus ipsum placerat non. Aenean varius nunc dui, id suscipit sapien ullamcorper vel. Sed eleifend, est sed ultrices porta, tortor mi faucibus lectus, sed rutrum nisi nibh at tortor. Etiam fringilla in libero vel fringilla. Suspendisse nibh purus, ullamcorper in neque ac, aliquam maximus massa. Duis non ultrices justo. Proin eu risus viverra, posuere elit quis, vulputate ante. Cras vehicula vulputate mattis. Proin vitae fringilla ante. Quisque lacus mi, auctor ut mollis quis, molestie eget urna. Praesent congue viverra tellus euismod fermentum.
        </S.AboutParagraph>
        
      </S.ContentAbout>

    </S.ContainerAbout>
  )
}