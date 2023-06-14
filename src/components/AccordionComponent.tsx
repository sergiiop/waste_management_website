'use client';

import { Accordion } from 'flowbite-react';

export default ({ items }) => (
    <Accordion collapseAll>
      {items.map((item, index) => (
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