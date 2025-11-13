import {
  Code2,
  LayoutTemplate,
  Cpu,
  Globe2,
  Search,
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
      icon: Code2,
      title: "Desenvolvimento Web Responsivo",
      text: (
        <>
          Criação de interfaces modernas utilizando{" "}
          <span className="accent">HTML</span>,{" "}
          <span className="accent">CSS</span>,{" "}
          <span className="accent">JavaScript</span> e{" "}
          <span className="accent">TypeScript</span>, com foco em estrutura
          semântica, boas práticas e experiência do usuário em qualquer tela.
        </>
      ),
    },
    {
      icon: LayoutTemplate,
      title: "Interfaces com React",
      text: (
        <>
          Desenvolvimento de aplicações front-end com{" "}
          <span className="accent">React</span>,{" "}
          <span className="accent">Vite</span> e{" "}
          <span className="accent">Styled Components</span>, aplicando
          componentização, rotas, estados e layout limpo para projetos como
          portfólio, sistemas de pedidos e ferramentas utilitárias.
        </>
      ),
    },
    {
      icon: Cpu,
      title: "Integração com APIs",
      text: (
        <>
          Conexão de interfaces front-end com{" "}
          <span className="accent">APIs REST</span>, consumo de dados em{" "}
          <span className="accent">JSON</span>, requisições assíncronas e
          exibição de informações dinâmicas de forma clara e organizada.
        </>
      ),
    },
    {
      icon: Globe2,
      title: "Sites em WordPress & Elementor",
      text: (
        <>
          Criação e personalização de sites profissionais utilizando{" "}
          <span className="accent">WordPress</span> e{" "}
          <span className="accent">Elementor</span>, com foco em estrutura,
          responsividade e facilidade de edição para o cliente.
        </>
      ),
    },
    {
      icon: Search,
      title: "SEO On-Page para Negócios",
      text: (
        <>
          Otimização estrutural do front-end com{" "}
          <span className="accent">HTML semântico</span>, metatags essenciais,
          responsividade e melhorias de performance para apoiar resultados em
          mecanismos de busca.
        </>
      ),
    },
    {
      icon: Wrench,
      title: "Manutenção e Evolução de Projetos",
      text: (
        <>
          Ajustes visuais, correções de layout, melhorias de{" "}
          <span className="accent">responsividade</span> e inclusão de novas
          funcionalidades em projetos existentes utilizando{" "}
          <span className="accent">JavaScript</span> ou{" "}
          <span className="accent">React</span>.
        </>
      ),
    },
  ];

  return (
    <Wrapper id="services">
      <Section>
        <Badge>Serviços</Badge>

        <Title>
          Desenvolvendo soluções <span>sob medida</span> para o seu projeto
        </Title>

        <Subtitle>
          Unindo desenvolvimento front-end, experiência com React e criação de
          sites profissionais, ajudo você a transformar ideias em produtos
          digitais funcionais, bonitos e prontos para ir ao ar.
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
          Empolgado para colaborar em <span>novos projetos</span> e entregar
          resultados reais. <br />
          Vamos conversar sobre o que você precisa?{" "}
          <a href="#contact">Entre em contato.</a>
        </FooterText>
      </Section>
    </Wrapper>
  );
}
