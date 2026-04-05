import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { dictionary } from "@/lib/dictionary";
import { AIAgents } from "./components/ai-agents";
import { AIEditors } from "./components/ai-editors";
import { Cta } from "./components/cta";
import { DesignedFor } from "./components/designed-for";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { ZeroConfig } from "./components/zero-config";

export const generateMetadata = async (): Promise<Metadata> =>
  createMetadata({
    title: dictionary.hero.title,
    description: dictionary.hero.subtitle,
  });

const Home = async () => (
  <>
    <Hero dictionary={dictionary} />
    <ZeroConfig dictionary={dictionary} />
    <DesignedFor dictionary={dictionary} />
    <Features>
      <AIEditors dictionary={dictionary} />
      <AIAgents dictionary={dictionary} />
    </Features>
    <Cta dictionary={dictionary} />
    <Footer dictionary={dictionary} />
  </>
);

export default Home;
