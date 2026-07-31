"use client";

import { SessionProvider } from "better-auth/react";
import type { ComponentProps } from "react";

type AuthProviderProperties = ComponentProps<typeof SessionProvider> & {
  privacyUrl?: string;
  termsUrl?: string;
  helpUrl?: string;
};

export const AuthProvider = ({
  privacyUrl: _privacyUrl,
  termsUrl: _termsUrl,
  helpUrl: _helpUrl,
  ...properties
}: AuthProviderProperties) => {
  return <SessionProvider {...properties} />;
};
