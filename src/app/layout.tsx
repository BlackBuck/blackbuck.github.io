import type { Metadata } from "next";
import { Inter as InterFont } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/sidebar";
import Container from "./components/Container";

const Inter = InterFont({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Anil Bishnoi",
  description:
    "Portfolio of Anil Bishnoi, a developer and designer creating minimalist web experiences.",
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
            <Container classname="text-black pt-8 flex flex-col items-center h-full overflow-auto px-4 sm:px-6 max-w-full bg-[#f7f7f2]">
              {/* Neo-brutalist dotted background */}
              <div
                aria-hidden="true"
                className="pointer-events-none inset-0 z-0 fixed"
                style={{
                  backgroundColor: "#f7f7f2",
                  backgroundImage:
                    "radial-gradient(#d1d1c7 1.5px, transparent 1.5px), radial-gradient(#d1d1c7 1.5px, transparent 1.5px)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 12px 12px",
                  backgroundAttachment: "fixed",
                  willChange: "background-position",
                }}
              />
              <main className="flex-1 flex flex-col items-center justify-center align-middle p-8 z-0">
                {children}
              </main>
            </Container>
        </div>
      </body>
    </html>
  );
}
