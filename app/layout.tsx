import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swift Office Service | Bookkeeping Auckland",
  description:
    "Swift Office Service provides bookkeeping support in Auckland, New Zealand. Contact Joy Swift directly for bookkeeping enquiries.",
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