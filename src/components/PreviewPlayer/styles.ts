import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: ${({ theme }) => theme.gray[200]};
    font-family: ${({ theme }) => theme.fonts.poppins};
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;

    &.play {
      color: ${({ theme }) => theme.green[500]};
    }
  }

  audio {
    display: none;
  }
`;
