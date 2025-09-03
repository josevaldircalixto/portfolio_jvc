import styled from "styled-components";
import { colors, fonts, layout } from "../../styles/tokens";

export const ContainerContact = styled.div`
  padding: 0 16px;
`;

export const Section = styled.section`
  max-width: ${layout.maxWidth};
  margin: 16px auto;
  padding: 0 16px 24px;
  background-color: #11151f;
  border-radius: 12px;
  background: ${colors.panel};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
`;

export const TitleGreen = styled.li`
  font-family: ${fonts.mono};
  font-weight: 800;
  font-size: 16px;
  color: ${colors.accent};
  letter-spacing: 2px;
  text-align: center;
  padding-top: 24px;
`;

export const H2 = styled.h2`
  font-family: ${fonts.mono};
  font-weight: 800;
  font-size: clamp(28px, 4vw, 42px);
  letter-spacing: 1px;
  text-align: center;
  margin: 0 0 24px 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  background: ${colors.panel};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Media = styled.div`
  aspect-ratio: 16 / 9;
  background: #0e131b;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
  }
  ${Card}:hover & img {
    transform: scale(1.04);
  }
`;

export const Body = styled.div`
  padding: 14px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  margin: 8px 0 2px;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Stack = styled.p`
  margin: 0;
  color: ${colors.subtext};
  font-size: 12px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;

export const Actions = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 22px;
  align-items: center;
  flex-wrap: wrap;
`;

export const ActionLink = styled.a`
  position: relative;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  opacity: 0.95;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 3px;
    border-radius: 3px;
    background: ${colors.accent};
    transform: scaleX(0.4);
    transform-origin: left;
    transition: transform 0.25s ease;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
