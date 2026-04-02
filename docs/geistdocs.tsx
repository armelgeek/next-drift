export const Logo = () => (
  <p className="font-semibold text-xl tracking-tight">next-ship</p>
);

export const github = {
  owner: "vercel",
  repo: "next-ship",
};

export const nav = [
  {
    label: "Docs",
    href: "/docs",
  },
  {
    label: "Source",
    href: `https://github.com/${github.owner}/${github.repo}/`,
  },
];

export const suggestions = [
  "What is next-ship?",
  "What can I build with next-ship?",
  "How do packages and apps work?",
  "What is a monorepo?",
];

export const title = "next-ship Documentation";

export const prompt =
  "You are a helpful assistant specializing in answering questions about next-ship, a production-grade Turborepo template for Next.js apps";

export const translations = {
  en: {
    displayName: "English",
  },
};
