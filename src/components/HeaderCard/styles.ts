import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  img {
    border-radius: 50%;
    max-width: 100px;
  }

  span {
    color: ${({ theme }) => theme.gray[200]};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 14px;
  }
  h1 {
    font-family: ${({ theme }) => theme.fonts.elite};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    letter-spacing: 1.5px;
    text-align: center;
  }
`;
