import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Dashboard from "../components/Users/Dashboard";

export default async function DashboardPage() {
  return (
    <main className="flex flex-wrap justify-center gap-4 p-12">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <h2>SIGN IN TO VIEW YOUR DASHBOARD</h2>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full text-center text-2xl">
            <Dashboard />
        </div>
      </SignedIn>
    </main>
  );
}