import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "~/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Tre1 Techniq E-Learning",
  description: "Browse our library of E-Learning materials. AI-Generated Quizzes, Online Courses and Downloadable Templates. Innovative educational products that drive tangible business outcomes and help you achieve your goals.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en">
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className={`font-sans ${montserrat.variable} dark`}>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <NavBar />
            <main className="overflow-y-scroll">{children}</main>
            {modal}
          </div>
          <div id="modal-root" />
          <Toaster />
        </body>
      </html>
  </ClerkProvider>
  );
}