"use client";

import * as React from "react";
import { ConfigProvider } from "antd";

export function ThemeProvider({ children }) {
  return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#f2f",
          },
          cssVar: true,
          hashed: false,
        }}
      >
        {children}
      </ConfigProvider>
  );
}