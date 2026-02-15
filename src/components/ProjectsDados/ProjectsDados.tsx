import {
  Section,
  H2,
  Grid,
  Card,
  Media,
  Body,
  Title,
  Stack,
  Actions,
  ActionButton,
  MediaLink,
  TitleGreen,
  ContainerContact,
} from "./styles";

const projects = [
  {
    title: "DRE Completa com Power BI",
    stack: "Power BI  ETL  Excel DAX Análise de Dados",
    img: "/projects/imagem_do_dashboard_DRE_powerBI.png",
    code: "https://github.com/josevaldircalixto/dre_completa_com_powerBI",
    youtube: "https://youtu.be/YEhF-Mr_tug",
  },
  {
    title: "Fluxo de Caixa Completo Power BI",
    stack: "Power BI  ETL  Excel DAX Análise de Dados",
    img: "/projects/Criando um Fluxo de Caixa completo com power bi.png",
    code: "https://github.com/josevaldircalixto/criando_um_fluxo_de_caixa_completo_com_power_bi",
    youtube: "https://youtu.be/xVHWou6O8ds",
  },
];

export default function ProjectsDados() {
  return (
    <ContainerContact>
      <Section id="projects">
        <TitleGreen>Projetos</TitleGreen>
        <H2>Meus Trabalhos Recentes</H2>

        <Grid>
          {projects.map((p) => (
            <Card key={p.title}>
              <Media>
                <MediaLink href={p.code} target="_blank" rel="noreferrer">
                  <img src={p.img} alt={p.title} loading="lazy" />
                </MediaLink>
              </Media>

              <Body>
                <Title>{p.title}</Title>
                <Stack>{p.stack}</Stack>

                <Actions>
                  <ActionButton href={p.code} target="_blank" rel="noreferrer">
                    Ver código
                  </ActionButton>

                  {p.youtube && (
                    <ActionButton
                      href={p.youtube}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver elaboração no YouTube
                    </ActionButton>
                  )}
                </Actions>
              </Body>
            </Card>
          ))}
        </Grid>
      </Section>
    </ContainerContact>
  );
}
