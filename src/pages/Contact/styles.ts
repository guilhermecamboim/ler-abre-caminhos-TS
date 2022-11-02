import styled from 'styled-components'

export const ContainerAbout = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 82rem;
  height: 40rem;
`

export const Title = styled.h2 `
  margin-bottom: 2rem;

  position: relative;
  right: 125px;
`

export const ContainerForm = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  align-items: flex-start;
  width: 40rem;

  textarea {
  width: 80%;
  background: var(--gray-800);
  border: 0;
  resize: none;
  height: 10rem;
  padding: 1rem;
  border-radius: 8px;
  color: var(--white);
  line-height: 1.6;
  margin-top: 1rem;
  border: 2px solid var(--violet-900);

}

textarea:focus {
  border-color: var(--violet-400);
}

textarea::placeholder {
  color: var(--gray-400);
}

  button[type='submit'] {
  margin-top: 50px;
  font-weight: bold;
  color: var(--white);
  border: 2px solid var(--violet-900);
  background: var(--violet-700);
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  width: 80%;
}

button[type='submit']:hover {
  background: var(--violet-500);
  transition: 1s;
}

`

export const TextInputContainer = styled.div `

  input {
  background: var(--gray-800);
  padding: 12px 16px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 2px solid var(--violet-900);
  display: flex;
  align-items: baseline;
  width: 500px;
}

  input:focus {
  border-color: var(--violet-400)
  }

  input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  }

  input:focus {
  outline: none !important;
  box-shadow: none !important;

  }

  input:disabled {
    cursor: not-allowed;

  }

  input::placeholder {
    color: var(--gray-400);

  }
`

export const ErrorMessage = styled.p  `
  color: var(--red-500);
`