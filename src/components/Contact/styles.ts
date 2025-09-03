import styled from "styled-components";
import { colors, fonts } from "../../styles/tokens";

export const ContainerContact = styled.div`
  padding: 0 16px;
`;

export const Section = styled.section`
  max-width: 1200px;
  margin: 16px auto;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  border-radius: 12px;
  background: ${colors.panel};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  padding: 0 16px 16px;

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 16px;
    @media (max-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-family: ${fonts.mono};
  font-size: clamp(28px, 4vw, 42px);
  color: ${colors.accent};
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: grid;
  gap: 16px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #11151f;
  color: ${colors.text};
  font-family: ${fonts.mono};
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  resize: vertical;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #11151f;
  color: ${colors.text};
  font-family: ${fonts.mono};
`;

export const Button = styled.button`
  display: inline-flex;
  width: 180px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${colors.accent};
  color: ${colors.bg};
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  word-wrap: break-word;
  a {
    overflow-wrap: anywhere;
  }

  strong {
    display: block;
    font-size: 0.95rem;
    margin-bottom: 2px;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #11151f;
  color: ${colors.accent};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 52px;
  }
`;
