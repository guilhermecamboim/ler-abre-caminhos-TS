import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 25px 50px 25px;

  width: 400px;
  height: 450px;
  background: #BEBCFC;
  border-radius: 8px;
  border: 1px solid #C55DF6;

  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 0 2em purple;
  }

  svg {
    position: relative;
    bottom: 20px;
  }
  
  svg:hover {
    color: var(--red-500);
    cursor: pointer;
}

` 

export const ImageCard = styled.img`
  position: relative;
  bottom: 5%;
  min-width: 350px;
  min-height: 300px;
  max-width: 350px;
  max-height: 300px;
  border-radius: 4px;
  object-fit: cover;

`

export const ContentCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 40px;

  width: 100%;
  height: 32%;

  border-top: 1px solid #C55DF6;
  border-top-left-radius: none;
  border-top-right-radius: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background: rgba( 255, 255, 255, 0.1 );
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );

  h1 {
    margin: 10px 0 10px 0;
    display: flex;
    text-align: center;
    font-size: 18px;
    color: #000000;
  }

  p {
    font-size: 14px;
    color: var(--violet-600);
  }

  p:nth-child(3){ 
    font-size: 13px;
    margin-top: 2px;
    color: var(--gray-800);
  }

  svg {
  position: relative;
  color: var(--red-500);
  bottom: 50px; 
  left: 180px;
  z-index: 1;
  color: var(--violet-600);
}
` 
