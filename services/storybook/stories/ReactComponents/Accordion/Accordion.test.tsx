import React from "react";
import { describe, expect, it } from "vitest";

import { render, screen } from "../../../test/test-utils";

describe("test", () => {
  it('test', () => {
    render(<div>test</div>);

    expect(screen.getByText('test')).toBeInTheDocument();
  })
});
