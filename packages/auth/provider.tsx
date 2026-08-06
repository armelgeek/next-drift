"use client";

import type { ReactNode } from "react";

type AuthProviderProperties = {
  children: ReactNode;
  privacyUrl?: string;
  termsUrl?: string;
  helpUrl?: string;
};

export const AuthProvider = ({
  children,
  privacyUrl: _privacyUrl,
  termsUrl: _termsUrl,
  helpUrl: _helpUrl,
}: AuthProviderProperties) => {
  return <>{children}</>;
};
