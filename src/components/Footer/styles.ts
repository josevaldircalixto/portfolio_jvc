import styled from "styled-components";
import { colors, fonts } from "../../styles/tokens";

export const FooterWrapper = styled.footer`
  margin-top: 16px;
  padding: 0 16px 16px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerFooter = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: #11151f;
  width: 100%;
  max-width: 1200px;
  border-radius: 12px;
  background: ${colors.panel};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  padding: 0 16px 16px;
`;

export const Logo = styled.h2`
  font-family: ${fonts.mono};
  font-size: 20px;
  margin-bottom: 16px;

  span:first-child {
    color: ${colors.accent};
    margin-right: 4px;
  }

  span:last-child {
    color: ${colors.subtext};
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  a {
    font-size: 20px;
    color: ${colors.accent};
    transition: color 0.2s;
    overflow-wrap: anywhere;

    &:hover {
      color: ${colors.accent};
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  a {
    font-family: ${fonts.mono};
    font-size: 14px;
    color: ${colors.subtext};
    text-decoration: none;

    &:hover {
      color: ${colors.text};
    }
  }
`;

export const ScrollTopButton = styled.button`
  position: absolute;
  right: 32px;
  bottom: 32px;
  width: 40px;
  height: 40px;
  border: 1px solid ${colors.accent};
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${colors.accent};
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: ${colors.accent};
    color: ${colors.bg};
  }
`;
