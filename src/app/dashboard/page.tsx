import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Dashboard from "../components/Users/Dashboard";

export default async function DashboardPage() {
  return (
    <main className="lex flex-wrap justify-center gap-4 padding-12 mt-12">
      <SignedOut>
        <div className="h-full w-full text-center font-lg">
          <h2 className='text-3xl font-bold'>SIGN IN TO VIEW YOUR DASHBOARD</h2>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full text-center font-lg">
            <Dashboard />
        </div>
      </SignedIn>
    </main>
  );
}