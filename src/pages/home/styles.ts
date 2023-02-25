import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black};
`;

export const Card = styled.article`
  min-width: 350px;
  box-shadow: 0 0 10px ${({ theme }) => theme.green[200]};
  header {
    padding: 12px 0;
    background: ${({ theme }) => darken(0.1, theme.green[500])};
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  section {
    background: ${({ theme }) => theme.gray[700]};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 22px;
  }

  @media screen and (max-width: 500px) {
    min-width: 90%;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  max-width: 80%;
  > div {
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MusicEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.elite};
    color: ${({ theme }) => theme.white};
    text-align: center;
  }
`;
