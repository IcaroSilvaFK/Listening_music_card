import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    color: ${({ theme }) => theme.gray[200]};
    font-family: ${({ theme }) => theme.fonts.elite};
    font-weight: bold;
  }
  span:last-of-type {
    color: ${({ theme }) => theme.gray[200]};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fonts.poppins};
  }
`;
