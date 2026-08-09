import "./styles.css";
import type { ReactNode } from "react";
import { AnalyticsProvider } from "@repo/analytics/provider";
import { Header } from "./components/header";

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en">
    <body>
      <AnalyticsProvider>
        <Header />
        {children}
      </AnalyticsProvider>
    </body>
  </html>
);

export default RootLayout;
