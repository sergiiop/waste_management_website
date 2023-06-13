import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    nombre: "1,2 Dicloretano 99,9%",
    efectos: [
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
    efectos: [
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
    efectos: [
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
    efectos: [
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
    efectos: [
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
    efectos: [
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
    efectos: [
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
    efectos: [
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
    efectos: [
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
    efectos: [
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
    efectos: [
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
    efectos: [
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
    efectos: [
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

const columns: GridColDef[] = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'nombre', headerName: 'Reactivo', width: 130 },
  { field: 'propiedades', headerName: 'Peligrosidad', width: 200 },
  { field: 'categorias', headerName: 'Nivel de Peligrosidad', width: 180 },
  { field: 'tipo', headerName: 'Tipo de Sustancia', width: 200 },
];

export default function DataTablePaginada() {
  return (
    <div style={{ height: 400, width: '100%' }}>
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