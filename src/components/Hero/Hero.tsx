import { Download } from "lucide-react";
import {
  Section,
  Title,
  Subtitle,
  TechBlock,
  Cta,
  Portrait,
  CaretV,
  CaretH,
  CodeTag,
  HeroImage,
  Content,
  ContainerContact, // <- importe Content
} from "./styles";
import TechCarousel from "../TechCarousel/TechCarousel";
import foto from "../../assets/images/foto_de_Jose_Valdir_Calixto.jpg";

export default function Hero() {
  const techFallback = [
    <span key="html" title="HTML">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
    </span>,
    <span key="css" title="CSS">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
    </span>,
    <span key="js" title="JavaScript">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
    </span>,
    <span key="ts" title="TypeScript">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    </span>,
    <span key="react" title="React">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    </span>,
    <span key="bootstrap" title="Bootstrap">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
    </span>,
    <span key="git" title="Git">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
    </span>,
    <span key="github" title="GitHub">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
    </span>,
    <span key="sass" title="SASS">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
    </span>,
    <span key="jquery" title="jQuery">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain-wordmark.svg" />
    </span>,
    <span key="gulp" title="Gulp">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg" />
    </span>,
    <span key="less" title="Less">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg" />
    </span>,
    <span key="grunt" title="Grunt">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-original-wordmark.svg" />
    </span>,
    <span key="cypress" title="Cypress">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" />
    </span>,
    <span key="node" title="Node.js">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
    </span>,
    <span key="redux" title="Redux">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
    </span>,
  ];

  return (
    <ContainerContact>
      <Section>
        <Content>
          <p className="mono" style={{ opacity: 0.85 }}>
            <CodeTag>&lt;span&gt;</CodeTag>
            Hey, I’m José
            <CaretV />
            <CodeTag>&lt;/span&gt;</CodeTag>
          </p>

          {/* título + cursor horizontal */}
          <Title>
            Desenvolvedor <br /> <span className="code">{"{Front-End}"}</span>
            <br />
            focado em Web<CaretH>_</CaretH>
          </Title>

          {/* texto baseado no seu CV */}
          <Subtitle>
            <CodeTag>&lt;p&gt;</CodeTag>
            Cursando{" "}
            <span className="highlight">Engenharia de Software (USF)</span> e
            especialização em{" "}
            <span className="highlight">Engenharia de Front-End (EBAC)</span>.
            Experiência prática com <span className="highlight">HTML</span>,{" "}
            <span className="highlight">CSS</span>,{" "}
            <span className="highlight">JavaScript</span>,{" "}
            <span className="highlight">TypeScript</span>,{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">Bootstrap</span> e{" "}
            <span className="highlight">Git/GitHub</span>.
            <CodeTag>&lt;p&gt;</CodeTag>
          </Subtitle>

          {/* carrossel de tecnologias */}
          <TechBlock>
            <TechCarousel speedMs={18000}>{techFallback}</TechCarousel>
          </TechBlock>

          <Cta
            href="https://drive.google.com/file/d/1NUh5RucxH12_cJGiu6uaTs-21bg2_F9R/view?usp=sharing"
            download
          >
            <Download size={18} /> Baixar meu CV
          </Cta>
        </Content>
        <Portrait>
          <HeroImage src={foto} alt="José Valdir Calixto" />
        </Portrait>
      </Section>
    </ContainerContact>
  );
}
