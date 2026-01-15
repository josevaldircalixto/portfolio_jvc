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
  ContainerContact,
} from "./styles";
import TechCarousel from "../TechCarousel/TechCarousel";
import foto from "../../assets/images/foto_de_Jose_Valdir_Calixto.jpg";

export default function Hero() {
  const techFallback = [
    <span key="powerbi" title="Power BI">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" />
    </span>,
    <span key="excel" title="Excel">
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg" />
    </span>,
    <span key="python" title="Python">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
    </span>,
    <span key="sql" title="SQL">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
    </span>,
    <span key="git" title="Git">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
    </span>,
    <span key="github" title="GitHub">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
    </span>,
    <span key="sheets" title="Google Sheets">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" />
    </span>,
    <span key="powerbi" title="Power BI">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" />
    </span>,
    <span key="excel" title="Excel">
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg" />
    </span>,
    <span key="python" title="Python">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
    </span>,
    <span key="sql" title="SQL">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
    </span>,
    <span key="git" title="Git">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
    </span>,
    <span key="github" title="GitHub">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
    </span>,
    <span key="sheets" title="Google Sheets">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" />
    </span>,
  ];

  return (
    <ContainerContact>
      <Section>
        <Content>
          <p className="mono" style={{ opacity: 0.85 }}>
            <CodeTag>&lt;span&gt;</CodeTag>
            Olá, meu nome é José
            <CaretV />
            <CodeTag>&lt;/span&gt;</CodeTag>
          </p>

          <Title>
            Analista de <br />
            <span className="code">{"{Dados/BI}"}</span>
            <br />
            Focado em Decisões<CaretH>_</CaretH>
          </Title>

          <Subtitle>
            <CodeTag>&lt;p&gt;</CodeTag>
            Cursando{" "}
            <span className="highlight">Engenharia de Software (USF)</span> e
            Atuação com análise e organização de dados utilizando{" "}
            <span className="highlight">Power BI</span>,{" "}
            <span className="highlight">Excel</span>,{" "}
            <span className="highlight">Python</span> e{" "}
            <span className="highlight">SQL</span>, apoiando análises,
            relatórios e tomada de decisão orientada a dados.
            <CodeTag>&lt;/p&gt;</CodeTag>
          </Subtitle>

          <TechBlock>
            <TechCarousel speedMs={18000}>{techFallback}</TechCarousel>
          </TechBlock>

          <Cta
            href="https://drive.google.com/file/d/1288PcO7Bi3vS4llLp0Niza-HRU7JTd9E/view?usp=sharing"
            target="_blank"
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
