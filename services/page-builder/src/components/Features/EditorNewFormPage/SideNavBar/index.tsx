import { DesktopFirstSideNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/SideNav";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@fastcampus/react-components-button";
import { Divider } from "@fastcampus/react-components-layout";
import { Fragment } from "react";

type Preset = {
  name: string;
  onClick: () => void;
}

export const EditorNewFormSideNavBar = () => {
  const { append } = useViewSchemaFormSliceFieldArray();

  const presets: Preset[] = [
    {
      name: "SpacingSlice",
      onClick: () => {
        append({
          sliceName: "SpacingSlice",
          data: {},
        })
      }
    }
  ];

  return (
    <DesktopFirstSideNav>
      {presets.map(({ name, onClick }) => (
        <Fragment key={name}>
          <Button
            className="w-full"
            style={{ borderRadius: 0 }}
            variant="ghost"
            onClick={onClick}
          >
            {name}
          </Button>
          <Divider />
        </Fragment>
      ))}
    </DesktopFirstSideNav>
  );
};
