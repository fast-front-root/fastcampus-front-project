import "@fastcampus/react-components-accordion/style.css";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@fastcampus/react-components-accordion";
import React from "react";

import "@fastcampus/react-components-layout/style.css";
import { Text, Heading } from "@fastcampus/react-components-layout";


export default {
  title: "React Components/Accordion",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
};

export const AccordionStory = {
  render: () => (
    <Accordion defaultActiveItems={["목록1"]} style={{ width: "500px" }}>
      <AccordionItem itemName="목록1">
        <AccordionButton>
          <Heading color="gray" fontSize="lg">
            목록 1
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem itemName="목록2">
        <AccordionButton>
          <Heading color="gray" fontSize="lg">
            목록 2
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
            <br />
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};
