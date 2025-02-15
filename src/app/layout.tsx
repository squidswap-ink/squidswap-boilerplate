// This is the main layout file that wraps all pages in your app
// It sets up the basic structure, styles, and providers

import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";

// Import the required styles
// The order is important - Ink Kit styles first, then your custom styles
import "@inkonchain/ink-kit/style.css";
import './globals.css';

// Import the Web3 context provider that handles wallet connections
import ContextProvider from '@/context'

// Metadata for your app - this affects SEO and browser tab information
export const metadata: Metadata = {
  title: "Your dApp Name",
  description: "A modern Web3 application built with Next.js and Ink Kit",
};

// The root layout component that wraps every page
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="ink:bg-background">
        <ContextProvider>
          <ClientLayout theme="dark">
            {children}
          </ClientLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
