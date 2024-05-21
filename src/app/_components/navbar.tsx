import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function NavBar () {
    return (
        <nav className="flex items-center justify-between w-full border-b p-4 text-xl font-semibold">
            <div>TRE1 LOGO</div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}