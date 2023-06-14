import { Table } from 'flowbite-react';

export default function StripedRows() {
  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>
          Residuos
        </Table.HeadCell>
        <Table.HeadCell>
          Especificaciones
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Disolventes halógenos
          </Table.Cell>
          <Table.Cell>
          Son líquidos orgánicos, muy tóxicos, irritantes y, en algún caso, cancerígenos, con unos contenidos superiores al 2% de algún halógeno
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}


