import { ViewSchema } from '@/src/hooks/useViewSchemaSlices';
import { useState } from "react";

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
}

export const useViewSchemaValidation = () => {
  const [formatMarkers, setFormatMarkers] = useState<FormatMarker[]>([]);

  const validateViewSchema = ({ ViewSchema, onSuccess, onError }: ValidateViewSchemaProps) => {
    const hasFormatMarkers = formatMarkers.length > 0;

    if (hasFormatMarkers) {
      const firstMarker = formatMarkers[0];

      return onError?.({
        message: `[L${firstMarker.startLineNumber}:L${firstMarker.endLineNumber}] ${firstMarker.message}`,
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
