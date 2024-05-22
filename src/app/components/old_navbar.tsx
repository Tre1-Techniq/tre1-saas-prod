"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { SimpleUploadButton } from "./simple-upload-button";

export function NavBar () {
    const router = useRouter();
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between w-full border-b py-8 px-12 text-xl font-semibold">
            <div className="columns-3">
                <Image 
                    src="https://utfs.io/f/646a2d19-1839-4908-b56f-86bb79c01ab7-1zbfv.png"
                    alt="Tre1 Techniq Logo"
                    width={175}
                    height={53}
                />
            </div>
            <div className="columns-3">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    {/* <SimpleUploadButton /> */}
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}