import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "anwai",
  description: "anwai — trip-pop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
