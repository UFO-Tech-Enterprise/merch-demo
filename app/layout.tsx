import type { Metadata } from "next";

import { AppProviders } from "@/providers/AppProviders";

import "./globals.css";

export const metadata: Metadata = {
  title: "Merch Demo",
  description: "Демо-презентація застосунку для мерчендайзингу та адмін-робочого місця.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
