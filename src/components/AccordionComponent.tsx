'use client';

import { Accordion } from 'flowbite-react';

const ITEMS = [
  {
    title: 'Peligros Fisicos',
    points: [
      {
        descripion: 'Explosivos'
      },
      {
        descripion: 'Gases inflamables'
      },
      {
        descripion: 'Aerosoles inflamables'
      },
      {
        descripion: 'Gases comburentes'
      },
      {
        descripion: 'Gases a presion'
      },
      {
        descripion: 'Liquidos inflamables'
      },
      {
        descripion: 'Solidos inflamables'
      },
      {
        descripion: 'Sustancias y mezclas que reaccionan espontaneamente'
      },
      {
        descripion: 'Liquidos piroforicos'
      },
      {
        descripion: 'Solidos piroforicos'
      },
      {
        descripion: 'Sustancias o mezclas que experimentan calentamiento espontaneo'
      },
      {
        descripion: 'Sustancias o mezclas que en contacto con el agua desprenden gases inflamables'
      },
      {
        descripion: 'Liquidos oxidantes'
      },
      {
        descripion: 'Peroxidos organicos'
      },
      {
        descripion: 'Sustancias o mezclas corrosivas para los metales'
      }
    ]
  },
  {
    title: 'Peligros a la salud',
    points: [
      {
        descripion: 'Toxicidad aguda'
      },
      {
        descripion: 'Corrosion/ irritacion cutanea'
      },
      {
        descripion: 'Lesiones/ irritacion oculares'
      },
      {
        descripion: 'Sensibilizacion respiratoria o cutanea'
      },
      {
        descripion: 'Mutagenicidad en celulas germinales'
      },
      {
        descripion: 'Carcinogenicidad'
      },
      {
        descripion: 'Toxicidad para la reproduccion'
      },
      {
        descripion: 'Toxicidad especifica para determinados organos'
      },
      {
        descripion: 'Peligro aspiracion'
      }
    ]
  },
  {
    title: 'Peligros para el medio ambiente',
    points: [
      {
        descripion: 'Toxicidad acuatica aguda'
      },
      {
        descripion: 'Toxicidad acuatica crónica'
      },
      {
        descripion: 'Peligro a la capa de ozono'
      }
    ]
  }
]

export default () => (
    <Accordion collapseAll>
      {ITEMS.map((item, index) => (
        <Accordion.Panel >
        <Accordion.Title>
          {item.title}
        </Accordion.Title>
        <Accordion.Content>
          <ul className="space-y-1 text-black list-disc list-inside dark:text-gray-400">
              {item.points.map((point, index) => (
                <li>{point.descripion}</li>
              ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      ))}
    </Accordion>
  )