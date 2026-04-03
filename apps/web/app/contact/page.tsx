import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { dictionary } from "@/lib/dictionary";
import { ContactForm } from "./components/contact-form";

export const generateMetadata = async (): Promise<Metadata> =>
  createMetadata(dictionary.web.contact.meta);

const Contact = async () => <ContactForm dictionary={dictionary} />;

export default Contact;
