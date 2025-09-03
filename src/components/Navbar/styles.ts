// ...seus imports
import styled from "styled-components";
import { colors, layout, fonts } from "../../styles/tokens";

export const ContainerContact = styled.div`
  padding: 0 16px;
`;

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
  gap: 12px;
  border-radius: 12px;
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
    text-decoration: none;
    color: ${colors.text};
  }
  a:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 840px) {
    display: none;
  } /* esconde no mobile */
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
    color: ${colors.text};
  }
  a:hover {
    outline: 1px solid ${colors.accent};
  }

  @media (max-width: 840px) {
    display: none;
  } /* esconde no mobile */
`;

/* --- NOVOS --- */

// botão hamburger
export const MenuBtn = styled.button`
  margin-left: auto;
  display: none;
  @media (max-width: 840px) {
    display: inline-flex;
  }

  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #0f141d;
  color: ${colors.text};
  cursor: pointer;
  &:hover {
    outline: 1px solid ${colors.accent};
  }
`;

// backdrop
export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 40;
`;

// drawer lateral (usa prop transitiva $open)
export const Drawer = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: min(78vw, 320px);
  background: #0f141d;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.45);
  z-index: 41;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  transform: translateX(${(p) => (p.$open ? "0" : "100%")});
  transition: transform 0.25s ease;

  @media (min-width: 841px) {
    display: none;
  }
`;

export const DrawerNav = styled.nav`
  display: grid;
  gap: 8px;
  margin-top: 8px;
  a {
    display: block;
    padding: 12px 10px;
    border-radius: 10px;
    text-decoration: none;
    color: ${colors.text};
    background: rgba(255, 255, 255, 0.04);
  }
  a:hover {
    outline: 1px solid ${colors.accent};
  }
`;

export const DrawerSocial = styled.div`
  margin-top: auto;
  display: grid;
  gap: 8px;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    color: ${colors.text};
    background: rgba(255, 255, 255, 0.04);
    font-family: ${fonts.mono};
  }
  a:hover {
    outline: 1px solid ${colors.accent};
  }
`;
