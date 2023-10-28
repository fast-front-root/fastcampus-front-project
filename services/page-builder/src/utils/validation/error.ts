type FormErrorData = {
  [key: string]: { message?: string } | FormErrorData;
};

type FormErrorMessageResult = {
  key: string;
  message: string;
};

export const getValidateFormErrorMessages = (
  formErrorData: FormErrorData,
): FormErrorMessageResult[] => {
  const errors: FormErrorMessageResult[] = [];

  const findErrorMessages = (currentFormErrorData: FormErrorData) => {
    for (const key in currentFormErrorData) {
      if (currentFormErrorData[key].message) {
        errors.push({
          key,
          message: currentFormErrorData[key].message as string,
        });
      } else if (typeof currentFormErrorData[key] === "object") {
        findErrorMessages(currentFormErrorData[key] as FormErrorData);
      }
    }
  };

  findErrorMessages(formErrorData);

  return errors;
};
