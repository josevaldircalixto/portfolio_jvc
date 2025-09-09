import { ArrowUp } from "lucide-react";
import {
  FooterWrapper,
  Logo,
  Socials,
  Nav,
  ScrollTopButton,
  ContainerFooter,
} from "./styles";

export default function Footer() {
  return (
    <FooterWrapper>
      <ContainerFooter>
        {/* Logo */}
        <Logo>
          <span>&lt;/&gt;</span> Jose.<span>dev</span>
        </Logo>

        {/* Ícones sociais */}
        <Socials>
          <a href="https://linkedin.com/in/josevaldirfilho" target="_blank">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://github.com/josevaldircalixto" target="_blank">
            <i className="fab fa-github" />
          </a>
        </Socials>

        {/* Navegação */}
        <Nav>
          <a href="#about">Sobre</a>
          {/* <a href="#resume">Currículo</a>
          <a href="#services">Serviços</a> */}
          <a href="#projects">Portfólio</a>
          <a href="#contact">Contato</a>
        </Nav>

        {/* Botão para voltar ao topo */}
        <ScrollTopButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={18} />
        </ScrollTopButton>
      </ContainerFooter>
    </FooterWrapper>
  );
}
