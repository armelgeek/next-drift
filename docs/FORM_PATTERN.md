# Form Pattern Guide

**All forms in this project use `react-hook-form` + `Zod` + Server Actions.**

This ensures type-safe, validated forms with consistent error handling and UX across the entire project.

## Pattern

### 1. Define Schema (Zod)

Create a `schemas.ts` file in your feature directory:

```typescript
// apps/myfeature/schemas.ts
import { z } from "zod";

export const myFormSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Min 8 characters"),
});

export type MyFormInput = z.infer<typeof myFormSchema>;
```

### 2. Create Server Action

Create an `actions.ts` file to handle form submission:

```typescript
// apps/myfeature/actions.ts
"use server";

import { myFormSchema } from "./schemas";

export async function submitMyForm(data: unknown) {
  const parsed = myFormSchema.safeParse(data);

  if (!parsed.success) {
    return { error: "Invalid input" };
  }

  try {
    // Handle business logic
    return { success: true };
  } catch (error) {
    return { error: "Something went wrong" };
  }
}
```

### 3. Build Component

Use `react-hook-form` + Zod resolver:

```typescript
// apps/myfeature/components/my-form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { myFormSchema, type MyFormInput } from "../schemas";
import { submitMyForm } from "../actions";

export function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError: setFormError,
  } = useForm<MyFormInput>({
    resolver: zodResolver(myFormSchema),
  });

  async function onSubmit(data: MyFormInput) {
    const result = await submitMyForm(data);

    if ("error" in result) {
      setFormError("root", { message: result.error });
      return;
    }

    // Success handling
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}

      <input {...register("password")} type="password" />
      {errors.password && <span>{errors.password.message}</span>}

      {errors.root && <span>{errors.root.message}</span>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
```

## For Complex Fields

Use `Controller` for complex components (date pickers, file inputs, etc.):

```typescript
import { Controller } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";

<Controller
  name="date"
  control={control}
  render={({ field }) => (
    <Calendar
      onSelect={field.onChange}
      selected={field.value}
    />
  )}
/>
```

## Benefits

✅ Type-safe: Schema defines types for both client & server  
✅ Validation: Client-side UX + server-side security  
✅ Error handling: Per-field + form-level errors  
✅ Accessibility: Built-in labels & ARIA attributes  
✅ Consistency: Same pattern everywhere  

## Checklist

- [ ] Schema defined in `schemas.ts`
- [ ] Server action in `actions.ts`
- [ ] Component uses `react-hook-form` + resolver
- [ ] Error messages shown per field
- [ ] Loading state during submission
- [ ] Server action validates with schema
- [ ] File inputs use `Controller` if needed

## Examples in Codebase

- `packages/auth/components/sign-in.tsx` - Email/password form
- `packages/auth/components/sign-up.tsx` - Registration form
- `apps/web/app/contact/components/contact-form.tsx` - File upload form
