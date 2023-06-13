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
    //       <span className="font-medium text-gray-800 dark:text-white">
    //         Dashboard tab's associated content
    //       </span>
    //       .
    //       Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to
    //       control the content visibility and styling.
    //     </p>
    //   </Tabs.Item>
    //   <Tabs.Item
    //     icon={FaMedkit}
    //     title="Botiquin"
    //   >
    //     <p>
    //       This is
    //       <span className="font-medium text-gray-800 dark:text-white">
    //         Settings tab's associated content
    //       </span>
    //       .
    //       Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to
    //       control the content visibility and styling.
    //     </p>
    //   </Tabs.Item>
    //   <Tabs.Item
    //     icon={GiExtractionOrb}
    //     title="Campanas de extraccion"
    //   >
    //     <p>
    //       This is
    //       <span className="font-medium text-gray-800 dark:text-white">
    //         Contacts tab's associated content
    //       </span>
    //       .
    //       Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to
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
    // <Card>
    //   <Text>Total Sales</Text>
    //   <Metric>$ 442,276</Metric>
    //   <TabGroup>
    //     <TabList className="mt-8">
    //       <Tab icon={UserGroupIcon}>Location A</Tab>
    //       <Tab icon={UserIcon}>Location B</Tab>
    //     </TabList>
    //     <TabPanels>
    //       <TabPanel>
    //         <div className="mt-10">
    //           <Flex className="mt-4">
    //             <Text className="w-full">Product Y</Text>
    //             <Flex className="space-x-2" justifyContent="end">
    //               <Text>$ 108,799</Text>
    //               <Text>38%</Text>
    //             </Flex>
    //           </Flex>
    //           <ProgressBar value={38} className="mt-2" />
    //         </div>
    //       </TabPanel>
    //       <TabPanel>
    //         <div className="mt-10">
    //           <Flex className="mt-4">
    //             <Text className="w-full">Product Z</Text>
    //             <Flex className="space-x-2" justifyContent="end">
    //               <Text>$ 99,484</Text>
    //               <Text>16%</Text>
    //             </Flex>
    //           </Flex>
    //           <ProgressBar value={12} className="mt-2" />
    //         </div>
    //       </TabPanel>
    //     </TabPanels>
    //   </TabGroup>
    // </Card>
    <CardElement elementTitle={Items[0].title} elementDescription={Items[0].description} elementImageUrl={Items[0].image} />
  )
}