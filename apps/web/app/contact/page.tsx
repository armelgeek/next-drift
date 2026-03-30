import { dictionary } from "@/lib/dictionary";
import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { ContactForm } from "./components/contact-form";

export const generateMetadata = async (): Promise<Metadata> => {
  return createMetadata(dictionary.web.contact.meta);
};

const Contact = async () => {
  return <ContactForm dictionary={dictionary} />;
};

export default Contact;
