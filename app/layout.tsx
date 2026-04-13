import type { Metadata } from 'next';
import './globals.css';
import { Sora, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'AlgoView - DSA Interview Prep',
  description: 'Understand why algorithms work with step-by-step visual execution.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(sora.variable, jetbrainsMono.variable)}>
      <body>{children}</body>
    </html>
  );
}
