import "./styles.css";
import { AnalyticsProvider } from "@repo/analytics/provider";
import { Toolbar as CMSToolbar } from "@repo/cms/components/toolbar";
import { DesignSystemProvider } from "@repo/design-system";
import { fonts } from "@repo/design-system/lib/fonts";
import { cn } from "@repo/design-system/lib/utils";
import { Toolbar } from "@repo/feature-flags/components/toolbar";
import { dictionary } from "@/lib/dictionary";
import type { ReactNode } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => {
  return (
    <html
      className={cn(fonts, "scroll-smooth")}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <AnalyticsProvider>
          <DesignSystemProvider>
            <Header dictionary={dictionary} />
            {children}
            <Footer />
          </DesignSystemProvider>
          <Toolbar />
          <CMSToolbar />
        </AnalyticsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
