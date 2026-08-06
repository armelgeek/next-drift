"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { Input } from "@repo/design-system/components/ui/input";
import { Label } from "@repo/design-system/components/ui/label";
import { Check, MoveRight } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";

type ContactFormProps = {
  dictionary: Dictionary;
};

export const ContactForm = ({ dictionary }: ContactFormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Form submitted:", Object.fromEntries(formData));
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
                  {dictionary.contact.meta.title}
                </h4>
                <p className="max-w-sm text-left text-lg text-muted-foreground leading-relaxed tracking-tight">
                  {dictionary.contact.meta.description}
                </p>
              </div>
            </div>
            {dictionary.contact.hero.benefits.map((benefit, index) => (
              <div
                className="flex flex-row items-start gap-6 text-left"
                key={index}
              >
                <Check className="mt-2 h-4 w-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>{benefit.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex max-w-sm flex-col gap-4 rounded-md border p-8"
            >
              <p>{dictionary.contact.hero.form.title}</p>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="firstName">
                  {dictionary.contact.hero.form.firstName}
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastName">
                  {dictionary.contact.hero.form.lastName}
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="date">
                  {dictionary.contact.hero.form.date}
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                />
              </div>

              <Button className="w-full gap-4" type="submit">
                {dictionary.contact.hero.form.cta}
                <MoveRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
