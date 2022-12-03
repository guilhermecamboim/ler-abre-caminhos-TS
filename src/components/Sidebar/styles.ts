import styled from "styled-components";

export const ContainerSidebar = styled.aside`
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
  margin-left: 50px;

  footer {
    border-top: 1px solid var(--gray-600);
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
  }

  footer a {
    background: transparent;
    color: var(--violet-500);
    border: 1px solid var(--violet-500);
    border-radius: 8px;
    height: 50px;
    padding: 0 1.5rem;
    font-weight: bold;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
  }

  footer a:hover {
    background: var(--violet-500);
    color: var(--white);
    transition: 300ms;
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(8px - 1.5rem - 6px);

  strong {
    margin-top: 1rem;
    color: var(--gray-100);
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: var(--violet-400);
    line-height: 1.6;
  }
`;
