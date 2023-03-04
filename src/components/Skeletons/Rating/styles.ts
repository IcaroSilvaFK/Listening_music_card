import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 0.75rem;
  }
`;
