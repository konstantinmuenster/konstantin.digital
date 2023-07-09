'use client';

import type { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export const Providers: FC<{ children?: ReactNode }> = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
