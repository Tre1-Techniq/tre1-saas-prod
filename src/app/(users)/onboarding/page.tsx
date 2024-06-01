import { currentUser } from "@clerk/nextjs/server";

export default async function OnboardingPortal() {
    const user = await currentUser();

    return (
      <div className="min-h-screen w-full text-center font-lg">
        <h2 className='text-3xl font-bold'>Tre1 Techniq Onboarding Portal</h2>
        <p>Hello, {user?.firstName}! Welcome to your Onboarding Portal.</p>
      </div>
    );
}