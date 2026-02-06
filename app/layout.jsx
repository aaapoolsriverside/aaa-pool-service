"use client";

import "./globals.css";

export const metadata = {
  title: "AAA Pool Service & Repair | Jurupa Valley & Riverside CA",
  description:
    "Professional pool cleaning, maintenance, and repair services in Jurupa Valley, Riverside, and surrounding areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
