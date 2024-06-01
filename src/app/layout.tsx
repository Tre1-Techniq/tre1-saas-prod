import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from '@clerk/themes';
import Footer from "~/components/layout/footer/Footer";
import { Sidebar } from "~/components/layout/sidebar/Sidebar";

import { Montserrat } from "next/font/google";

import '../styles/globals.css';

export const metadata: Metadata = {
  title: "Tre1 Techniq E-Learning",
  description: "Browse our library of E-Learning materials. AI-Generated Quizzes, Online Courses and Downloadable Templates. Innovative educational products that drive tangible business outcomes and help you achieve your goals.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark, neobrutalism]
      }}
    >
      <html lang="en" className="dark">
        <body className={`${montserrat.className} bg-neutral-900 flex flex-col`}>
          <main className="sm:ml-[270px] h-screen">
            <div><Sidebar /></div>
            <div className="py-24 px-6">{children}</div>
            <div className=""><Footer /></div>
          </main>
        </body>
      </html>
  </ClerkProvider>
  );
}