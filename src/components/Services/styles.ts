import styled from "styled-components";
import { colors, fonts, layout } from "../../styles/tokens";

export const Wrapper = styled.div`
  padding: 0 16px;
`;

export const Section = styled.section`
  max-width: ${layout.maxWidth};
  margin: 16px auto;
  padding: 16px 24px 24px;
  border-radius: 12px;
  background: ${colors.panel};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);

  @media (max-width: 640px) {
    padding: 22px 16px 18px;
  }
`;

export const Badge = styled.p`
  font-family: ${fonts.mono};
  font-weight: 800;
  font-size: 16px;
  color: ${colors.accent};
  letter-spacing: 2px;
  text-align: center;
  list-style-type: none;
`;

export const Title = styled.h2`
  font-family: ${fonts.mono};
  font-size: clamp(24px, 4vw, 34px);
  color: ${colors.text};
  margin-bottom: 4px;
  text-align: center;

  span {
    color: ${colors.accent};
  }
`;

export const Subtitle = styled.p`
  font-family: ${fonts.mono};
  max-width: ${layout.maxWidth};
  font-size: 0.95rem;
  color: ${colors.subtext};
  margin-bottom: 24px;

  text-align: center;

  @media (max-width: 720px) {
    max-width: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border-radius: 12px;
  padding: 20px 18px;
  background: #11151f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
`;

export const IconCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.accent};
`;

export const CardTitle = styled.h3`
  font-family: ${fonts.mono};
  font-size: 1rem;
  color: ${colors.text};
`;

export const CardText = styled.p`
  font-size: 0.9rem;
  color: ${colors.subtext};
  line-height: 1.5;

  .accent {
    color: ${colors.accent};
  }
`;

export const FooterText = styled.p`
  margin-top: 26px;
  text-align: center;
  font-size: 0.9rem;
  color: ${colors.subtext};
  font-family: ${fonts.mono};

  span {
    color: ${colors.text};
    font-weight: 600;
  }

  a {
    color: ${colors.accent};
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
