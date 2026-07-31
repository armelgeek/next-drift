"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { Calendar } from "@repo/design-system/components/ui/calendar";
import { Input } from "@repo/design-system/components/ui/input";
import { Label } from "@repo/design-system/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/design-system/components/ui/popover";
import { cn } from "@repo/design-system/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Check, MoveRight } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Dictionary } from "@/lib/dictionary";
import { contactSchema, type ContactInput } from "../schemas";

type ContactFormProps = {
  dictionary: Dictionary;
};

export const ContactForm = ({ dictionary }: ContactFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError: setFormError,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactInput) {
    try {
      // Handle form submission - e.g., send to server action
      console.log("Form submitted:", data);
      // TODO: Call server action with form data
    } catch (error) {
      setFormError("root", {
        message: "An error occurred. Please try again.",
      });
    }
  }

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
              onSubmit={handleSubmit(onSubmit)}
              className="flex max-w-sm flex-col gap-4 rounded-md border p-8"
            >
              <p>{dictionary.contact.hero.form.title}</p>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="date">
                  {dictionary.contact.hero.form.date}
                </Label>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className={cn(
                            "w-full max-w-sm justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                          variant="outline"
                          disabled={isSubmitting}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>{dictionary.contact.hero.form.date}</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          initialFocus
                          mode="single"
                          onSelect={field.onChange}
                          selected={field.value}
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.date && (
                  <span className="text-sm text-red-600">
                    {errors.date.message}
                  </span>
                )}
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="firstName">
                  {dictionary.contact.hero.form.firstName}
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  disabled={isSubmitting}
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <span className="text-sm text-red-600">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="lastName">
                  {dictionary.contact.hero.form.lastName}
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  disabled={isSubmitting}
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <span className="text-sm text-red-600">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              <div className="grid w-full max-w-sm items-center gap-1">
                <Label htmlFor="resume">
                  {dictionary.contact.hero.form.resume}
                </Label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  disabled={isSubmitting}
                  {...register("resume", {
                    validate: (files) => {
                      if (!files || files.length === 0) return "Resume is required";
                      return true;
                    },
                  })}
                />
                {errors.resume && (
                  <span className="text-sm text-red-600">
                    {errors.resume.message}
                  </span>
                )}
              </div>

              {errors.root && (
                <div className="text-sm text-red-600">{errors.root.message}</div>
              )}

              <Button className="w-full gap-4" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : dictionary.contact.hero.form.cta}
                {!isSubmitting && <MoveRight className="h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
