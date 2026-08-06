"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/design-system/components/ui/button";
import { Input } from "@repo/design-system/components/ui/input";
import { Card } from "@repo/design-system/components/ui/card";
import { signUpWithEmail } from "../actions";
import { signUpSchema, type SignUpInput } from "../schemas";

export function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError: setFormError,
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
  });

  async function onSubmit(data: SignUpInput) {
    try {
      const result = await signUpWithEmail(data.email, data.password, data.name);

      if ("error" in result) {
        setFormError("root", { message: result.error });
        return;
      }

      router.push("/");
    } catch (error) {
      setFormError("root", {
        message: "An error occurred. Please try again.",
      });
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            disabled={isSubmitting}
            {...register("name")}
          />
          {errors.name && (
            <span className="text-sm text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            disabled={isSubmitting}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-sm text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            disabled={isSubmitting}
            {...register("password")}
          />
          {errors.password && (
            <span className="text-sm text-red-600">{errors.password.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            disabled={isSubmitting}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-600">{errors.confirmPassword.message}</span>
          )}
        </div>
        {errors.root && (
          <div className="text-sm text-red-600">{errors.root.message}</div>
        )}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </Button>
      </form>
    </Card>
  );
}
