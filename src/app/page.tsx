import { SignedIn, SignedOut } from "@clerk/nextjs";
import TutorialsHomeBanner from "~/components/containers/home/TutorialsHomeBanner";

import Image from "next/image";
import Link from "next/link";

// import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

export const metadata = {
  title: "Tre1 Techniq E-Learning",
  description: "Browse our library of E-Learning materials. AI-Generated Quizzes, Online Courses and Downloadable Templates. Innovative educational products that drive tangible business outcomes and help you achieve your goals.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function HomePage() {
  return (
    <section className="page-section">
      <SignedOut>
        <div className="page-body">
          <TutorialsHomeBanner />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="page-body">
          <TutorialsHomeBanner />
        </div>
      </SignedIn>
    </section>
  );
}