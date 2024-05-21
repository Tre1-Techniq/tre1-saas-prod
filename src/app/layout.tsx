import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import { NavBar } from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tre1 Techniq E-Learning SaaS",
  description: "Modern Techniq for Innovative Tech. AI-Generated Quizzes, Tutorials and Templates that drive tangible business outcomes and help you achieve your goals.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} flex flex-col gap-4`}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
