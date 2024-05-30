import { auth, currentUser } from "@clerk/nextjs/server";

export default async function OnboardingPortal() {
  const { userId } = auth();

  if (userId) {
    const user = await currentUser();

    return (
      <div className="h-full w-full text-center font-lg mt-12">
        <h2 className='text-3xl font-bold'>Tre1 Techniq Onboarding Portal</h2>
        <p>Hello, {user?.firstName}! Welcome to your Onboarding Portal.</p>
      </div>
    );
  } else if (!userId) {
    return (
      <div className="h-full w-full text-center font-lg mt-12">
        <h2 className='text-3xl font-bold'>Tre1 Techniq Onboarding Portal</h2>
        <p>Sign in to view the Onboarding Portal.</p>
      </div>
    );
  }
}