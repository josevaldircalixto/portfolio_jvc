import styled from "styled-components";
import { colors, layout, fonts } from "../../styles/tokens";

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const Wrap = styled.div`
  max-width: ${layout.maxWidth};
  margin: 16px auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  gap: 12px;
  background-color: #11151f;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 25px;
  font-weight: 700;
  font-family: ${fonts.mono};
  .dot {
    color: ${colors.accent};
  }
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  a {
    padding: 8px 10px;
    border-radius: 8px;
    opacity: 0.85;
  }
  a:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 6px;
  a {
    display: inline-flex;
    padding: 6px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
  }
  a:hover {
    outline: 1px solid ${colors.accent};
  }
`;
