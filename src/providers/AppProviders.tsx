import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { ReactNode } from "react";

import { StyledComponentsRegistry } from "./StyledComponentsRegistry";
import { ThemeBridge } from "./ThemeBridge";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <AntdRegistry>
        <ThemeBridge>{children}</ThemeBridge>
      </AntdRegistry>
    </StyledComponentsRegistry>
  );
};
