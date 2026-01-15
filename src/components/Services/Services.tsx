import {
  BarChart3,
  Database,
  FileSpreadsheet,
  Filter,
  TrendingUp,
  Wrench,
} from "lucide-react";
import {
  Wrapper,
  Section,
  Badge,
  Title,
  Subtitle,
  Grid,
  Card,
  IconCircle,
  CardTitle,
  CardText,
  FooterText,
} from "./styles";

export default function Services() {
  const items = [
    {
      icon: BarChart3,
      title: "Análise e Visualização de Dados",
      text: (
        <>
          Criação de relatórios e dashboards utilizando{" "}
          <span className="accent">Power BI</span>, com foco em indicadores,
          tendências e apoio à tomada de decisão baseada em dados.
        </>
      ),
    },
    {
      icon: FileSpreadsheet,
      title: "Organização de Dados em Planilhas",
      text: (
        <>
          Estruturação, limpeza e análise de dados em{" "}
          <span className="accent">Excel</span> e{" "}
          <span className="accent">Google Sheets</span>, facilitando a leitura,
          comparação de períodos e acompanhamento de métricas.
        </>
      ),
    },
    {
      icon: Database,
      title: "Consultas SQL Básicas",
      text: (
        <>
          Utilização de <span className="accent">SQL</span> para consultas,
          filtros, junções simples e extração de informações relevantes em
          bancos de dados relacionais.
        </>
      ),
    },
    {
      icon: Filter,
      title: "Tratamento e Transformação de Dados",
      text: (
        <>
          Manipulação de dados utilizando <span className="accent">Python</span>{" "}
          para limpeza, organização e preparação de conjuntos de dados para
          análise e visualização.
        </>
      ),
    },
    {
      icon: TrendingUp,
      title: "Análise de Dados de Marketing",
      text: (
        <>
          Análise de métricas de campanhas digitais como impressões, cliques,
          conversões e custo, apoiando decisões em{" "}
          <span className="accent">Google Ads</span> e{" "}
          <span className="accent">Google Meu Negócio</span>.
        </>
      ),
    },
    {
      icon: Wrench,
      title: "Manutenção e Evolução de Relatórios",
      text: (
        <>
          Atualização, ajustes e melhoria contínua de relatórios e dashboards,
          garantindo dados consistentes, organizados e fáceis de interpretar.
        </>
      ),
    },
  ];

  return (
    <Wrapper id="services">
      <Section>
        <Badge>Atuação em Dados</Badge>

        <Title>
          Transformando <span>dados</span> em informações úteis
        </Title>

        <Subtitle>
          Atuo na organização, análise e visualização de dados para apoiar
          decisões de negócio, criando relatórios claros, dashboards objetivos e
          análises que ajudam equipes a entender melhor seus resultados.
        </Subtitle>

        <Grid>
          {items.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <IconCircle>
                <Icon size={20} />
              </IconCircle>
              <CardTitle>{title}</CardTitle>
              <CardText>{text}</CardText>
            </Card>
          ))}
        </Grid>

        <FooterText>
          Em busca de <span>novos desafios em dados</span> e oportunidades para
          aprender e gerar valor. <br />
          Vamos conversar? <a href="#contact">Entre em contato.</a>
        </FooterText>
      </Section>
    </Wrapper>
  );
}
