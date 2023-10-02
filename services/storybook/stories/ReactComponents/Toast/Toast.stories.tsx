import "@fastcampus/react-components-button/style.css";
import { Button } from '@fastcampus/react-components-button';
import React from "react";

import { ToastProvider, useToast } from '@fastcampus/react-components-toast';
import "@fastcampus/react-components-toast/style.css";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, World!",
          },
        })
      }
    >
      Toast Button
    </Button>
  );
}

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
