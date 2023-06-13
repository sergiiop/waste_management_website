import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    nombre: "1,2 Dicloretano 99,9%",
    propiedades: [
      "Toxicidad aguda oral",
      "Toxicidad aguda por inhalación - Vapores",
      "Corrosión o irritación cutáneas",
      "Lesiones o irritación ocular graves",
      "Carcinogenicidad",
      "Toxicidad específica del órgano blanco - (única exposición)",
    ],
    categorias: [
      "Categoría 4 (H302)",
      "Categoría 3 (H331)",
      "Categoría 2 (H315)",
      "Categoría 2 (H319)",
      "Categoría 1B (H350)",
      "Categoría 3 (H335) (H336)",
    ],
    tipo: "Hidrocarburo clorado",
  },
  {
    id: 2,
    nombre: "1,4 dioxano 99,5%",
    propiedades: [
      "Líquido inflamable",
      "Lesiones o irritación ocular graves",
      "Carcinogenicidad",
      "Toxicidad específica del órgano blanco - (única exposición)",
    ],
    categorias: [
      "Categoría 2 (H225)",
      "Categoría 2 (H319)",
      "Categoría 2 (H351)",
      "Categoría 3 (H335)",
    ],
    tipo: "Éter",
  },
  {
    id: 3,
    nombre: "1- Hexanol 98%",
    propiedades: [
      "Toxicidad aguda oral",
      "Toxicidad aguda cutánea",
      "Lesiones o irritación ocular graves",
      "Líquido inflamable",
    ],
    categorias: [
      "Categoría 4 (H302)",
      "Categoría 4 (H312)",
      "Categoría 2 (H319)",
      "Categoría 3 (H226)",
    ],
    tipo: "Alcohol",
  },
  {
    id: 4,
    nombre: "Acetato de etilo 99%",
    propiedades: [
      "Líquidos inflamables",
      "Lesiones o irritación ocular graves",
      "Toxicidad específica del órgano blanco - (única exposición)",
    ],
    categorias: [
      "Categoría 2 (H225)",
      "Categoría 2 (H319)",
      "Categoría 3 (H336)",
    ],
    tipo: "Ester acetona",
  },
  {
    id: 5,
    nombre: "Acetona 99,8%",
    propiedades: [
      "Líquidos inflamables",
      "Lesiones o irritación ocular graves",
      "Toxicidad específica del órgano blanco - (única exposición)",
    ],
    categorias: [
      "Categoría 2 (H225)",
      "Categoría 2 (H319)",
      "Categoría 3 (H336)",
    ],
    tipo: "Cetona",
  },
  {
    id: 6,
    nombre: "Ácido acético 99,5%",
    propiedades: [
      "Líquidos inflamables",
      "Corrosión o irritación cutáneas",
      "Lesiones o irritación ocular graves",
    ],
    categorias: [
      "Categoría 3 (H226)",
      "Categoría 1A (H314)",
      "Categoría 1 (H318)",
    ],
    tipo: "Ácidos",
  },
  {
    id: 7,
    nombre: "Ácido clorhídrico 36,5- 38%",
    propiedades: [
      "Corrosivos para los metales",
      "Corrosión o irritación cutáneas",
      "Lesiones oculares graves o irritación ocular",
      "Toxicidad específica en determinados órganos",
    ],
    categorias: [
      "Categoría 1 (H290)",
      "Categoría 1B (H314)",
      "Categoría 1 (H318)",
      "Categoría 3 (H335)",
    ],
    tipo: "Ácidos",
  },
  {
    id: 8,
    nombre: "Ácido nítrico 65%",
    propiedades: [
      "Líquidos comburentes",
      "Sustancias/mezclas corrosivas para los metales",
      "Toxicidad aguda por inhalación - Vapores",
      "Corrosión o irritación cutáneas",
      "Lesiones o irritación ocular graves",
    ],
    categorias: [
      "Categoría 3 (H272)",
      "Categoría 1 (H290)",
      "Categoría 3 (H331)",
      "Categoría 1 (H314) A",
      "Categoría 1 (H318)",
    ],
    tipo: "Ácidos",
  },
  {
    id: 9,
    nombre: "Acido orto fosfórico 85%",
    propiedades: [
      "Corrosión o irritación cutáneas",
      "Lesiones o irritación ocular graves",
    ],
    categorias: [
      "Categoría 1B (H314)",
      "Categoría 1 (H318)",
    ],
    tipo: "Ácidos",
  },
  {
    id: 10,
    nombre: "Ácido sulfúrico 95-98%",
    propiedades: [
      "Corrosión o irritación cutáneas",
      "Lesiones o irritación ocular graves",
    ],
    categorias: [
      "Categoría 1A (H314)",
      "Categoría 1 (H318)",
    ],
    tipo: "Ácidos",
  },
  {
    id: 11,
    nombre: "Alcohol isopropílico 99,5%",
    propiedades: [
      "Líquidos inflamables",
      "Lesiones o irritación ocular graves",
      "Toxicidad específica del órgano blanco",
    ],
    categorias: [
      "Categoría 2 (H225)",
      "Categoría 2 (H319)",
      "Categoría 3 (H336)",
    ],
    tipo: "Alcohol",
  },
  {
    id: 12,
    nombre: "Amoniaco 25 - 30%",
    propiedades: [
      "Corrosión cutánea",
      "Toxicidad especifica en determinados órganos exposición única",
      "Toxicidad acuática aguda",
    ],
    categorias: [
      "Categoría 1B (H314)",
      "Categoría 3 (H335)",
      "Categoría 1 (H400)",
    ],
    tipo: "Base",
  },
  {
    id: 13,
    nombre: "Anhidrido acético 99%",
    propiedades: [
      "Líquidos inflamables",
      "Toxicidad aguda oral",
      "Toxicidad aguda por inhalación - Vapores",
      "Corrosión o irritación cutáneas",
      "Lesiones o irritación ocular graves",
    ],
    categorias: [
      "Categoría 3 (H226)",
      "Categoría 4 (H302)",
      "Categoría 2 (H330)",
      "Categoría 1B (H314)",
      "Categoría 1 (H318)",
    ],
    tipo: "Anhidrido ácido",
  },
  {
    id: 14,
    nombre: "Arsenito de sodio solución",
    propiedades: [
      "Toxicidad aguda oral",
      "Toxicidad aguda cutánea",
      "Toxicidad aguda por inhalación - Polvos y nieblas",
      "Carcinogenicidad",
      "Toxicidad acuática aguda",
      "Toxicidad acuática crónica"
    ],
    categorias: [
      "Categoría 2 (H300)",
      "Categoría 2 (H310)",
      "Categoría 3 (H331)",
      "Categoría 1A (H350)",
      "Categoría 1 (H400)",
      "Categoría 1 (H410)"
    ],
    tipo: "Sal inorgánica"
  },
  {
    id: 15,
    nombre: "Benceno 99,8%",
    propiedades: [
      "Líquidos inflamables",
      "Toxicidad por aspiración",
      "Toxicidad aguda por inhalación - Vapores",
      "Toxicidad para la reproducción",
      "Toxicidad acuática crónica"
    ],
    categorias: [
      "Categoría 3 (H226)",
      "Categoría 1 (H304)",
      "Categoría 3 (H331)",
      "Categoría 2 (H361)",
      "Categoría 2 (H411)"
    ],
    tipo: "Hidrocarburo"
  },
  {
    id: 16,
    nombre: "Ciclohexano 99,5%",
    propiedades: [
      "Líquidos inflamables",
      "Toxicidad por aspiración",
      "Corrosión o irritación cutáneas",
      "Toxicidad específica del órgano blanco - (única exposición)",
      "Toxicidad acuática aguda",
      "Toxicidad acuática crónica"
    ],
    categorias: [
      "Categoría 2 (H225)",
      "Categoría 1 (H304)",
      "Categoría 2 (H315)",
      "Categoría 3 (H336)",
      "Categoría 1 (H400)",
      "Categoría 1 (H410)"
    ],
    tipo: "Hidrocarburo alifático cíclico"
  },
  {
    id: 17,
    nombre: "Cloroformo",
    propiedades: [
      "Toxicidad aguda oral",
      "Toxicidad aguda por inhalación - Vapores",
      "Corrosión o irritación cutáneas",
      "Lesiones o irritación ocular graves",
      "Carcinogenicidad",
      "Toxicidad para la reproducción",
      "Toxicidad específica del órgano blanco - (única exposición)",
      "Toxicidad específica del órgano blanco - (exposición repetida)"
    ],
    categorias: [
      "Categoría 4 (H302)",
      "Categoría 3 (H331)",
      "Categoría 2 (H315)",
      "Categoría 2 (H319)",
      "Categoría 2 (H351)",
      "Categoría 2 (H361d)",
      "Categoría 3 (H336)",
      "Categoría 1 (H372)"
    ],
    tipo: "Hidrocarburo clorado"
  },
  {
    id: 18,
    nombre: "Cloruro de sebacoilo acido",
    propiedades: [
      "Sustancias/mezclas corrosivas para los metales",
      "Toxicidad aguda oral",
      "Toxicidad aguda cutánea",
      "Corrosión o irritación cutáneas",
      "Lesiones o irritación ocular graves"
    ],
    categorias: [
      "Categoría 1 (H290)",
      "Categoría 4 (H302)",
      "Categoría 2 (H310)",
      "Categoría 1B (H314)",
      "Categoría 1 (H318)"
    ],
    tipo: "Ácidos"
  },
  {
    id: 19,
    nombre: "Diclorometano",
    propiedades: [
      "Corrosión o irritación cutáneas",
      "Lesiones o irritación ocular graves",
      "Carcinogenicidad",
      "Toxicidad específica del órgano blanco - (única exposición)"
    ],
    categorias: [
      "Categoría 2 (H315)",
      "Categoría 2 (H319)",
      "Categoría 2 (H351)",
      "Categoría 3 (H336)"
    ],
    tipo: "Hidrocarburo clorado"
  },
  {
    id: 20,
    nombre: "Etanol",
    propiedades: [
      "Líquidos inflamables",
      "Lesiones o irritación ocular graves"
    ],
    categorias: [
      "Categoría 2 (H225)",
      "Categoría 2 (H319)"
    ],
    tipo: "Alcoholes"
  },
  {
    id: 21,
    nombre: "Etanolamina 99%",
    propiedades: [
      "Toxicidad aguda",
      "Corrosión cutáneas"
    ],
    categorias: [
      "Categoría 4 (H302) (332) (312)",
      "Categoría 1B H314"
    ],
    tipo: "Aminas"
  },
  {
    id: 22,
    nombre: "Éter etílico 99,7%",
    propiedades: [
      "Líquidos inflamables",
      "Toxicidad aguda oral",
      "Toxicidad específica del órgano blanco - (única exposición)"
    ],
    categorias: [
      "Categoría 1 (H224)",
      "Categoría 4 (H302)",
      "Categoría 3 (H336)"
    ],
    tipo: "Éter"
  },
  {
    id: 23,
    nombre: "Hexamethylene disocyanate 98%",
    propiedades: [
      "Toxicidad aguda oral",
      "Toxicidad aguda por inhalación - Vapores",
      "Corrosión o irritación cutáneas",
      "Lesiones o irritación ocular graves",
      "Sensibilización respiratoria",
      "Sensibilización cutánea"
    ],
    categorias: [
      "Categoría 4 (H302)",
      "Categoría 1 (H330)",
      "Categoría 1C (H314)",
      "Categoría 1 (H318)",
      "Categoría 1 (H334)",
      "Categoría 1 (H317)"
    ],
    tipo: "Isocianato"
  },
  {
    id: 24,
    nombre: "Hidrogeno Peróxido 30%",
    propiedades: [
      "Líquidos comburentes",
      "Toxicidad aguda oral",
      "Toxicidad aguda por inhalación - Polvos y nieblas",
      "Lesiones o irritación ocular graves"
    ],
    categorias: [
      "Categoría 2 (H272)",
      "Categoría 4 (H302)",
      "Categoría 4 (H332)",
      "Categoría 1 (H318)"
    ],
    tipo: "Peróxido"
  },
  {
    id: 25,
    nombre: "Isopropoxido de titanio",
    propiedades: [
      "Líquidos inflamables",
      "Lesiones o irritación ocular graves",
      "Toxicidad específica del órgano blanco - (única exposición)"
    ],
    categorias: [
      "Categoría 3 (H226)",
      "Categoría 2 (H319)",
      "Categoría 3 (H336)"
    ],
    tipo: "Alifático"
  },
  {
    id: 26,
    nombre: "Metanol 99,8%",
    propiedades: [
      "Líquidos inflamables",
      "Toxicidad aguda oral",
      "Toxicidad aguda cutánea",
      "Toxicidad aguda por inhalación - Vapores",
      "Toxicidad específica del órgano blanco - (única exposición)"
    ],
    categorias: [
      "Categoría 2 (H225)",
      "Categoría 3 (H301)",
      "Categoría 3 (H311)",
      "Categoría 3 (H331)",
      "Categoría 1 (H370)"
    ],
    tipo: "Alcohol"
  },
  {
    id: 27,
    nombre: "N-Butanol 99,5%",
    propiedades: [
      "Líquidos inflamables",
      "Toxicidad aguda (oral)",
      "Corrosión o irritación cutáneas",
      "Lesiones oculares graves o irritación ocular",
      "Toxicidad específica (irritación de las vías respiratorias)",
      "Toxicidad específica (efectos narcóticos, somnolencia)"
    ],
    categorias: [
      "Categoría 3 (H226)",
      "Categoría 4 (H302)",
      "Categoría 2 (H315)",
      "Categoría 1 (H318)",
      "Categoría 3 (H335)",
      "Categoría 3 (H336)"
    ],
    tipo: "Alcohol"
  },
  {
    id: 28,
    nombre: "N-hexano 95%",
    propiedades: [
      "Líquidos inflamables",
      "Toxicidad por aspiración",
      "Corrosión o irritación cutáneas",
      "Toxicidad para la reproducción",
      "Toxicidad específica del órgano blanco - (única exposición)",
      "Toxicidad específica del órgano blanco - (exposición repetida)",
      "Toxicidad acuática crónica"
    ],
    categorias: [
      "Categoría 2 (H225)",
      "Categoría 1 (H304)",
      "Categoría 2 (H315)",
      "Categoría 2 (H361)",
      "Categoría 2 (H373)",
      "Categoría 1 (H410)"
    ],
    tipo: "Hidrocarburo"
  },
  {
    id: 29,
    nombre: "Parafina liquida",
    propiedades: [
      "Lesiones o irritación ocular graves ",
    ],
    categorias: [
      "Categoría 2 (H319)"
    ],
    tipo: "Hidrocarburo alifático"
  },
  {
    id: 30,
    nombre: "Tetrahidrofurano 99,9%",
    propiedades: [
      "Líquidos inflamables",
      "Toxicidad aguda oral",
      "Toxicidad aguda por inhalación - Vapores",
      "Toxicidad específica del órgano blanco - (única exposición)"
    ],
    categorias: [
      "Categoría 2 (H225)",
      "Categoría 4 (H302)",
      "Categoría 2 (H330)",
      "Categoría 1 (H373)"
    ],
    tipo: "Éter"
  }
]

