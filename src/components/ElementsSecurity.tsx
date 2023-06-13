'use client';
import {
  ProgressBar,
  Card,
  Flex,
  Text,
  Metric,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from "@tremor/react";

import { useState } from "react";

import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";
import {FaShower, FaFireExtinguisher, FaMedkit, FaPersonBooth} from 'react-icons/fa'
import {GiExtractionOrb} from 'react-icons/gi'
import Shower from "./Shower";
import CardElement from "./CardElement";

const Items = [
  {
    title: 'Extintores',
    description: 'En los laboratorios se debe de disponer un extintor como todo lugar de trabajo, visible y de facil acesso con su respectiva señalizacion. El extintor dependera del tipo de sustancia , aumque el mas practico y universal son los de CO2.',
    image: 'assets/img/extintores.png'
  },
  {
    title: 'Botiquin',
    description: 'mantener en cada laboratorio debe responder a las necesidades del propio centro de trabajo. Es evidente que un laboratorio aislado precisará de un botiquín más ampliamente dotado.',
    image: 'assets/img/1103544_OOLIZG0.jpg'
  },
  {
    title: 'Campanas de extraccion',
    description: 'Tienen un vidrio protector que te resguarda de salpicaduras y evita la salida de gases contaminantes.',
    image: 'assets/img/campana.png'
  }
]

const EQUIPOS = [
  {
    title: 'Proteccion de manos',
    description: 'La manipulación de sustancias corrosivas, irritantes, de elevada toxicidad o de elevado poder de penetración a través de la piel, debe ser llevada a cabo empleando guantes adecuados y limpios.',
    img: 'assets/img/guantes-lab.jpg'
  },
  {
    title: 'Gafas de proteccion',
    description: 'Las personas que ingresen al laboratorio se exponen a particulas, salpicaduras para evitar algun daño inrreversible que afecte nuestra integridad. Lo ideal es trabajar con este elemento.',
    img: 'assets/img/gafas-lab.jpg'
  },
  {
    title: 'Proteccion respiratoria',
    description: 'Cuando se manipula compuestos volatiles de alta toxicidad es indispensable emplear equipos de proteccion de las vias respiratorias, ademas si se presenta alguna calamidad en el laboratorio con respecto a una fuga su uso es indispensable.',
    img: 'assets/img/mascarialla-lab.jpg'
  }
]

export default function ElementsSecurity () {
  return (
    // <Tabs.Group
    //   aria-label="Default tabs"
    //   style="default"
    // >
    //   <Tabs.Item
    //     active
    //     icon={FaShower}
    //     title="Duchas de seguridad"
    //   >
    //     
    //   </Tabs.Item>
    //   <Tabs.Item
    //     icon={FaFireExtinguisher}
    //     title="Extintores"
    //   >
    //     <p>
    //       This is
    //       <span classNameName="font-medium text-gray-800 dark:text-white">
    //         Dashboard tab's associated content
    //       </span>
    //       .
    //       Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNameNamees to
    //       control the content visibility and styling.
    //     </p>
    //   </Tabs.Item>
    //   <Tabs.Item
    //     icon={FaMedkit}
    //     title="Botiquin"
    //   >
    //     <p>
    //       This is
    //       <span classNameName="font-medium text-gray-800 dark:text-white">
    //         Settings tab's associated content
    //       </span>
    //       .
    //       Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNameNamees to
    //       control the content visibility and styling.
    //     </p>
    //   </Tabs.Item>
    //   <Tabs.Item
    //     icon={GiExtractionOrb}
    //     title="Campanas de extraccion"
    //   >
    //     <p>
    //       This is
    //       <span classNameName="font-medium text-gray-800 dark:text-white">
    //         Contacts tab's associated content
    //       </span>
    //       .
    //       Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNameNamees to
    //       control the content visibility and styling.
    //     </p>
    //   </Tabs.Item>
    //   <Tabs.Item
    //     icon={FaPersonBooth}
    //     title="Proteccion Personal"
    //   >
    //     <p>
    //       Disabled content
    //     </p>
    //   </Tabs.Item>
    // </Tabs.Group>
    <Card>
      <TabGroup>
        <TabList className="mt-8">
          <Tab icon={UserGroupIcon}>Duchas de Seguridad</Tab>
          <Tab icon={UserIcon}>Extintores</Tab>
          <Tab icon={UserIcon}>Botiquin</Tab>
          <Tab icon={UserIcon}>Campanas de extraccion</Tab>
          <Tab icon={UserIcon}>Equipos de proteccion personal</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Shower />
          </TabPanel>
          {
            Items.map((item, index) => {
              return (
                <TabPanel key={index}>
                  <CardElement elementTitle={item.title} elementDescription={item.description} elementImageUrl={item.image}/>
                </TabPanel>
              )
            })
          }
          <TabPanel>
            <div className="flex flex-wrap gap-10 w-full justify-center py-12">
              {
                EQUIPOS.map((item, index) => {
                  return (
                    <div className="w-64 p-4 py-6 bg-white shadow-lg rounded-2xl">
                      <div className="flex flex-col items-center justify-center">
                          <div className="relative w-48 h-48 rounded-full flex justify-center items-center">
                              <img src={item.img} alt={item.title} className="w-full object-contain" />
                          </div>
                          <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                            {item.title}
                          </p>
                          <p className="px-2 text-xs text-center text-gray-400">
                              {item.description}
                          </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}