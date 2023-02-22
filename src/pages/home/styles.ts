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

    > div {
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
    }
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

export const LeftContentFooter = styled.div`
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

export const RightContentFooter = styled.div`
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

export const ProgressiveBarContainer = styled.div<{ rating: number }>`
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

export const MusicEmpty = styled.div`
  h1 {
    font-family: ${({ theme }) => theme.fonts.elite};
    color: ${({ theme }) => theme.white};
  }
`;
