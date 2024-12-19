import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { MemoryRouter } from "react-router-dom";
import { theme } from "../src/theme";

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </MemoryRouter>
    ),
  });
}
