"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, type ProfileInput } from "../../schemas";
import { updateProfile } from "../../actions";
import { Button } from "@repo/design-system/ui/button";
import { Input } from "@repo/design-system/ui/input";
import { Textarea } from "@repo/design-system/ui/textarea";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

interface ProfileFormProps {
  user: {
    id: string;
    name: string | null;
    email: string;
  };
  profile: {
    bio?: string | null;
    company?: string | null;
    location?: string | null;
  } | undefined;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Changes"}
    </Button>
  );
}

export function ProfileForm({ user, profile }: ProfileFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileInput>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name || "",
      bio: profile?.bio || "",
      company: profile?.company || "",
      location: profile?.location || "",
    },
  });

  async function onSubmit(data: ProfileInput) {
    try {
      setIsLoading(true);
      const result = await updateProfile(data);

      if (result.success) {
        toast.success("Profile updated successfully");
        reset(data);
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <div className="text-sm text-muted-foreground bg-muted px-3 py-2 rounded-md">
          {user.email}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Your name"
              disabled={isLoading}
            />
          )}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Bio</label>
        <Controller
          name="bio"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              placeholder="Tell us about yourself..."
              className="resize-none"
              rows={4}
              disabled={isLoading}
            />
          )}
        />
        {errors.bio && (
          <p className="text-sm text-destructive">{errors.bio.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Company</label>
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Company name"
                disabled={isLoading}
              />
            )}
          />
          {errors.company && (
            <p className="text-sm text-destructive">{errors.company.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="City, Country"
                disabled={isLoading}
              />
            )}
          />
          {errors.location && (
            <p className="text-sm text-destructive">{errors.location.message}</p>
          )}
        </div>
      </div>

      <SubmitButton />
    </form>
  );
}
