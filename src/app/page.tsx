import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Dashboard from "./components/Users/Dashboard";
import DashboardPage from "./dashboard/page";

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

export default async function HomePage() {
  return (
    <main className="flex flex-wrap justify-center gap-4 p-12">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <h2>Tre1 Techniq Home Page</h2>
        </div>
      </SignedOut>
      <SignedIn>
        Go to your <Link href="/dashboard">Dashboard</Link>
      </SignedIn>
    </main>
  );
}