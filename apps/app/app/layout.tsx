import "./styles.css";
import type { ReactNode } from "react";
import { Header } from "./components/header";

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en">
    <body>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
