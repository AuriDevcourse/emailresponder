import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EmailResponder - AI-Powered Gmail Reply Assistant",
  description:
    "A Chrome extension that learns your writing style and drafts personalized email replies using AI. Supports Claude, OpenAI, and Gemini.",
  icons: {
    icon: "/logo-icon.svg",
  },
  verification: {
    google: "5lChQCbLNMh83-br3HOYYBh_M4MEbQw-C4-Ac_JQTlc",
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
