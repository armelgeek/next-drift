export const Logo = () => (
  <p className="font-semibold text-xl tracking-tight">drift</p>
);

export const github = {
  owner: "vercel",
  repo: "drift",
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
  "What is drift?",
  "What can I build with drift?",
  "How do packages and apps work?",
  "What is a monorepo?",
];

export const title = "drift Documentation";

export const prompt =
  "You are a helpful assistant specializing in answering questions about drift, a production-grade Turborepo template for Next.js apps";

export const translations = {
  en: {
    displayName: "English",
  },
};
