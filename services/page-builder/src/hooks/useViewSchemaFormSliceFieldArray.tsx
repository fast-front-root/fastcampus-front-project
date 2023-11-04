import { ReactNode, createContext, useContext } from "react";
import { useViewSchemaFormFieldArray } from "./useViewSchemaForm";

type FormSliceFieldsContextProps = ReturnType<typeof useViewSchemaFormFieldArray<'slices'>>;
const FormSliceFieldsContext =
  createContext<FormSliceFieldsContextProps | null>(null);

export const useViewSchemaFormSliceFieldArray = () => {
  const context = useContext(FormSliceFieldsContext);

  if (!context) {
    throw new Error(
      "useViewSchemaFormSliceFieldArray must be used within a FormSliceFieldsContext"
    );
  }

  return context;
};

type Props = { children: ReactNode };

export const FormSliceFieldArrayProvider = ({ children }: Props) => {
  const methods = useViewSchemaFormFieldArray("slices");

  return (
    <FormSliceFieldsContext.Provider value={methods}>
      {children}
    </FormSliceFieldsContext.Provider>
  )
};
