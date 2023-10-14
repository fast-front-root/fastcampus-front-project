import { useState } from "react";
import { ViewSchema } from '../utils/validation/schema/view';

type FormatMarker = {
  message: string;
  startLineNumber: number;
  endLineNumber: number;
}

type ValidateError = {
  message: string;
}

type ValidateViewSchemaProps = {
  viewSchema: string;
  onSuccess?: () => void;
  onError?: (error: ValidateError) => void;
};

export const useViewSchemaValidation = () => {
  const [formatMarkers, setFormatMarkers] = useState<FormatMarker[]>([]);

  const validateViewSchema = ({ viewSchema, onSuccess, onError }: ValidateViewSchemaProps) => {
    const hasFormatMarkers = formatMarkers.length > 0;

    if (hasFormatMarkers) {
      const firstMarker = formatMarkers[0];

      return onError?.({
        message: `[L${firstMarker.startLineNumber}:L${firstMarker.endLineNumber}] ${firstMarker.message}`,
      });
    }

    const objectifiedViewSchema = JSON.parse(viewSchema);
    const validatedViewSchema = ViewSchema.safeParse(objectifiedViewSchema);

    if (!validatedViewSchema.success) {
      const firstError = validatedViewSchema.error.errors[0];

      return onError?.({
        message: `[${firstError.code}:${firstError.path}] ${firstError.message}`,
      });
    }

    onSuccess?.();
  }

  const handleEditorValidation = (markers: FormatMarker[]) => {
    setFormatMarkers(markers);
  };

  return {
    validateViewSchema,
    handleEditorValidation,
  }
}
