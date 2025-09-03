import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Menu, X } from "lucide-react";
import {
  Bar,
  Wrap,
  Brand,
  Nav,
  Social,
  MenuBtn,
  Backdrop,
  Drawer,
  DrawerNav,
  DrawerSocial,
  ContainerContact,
} from "./styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // fecha com ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // trava scroll do body quando aberto (opcional)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <ContainerContact>
      <Bar>
        <Wrap>
          <Brand href="/">
            <span className="mono">&lt;/&gt;</span>
            <span>
              Jose<span className="dot">.dev</span>
            </span>
          </Brand>

          {/* Desktop */}
          <Nav className="nav-desktop">
            <Link to="/">Sobre</Link>
            <a href="#resume">Currículo</a>
            <a href="#services">Serviços</a>
            <a href="#projects">Portfólio</a>
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
                href="https://www.linkedin.com/in/josevaldircalixto/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </Social>
          </Nav>

          {/* Botão hamburger (só mobile) */}
          <MenuBtn
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </MenuBtn>
        </Wrap>

        {/* Mobile Drawer */}
        {open && <Backdrop onClick={close} />}
        <Drawer $open={open} aria-hidden={!open}>
          <DrawerNav>
            <Link to="/" onClick={close}>
              Sobre
            </Link>
            <a href="#resume" onClick={close}>
              Currículo
            </a>
            <a href="#services" onClick={close}>
              Serviços
            </a>
            <a href="#projects" onClick={close}>
              Portfólio
            </a>
            <a href="#contact" onClick={close}>
              Contato
            </a>
          </DrawerNav>

          <DrawerSocial>
            <a
              href="https://github.com/josevaldircalixto"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/josevaldircalixto/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </DrawerSocial>
        </Drawer>
      </Bar>
    </ContainerContact>
  );
}
