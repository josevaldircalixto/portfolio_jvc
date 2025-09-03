import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { Bar, Wrap, Brand, Nav, Social } from "./styles";

export default function Navbar() {
  return (
    <Bar>
      <Wrap>
        <Brand href="/">
          <span className="mono">&lt;/&gt;</span>
          <span>
            Jose<span className="dot">.dev</span>
          </span>
        </Brand>

        <Nav>
          <Link to="/">Sobre</Link>
          <a href="#resume">Currículo</a>
          <a href="#services">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contact">Contato</a>
          <Social>
            <a
              href="https://github.com/josevaldircalixto"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/josevaldircalixto"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </Social>
        </Nav>
      </Wrap>
    </Bar>
  );
}
