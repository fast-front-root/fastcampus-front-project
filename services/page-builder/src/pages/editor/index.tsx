import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav";
import { Button } from "@fastcampus/react-components-button";
import Link from "next/link";

const EditorPage: React.FC = () => {
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav>
        <Link href="/editor/new">
          <Button size="md" color="green">
            페이지 만들기
          </Button>
        </Link>
      </DesktopFirstNav>
      <DesktopFirstBody>/editor</DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorPage;
