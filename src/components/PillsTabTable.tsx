'use client';

import { GridColDef } from '@mui/x-data-grid';
import { Tabs, Table } from 'flowbite-react';
import DataTablePaginada from './DataTablePaginada';


const compuestos = [
  ["Compuestos acetilénicos", "Compuestos nitrosados", "Diazirina"],
  ["Hidroperóxidos, ácidos orgánicos peroxidados", "Compuestos nitrados", "Compuestos N-nitrosado"],
  ["Perácidos, persales, perésteres", "Compuestos polinitrados", "Compuestos N-nitrado"],
  ["Peróxidos de dialquilo", "Nitritos de alquilo o acilo", "Halógenoaminas"],
  ["Peróxidos de diacilo", "Fulminatos", "Nitraminas"],
  ["1,2 – Epóxidos", "Nitruros", "Alquilmetales"],
  ["Peróxidos metálicos, sales de ácidos orgánicos peroxidados", "Azoduros, compuestos azido", "Hidruros de alquilmetal"],
  ["Ácido inorgánico peroxidado", "Compuestos azo", "Halógenoalquilmetales"],
  ["Hipoalogenito, halogenito, halogenato", "Compuestos diazo", "Hidruros metálicos"],
  ["Sales de perclorilo", "Sales de diazonio", "Borano, arsina, fosfina, silano"]
];

const compuestosAgua = [
  ["Ácidos fuertes anhidros", "Halogenuros inorgánicos anhídridos (excepto alcalinos)"],
  ["Alquilmetales y metaloides", "Hidróxidos alcalinos"],
  ["Amiduros", "Hidruros"],
  ["Anhídridos", "Imiduros"],
  ["Carburos", "Metales alcalinos"],
  ["Flúor", "Óxidos alcalinos"],
  ["Fosfuros", "Peróxidos inorgánicos"],
  ["Halogenuros de ácido", "Siliciuros"],
  ["Halogenuros de acilo"],
];

const compuestosAire = [
  ["Alquilmetales y metaloides", "Hidruros"],
  ["Arsinas", 'Metales carbonilados'],
  ["Boranos", "Metales finamente divididos"],
  ["Fosfinas", "Nitruros alcalinos"],
  ["Fósforo blanco", "Xilenos"],
  ["Fosfuros", "Siliciuros"],
];

const incompatibilidades = [
  ["Oxidantes con:", "Materias inflamables, carburos, nitruros, hidruros, sulfuros, alquilmetales, aluminio, magnesio y circonio en polvo"],
  ["Reductores con:", 'Nitratos, halogenatos, óxidos, peróxidos, flúor'],
  ["Ácidos fuertes con:", "Bases fuertes"],
  ["Ácido sulfúrico con:", "Azúcar, celulosa, ácido perclórico, permanganato potásico, cloratos, sulfocianuros."],
];

const incompatibilidadesSustancias = [
  ["Acetileno", "Cloro, bromo, cobre, flúor, plata y mercurio."],
  ["Acetona", "Ácido nítrico concentrado y mezclas con ácido sulfúrico."],
  ["Ácido acético", "Ácido crómico, ácido nítrico, compuestos hidroxilo, etilenglicol, ácido perclórico, peróxidos y permanganatos."],
  ["Ácido cianhídrico", "Ácido nítrico y álcalis."],
  ["Ácido crómico y cromo", "Ácido acético, naftaleno, alcanfor, glicerina, alcoholes y líquidos inflamables en general."],
  ["Ácido fluorhídrico anhídrido", "Amoníaco, acuoso o anhidro."],
  ["Ácido nítrico concentrado", "Ácido acético, anilina, ácido crómico, ácido hidro ciánico, sulfuro de hidrógeno, líquidos y gases inflamables, cobre, latón y algunos metales pesados."],
  ["Ácido oxálico", "Plata y mercurio."],
  ["Ácido perclórico", "Anhídrido acético, bismuto y sus aleaciones, alcohol, papel, madera, grasas y aceites."],
  ["Ácido sulfúrico", "Clorato potásico, perclorato potásico, permanganato potásico (compuestos similares de metales ligeros, como sodio y litio."],
  ["Amoníaco anhidro", "Mercurio (por ejemplo, en manómetros), cloro, hipoclorito cálcico, yodo, bromo, ácido fluorhídrico anhidro."],
  ["Anilina", "Ácido nítrico, peróxido de hidrógeno."],
  ["Azidas", "Ácidos."],
  ["Bromo", "Véase cloro."],
  ["Carbón activado", "Hipoclorito cálcico y todos los agentes oxidantes."],
  ["Cianuros", "Ácidos."],
  ["Clorato potásico", "Ácido sulfúrico y otros ácidos."],
  ["Cloratos", "Sales de amonio, ácidos, metales en polvo, azufre, materiales combustibles u orgánicos finamente divididos."],
  ["Cloro", "Amoníaco, acetileno, butadieno, butano, metano, propano, y otros gases del petróleo, hidrógeno, carburo sódico, benceno, metales finamente divididos y aguarrás."],
  ["Cobre", "Acetileno y peróxido de hidrógeno."],
  ["Dióxido de cloro", "Amoníaco, metano, fósforo y sulfuro de hidrógeno."],
  ["Fósforo (blanco)", "Aire, oxígeno, álcalis y agentes reductores."],
  ["Flúor", "Todas las otras substancias químicas."],
  ["Hidrocarburos", "Flúor, cloro, bromo, ácido crómico, peróxido sódico."],
  ["Hidroperóxido de cumeno", "Ácidos orgánicos e inorgánicos."],
  ["Hipocloritos", "Ácidos, carbón activado."],
  ["Líquidos inflamables", "Nitrato amónico, ácido crómico, peróxido de hidrógeno, ácido nítrico, peróxido sódico, halógenos."],
  ["Materiales de arsénico", "Algunos agentes reductores."],
  ["Mercurio", "Acetileno, ácido fulmínico y amoníaco."],
  ["Metales alcalinos y alcalinotérreos", "Agua, tetracloruro de carbono, hidrocarburos clorados, dióxido de carbono y halógenos."],
  ["Nitrato amónico", "Ácidos, polvo de metales, líquidos inflamables, compuestos de cloro, nitritos, azufre, materiales orgánicos combustibles finamente divididos."],
  ["Nitratos", "Ácido sulfúrico Nitrato amónico y otras sales de amonio."],
  ["Nitrito sódico", "Ácidos."],
  ["Nitritos", "Bases inorgánicas y aminas."],
  ["Nitro parafinas", "Agua."],
  ["Óxido cálcico", "Aceites, grasas e hidrógeno; líquidos, sólidos o gases inflamables."],
  ["Oxígeno", "Ácido sulfúrico y otros ácidos. Ver también cloratos."],
  ["Perclorato potásico", "Glicerina, etilenglicol, benzaldehído, ácido sulfúrico."],
  ["Permanganato potásico", "Cobre, cromo, hierro, la mayoría de los metales o sus sales, alcoholes, acetona, materiales orgánicos, anilina, nitro metano y materiales combustibles."],
  ["Peróxido de hidrógeno", "Alcohol etílico y metílico, ácido acético glacial, anhídrido acético, benzaldehído, disulfuro de carbono, glicerina, etilenglicol, acetato de etilo y de metilo, furfural."],
  ["Peróxido sódico", "Ácidos orgánicos e inorgánicos."],
  ["Peróxidos orgánicos", "Acetileno, ácido oxálico, ácido tartárico, compuestos amónicos, ácido fulmínico."],
  ["Plata", "Tetracloruro de carbono, dióxido de carbono y agua."],
  ["Potasio", "Agentes reductores."],
  ["Seleniuros", "Tetracloruro de carbono, dióxido de carbono, agua."],
  ["Sodio", "Ácido nítrico fumante y gases oxidantes."],
  ["Sulfuro de hidrógeno", "Ácidos."],
  ["Sulfurosos", "Agentes reductores."],
  ["Telurios", "Sodio."],
  ["Tetracloruro de carbono", "Acetileno, amoníaco (acuoso o anhidro), hidrógeno."]
];


