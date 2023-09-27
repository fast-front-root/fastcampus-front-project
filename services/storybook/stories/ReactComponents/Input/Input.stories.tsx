import React from "react";
import "@fastcampus/react-components-input/style.css";
import { Input } from "@fastcampus/react-components-input";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => <Input placeholder="dd" />,
};

