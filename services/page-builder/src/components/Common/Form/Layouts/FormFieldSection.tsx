import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@fastcampus/react-components-accordion";
import { useState } from "react";
import ShortUniqueId from "short-unique-id";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const FormFieldSection = ({ title, children }: Props) => {
  const { randomUUID } = new ShortUniqueId({ length: 4 });
  const [uniqueId] = useState(randomUUID());

  const itemName = `${title}-${uniqueId}`;

  return (
    <Accordion defaultActiveItems={[itemName]}>
      <AccordionItem itemName={itemName}>
        <AccordionButton>{title}</AccordionButton>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
