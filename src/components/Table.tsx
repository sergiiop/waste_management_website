import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  CalloutProps,
} from "@tremor/react";

type Data = {
  name: string;
  description: string;
  color: CalloutProps["color"];
  tagColor: string;
}

const data: Data[] = [
  {
    name: "Disolventes halogenados",
    description: "Líquidos orgánicos que contienen más de 2% de halógenos. Eje: cloruro de metileno",
    tagColor: "Naranja",
    color: "orange",
  },
  {
    name: "Disolventes no halogenados",
    description:
      "Líquidos orgánicos inflamables que contengan menos de 2% de halógenos. Evitar mezclar disolventes que sean inmiscibles. Eje: alcoholes, aldehídos, amidas, cetonas, esteres, nitrilos, glicoles, hidrocarburos alifáticos y aromáticos",
    color: "green",
    tagColor: "Verde",
  },
  {
    name: "Disoluciones acuosas",
    description: "Soluciones acuosas básicas: NaOH, KOH soluciones acuosas de metales pesados Ni, Ag, Cd, Se soluciones acuosas inorgánicas son: sulfatos, fosfatos, cloruro soluciones orgánicas: formol, fenol",
    color: "blue",
    tagColor: "Azul",
  },
  {
    name: "Ácidos",
    description: "Líquidos con ácido inorgánicos como HCL, HF, HNO3, etc. Precaución con mezclar los ácidos entre sí ya que son muy reactivos",
    color: "red",
    tagColor: "Rojo",
  },
  {
    name: "Bases",
    description: "Soluciones básicas. Ej: Hidróxido sódico (sosa), Hidróxido potásico, etc.",
    color: "sky",
    tagColor: "Celeste",
  },
  {
    name: "Aceites",
    description: "Aceites minerales",
    color: "pink",
    tagColor: "Rosado",
  },
  {
    name: "Sólidos",
    description: "Productos orgánicos e inorgánicos y material desechable contaminado con productos químicos",
    color: "stone",
    tagColor: "Marrón", 
  },
  {
    name: "Especiales",
    description: "Reactivos puros obsoletos o vencidos. Ej: comburentes, magnesio, metálicos en polvo, cloruro de ácidos, metales alcalinos, hidruros, entre otros",
    color: "fuchsia",
    tagColor: "Fucsia",
  }
];

export default () => (
  <Card className="bg-white md:mt-6 mt-2">
    <h1 className="text-3xl text-center text-[#1843BF] font-bold mb-4">CLASIFICACIÓN Y ETIQUETADO DE RESIDUOS PELIGROSOS</h1>
    <Text>
      Los residuos generados en los laboratorios se clasifican en diversas categorías dependiendo de su peligrosidad y su naturaleza. A continuación, se puede observar la clasificación y respectiva etiqueta de los residuos más comunes generados en laboratorios químicos, a los cuales se les ha asignado una etiqueta con un color específico para cada uno de ellos, con el fin de poder diferenciarlos con mayor facilidad
    </Text>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Compuesto químico</TableHeaderCell>
          <TableHeaderCell className="text-center">Observaciones</TableHeaderCell>
          <TableHeaderCell>Etiqueta</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              {item.description}
            </TableCell>
            <TableCell>
              <Badge color={item.color}>
                {item.tagColor}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);