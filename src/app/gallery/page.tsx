import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {

  return (
    <div className="gallery-thumb-wrapper">
      <h2>Tre1 Image Gallery</h2>
    </div>
  );
}

export default async function HomePage() {
  return (
    <div className="">
      <SignedOut>
        <div className="min-h-screen w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </div>
  );
}