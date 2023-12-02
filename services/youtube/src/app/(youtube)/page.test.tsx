import { render, screen } from "@/src/shared/utils/test/testUtils";
import { describe, expect, it } from "vitest";

describe("page", () => {
  it("should render", () => {
    render(<div>test</div>)
    
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
