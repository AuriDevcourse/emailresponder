import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EmailResponder - AI-Powered Gmail Reply Assistant",
  description:
    "A Chrome extension that learns your writing style and drafts personalized email replies using AI. Supports Claude, OpenAI, and Gemini.",
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "f1M5N8MyRmEpDvnUhnwLjxOPBh3nWslSwfdoV82V9Zg",
  },
  openGraph: {
    title: "EmailResponder",
    description: "AI-powered email replies that match your personal tone of voice",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
