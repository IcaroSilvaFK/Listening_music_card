import styled from 'styled-components';

export const Container = styled.div<{ rating: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 0.75rem;
  }
  > div {
    height: 12px;
    width: 80%;
    display: flex;
    align-items: flex-start;
    margin-top: 12px;
    border-radius: 12px;
    overflow: hidden;
    background: #4a5568;
    position: relative;
    overflow: hidden;
    div {
      flex: 1;
      width: ${({ rating }) => rating}%;
      background: ${({ theme }) => theme.green[500]};
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
    }
  }
`;
