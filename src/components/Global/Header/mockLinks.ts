interface SidebarInnerLinksInterface {
  id: string | number;
  linkTitle: string;
  lintPath: string;
}

interface SidebarLinksInterface {
  id: string | number;
  title: string;
  links: SidebarInnerLinksInterface[];
}

const mockLinks: SidebarLinksInterface[] = [
  {
    id: 1,
    title: "Secciones",
    links: [
      {
        id: 1,
        linkTitle: "ÚLTIMAS NOTICIAS",
        lintPath: "#",
      },
      {
        id: 2,
        linkTitle: "NEGOCIOS",
        lintPath: "#",
      },
      {
        id: 3,
        linkTitle: "ECONOMÍA Y FINANZAS",
        lintPath: "#",
      },
      {
        id: 4,
        linkTitle: "TECH FUTURE",
        lintPath: "#",
      },
      {
        id: 5,
        linkTitle: "POLÍTICA",
        lintPath: "#",
      },
      {
        id: 6,
        linkTitle: "+ DINERO",
        lintPath: "#",
      },
      {
        id: 7,
        linkTitle: "RED FORBES",
        lintPath: "#",
      },
      {
        id: 8,
        linkTitle: "COUNTRY BRANDING",
        lintPath: "#",
      },
      {
        id: 9,
        linkTitle: "FORBES WOMEN",
        lintPath: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Life",
    links: [
      {
        id: 1,
        linkTitle: "ÚLTIMAS NOTICIAS",
        lintPath: "#",
      },
      {
        id: 2,
        linkTitle: "NEGOCIOS",
        lintPath: "#",
      },
      {
        id: 3,
        linkTitle: "ECONOMÍA Y FINANZAS",
        lintPath: "#",
      },
      {
        id: 4,
        linkTitle: "TECH FUTURE",
        lintPath: "#",
      },
      {
        id: 5,
        linkTitle: "POLÍTICA",
        lintPath: "#",
      },
      {
        id: 6,
        linkTitle: "+ DINERO",
        lintPath: "#",
      },
      {
        id: 7,
        linkTitle: "RED FORBES",
        lintPath: "#",
      },
      {
        id: 8,
        linkTitle: "COUNTRY BRANDING",
        lintPath: "#",
      },
      {
        id: 9,
        linkTitle: "FORBES WOMEN",
        lintPath: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Foro Forbes",
    links: [
      {
        id: 1,
        linkTitle: "ÚLTIMAS NOTICIAS",
        lintPath: "#",
      },
      {
        id: 2,
        linkTitle: "NEGOCIOS",
        lintPath: "#",
      },
      {
        id: 3,
        linkTitle: "ECONOMÍA Y FINANZAS",
        lintPath: "#",
      },
      {
        id: 4,
        linkTitle: "TECH FUTURE",
        lintPath: "#",
      },
      {
        id: 5,
        linkTitle: "POLÍTICA",
        lintPath: "#",
      },
      {
        id: 6,
        linkTitle: "+ DINERO",
        lintPath: "#",
      },
      {
        id: 7,
        linkTitle: "RED FORBES",
        lintPath: "#",
      },
      {
        id: 8,
        linkTitle: "COUNTRY BRANDING",
        lintPath: "#",
      },
      {
        id: 9,
        linkTitle: "FORBES WOMEN",
        lintPath: "#",
      },
    ],
  },
  {
    id: 4,
    title: "BrandVoice",
    links: [
      {
        id: 1,
        linkTitle: "ÚLTIMAS NOTICIAS",
        lintPath: "#",
      },
      {
        id: 2,
        linkTitle: "NEGOCIOS",
        lintPath: "#",
      },
      {
        id: 3,
        linkTitle: "ECONOMÍA Y FINANZAS",
        lintPath: "#",
      },
      {
        id: 4,
        linkTitle: "TECH FUTURE",
        lintPath: "#",
      },
      {
        id: 5,
        linkTitle: "POLÍTICA",
        lintPath: "#",
      },
      {
        id: 6,
        linkTitle: "+ DINERO",
        lintPath: "#",
      },
      {
        id: 7,
        linkTitle: "RED FORBES",
        lintPath: "#",
      },
      {
        id: 8,
        linkTitle: "COUNTRY BRANDING",
        lintPath: "#",
      },
      {
        id: 9,
        linkTitle: "FORBES WOMEN",
        lintPath: "#",
      },
    ],
  },
];

export default mockLinks;