export default function PillsTabsTable() {

  const incompatibilidadesObjetos = incompatibilidadesSustancias.map((compuesto, index) => ({
    id: index,
    compuesto: compuesto[0],
    incompatibilidad: compuesto[1],
  }));

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'compuesto', headerName: 'Sustancia química', width: 300 },
    { field: 'incompatibilidad', headerName: 'Incompatibilidad', width: 700 },
  ];

  return (
    <Tabs.Group
      aria-label="Pills"
      style="pills"
    >
      <Tabs.Item
        active
        title="Grupos químicos inestable"
        className='mx-auto'
      >
        <div className="max-w-md px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 dark:bg-gray-800">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Grupos químicos de carácter inestable
              </h3>
            </div>
  <table className="table p-4 bg-white rounded-lg shadow">
    <tbody>
      {
        compuestos.map((compuesto) => (
          <tr className="text-gray-700">
            <td className="border p-4 dark:border-dark-5">
              {compuesto[0]}
            </td>
            <td className="border p-4 dark:border-dark-5">
              {compuesto[1]}
            </td>
            <td className="border p-4 dark:border-dark-5">
              {compuesto[2]}
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
      </Tabs.Item>
      <Tabs.Item title="Compuestos reactivos con agua" className='mx-auto'>
      <div className="max-w-md px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 dark:bg-gray-800">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Compuesto que reaccionan con el agua
              </h3>
            </div>
            <table className="table p-4 bg-white rounded-lg shadow">
              <tbody>
                {
                  compuestosAgua.map((compuesto) => (
                    <tr className="text-gray-700">
                      <td className="border p-4 dark:border-dark-5">
                        {compuesto[0]}
                      </td>
                      <td className="border p-4 dark:border-dark-5">
                        {compuesto[1]}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
      </Tabs.Item>
      <Tabs.Item className='mx-auto' title="Compuestos reactivos con aire">
        <div className="max-w-md px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 dark:bg-gray-800">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Compuesto que reaccionan con el aire
                </h3>
              </div>
              <table className="table p-4 bg-white rounded-lg shadow">
                <tbody>
                  {
                    compuestosAire.map((compuesto) => (
                      <tr className="text-gray-700">
                        <td className="border p-4 dark:border-dark-5">
                          {compuesto[0]}
                        </td>
                        <td className="border p-4 dark:border-dark-5">
                          {compuesto[1]}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
      </Tabs.Item>

      <Tabs.Item className='mx-auto' title="Incompatibilidades químicas">
        <div className="max-w-md px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 dark:bg-gray-800">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Incompatibilidades químicas 
                </h3>
              </div>
              <table className="table p-4 bg-white rounded-lg shadow">
                <tbody>
                  {
                    incompatibilidades.map((compuesto) => (
                      <tr className="text-gray-700">
                        <td className="border p-4 dark:border-dark-5">
                          {compuesto[0]}
                        </td>
                        <td className="border p-4 dark:border-dark-5">
                          {compuesto[1]}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
      </Tabs.Item>
      <Tabs.Item className='mx-auto' title="Sustancias químicas imcompatibles">
        <div className="max-w-md px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 dark:bg-gray-800">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Sustancias químicas Imcompatibles 
                </h3>
              </div>
              <DataTablePaginada rows={incompatibilidadesObjetos} columns={columns} />
      </Tabs.Item>
    </Tabs.Group>
  )
}