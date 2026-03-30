// Local dictionary for English-only content
// This replaces the @repo/internationalization package for solo founders targeting English-speaking markets
// Easy to extend for i18n later if needed

export const dictionary = {
  web: {
    home: {
      meta: {
        title: "next-forge",
        description: "A comprehensive Next.js starter kit for modern web applications",
      },
      hero: {
        announcement: "Latest updates and announcements",
      },
      cta: {
        title: "Ready to get started?",
        description: "Join thousands of developers building with next-forge",
      },
      faq: {
        title: "Frequently Asked Questions",
        description: "Everything you need to know about next-forge",
        cta: "Contact us",
        items: [
          {
            question: "What is next-forge?",
            answer: "next-forge is a comprehensive Next.js starter kit for modern web applications.",
          },
          {
            question: "How do I get started?",
            answer: "Simply clone the repository and follow the setup instructions in the documentation.",
          },
          {
            question: "Is it free to use?",
            answer: "Yes, next-forge is open source and free to use for personal and commercial projects.",
          },
          {
            question: "What technologies are included?",
            answer: "Next.js, TypeScript, Tailwind CSS, and many more modern tools.",
          },
        ],
      },
      cases: {
        title: "Trusted by leading companies",
      },
      stats: {
        title: "Our impact in numbers",
        description: "See how we've helped businesses grow and succeed",
        items: [
          {
            metric: "10000",
            delta: "25",
            type: "number",
            title: "Active users",
          },
          {
            metric: "500000",
            delta: "12",
            type: "currency",
            title: "Revenue generated",
          },
          {
            metric: "99.9",
            delta: "5",
            type: "percentage",
            title: "Uptime guarantee",
          },
          {
            metric: "4.8",
            delta: "8",
            type: "rating",
            title: "Customer rating",
          },
        ],
      },
      testimonials: {
        title: "What our customers say",
        items: [
          {
            title: "Game changer for our business",
            description: "next-forge helped us launch our product in record time with enterprise-grade quality.",
            author: {
              name: "Sarah Johnson",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
            },
          },
          {
            title: "Best development experience",
            description: "The tooling and setup is incredibly well thought out. Saved us months of work.",
            author: {
              name: "Mike Chen",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
            },
          },
          {
            title: "Highly recommended",
            description: "We've tried many starter kits, but next-forge is by far the most complete and polished.",
            author: {
              name: "Emily Davis",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
            },
          },
          {
            title: "Exceptional quality",
            description: "The attention to detail in the codebase is impressive. Everything just works.",
            author: {
              name: "Alex Rodriguez",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
            },
          },
        ],
      },
      features: {
        title: "Everything you need to build faster",
        description: "A complete toolkit for modern web development",
        items: [
          {
            title: "Next.js 14",
            description: "Built on the latest Next.js with App Router for optimal performance",
          },
          {
            title: "TypeScript",
            description: "Full TypeScript support with strict type checking",
          },
          {
            title: "Tailwind CSS",
            description: "Beautiful, responsive designs with utility-first CSS",
          },
          {
            title: "Authentication",
            description: "Secure authentication with multiple providers",
          },
        ],
      },
    },
    header: {
      home: "Home",
      product: {
        title: "Product",
        description: "Explore our features and pricing",
        pricing: "Pricing",
      },
      blog: "Blog",
      docs: "Documentation",
      contact: "Contact",
      signIn: "Sign In",
      signUp: "Sign Up",
    },
    global: {
      primaryCta: "Get Started",
      secondaryCta: "Learn More",
    },
    contact: {
      meta: {
        title: "Contact Us",
        description: "Get in touch with our team",
      },
      hero: {
        benefits: [
          {
            title: "Fast Response",
            description: "We typically respond within 24 hours",
          },
          {
            title: "Expert Support",
            description: "Get help from our experienced team",
          },
          {
            title: "Custom Solutions",
            description: "We can tailor our product to your needs",
          },
        ],
        form: {
          title: "Send us a message",
          date: "Preferred date",
          firstName: "First name",
          lastName: "Last name",
          resume: "Resume/CV",
          cta: "Send message",
        },
      },
    },
    blog: {
      meta: {
        title: "Blog",
        description: "Latest news, updates, and insights from our team",
      },
    },
  },
};

export type Dictionary = typeof dictionary;

// Simple getter function for compatibility
export const getDictionary = async (_locale?: string): Promise<Dictionary> => {
  return dictionary;
};