const reactivosSolidosPeligrosos =
  [
    {
      id: 1,
      nombre: "Acido 3,5-dinitrosalicílico 98%",
      propiedades: [
        "Toxicidad aguda oral",
        "Lesiones o irritación ocular graves"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 1 (H318)"
      ],
      tipo: "Ácido"
    },
    {
      id: 2,
      nombre: "Acido Benzoico 99,5%",
      propiedades: [
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves",
        "Toxicidad específica del órgano blanco - (exposición repetida)"
      ],
      categorias: [
        "Categoría 2 (H315)",
        "Categoría 1 (H318)",
        "Categoría 1 (H372)"
      ],
      tipo: "Ácido"
    },
    {
      id: 3,
      nombre: "Ácido cítrico 99,5-102%",
      propiedades: [
        "Lesiones o irritación ocular graves",
        "Toxicidad específica del órgano blanco - (única exposición)"
      ],
      categorias: [
        "Categoría 2 (H319)",
        "Categoría 3 (H335)"
      ],
      tipo: "Ácido"
    },
    {
      id: 4,
      nombre: "Acido Oxálico",
      propiedades: [
        "Toxicidad aguda oral",
        "Toxicidad aguda cutánea",
        "Lesiones o irritación ocular graves",
        "Toxicidad específica del órgano blanco - (exposición repetida)"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 4 (H312)",
        "Categoría 1 (H318)",
        "Categoría 2 (H373)"
      ],
      tipo: "Ácido"
    },
    {
      id: 5,
      nombre: "Ammonium Thiocyanate 98%",
      propiedades: [
        "Toxicidad aguda oral",
        "Toxicidad aguda cutánea",
        "Lesiones o irritación ocular graves",
        "Toxicidad aguda por inhalación - Polvos y nieblas"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 4 (H312)",
        "Categoría 1 (H318)",
        "Categoría 4 (H332)"
      ],
      tipo: "Sal"
    },
    {
      id: 6,
      nombre: "Amonio cloruro 99,5%",
      propiedades: [
        "Toxicidad aguda oral",
        "Lesiones o irritación ocular graves"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 2 (H319)"
      ],
      tipo: "Sal"
    },
    {
      id: 7,
      nombre: "Amonio Oxalato Hidrato 99%",
      propiedades: [
        "Toxicidad aguda oral",
        "Toxicidad aguda cutánea",
        "Lesiones o irritación ocular graves"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 4 (H312)",
        "Categoría 2 (H319)"
      ],
      tipo: "Sal"
    },
    {
      id: 8,
      nombre: "Amonio Oxalato",
      propiedades: [
        "Toxicidad aguda oral",
        "Toxicidad aguda cutánea",
        "Lesiones o irritación ocular graves"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 4 (H312)",
        "Categoría 2 (H319)"
      ],
      tipo: "Sal"
    },
    {
      id: 9,
      nombre: "Amonio tiocianato 99%",
      propiedades: [
        "Toxicidad aguda, Oral",
        "Toxicidad aguda, Inhalación",
        "Toxicidad aguda, Cutáneo",
        "Lesiones oculares graves"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 4 (H332)",
        "Categoría 4 (H312)",
        "Categoría 1 (H318)"
      ],
      tipo: "Sal"
    },
    {
      id: 10,
      nombre: "Antrona 97%",
      propiedades: [
        "Irritaciones cutáneas",
        "Irritación ocular",
        "Irritación vías respiratorias"
      ],
      categorias: [
        "Categoría 2 (H315)",
        "Categoría 2 (H319)",
        "Categoría 3 (H335)"
      ],
      tipo: "Compuesto orgánico"
    },
    {
      id: 11,
      nombre: "Calcio cloruro 2-hidrato 99-105%",
      propiedades: [
        "Irritación ocular"
      ],
      categorias: [
        "Categoría 2 (H319)"
      ],
      tipo: "Sal"
    },
    {
      id: 12,
      nombre: "Cerio nitrato 99,5%",
      propiedades: [
        "Sólidos comburentes",
        "Corrosivos para los metales",
        "Toxicidad aguda oral",
        "Corrosión cutáneas",
        "Toxicidad acuático, crónica"
      ],
      categorias: [
        "Categoría 2 (H272)",
        "Categoría 1 (H290)",
        "Categoría 4 (H302)",
        "Categoría 1B (H314)",
        "Categoría 1 (H410)"
      ],
      tipo: "Sal"
    },
    {
      id: 13,
      nombre: "Cloruro de Mercurio 99,5%",
      propiedades: [
        "Toxicidad aguda oral",
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves",
        "Mutagenicidad en células germinales",
        "Toxicidad para la reproducción",
        "Toxicidad específica del órgano blanco - (exposición repetida)",
        "Toxicidad acuática aguda",
        "Toxicidad acuática crónica"
      ],
      categorias: [
        "Categoría 2 (H300)",
        "Categoría 1B (H314)",
        "Categoría 1 (H318)",
        "Categoría 2 (H341)",
        "Categoría 2 (H361f)",
        "Categoría 1 (H372)",
        "Categoría 1 (H400)",
        "Categoría 1 (H410)"
      ],
      tipo: "Sal"
    },
    {
      id: 14,
      nombre: "Cobalto II cloruro 6 hidrato 98%",
      propiedades: [
        "Toxicidad aguda oral",
        "Toxicidad aguda por inhalación",
        "Sensibilización respiratoria",
        "Sensibilización cutánea",
        "Carcinogenicidad",
        "Toxicidad para la reproducción",
        "Toxicidad acuática crónica",
        "Mutagenicidad en células germinales"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 4 (H332)",
        "Categoría 1 (H334)",
        "Categoría 1 (H317)",
        "Categoría 2 (H341)",
        "Categoría 1B (H360F)",
        "Categoría 1 (H410)",
        "Categoría 1B (H350i)"
      ],
      tipo: "Sal"
    },
    {
      id: 15,
      nombre: "Cromato de plomo",
      propiedades: [
        "Carcinogenicidad",
        "Toxicidad para la reproducción",
        "Toxicidad acuática crónica",
        "Toxicidad específica del órgano blanco - (exposición repetida)"
      ],
      categorias: [
        "Categoría 1B (H350)",
        "Categoría 1A (H360Df)",
        "Categoría 1 (H410)",
        "Categoría 2 (H373)"
      ],
      tipo: "Sal"
    },
    {
      id: 16,
      nombre: "EDTA (ácido etilendiamina tetracetico disódico deshidrato) 99%",
      propiedades: [
        "Lesiones oculares graves"
      ],
      categorias: [
        "Categoría 1 (H318)"
      ],
      tipo: "Compuesto orgánico"
    },
    {
      id: 17,
      nombre: "Fenol 99%",
      propiedades: [
        "Toxicidad aguda oral",
        "Toxicidad aguda cutánea",
        "Toxicidad aguda por inhalación",
        "Corrosión o irritación cutáneas",
        "Mutagenicidad en células germinales",
        "Toxicidad específica del órgano blanco - (exposición repetida)"
      ],
      categorias: [
        "Categoría 3 (H301)",
        "Categoría 3 (H311)",
        "Categoría 3 (H331)",
        "Categoría 1B (H314)",
        "Categoría 2 (H341)",
        "Categoría 2 (H373)"
      ],
      tipo: "Compuesto orgánico"
    },
    {
      id: 18,
      nombre: "Fenolftaleína 99%",
      propiedades: [
        "Líquidos inflamables",
        "Toxicidad aguda oral",
        "Toxicidad aguda cutánea",
        "Toxicidad aguda por vapores",
        "Lesiones o irritación ocular graves",
        "Carcinogenicidad",
        "Mutagenicidad en células germinales",
        "Toxicidad específica del órgano blanco - (única exposición)"
      ],
      categorias: [
        "Categoría 2 (H225)",
        "Categoría 4 (H302)",
        "Categoría 4 (H312)",
        "Categoría 4 (H332)",
        "Categoría 2 (H319)",
        "Categoría 2 (H341)",
        "Categoría 1B (H350)",
        "Categoría 2 (H371)"
      ],
      tipo: "Indicador pH"
    },
    {
      id: 19,
      nombre: "Hexametileno tetramina 99-100,5%",
      propiedades: [
        "Sólidos inflamables",
        "Sensibilización cutánea"
      ],
      categorias: [
        "Categoría 2 (H228)",
        "Categoría 1 (H317)"
      ],
      tipo: "Compuesto orgánico"
    },
    {
      id: 20,
      nombre: "Hexametilenodiamina (1,6 diaminohexano)",
      propiedades: [
        "Toxicidad aguda oral",
        "Toxicidad aguda cutánea",
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves",
        "Toxicidad específica del órgano blanco - (única exposición)"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 4 (H312)",
        "Categoría 1B (H314)",
        "Categoría 1 (H318)",
        "Categoría 3 (H335)"
      ],
      tipo: "Compuesto orgánico"
    },
    {
      id: 21,
      nombre: "Hidroquinona 99%",
      propiedades: [
        "Toxicidad aguda oral",
        "Lesiones o irritación ocular graves",
        "Sensibilización cutánea",
        "Carcinogenicidad",
        "Mutagenicidad en células germinales"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 1 (H318)",
        "Categoría 1 (H317)",
        "Categoría 2 (H351)",
        "Categoría 2 (H341)"
      ],
      tipo: "Compuesto orgánico"
    },
    {
      id: 22,
      nombre: "Hidróxido de potasio 85%",
      propiedades: [
        "Toxicidad aguda oral",
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 1A (H314)",
        "Categoría 1 (H318)"
      ],
      tipo: "Base inorgánica"
    },
    {
      id: 23,
      nombre: "Hidróxido de sodio 98%",
      propiedades: [
        "Toxicidad aguda oral",
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 1A (H314)",
        "Categoría 1 (H318)"
      ],
      tipo: "Base inorgánica"
    },
    {
      id: 24,
      nombre: "Hierro (ll) cloruro tetrahidrato",
      propiedades: [
        "Toxicidad aguda (oral)",
        "Irritación o corrosión cutáneas",
        "Lesiones oculares graves"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 2 (H315)",
        "Categoría 1 (H318)"
      ],
      tipo: "Sal inorgánica"
    },
    {
      id: 25,
      nombre: "Hierro lll cloruro hexahidrato 97%",
      propiedades: [
        "Toxicidad aguda oral",
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 2 (H315)",
        "Categoría 1 (H318)"
      ],
      tipo: "Sal inorgánica"
    },
    {
      id: 26,
      nombre: "Magnesio 99%",
      propiedades: [
        "Sólidos inflamables",
        "Calentamiento espontáneo",
        "En contacto con el agua, desprenden gases inflamables"
      ],
      categorias: [
        "Categoría 1 (H228)",
        "Categoría 2 (H252)",
        "Categoría 2 (H261)"
      ],
      tipo: "Metal"
    },
    {
      id: 27,
      nombre: "Naftaleno 98%",
      propiedades: [
        "Sólidos inflamables",
        "Toxicidad aguda oral",
        "Carcinogenicidad",
        "Toxicidad acuática crónica"
      ],
      categorias: [
        "Categoría 2 (H228)",
        "Categoría 4 (H302)",
        "Categoría 2 (H351)",
        "Categoría 1 (H410)"
      ],
      tipo: "Hidrocarburo aromático"
    },
    {
      id: 28,
      nombre: "Negro de Eriocromo",
      propiedades: [
        "Lesiones o irritación ocular graves"
      ],
      categorias: [
        "Categoría 2 (H319)"
      ],
      tipo: "Indicador pH"
    },
    {
      id: 29,
      nombre: "Óxido de zinc 99-100,5%",
      propiedades: [
        "Toxicidad acuática crónica"
      ],
      categorias: [
        "Categoría 1 (H410)"
      ],
      tipo: "Óxido inorgánico"
    },
    {
      id: 30,
      nombre: "Plata nitrato",
      propiedades: [
        "Sólidos comburentes",
        "Corrosivas para los metales",
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves",
        "Toxicidad acuática crónica"
      ],
      categorias: [
        "Categoría 2 (H272)",
        "Categoría 1 (H290)",
        "Categoría 1B (H314)",
        "Categoría 1 (H318)",
        "Categoría 1 (H410)"
      ],
      tipo: "Sal inorgánica"
    },
    {
      id: 31,
      nombre: "Plomo ll acetato 3 hidrato 99%",
      propiedades: [
        "Lesiones o irritación ocular graves",
        "Carcinogenicidad",
        "Toxicidad para la reproducción",
        "Toxicidad específica del órgano blanco - (exposición repetida)",
        "Toxicidad acuática aguda",
        "Toxicidad acuática crónica"
      ],
      categorias: [
        "Categoría 1 (H318)",
        "Categoría 1B (H350)",
        "Categoría 1A (H360)",
        "Categoría 2 (H373)",
        "Categoría 1 (H400)",
        "Categoría 1 (H410)"
      ],
      tipo: "Sal inorgánica"
    },
    {
      id: 32,
      nombre: "Plomo ll carbono",
      propiedades: [
        "Toxicidad aguda oral",
        "Toxicidad aguda por inhalación",
        "Carcinogenicidad",
        "Toxicidad para la reproducción",
        "Toxicidad acuática crónica",
        "Toxicidad específica del órgano blanco - (exposición repetida)"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 4 (H332)",
        "Categoría 2 (H351)",
        "Categoría 1A (H360)",
        "Categoría 1 (H410)",
        "Categoría 1 (H372)"
      ],
      tipo: "Compuesto inorgánico"
    },
    {
      id: 33,
      nombre: "Potasio cloruro 99,5 %",
      propiedades: [
        "Toxicidad acuática aguda",
        "Toxicidad acuática crónica"
      ],
      categorias: [
        "Categoría 1 (H400)",
        "Categoría 2 (H411)"
      ],
      tipo: "Sal inorgánica"
    },
    {
      id: 34,
      nombre: "Potasio cromato 99-102%",
      propiedades: [
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves",
        "Sensibilización cutánea",
        "Mutagenicidad en células germinales",
        "Carcinogenicidad",
        "Toxicidad específica del órgano blanco - (única exposición)",
        "Toxicidad acuática crónica"
      ],
      categorias: [
        "Categoría 2 (H315)",
        "Categoría 2 (H319)",
        "Categoría 1 (H317)",
        "Categoría 1B (H340)",
        "Categoría 1B (H350i)",
        "Categoría 3 (H335)",
        "Categoría 1 (H410)"
      ],
      tipo: "Sal inorgánica"
    },
    {
      id: 35,
      nombre: "Potasio permanganato 99%",
      propiedades: [
        "Sólidos comburentes",
        "Toxicidad aguda oral",
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves",
        "Toxicidad para la reproducción",
        "Toxicidad acuática crónica",
        "Toxicidad específica del órgano blanco - (exposición repetida)"
      ],
      categorias: [
        "Categoría 2 (H272)",
        "Categoría 4 (H302)",
        "Categoría 1C (H314)",
        "Categoría 1 (H318)",
        "Categoría 2 (H361d)",
        "Categoría 1 (H410)",
        "Categoría 2 (H373)"
      ],
      tipo: "Sal inorgánica"
    },
    {
      id: 36,
      nombre: "Sodio carbonato anhidro 99,9%",
      propiedades: [
        "Lesiones o irritación ocular graves"
      ],
      categorias: [
        "Categoría 2 (H319)"
      ],
      tipo: "Sal inorgánica"
    },
    {
      id: 37,
      nombre: "Sodio di sulfito (bisulfito de sodio) 97%",
      propiedades: [
        "Toxicidad aguda oral"
      ],
      categorias: [
        "Categoría 4 (H302)"
      ],
      tipo: "Compuesto inorgánico"
    },
    {
      id: 38,
      nombre: "Sodium bismuth oxide 80%",
      propiedades: [
        "Toxicidad aguda oral",
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves",
        "Toxicidad específica del órgano blanco - (única exposición)"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 2 (H315)",
        "Categoría 2 (H319)",
        "Categoría 3 (H335)"
      ],
      tipo: "Óxido inorgánico"
    },
    {
      id: 39,
      nombre: "Titanio (IV) oxido",
      propiedades: [
        "Carcinogenicidad"
      ],
      categorias: [
        "Categoría 2 (H351)"
      ],
      tipo: "Compuesto inorgánico"
    },
    {
      id: 40,
      nombre: "Zinc acetato 2 hidrato 99,5-101%",
      propiedades: [
        "Toxicidad aguda oral",
        "Lesiones o irritación ocular graves",
        "Toxicidad acuática crónica"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 1 (H318)",
        "Categoría 2 (H411)"
      ],
      tipo: "Sal inorgánica"
    },
    {
      id: 41,
      nombre: "Zinc cloruro 97%",
      propiedades: [
        "Toxicidad aguda oral",
        "Corrosión o irritación cutáneas",
        "Lesiones o irritación ocular graves",
        "Toxicidad específica del órgano blanco - (única exposición)",
        "Toxicidad acuática crónica"
      ],
      categorias: [
        "Categoría 4 (H302)",
        "Categoría 1B (H314)",
        "Categoría 1 (H318)",
        "Categoría 3 (H335)",
        "Categoría 1 (H410)"
      ],
      tipo: "Sal inorgánica"
    }
  ];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'nombre', headerName: 'Reactivo', width: 300 },
  { field: 'propiedades', headerName: 'Peligrosidad', width: 1000 },
  { field: 'categorias', headerName: 'Nivel de Peligrosidad', width: 1000 },
  { field: 'tipo', headerName: 'Tipo de Sustancia', width: 200 },
];

export default function DataTablePaginada() {
  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
    </div>
  );
}