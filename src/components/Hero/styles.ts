import styled, { keyframes } from "styled-components";
import { colors, fonts, layout } from "../../styles/tokens";

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
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const CodeTag = styled.span`
  color: #c678dd;
  display: inline;
  margin: 0 4px;
`;

export const Title = styled.h1`
  font-family: ${fonts.mono};
  font-size: clamp(28px, 4vw, 52px);
  line-height: 1.15;
  margin: 0 0 12px 0;

  .code {
    color: ${colors.accent};
  }
`;

export const Subtitle = styled.p`
  font-family: ${fonts.sans};
  color: ${colors.subtext};
  margin: 12px 0 18px 0;

  .highlight {
    color: #c678dd;
  }
`;

export const TechBlock = styled.div`
  margin-top: 16px;
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
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  border-radius: 12px;
  display: block;
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
`;
export const CaretH = styled.span`
  display: inline-block;
  margin-left: 4px;
  animation: ${blink} 0.9s steps(1, end) infinite;
`;
