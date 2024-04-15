// "use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
// import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InfotecDevs",
  description: "Desenvolvimento de sites e sistemas web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {/* <ThemeProvider enableSystem={true} attribute="class"> */}
        <main className="h-screen flex flex-col">
          <Header />
          <div className="flex-1 mt-32 md:mt-0">{children}</div>
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
