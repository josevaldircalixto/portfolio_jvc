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
  ActionLink,
  TitleGreen,
  ContainerContact,
} from "./styles";

const projects = [
  {
    title: "DRE Completa com Power BI",
    stack: "Power BI  ETL  Excel",
    img: "/projects/imagem_do_dashboard_DRE_powerBI.png",
    code: "https://github.com/josevaldircalixto/dre_completa_com_powerBI",
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
                {/* imagem agora também leva ao repositório */}
                <ActionLink href={p.code} target="_blank" rel="noreferrer">
                  <img src={p.img} alt={p.title} loading="lazy" />
                </ActionLink>
              </Media>

              <Body>
                <Title>{p.title}</Title>
                <Stack>{p.stack}</Stack>

                <Actions>
                  <ActionLink href={p.code} target="_blank" rel="noreferrer">
                    Ver Código
                  </ActionLink>
                </Actions>
              </Body>
            </Card>
          ))}
        </Grid>
      </Section>
    </ContainerContact>
  );
}
