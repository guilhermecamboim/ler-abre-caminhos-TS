import styled from "styled-components";

export const TextInputContainer = styled.div`
  background: var(--gray-800);
  padding: 12px 16px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 2px solid var(--violet-900);
  display: flex;
  align-items: baseline;

  &:has(input:focus) {
    border-color: var(--violet-400);
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
  input {
    font-size: 1rem;
    color: var(--white);
    background: transparent;
    border: none;
    width: 100%;
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
`;

export const Prefix = styled.span`
  font-size: 12px;
`