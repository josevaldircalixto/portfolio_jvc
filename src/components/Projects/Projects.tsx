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
    title: "Ecommerce de Restaurante (React)",
    stack: "HTML  CSS  REACT",
    img: "/projects/restaurante-ecommerce-react.png",
    live: "https://efood-inky-ten.vercel.app/",
    code: "https://github.com/josevaldircalixto/efood",
  },
  {
    title: "Clone do Disney+",
    stack: "HTML  CSS  JAVASCRIPT  GULP  SASS",
    img: "/projects/clone_disney_plus.png",
    live: "https://clone-disneyplus-three-swart.vercel.app/",
    code: "https://github.com/josevaldircalixto/clone_disneyplus",
  },
  {
    title: "Landing Page Anniversary",
    stack: "HTML  CSS  REACT",
    img: "/projects/aniversario.png",
    live: "https://festa-aniversario-jvc.vercel.app/",
    code: "https://github.com/josevaldircalixto/festa_aniversario_JVC",
  },
  {
    title: "Cadastro para Newsletter",
    stack: "HTML  CSS  JAVASCRIPT",
    img: "/projects/cadastro-newslatter.png",
    live: "https://site-de-compra-carros.vercel.app/",
    code: "https://github.com/josevaldircalixto/site-de-compra-carros",
  },
  {
    title: "Site de Compra de Carros",
    stack: "HTML  CSS  JAVASCRIPT",
    img: "/projects/site-de-comprar-carros.png",
    live: "https://site-de-compra-carros.vercel.app/",
    code: "https://github.com/josevaldircalixto/site-de-compra-carros",
  },
  {
    title: "Calculadora de Médias",
    stack: "HTML  CSS  JAVASCRIPT",
    img: "/projects/calculadora-de-medias.png",
    live: "https://calculadora-de-medias-rosy.vercel.app/",
    code: "https://github.com/josevaldircalixto/calculadora-de-medias",
  },
  {
    title: "Site de Restaurante",
    stack: "HTML  CSS  BOOTSTRAP  JAVASCRIPT",
    img: "/projects/restaurante-do-jose.png",
    live: "https://restaurante-do-jose.vercel.app/",
    code: "https://github.com/josevaldircalixto/restaurante-do-jose",
  },
  {
    title: "Projeto Depósito",
    stack: "HTML  CSS  JAVASCRIPT",
    img: "/projects/projeto-deposito.png",
    live: "https://pagina-de-deposito.vercel.app/",
    code: "https://github.com/josevaldircalixto/pagina-de-deposito",
  },
  {
    title: "Guia de Praias",
    stack: "HTML  CSS  BOOTSTRAP",
    img: "/projects/guia-de-praias.png",
    live: "https://guia-de-praias.vercel.app/",
    code: "https://github.com/josevaldircalixto/guia-de-praias",
  },
  {
    title: "Agenda de Contatos",
    stack: "HTML  CSS  JAVASCRIPT",
    img: "/projects/agenda-de-contatos.png",
    live: "https://agenda-de-contatos-three-pi.vercel.app/",
    code: "https://github.com/josevaldircalixto/agenda_de_contatos",
  },
  {
    title: "To-do List (Vue)",
    stack: "HTML  CSS  JAVASCRIPT  VUE",
    img: "/projects/todo-list.png",
    live: "https://todo-vue-three-indol.vercel.app/",
    code: "https://github.com/josevaldircalixto/todo-vue",
  },
  {
    title: "Sorteador",
    stack: "HTML  CSS  JAVASCRIPT  LESS  GRUNT",
    img: "/projects/sorteador.png",
    live: "https://sorteador-fawn.vercel.app/",
    code: "https://github.com/josevaldircalixto/sorteador/tree/main",
  },
  {
    title: "Página José Valdir (links)",
    stack: "HTML  CSS  LESS",
    img: "/projects/pagina-jvc.png",
    live: "https://pagina-jose-valdir.vercel.app/",
    code: "https://github.com/josevaldircalixto/pagina-jose-valdir",
  },
  {
    title: "Metal Gear Solid",
    stack: "HTML  CSS",
    img: "/projects/metal-gear.png",
    live: "https://site-metal-gear-solid.vercel.app/",
    code: "https://github.com/josevaldircalixto/site_metal_gear_solid",
  },
];

export default function Projects() {
  return (
    <ContainerContact>
      <Section id="projects">
        <TitleGreen>Projects</TitleGreen>
        <H2>My Recent Works</H2>

        <Grid>
          {projects.map((p) => (
            <Card key={p.title}>
              <Media>
                <img src={p.img} alt={p.title} loading="lazy" />
              </Media>

              <Body>
                <Title>{p.title}</Title>
                <Stack>{p.stack}</Stack>

                <Actions>
                  <ActionLink href={p.live} target="_blank" rel="noreferrer">
                    View Project
                  </ActionLink>
                  <ActionLink href={p.code} target="_blank" rel="noreferrer">
                    View Code
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
