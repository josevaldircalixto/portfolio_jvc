import styled, { keyframes } from "styled-components";
import { colors, fonts, layout } from "../../styles/tokens";

/* NOVO: garante que a coluna de texto possa encolher no grid */
export const Content = styled.div`
  min-width: 0; /* <- evita “comer” texto no grid */
`;

export const ContainerContact = styled.div`
  padding: 0 16px;
`;

export const Section = styled.section`
  max-width: ${layout.maxWidth};
  margin: 16px auto;
  padding: 32px;
  background: ${colors.panel};
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);

  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 24px;
  position: relative;
  overflow: hidden;

  /* tablets */
  @media (max-width: 1120px) {
    padding: 24px;
    grid-template-columns: 1fr 0.9fr;
    gap: 20px;
  }

  /* mobile */
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 16px;
    text-align: center;
    overflow: visible; /* <- evita cortar conteúdo no mobile */
  }

  @media (max-width: 560px) {
    padding: 20px 16px;
    border-radius: 10px;
  }
`;

export const CodeTag = styled.span`
  color: #c678dd;
  display: inline;
  margin: 0 4px;
`;

export const Title = styled.h1`
  font-family: ${fonts.mono};
  font-size: clamp(22px, 6vw, 44px); /* menor no mobile */
  line-height: 1.2;
  margin: 0 0 12px 0;

  .code {
    color: ${colors.accent};
  }

  /* evita transbordo em nomes/termos longos */
  word-wrap: break-word;
  overflow-wrap: anywhere;
`;

export const Subtitle = styled.p`
  font-family: ${fonts.mono};
  color: ${colors.subtext};
  margin: 12px 0 18px 0;

  .highlight {
    color: #c678dd;
  }

  /* evita transbordo */
  word-wrap: break-word;
  overflow-wrap: anywhere;
  white-space: normal;

  @media (max-width: 960px) {
    font-size: 0.95rem;
  }
`;

/* carrossel: ícones menores e sem empurrar o layout */
export const TechBlock = styled.div`
  margin-top: 16px;

  img {
    width: 36px;
    height: 36px;
    object-fit: contain;
    display: inline-block;
  }

  @media (max-width: 1120px) {
    img {
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: 960px) {
    img {
      width: 26px;
      height: 26px;
    }
  }
`;

export const Cta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  padding: 12px 14px;
  border-radius: 12px;
  background: ${colors.accent};
  color: ${colors.bg};
  font-weight: 700;

  @media (max-width: 960px) {
    width: 100%;
    justify-content: center; /* botão grande e clicável */
  }
`;

export const Portrait = styled.div`
  background: radial-gradient(
    120% 120% at 20% 20%,
    #1a2434 0%,
    transparent 60%
  );
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;

  @media (max-width: 1120px) {
    min-height: 300px;
  }
  @media (max-width: 960px) {
    min-height: 240px;
    background: transparent;
    margin-top: 4px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  border-radius: 12px;
  display: block;

  @media (max-width: 1120px) {
    max-width: 360px;
  }
  @media (max-width: 960px) {
    max-width: 320px;
  }
  @media (max-width: 560px) {
    max-width: 260px;
  }
`;

const blink = keyframes`
  0%,49% { opacity: 1; } 50%,100% { opacity: 0; }
`;

export const CaretV = styled.span`
  width: 2px;
  height: 1em;
  background: ${colors.text};
  display: inline-block;
  margin-left: 4px;
  animation: ${blink} 0.9s steps(1, end) infinite;

  @media (max-width: 560px) {
    width: 1px;
  }
`;

export const CaretH = styled.span`
  display: inline-block;
  margin-left: 4px;
  animation: ${blink} 0.9s steps(1, end) infinite;
`;
