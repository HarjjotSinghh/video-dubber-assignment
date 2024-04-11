import '@/styles/globals.css';

import { appConfig } from '@/config/app';
import { Badge, MantineProvider, createTheme } from '@mantine/core';
import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import Link from 'next/link';

const font = Archivo({ subsets: ['latin'], weight: 'variable', display: 'swap' });

export const metadata: Metadata = {
  title: 'VideDubber Internship Assignment',
  description: 'VideDubber Internship Assignment submitted by Harjot Singh Rana.',
};

const theme = createTheme({
  colors: {
    primary: [
      appConfig.colors.primary[50],
      appConfig.colors.primary[100],
      appConfig.colors.primary[200],
      appConfig.colors.primary[300],
      appConfig.colors.primary[500],
      appConfig.colors.primary[600],
      appConfig.colors.primary[700],
      appConfig.colors.primary[800],
      appConfig.colors.primary[900],
      appConfig.colors.primary[950],
    ],
  },
  fontFamily: 'inherit',
  primaryColor: 'primary',
  primaryShade: 4,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-mantine-color-scheme="light" lang="en">
      <body className={font.className}>
        <MantineProvider theme={theme}>
          <Link
            href={'https://harjot.pro'}
            target="_blank"
            rel="noopener"
            className="flex w-full justify-center items-center pt-12"
          >
            <Badge variant="light" size={'md'} h={'38px'} className="px-8" radius={'lg'}>
              Assignment Submitted By Harjot Singh
            </Badge>
          </Link>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
