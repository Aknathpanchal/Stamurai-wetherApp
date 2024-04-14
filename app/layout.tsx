import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Link } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Infinite scroll - Weather Forecast Web Application 🌤",
  description: "Assingment From Stamurai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
          <header className='p-6'>
            <nav className='container flex items-center justify-between'>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                </li>
              </ul>
              <ThemeSwitcher />
            </nav>
          </header>
        <main className="max-w-7xl mx-auto ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
