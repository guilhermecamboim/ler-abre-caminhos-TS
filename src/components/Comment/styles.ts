import styled from "styled-components";

export const CommentContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`;

export const CommentBox = styled.div`
  flex: 1;

  footer button {
    background: transparent;
    border: none;
    color: var(--gray-400);
    cursor: pointer;
    border-radius: 2px;

    display: flex;
    align-items: center;

    footer {
      margin-top: 1rem;
    }

    footer button:hover {
      color: var(--violet-400);
    }

    footer button svg {
      margin-right: 0.5rem;
    }

    footer button span::before {
      content: "\2022";
      padding: 0 0.25rem;
    }
  }
`;

export const CommentContent = styled.div`
  background: var(--gray-700);
  border-radius: 8px;
  padding: 1rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  header button {
    background: transparent;
    border: none;
    color: var(--gray-400);
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;
  }

  header button:hover {
    color: var(--red-500);
  }

  p {
    margin-top: 1rem;
    color: var(--gray-300);
  }
`;

export const AuthorAndTime = styled.div`
  display: block;
  font-size: 0.875rem;
  line-height: 1.6;

  strong {
    display: block;
    font-size: 0.875rem;
    line-height: 1.6;
  }

  time {
    display: block;
    font-size: 0.75rem;
    color: var(--gray-400);
    line-height: 1.6;
  }
`;
