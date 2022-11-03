import styled from 'styled-components'

export const Container = styled.main`
  max-width: 70rem;
  height: 100vh;
  margin: 50px 0 50px 0;
  padding: 0 1rem;
  
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 2rem;
  align-items: center;
`

export const ContainerCards = styled.div`
  display: grid;
  grid-template-areas: 
  "grid grid";
  padding-left: 1rem;
  
  @media (min-width: 768px) {
    padding: 0.5rem;
  }

  @media (min-width: 1001px) {
    padding: 1rem;
  }
`