import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://infotecdevs.com.br"),
  keywords: ["Sites", "Sistemas Web", "Landing Pages", "Blogs", "Ecommerce"],
  title: {
    default: "InfotecDevs",
    template: `%s | InfotecDevs`,
  },
  description: "Desenvolvimento de sites e sistemas web",
  openGraph: {
    title: "InfotecDevs",
    description: "Desenvolvimento de sites e sistemas web",
    type: "website",
    locale: "pt_BR",
    url: "https://infotecdevs.com.br",
    siteName: "InfotecDevs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>InfotecDevs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicone.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <main className="h-screen flex flex-col">
          <Header />
          <div className="flex-1 md:mt-22 pt-24">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
