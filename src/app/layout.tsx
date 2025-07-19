import type { Metadata } from "next";
import { Inter as InterFont } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/sidebar";

const Inter = InterFont({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Anil Bishnoi",
  description: "Portfolio of Anil Bishnoi, a developer and designer creating minimalist web experiences.",
};

interface linkType {
  name: string;
  href: string;
}

const Links: linkType[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Inter.variable} antialiased flex flex-col min-h-screen bg-background text-white`}
      >
        <div className="flex flex-1 w-full">
          <Sidebar />
          <main className="flex-1 flex flex-col items-center justify-start p-8">
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
