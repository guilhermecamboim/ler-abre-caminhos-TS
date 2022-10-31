import styled from 'styled-components'

export const ContainerAbout = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const ContentAbout = styled.div `
  width: 40rem;
  height: 55rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const Title = styled.h2 `
  margin-bottom: 2rem;

  position: relative;
  right: 125px;
`


export const ImageLibrary = styled.img `
  width: 35rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`

export const AboutParagraph = styled.p `
  text-align: justify;
  margin-bottom: 0.5rem;
`